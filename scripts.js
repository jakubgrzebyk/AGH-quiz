/**
 * System nauki z fiszkami - skrypt główny
 * Implementuje funkcjonalność aplikacji do nauki w trzech trybach:
 * - Fiszki: pokazywanie pytania, a po kliknięciu odpowiedzi
 * - Quiz: pytania z wieloma odpowiedziami do wyboru
 * - Test: sesja N pytań z podsumowaniem wyników
 */

// Inicjalizacja zmiennych globalnych
let currentQuestions = []; // Aktualnie wyfiltrowane pytania
let currentIndex = 0; // Aktualny indeks pytania
let flipped = false; // Stan karty (przód/tył)
let mode = "flashcards"; // Aktualny tryb (fiszki, quiz, test)
let testInProgress = false; // Czy test jest w trakcie
let testQuestions = []; // Pytania wybrane do testu
let testAnswers = []; // Odpowiedzi użytkownika w teście
let timer = null; // Timer do quizu/testu
let timeElapsed = 0; // Czas w sekundach

// Elementy DOM wykorzystywane w skrypcie
const DOM = {
    // Kontenery trybów
    flashcardContainer: document.getElementById("flashcardContainer"),
    quizContainer: document.getElementById("quizContainer"),
    testContainer: document.getElementById("testContainer"),
    
    // Elementy kontrolne
    categoryFilter: document.getElementById("categoryFilter"),
    modeSelector: document.getElementById("modeSelector"),
    orderToggle: document.getElementById("orderToggle"),
    searchInput: document.getElementById("searchInput"),
    statusFilter: document.getElementById("statusFilter"),
    testSettingsGroup: document.getElementById("testSettingsGroup"),
    questionCount: document.getElementById("questionCount"),
    startTestBtn: document.getElementById("startTestBtn"),
    
    // Przyciski nawigacji
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    startBtn: document.getElementById("startBtn"),
    checkAnswerBtn: document.getElementById("checkAnswerBtn"),
    showAnswerBtn: document.getElementById("showAnswerBtn"),
    
    // Elementy fiszek
    flashcard: document.querySelector(".flashcard"),
    flashcardFront: document.querySelector(".flashcard-front"),
    flashcardBack: document.querySelector(".flashcard-back"),
    
    // Elementy quizu
    questionText: document.getElementById("questionText"),
    optionsContainer: document.getElementById("optionsContainer"),
    feedbackContainer: document.getElementById("feedbackContainer"),
    
    // Elementy testu
    testContainer: document.getElementById("testContainer"),
    testProgress: document.getElementById("testProgress"),
    testQuestionContainer: document.getElementById("testQuestionContainer"), // Dodane
    testQuestionText: document.getElementById("testQuestionText"),
    testOptionsContainer: document.getElementById("testOptionsContainer"),
    testResultsContainer: document.getElementById("testResultsContainer"),
    testResultsSummary: document.getElementById("testResultsSummary"),
    testResultsDetails: document.getElementById("testResultsDetails"),
    
    // Statystyki
    statTotal: document.getElementById("statTotal"),
    statNew: document.getElementById("statNew"),
    statReview: document.getElementById("statReview"),
    statLearned: document.getElementById("statLearned"),
    testHistory: document.getElementById("testHistory"),
    
    // Timer
    timerContainer: document.getElementById("timerContainer"),
    timer: document.getElementById("timer"),
    
    // Zarządzanie danymi
    exportProgressBtn: document.getElementById("exportProgressBtn"),
    importProgressFile: document.getElementById("importProgressFile"),
    resetProgressBtn: document.getElementById("resetProgressBtn"),
    
    // Motyw
    themeToggle: document.getElementById("themeToggle"),
    themeLabel: document.getElementById("themeLabel"),
    
    // Modal
    modalOverlay: document.getElementById("modalOverlay"),
    modalTitle: document.getElementById("modalTitle"),
    modalContent: document.getElementById("modalContent"),
    modalCancelBtn: document.getElementById("modalCancelBtn"),
    modalConfirmBtn: document.getElementById("modalConfirmBtn")
};

/**
 * Struktura danych przechowująca stan nauki użytkownika
 */
const userProgress = {
    questionStatus: {}, // Status pytań (new, review, learned)
    reviewDates: {}, // Daty kolejnych powtórek
    testHistory: [], // Historia testów
    settings: {
        theme: "light" // Domyślny motyw
    },
    
    // Inicjalizacja statusu dla nowych pytań
    initQuestion(questionId) {
        if (!this.questionStatus[questionId]) {
            this.questionStatus[questionId] = "new";
            this.reviewDates[questionId] = null;
        }
    },
    
    // Aktualizacja statusu pytania po odpowiedzi
    updateQuestionStatus(questionId, isCorrect) {
        this.initQuestion(questionId);
        
        const currentStatus = this.questionStatus[questionId];
        const now = new Date();
        
        // Implementacja algorytmu spaced-repetition
        if (isCorrect) {
            if (currentStatus === "new") {
                this.questionStatus[questionId] = "review";
                // Pierwsza powtórka za 1 dzień
                const nextReview = new Date(now);
                nextReview.setDate(nextReview.getDate() + 1);
                this.reviewDates[questionId] = nextReview;
            } else if (currentStatus === "review") {
                const lastReview = this.reviewDates[questionId] || now;
                const daysDiff = Math.ceil((now - new Date(lastReview)) / (1000 * 3600 * 24));
                
                // Jeśli to co najmniej 3 powtórka z rzędu poprawna
                if (daysDiff >= 7) {
                    this.questionStatus[questionId] = "learned";
                    this.reviewDates[questionId] = now;
                } else {
                    // Zwiększamy odstęp między powtórkami
                    const nextReview = new Date(now);
                    nextReview.setDate(nextReview.getDate() + Math.min(daysDiff * 2, 14));
                    this.reviewDates[questionId] = nextReview;
                }
            }
            // Dla "learned" pytań nie zmieniamy statusu przy poprawnej odpowiedzi
        } else {
            // Przy błędzie zawsze wracamy do statusu "review" i ustawiamy powtórkę na następny dzień
            this.questionStatus[questionId] = "review";
            const nextReview = new Date(now);
            nextReview.setDate(nextReview.getDate() + 1);
            this.reviewDates[questionId] = nextReview;
        }
        
        this.save();
    },
    
    // Dodanie wyniku testu do historii
    addTestResult(result) {
        this.testHistory.unshift(result);
        if (this.testHistory.length > 10) {
            this.testHistory.pop(); // Zachowujemy tylko 10 ostatnich wyników
        }
        this.save();
    },
    
    // Pobieranie pytań do powtórki
    getDueQuestions() {
        const now = new Date();
        return Object.keys(this.questionStatus).filter(id => {
            if (this.questionStatus[id] === "review") {
                const reviewDate = this.reviewDates[id] ? new Date(this.reviewDates[id]) : null;
                return !reviewDate || reviewDate <= now;
            }
            return false;
        });
    },
    
    // Zapisanie postępu do localStorage
    save() {
        const data = {
            questionStatus: this.questionStatus,
            reviewDates: this.reviewDates,
            testHistory: this.testHistory,
            settings: this.settings
        };
        localStorage.setItem("flashcards-progress", JSON.stringify(data));
    },
    
    // Wczytanie postępu z localStorage
    load() {
        const data = localStorage.getItem("flashcards-progress");
        if (data) {
            const parsed = JSON.parse(data);
            this.questionStatus = parsed.questionStatus || {};
            this.reviewDates = parsed.reviewDates || {};
            this.testHistory = parsed.testHistory || [];
            this.settings = parsed.settings || { theme: "light" };
        }
    },
    
    // Zresetowanie całego postępu
    reset() {
        this.questionStatus = {};
        this.reviewDates = {};
        this.testHistory = [];
        this.save();
    },
    
    // Eksport danych jako JSON
    export() {
        const data = {
            questionStatus: this.questionStatus,
            reviewDates: this.reviewDates,
            testHistory: this.testHistory,
            settings: this.settings,
            exportDate: new Date().toISOString()
        };
        return JSON.stringify(data);
    },
    
    // Import danych z JSON
    import(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            if (data.questionStatus && data.reviewDates) {
                this.questionStatus = data.questionStatus;
                this.reviewDates = data.reviewDates;
                this.testHistory = data.testHistory || [];
                this.settings = data.settings || { theme: "light" };
                this.save();
                return true;
            }
            return false;
        } catch (e) {
            console.error("Błąd importu danych:", e);
            return false;
        }
    }
};

/**
 * Inicjalizacja aplikacji po załadowaniu strony
 */
document.addEventListener("DOMContentLoaded", () => {
    // Wczytanie postępu użytkownika
    userProgress.load();
    
    // Aplikacja motywu
    applyTheme(userProgress.settings.theme);
    DOM.themeToggle.checked = userProgress.settings.theme === "dark";
    
    // Inicjalizacja kategorii w filtrze
    initCategories();
    
    // Inicjalizacja statusów pytań
    initQuestionStatuses();
    
    // Filtrowanie i wyświetlenie pierwszego pytania
    filterQuestions();
    
    // Nasłuchiwanie na zdarzenia
    setupEventListeners();
    
    // Aktualizacja statystyk
    updateStats();
    
    // Wyświetlenie historii testów
    updateTestHistory();
});

/**
 * Inicjalizacja dropdown z kategoriami na podstawie dostępnych pytań
 */
function initCategories() {
    const categories = [...new Set(questions.map(q => q.category))].sort();
    
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        DOM.categoryFilter.appendChild(option);
    });
}

/**
 * Inicjalizacja statusów pytań dla wszystkich pytań w bazie
 */
function initQuestionStatuses() {
    questions.forEach((q, index) => {
        const id = q.id || index + 1;
        userProgress.initQuestion(id);
    });
}

/**
 * Ustawienie nasłuchiwania na zdarzenia dla elementów interaktywnych
 */
function setupEventListeners() {
    // Zdarzenia dla filtrów
    DOM.categoryFilter.addEventListener("change", filterQuestions);
    DOM.statusFilter.addEventListener("change", filterQuestions);
    DOM.searchInput.addEventListener("input", filterQuestions);
    
    // Zdarzenia dla przełącznika trybu
    DOM.modeSelector.addEventListener("change", changeMode);
    
    // Zdarzenia dla przełącznika kolejności
    DOM.orderToggle.addEventListener("change", filterQuestions);
    
    // Zdarzenia dla przycisków nawigacji
    DOM.prevBtn.addEventListener("click", showPreviousQuestion);
    DOM.nextBtn.addEventListener("click", showNextQuestion);
    DOM.startBtn.addEventListener("click", startLearning);
    DOM.checkAnswerBtn.addEventListener("click", checkAnswer);
    DOM.showAnswerBtn.addEventListener("click", showAnswer);
    
    // Zdarzenia dla fiszek
    DOM.flashcard.addEventListener("click", flipCard);
    
    // Zdarzenia dla testu
    DOM.startTestBtn.addEventListener("click", startTest);
    
    // Zdarzenia dla zarządzania danymi
    DOM.exportProgressBtn.addEventListener("click", exportProgress);
    DOM.importProgressFile.addEventListener("change", importProgress);
    DOM.resetProgressBtn.addEventListener("click", confirmResetProgress);
    
    // Zdarzenia dla motywu
    DOM.themeToggle.addEventListener("change", toggleTheme);
}

/**
 * Filtrowanie pytań na podstawie wybranych kryteriów
 */
function filterQuestions() {
    const category = DOM.categoryFilter.value;
    const status = DOM.statusFilter.value;
    const searchText = DOM.searchInput.value.toLowerCase();
    const order = DOM.orderToggle.value;
    
    // Filtrowanie wg kategorii, statusu i tekstu wyszukiwania
    currentQuestions = questions.filter((q, index) => {
        const id = q.id || index + 1;
        const questionStatus = userProgress.questionStatus[id] || "new";
        
        const matchesCategory = category === "all" || q.category === category;
        const matchesStatus = status === "all" || questionStatus === status;
        const matchesSearch = searchText === "" || 
                             q.question.toLowerCase().includes(searchText) || 
                             (q.answers && q.answers.some(a => a.text.toLowerCase().includes(searchText)));
                             
        return matchesCategory && matchesStatus && matchesSearch;
    });
    
    // Sortowanie pytań
    if (order === "random") {
        shuffleArray(currentQuestions);
    }
    
    // Resetowanie indeksu i odświeżenie widoku
    currentIndex = 0;
    updateNavButtons();
    showCurrentQuestion();
    
    // Aktualizacja statystyk
    updateStats();
}

/**
 * Zmiana trybu pracy aplikacji (fiszki, quiz, test)
 */
function changeMode() {
    mode = DOM.modeSelector.value;
    
    // Resetowanie stanu
    testInProgress = false;
    clearTimer();
    
    // Ukrywanie/pokazywanie odpowiednich kontenerów
    DOM.flashcardContainer.style.display = mode === "flashcards" ? "flex" : "none";
    DOM.quizContainer.style.display = mode === "quiz" ? "flex" : "none";
    DOM.testContainer.style.display = mode === "test" ? "flex" : "none";
    
    // Ukrywanie/pokazywanie przycisków
    DOM.startBtn.style.display = mode === "test" ? "none" : "block";
    DOM.checkAnswerBtn.style.display = mode === "quiz" ? "block" : "none";
    DOM.showAnswerBtn.style.display = mode === "flashcards" ? "block" : "none";
    DOM.testSettingsGroup.style.display = mode === "test" ? "flex" : "none";
    
    // Timer dla quizu
    DOM.timerContainer.style.display = mode === "flashcards" ? "none" : "block";
    
    // Resetowanie testu
    if (mode === "test") {
        DOM.testResultsContainer.style.display = "none";
        DOM.testQuestionContainer.style.display = "none";
        DOM.testOptionsContainer.style.display = "none";
    } else {
        // Odświeżenie widoku dla bieżącego pytania
        showCurrentQuestion();
    }
}

/**
 * Wyświetlenie bieżącego pytania
 */
function showCurrentQuestion() {
    if (currentQuestions.length === 0) {
        showNoQuestionsMessage();
        return;
    }
    
    const question = currentQuestions[currentIndex];
    
    if (mode === "flashcards") {
        showFlashcard(question);
    } else if (mode === "quiz") {
        showQuizQuestion(question);
    }
    
    updateNavButtons();
}

/**
 * Wyświetlenie komunikatu o braku pytań spełniających kryteria
 */
function showNoQuestionsMessage() {
    if (mode === "flashcards") {
        DOM.flashcardFront.innerHTML = "<p>Brak pytań spełniających kryteria</p>";
        DOM.flashcardBack.innerHTML = "<p>Zmień kryteria filtrowania</p>";
        DOM.showAnswerBtn.disabled = true;
    } else if (mode === "quiz") {
        DOM.questionText.textContent = "Brak pytań spełniających kryteria";
        DOM.optionsContainer.innerHTML = "<p>Zmień kryteria filtrowania</p>";
        DOM.checkAnswerBtn.disabled = true;
    }
    
    DOM.prevBtn.disabled = true;
    DOM.nextBtn.disabled = true;
}

/**
 * Wyświetlenie fiszki dla bieżącego pytania
 */
function showFlashcard(question) {
    // Resetowanie stanu fiszki
    flipped = false;
    DOM.flashcard.classList.remove("flipped");
    
    // Wypełnienie treścią
    DOM.flashcardFront.innerHTML = `<p>${question.question}</p>`;
    
    // Znajdowanie poprawnej odpowiedzi
    let correctAnswer = "";
    if (question.answers && Array.isArray(question.answers)) {
        const correctOption = question.answers.find(a => a.correct);
        correctAnswer = correctOption ? correctOption.text : "";
    }
    
    DOM.flashcardBack.innerHTML = `<p>${correctAnswer}</p>`;
    
    // Włączenie przycisku
    DOM.showAnswerBtn.disabled = false;
}

/**
 * Wyświetlenie pytania quizowego z opcjami odpowiedzi
 */
function showQuizQuestion(question) {
    // Wypełnienie treścią
    DOM.questionText.textContent = question.question;
    DOM.feedbackContainer.innerHTML = "";
    
    // Skopiowanie i przetasowanie odpowiedzi
    const shuffledAnswers = [...question.answers];
    shuffleArray(shuffledAnswers);
    
    // Wyświetlenie opcji odpowiedzi
    DOM.optionsContainer.innerHTML = "";
    shuffledAnswers.forEach((answer) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "option-btn";
        optionBtn.textContent = answer.text;
        optionBtn.dataset.isCorrect = answer.correct; // Przechowujemy informację o poprawności
        optionBtn.addEventListener("click", selectOption);
        DOM.optionsContainer.appendChild(optionBtn);
    });
    
    // Włączenie przycisku sprawdzenia
    DOM.checkAnswerBtn.disabled = false;
    
    // Resetowanie wybranej opcji
    resetSelectedOption();
    
    // Uruchomienie timera
    startTimer();
}

/**
 * Wybór opcji odpowiedzi w trybie quizu
 */
function selectOption(event) {
    // Usunięcie poprzednio wybranej opcji
    resetSelectedOption();
    
    // Zaznaczenie wybranej opcji
    event.target.classList.add("selected");
}

/**
 * Resetowanie zaznaczenia opcji odpowiedzi
 */
function resetSelectedOption() {
    const options = DOM.optionsContainer.querySelectorAll(".option-btn");
    options.forEach(option => option.classList.remove("selected", "correct", "incorrect"));
}

/**
 * Sprawdzenie odpowiedzi w trybie quizu
 */
function checkAnswer() {
    const selectedOption = DOM.optionsContainer.querySelector(".option-btn.selected");
    if (!selectedOption) {
        showFeedback("Wybierz jedną z opcji odpowiedzi.", "warning");
        return;
    }
    
    const isCorrect = selectedOption.dataset.isCorrect === "true";
    
    // Oznaczenie odpowiedzi jako poprawnych lub błędnych
    const options = DOM.optionsContainer.querySelectorAll(".option-btn");
    options.forEach(option => {
        if (option.dataset.isCorrect === "true") {
            option.classList.add("correct");
        } else if (option === selectedOption) {
            option.classList.add("incorrect");
        }
        option.disabled = true;
    });
    
    // Wyświetlenie informacji zwrotnej
    if (isCorrect) {
        showFeedback("Poprawna odpowiedź!", "success");
    } else {
        const correctBtn = Array.from(options).find(option => option.dataset.isCorrect === "true");
        const correctAnswer = correctBtn.textContent;
        showFeedback(`Niepoprawna odpowiedź. Poprawna to: ${correctAnswer}`, "error");
    }
    
    // Aktualizacja statusu pytania
    const id = question.id || currentIndex + 1;
    userProgress.updateQuestionStatus(id, isCorrect);
    
    // Zatrzymanie timera
    clearTimer();
    
    // Automatyczne przejście do następnego pytania po 3 sekundach
    setTimeout(() => {
        if (currentIndex < currentQuestions.length - 1) {
            showNextQuestion();
        } else {
            filterQuestions(); // Odświeżenie pytań po zakończeniu
        }
    }, 3000);
}

/**
 * Wyświetlenie informacji zwrotnej
 */
function showFeedback(message, type) {
    DOM.feedbackContainer.innerHTML = `<div class="feedback ${type}">${message}</div>`;
    
    // Automatyczne ukrycie po 3 sekundach
    setTimeout(() => {
        DOM.feedbackContainer.innerHTML = "";
    }, 3000);
}

/**
 * Odwrócenie fiszki (pokazanie odpowiedzi)
 */
function flipCard() {
    if (mode !== "flashcards" || currentQuestions.length === 0) return;
    
    flipped = !flipped;
    if (flipped) {
        DOM.flashcard.classList.add("flipped");
    } else {
        DOM.flashcard.classList.remove("flipped");
    }
}

/**
 * Pokazanie odpowiedzi na fiszce
 */
function showAnswer() {
    if (mode !== "flashcards" || currentQuestions.length === 0) return;
    
    // Odwrócenie fiszki
    if (!flipped) {
        flipCard();
    }
    
    // Po pokazaniu odpowiedzi pytamy o ocenę znajomości
    setTimeout(() => {
        askForKnowledgeRating();
    }, 500);
}

/**
 * Pytanie o ocenę znajomości pytania
 */
function askForKnowledgeRating() {
    const question = currentQuestions[currentIndex];
    const id = question.id || currentIndex + 1;
    
    // Utworzenie przycisków oceny znajomości
    const ratingButtons = `
        <div class="knowledge-rating">
            <p>Jak dobrze znasz odpowiedź na to pytanie?</p>
            <button class="rating-btn" data-rating="0">Nie znałem/am</button>
            <button class="rating-btn" data-rating="1">Trudne</button>
            <button class="rating-btn" data-rating="2">Dobre</button>
        </div>
    `;
    
    DOM.feedbackContainer.innerHTML = ratingButtons;
    
    // Nasłuchiwanie na kliknięcie przycisku oceny
    const buttons = DOM.feedbackContainer.querySelectorAll(".rating-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const rating = parseInt(event.target.dataset.rating);
            rateKnowledge(id, rating);
        });
    });
}

/**
 * Ocena znajomości pytania
 */
function rateKnowledge(questionId, rating) {
    // Aktualizacja statusu pytania na podstawie oceny
    const isCorrect = rating > 0;
    userProgress.updateQuestionStatus(questionId, isCorrect);
    
    // Przejście do następnego pytania
    DOM.feedbackContainer.innerHTML = "";
    if (currentIndex < currentQuestions.length - 1) {
        showNextQuestion();
    } else {
        filterQuestions(); // Odświeżenie pytań po zakończeniu
    }
}

/**
 * Przejście do poprzedniego pytania
 */
function showPreviousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        showCurrentQuestion();
    }
}

/**
 * Przejście do następnego pytania
 */
function showNextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        showCurrentQuestion();
    }
}

/**
 * Rozpoczęcie nauki
 */
function startLearning() {
    // Filtrowanie pytań jeśli nie ma żadnych
    if (currentQuestions.length === 0) {
        filterQuestions();
    }
    
    // Przejście do pierwszego pytania
    currentIndex = 0;
    showCurrentQuestion();
    
    // Uruchomienie timera w trybie quiz
    if (mode === "quiz") {
        startTimer();
    }
}

/**
 * Uruchomienie testu
 */
function startTest() {
    // Pobieranie liczby pytań
    const questionCount = parseInt(DOM.questionCount.value);
    if (isNaN(questionCount) || questionCount < 1) {
        showFeedback("Wprowadź poprawną liczbę pytań.", "warning");
        return;
    }
    
    // Wybór pytań do testu
    testQuestions = [...currentQuestions];
    shuffleArray(testQuestions);
    
    // Ograniczenie liczby pytań
    testQuestions = testQuestions.slice(0, Math.min(questionCount, testQuestions.length));
    
    // Jeśli brak pytań
    if (testQuestions.length === 0) {
        showFeedback("Brak pytań spełniających kryteria testu.", "warning");
        return;
    }
    
    // Inicjalizacja testu
    testInProgress = true;
    testAnswers = new Array(testQuestions.length).fill(null);
    currentIndex = 0;
    
    // Aktualizacja paseka postępu
    updateTestProgress();
    
    // Ukrycie rezultatów i pokazanie pytania
    DOM.testResultsContainer.style.display = "none";
    DOM.testQuestionContainer.style.display = "block";
    DOM.testOptionsContainer.style.display = "block";
    
    // Wyświetlenie pierwszego pytania
    showTestQuestion();
    
    // Uruchomienie timera
    startTimer();
}

/**
 * Wyświetlenie aktualnego pytania testu
 */
function showTestQuestion() {
    const question = testQuestions[currentIndex];
    
    // Wypełnienie treścią
    DOM.testQuestionText.textContent = question.question;
    
    // Utworzenie i przetasowanie indeksów odpowiedzi
    const answerIndices = question.answers.map((_, index) => index);
    shuffleArray(answerIndices);
    
    // Wyświetlenie opcji odpowiedzi w losowej kolejności
    DOM.testOptionsContainer.innerHTML = "";
    answerIndices.forEach((originalIndex) => {
        const answer = question.answers[originalIndex];
        const optionBtn = document.createElement("button");
        optionBtn.className = "option-btn";
        optionBtn.textContent = answer.text;
        optionBtn.dataset.originalIndex = originalIndex; // Przechowujemy oryginalny indeks
        
        // Jeśli odpowiedź została już wybrana
        if (testAnswers[currentIndex] === originalIndex) {
            optionBtn.classList.add("selected");
        }
        
        optionBtn.addEventListener("click", (event) => {
            // Zaznaczenie wybranej opcji
            DOM.testOptionsContainer.querySelectorAll(".option-btn").forEach(btn => {
                btn.classList.remove("selected");
            });
            event.target.classList.add("selected");
            
            // Zapisanie oryginalnego indeksu odpowiedzi
            testAnswers[currentIndex] = parseInt(event.target.dataset.originalIndex);
            
            // Aktualizacja postępu
            updateTestProgress();
            
            // Automatyczne przejście do następnego pytania po krótkim czasie
            setTimeout(() => {
                if (currentIndex < testQuestions.length - 1) {
                    currentIndex++;
                    showTestQuestion();
                } else if (testAnswers.every(a => a !== null)) {
                    finishTest(); // Zakończenie testu gdy wszystkie pytania mają odpowiedzi
                }
            }, 500);
        });
        
        DOM.testOptionsContainer.appendChild(optionBtn);
    });
    
    // Aktualizacja przycisków nawigacji
    DOM.prevBtn.disabled = currentIndex === 0;
    DOM.nextBtn.disabled = currentIndex === testQuestions.length - 1;
    
    // Aktualizacja postępu
    updateTestProgress();
}

/**
 * Aktualizacja paska postępu testu
 */
function updateTestProgress() {
    const progress = testAnswers.filter(a => a !== null).length / testQuestions.length * 100;
    DOM.testProgress.style.width = `${progress}%`;
    DOM.testProgress.textContent = `${Math.round(progress)}%`;
}

/**
 * Zakończenie testu i wyświetlenie wyników
 */
function finishTest() {
    // Zatrzymanie timera
    clearTimer();
    
    // Obliczenie wyników
    let correctCount = 0;
    const details = [];
    
    testQuestions.forEach((question, index) => {
        const answerIndex = testAnswers[index];
        const isCorrect = answerIndex !== null && question.answers[answerIndex].correct;
        
        if (isCorrect) {
            correctCount++;
        }
        
        // Dodanie szczegółów dla każdego pytania
        details.push({
            question: question.question,
            userAnswer: answerIndex !== null ? question.answers[answerIndex].text : "Brak odpowiedzi",
            correctAnswer: question.answers.find(a => a.correct).text,
            isCorrect: isCorrect,
            category: question.category
        });
        
        // Aktualizacja statusu pytania
        const id = question.id || index + 1;
        userProgress.updateQuestionStatus(id, isCorrect);
    });
    
    // Obliczenie statystyk
    const percentage = (correctCount / testQuestions.length * 100).toFixed(1);
    const timeString = formatTime(timeElapsed);
    
    // Zapis wyniku do historii
    const testResult = {
        date: new Date(),
        score: correctCount,
        total: testQuestions.length,
        percentage: parseFloat(percentage),
        time: timeElapsed,
        categories: [...new Set(testQuestions.map(q => q.category))]
    };
    
    userProgress.addTestResult(testResult);
    
    // Ukrycie pytania i pokazanie wyników
    DOM.testQuestionContainer.style.display = "none";
    DOM.testOptionsContainer.style.display = "none";
    DOM.testResultsContainer.style.display = "block";
    
    // Wypełnienie wyników
    DOM.testResultsSummary.innerHTML = `
        <div class="test-score">
            <span class="score-value">${percentage}%</span>
            <span class="score-details">${correctCount} z ${testQuestions.length} poprawnych</span>
            <span class="score-time">Czas: ${timeString}</span>
        </div>
    `;
    
    // Wypełnienie szczegółów
    DOM.testResultsDetails.innerHTML = details.map((detail, index) => `
        <div class="result-item ${detail.isCorrect ? 'correct' : 'incorrect'}">
            <div class="result-question">${index + 1}. ${detail.question}</div>
            <div class="result-answer">
                <span class="answer-label">Twoja odpowiedź:</span> 
                <span class="answer-value ${detail.isCorrect ? 'correct' : 'incorrect'}">${detail.userAnswer}</span>
            </div>
            ${!detail.isCorrect ? `
                <div class="result-correct">
                    <span class="answer-label">Poprawna odpowiedź:</span> 
                    <span class="answer-value correct">${detail.correctAnswer}</span>
                </div>
            ` : ''}
            <div class="result-category">${detail.category}</div>
        </div>
    `).join('');
    
    // Aktualizacja historii testów
    updateTestHistory();
    
    // Aktualizacja statystyk
    updateStats();
    
    // Resetowanie testu
    testInProgress = false;
}

/**
 * Aktualizacja przycisków nawigacji
 */
function updateNavButtons() {
    if (currentQuestions.length === 0) {
        DOM.prevBtn.disabled = true;
        DOM.nextBtn.disabled = true;
        DOM.startBtn.disabled = false;
        return;
    }
    
    DOM.prevBtn.disabled = currentIndex === 0;
    DOM.nextBtn.disabled = currentIndex === currentQuestions.length - 1;
    DOM.startBtn.disabled = false;
}

/**
 * Aktualizacja statystyk nauki
 */
function updateStats() {
    // Zliczanie pytań w każdym statusie
    let newCount = 0;
    let reviewCount = 0;
    let learnedCount = 0;
    
    Object.values(userProgress.questionStatus).forEach(status => {
        if (status === "new") newCount++;
        else if (status === "review") reviewCount++;
        else if (status === "learned") learnedCount++;
    });
    
    // Aktualizacja wyświetlanych wartości
    DOM.statTotal.textContent = questions.length;
    DOM.statNew.textContent = newCount;
    DOM.statReview.textContent = reviewCount;
    DOM.statLearned.textContent = learnedCount;
}

/**
 * Aktualizacja historii testów
 */
function updateTestHistory() {
    if (userProgress.testHistory.length === 0) {
        DOM.testHistory.innerHTML = "<p>Brak historii testów</p>";
        return;
    }
    
    DOM.testHistory.innerHTML = userProgress.testHistory.map(result => {
        const date = new Date(result.date).toLocaleDateString();
        const time = formatTime(result.time);
        
        return `
            <div class="history-item">
                <div class="history-date">${date}</div>
                <div class="history-score">${result.percentage.toFixed(1)}%</div>
                <div class="history-details">${result.score} / ${result.total}</div>
                <div class="history-time">${time}</div>
            </div>
        `;
    }).join('');
}

/**
 * Uruchomienie timera
 */
function startTimer() {
    // Czyszczenie poprzedniego timera
    clearTimer();
    
    // Resetowanie czasu
    timeElapsed = 0;
    updateTimerDisplay();
    
    // Uruchomienie nowego timera
    timer = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();
    }, 1000);
    
    // Pokazanie timera
    DOM.timerContainer.style.display = "block";
}

/**
 * Zatrzymanie timera
 */
function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

/**
 * Aktualizacja wyświetlanego czasu
 */
function updateTimerDisplay() {
    DOM.timer.textContent = formatTime(timeElapsed);
}

/**
 * Formatowanie czasu w sekundach na format mm:ss
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * Eksport postępu nauki
 */
function exportProgress() {
    const data = userProgress.export();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `flashcards-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
}

/**
 * Import postępu nauki
 */
function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const success = userProgress.import(e.target.result);
        
        if (success) {
            showModal("Import zakończony", "Twój postęp nauki został pomyślnie zaimportowany.");
            
            // Aktualizacja interfejsu
            filterQuestions();
            updateStats();
            updateTestHistory();
            applyTheme(userProgress.settings.theme);
        } else {
            showModal("Błąd importu", "Nie udało się zaimportować pliku. Upewnij się, że wybrałeś poprawny plik z postępem nauki.");
        }
        
        // Czyszczenie inputa
        event.target.value = "";
    };
    
    reader.readAsText(file);
}

/**
 * Potwierdzenie resetowania postępu
 */
function confirmResetProgress() {
    showModal(
        "Zresetować postęp?", 
        "Czy na pewno chcesz zresetować cały postęp nauki? Tej operacji nie można cofnąć.",
        resetProgress
    );
}

/**
 * Resetowanie postępu nauki
 */
function resetProgress() {
    userProgress.reset();
    
    // Aktualizacja interfejsu
    filterQuestions();
    updateStats();
    updateTestHistory();
    
    showModal("Postęp zresetowany", "Twój postęp nauki został pomyślnie zresetowany.");
}

/**
 * Pokazanie modalu
 */
function showModal(title, content, confirmCallback = null) {
    DOM.modalTitle.textContent = title;
    DOM.modalContent.innerHTML = content;
    
    // Ustawienie callbacka dla przycisku potwierdzenia
    if (confirmCallback) {
        DOM.modalConfirmBtn.style.display = "block";
        DOM.modalConfirmBtn.onclick = () => {
            confirmCallback();
            hideModal();
        };
    } else {
        DOM.modalConfirmBtn.style.display = "none";
    }
    
    // Przycisk anulowania
    DOM.modalCancelBtn.onclick = hideModal;
    
    // Pokazanie modalu
    DOM.modalOverlay.style.display = "flex";
}

/**
 * Ukrycie modalu
 */
function hideModal() {
    DOM.modalOverlay.style.display = "none";
}

/**
 * Przełączenie motywu (jasny/ciemny)
 */
function toggleTheme() {
    const newTheme = DOM.themeToggle.checked ? "dark" : "light";
    userProgress.settings.theme = newTheme;
    userProgress.save();
    
    applyTheme(newTheme);
}

/**
 * Zastosowanie motywu
 */
function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    DOM.themeLabel.textContent = theme === "dark" ? "Ciemny motyw" : "Jasny motyw";
}

/**
 * Losowe tasowanie tablicy (algorytm Fisher-Yates)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}