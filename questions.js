// Baza pytań do quizu
const questions = [
    {
        category: "Mikroekonomia",
        question: "1. Krzywą, która przedstawia zbiór wszystkich kombinacji nakładów dwóch czynników produkcji, których koszt całkowity jest taki sam, nazywamy:",
        answers: [
            { text: "Izokwantą", correct: false },
            { text: "Izokostą", correct: true },
            { text: "Krzywą obojętności", correct: false },
            { text: "Krzywą jednakowego produktu", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "2. Rynek sprzedawcy oznacza, że:",
        answers: [
            { text: "Popyt przewyższa podaż", correct: true },
            { text: "Podaż przewyższa popyt", correct: false },
            { text: "Popyt równa się podaży", correct: false },
            { text: "Cena równowagi jest niższa od ceny rynkowej", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "3. Rynek nabywcy oznacza, że:",
        answers: [
            { text: "Popyt przewyższa podaż", correct: false },
            { text: "Podaż przewyższa popyt", correct: true },
            { text: "Popyt równa się podaży", correct: false },
            { text: "Cena równowagi jest wyższa od ceny rynkowej", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "4. Produktywność krańcowa definiowana jest jako:",
        answers: [
            { text: "Całkowity produkt podzielony przez liczbę jednostek nakładu", correct: false },
            { text: "Zmiana produkcji całkowitej wywołana zmianą nakładu o jednostkę", correct: true },
            { text: "Stosunek nakładów do efektów", correct: false },
            { text: "Różnica między produkcją całkowitą a kosztami produkcji", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "5. Produktywność przeciętna definiowana jest jako:",
        answers: [
            { text: "Całkowity produkt podzielony przez liczbę jednostek nakładu", correct: true },
            { text: "Zmiana produkcji całkowitej wywołana zmianą nakładu o jednostkę", correct: false },
            { text: "Stosunek nakładów do efektów", correct: false },
            { text: "Różnica między produkcją całkowitą a kosztami produkcji", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "6. Miernikiem całkowitych dochodów osiąganych przez obywateli danego kraju, niezależnie od miejsca (kraju) świadczenia usług przez czynniki produkcji, jest:",
        answers: [
            { text: "Produkt Krajowy Brutto (PKB)", correct: false },
            { text: "Produkt Narodowy Brutto (PNB)", correct: true },
            { text: "Produkt Krajowy Netto (PKN)", correct: false },
            { text: "Dochód Narodowy (DN)", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "7. Do obliczenia PKB można stosować metodę:",
        answers: [
            { text: "Dochodową, wydatkową i produkcyjną", correct: true },
            { text: "Tylko dochodową", correct: false },
            { text: "Tylko wydatkową", correct: false },
            { text: "Tylko produkcyjną", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "8. Popyt efektywny można zdefiniować jako:",
        answers: [
            { text: "Popyt całkowity na rynku", correct: false },
            { text: "Popyt poparty siłą nabywczą", correct: true },
            { text: "Popyt potencjalny na dobra luksusowe", correct: false },
            { text: "Popyt na dobra pierwszej potrzeby", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "9. Cykle koniunkturalne powtarzające się co 8-10 lat nazywamy cyklami:",
        answers: [
            { text: "Kitchina", correct: false },
            { text: "Juglara", correct: true },
            { text: "Kondratiewa", correct: false },
            { text: "Kuznetsa", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "10. W badaniach ekonomicznych bezrobotny jest zdefiniowany jako:",
        answers: [
            { text: "Osoba niepracująca, nieaktywnie poszukująca pracy", correct: false },
            { text: "Osoba niepracująca, aktywnie poszukująca pracy i gotowa do jej podjęcia", correct: true },
            { text: "Osoba pracująca w niepełnym wymiarze czasu", correct: false },
            { text: "Osoba niezarejestrowana w urzędzie pracy", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "11. Koszty stałe na wykresie zależności kosztów od wielkości produkcji przedstawia:",
        answers: [
            { text: "Linia pozioma", correct: true },
            { text: "Linia wznosząca się", correct: false },
            { text: "Krzywa paraboliczna", correct: false },
            { text: "Linia opadająca", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "12. Koszty zmienne na wykresie zależności kosztów od wielkości produkcji przedstawia:",
        answers: [
            { text: "Linia pozioma", correct: false },
            { text: "Linia wznosząca się", correct: true },
            { text: "Krzywa sinusoidalna", correct: false },
            { text: "Linia opadająca", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "13. Punkt, w którym koszty całkowite zrównują się z przychodami ze sprzedaży, nazywa się:",
        answers: [
            { text: "Punktem równowagi", correct: false },
            { text: "Punktem krytycznym", correct: false },
            { text: "Punktem progowym rentowności", correct: true },
            { text: "Punktem maksymalnego zysku", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "14. PNB w ujęciu realnym mierzy się w cenach:",
        answers: [
            { text: "Bieżących", correct: false },
            { text: "Stałych", correct: true },
            { text: "Nominalnych", correct: false },
            { text: "Rynkowych", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "15. Do PKB nie wliczamy:",
        answers: [
            { text: "Konsumpcji gospodarstw domowych", correct: false },
            { text: "Inwestycji przedsiębiorstw", correct: false },
            { text: "Transferów socjalnych", correct: true },
            { text: "Eksportu netto", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "16. Zależność między wpływami do budżetu z tytułu podatków a wysokością stopy podatkowej ilustruje:",
        answers: [
            { text: "Krzywa Phillipsa", correct: false },
            { text: "Krzywa Laffera", correct: true },
            { text: "Krzywa popytu", correct: false },
            { text: "Krzywa podaży", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "17. Obniżka rynkowej stopy procentowej powoduje:",
        answers: [
            { text: "Wzrost kosztów kredytu", correct: false },
            { text: "Spadek inwestycji", correct: false },
            { text: "Wzrost popytu na kredyty", correct: true },
            { text: "Zmniejszenie konsumpcji", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "18. Co jest miernikiem ogólnej inflacji w gospodarce?",
        answers: [
            { text: "Wskaźnik cen towarów i usług konsumpcyjnych (CPI)", correct: true },
            { text: "Wskaźnik cen producentów (PPI)", correct: false },
            { text: "Stopa bezrobocia", correct: false },
            { text: "PKB nominalny", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "19. Inflacja kosztowa może pochodzić od:",
        answers: [
            { text: "Wzrostu popytu konsumpcyjnego", correct: false },
            { text: "Wzrostu kosztów produkcji", correct: true },
            { text: "Obniżki stóp procentowych", correct: false },
            { text: "Nadmiernej podaży pieniądza", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "20. Inflacja popytowa może pochodzić od:",
        answers: [
            { text: "Wzrostu kosztów surowców", correct: false },
            { text: "Nadmiernego wzrostu podaży pieniądza", correct: true },
            { text: "Spadku produkcji", correct: false },
            { text: "Wzrostu bezrobocia", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "21. Prawo, które mówi, że zadowolenie z pierwszej konsumowanej jednostki dobra jest znacznie większe niż z kolejnej, drugiej jednostki itd., nazywamy:",
        answers: [
            { text: "Prawem malejącej użyteczności krańcowej", correct: true },
            { text: "Prawem równowagi rynkowej", correct: false },
            { text: "Prawem podaży", correct: false },
            { text: "Prawem popytu", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "22. Prawo, które mówi, że maksymalne zadowolenie z konsumpcji dwóch dóbr (maksymalną użyteczność) konsument osiąga wówczas, gdy stosunek użyteczności marginalnych tych dóbr zrównuje się z relacją ich cen, nazywamy:",
        answers: [
            { text: "Prawem równowagi konsumenta", correct: true },
            { text: "Prawem malejącej produktywności", correct: false },
            { text: "Prawem podaży i popytu", correct: false },
            { text: "Prawem kosztów komparatywnych", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "23. Dobra, na które wielkość popytu rośnie wraz ze wzrostem ceny, nazywamy:",
        answers: [
            { text: "Dobrami normalnymi", correct: false },
            { text: "Dobrami Giffena", correct: true },
            { text: "Dobrami substytucyjnymi", correct: false },
            { text: "Dobrami komplementarnymi", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "24. Dobro komplementarne można zdefiniować jako:",
        answers: [
            { text: "Dobro konsumowane zamiast innego dobra", correct: false },
            { text: "Dobro konsumowane razem z innym dobrem", correct: true },
            { text: "Dobro o stałym popycie niezależnie od ceny", correct: false },
            { text: "Dobro o wysokiej elastyczności cenowej", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "25. Dobro substytucyjne można zdefiniować jako:",
        answers: [
            { text: "Dobro konsumowane razem z innym dobrem", correct: false },
            { text: "Dobro konsumowane zamiast innego dobra", correct: true },
            { text: "Dobro o niskiej elastyczności popytu", correct: false },
            { text: "Dobro o stałej użyteczności", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "26. Dobra, na które wielkość popytu maleje wraz ze wzrostem ich ceny nazywamy:",
        answers: [
            { text: "Dobrami normalnymi", correct: true },
            { text: "Dobrami Giffena", correct: false },
            { text: "Dobrami Veblena", correct: false },
            { text: "Dobrami luksusowymi", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "27. Korzyści skali pojawiają się wtedy, gdy wraz ze wzrostem produkcji:",
        answers: [
            { text: "Koszty jednostkowe rosną", correct: false },
            { text: "Koszty jednostkowe maleją", correct: true },
            { text: "Przychody maleją", correct: false },
            { text: "Produktywność pozostaje stała", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "28. Stopa bezrobocia jest obliczana jako stosunek liczby osób bezrobotnych do:",
        answers: [
            { text: "Całkowitej populacji", correct: false },
            { text: "Aktywnej zawodowo populacji", correct: true },
            { text: "Liczby zatrudnionych", correct: false },
            { text: "Liczby pracujących na pełny etat", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "29. Zależność między stopą bezrobocia a stopą inflacji ilustruje:",
        answers: [
            { text: "Krzywa Laffera", correct: false },
            { text: "Krzywa Phillipsa", correct: true },
            { text: "Krzywa popytu", correct: false },
            { text: "Krzywa podaży", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "30. Stwierdzenie o tym, że dla każdego procentu wzrostu rzeczywistej stopy bezrobocia powyżej naturalnej stopy bezrobocia luka PKB powiększa się o około 3%, nazywamy:",
        answers: [
            { text: "Prawem Okuna", correct: true },
            { text: "Prawem Say’a", correct: false },
            { text: "Prawem Phillipsa", correct: false },
            { text: "Prawem Keynnesa", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "31. Jakie są podstawowe przesłanki wydania przez Urząd Patentowy decyzji o udzieleniu patentu na wynalazek i prawa ochronnego na wzór użytkowy:",
        answers: [
            { text: "Nowość, poziom wynalazczy i przydatność przemysłowa", correct: true },
            { text: "Unikalność, niskie koszty produkcji i dostępność", correct: false },
            { text: "Popularność, prostota i estetyka", correct: false },
            { text: "Trwałość, funkcjonalność i opłacalność", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "32. W jaki sposób oznacza się pierwszeństwo do uzyskania patentu:",
        answers: [
            { text: "Datą zgłoszenia wynalazku w Urzędzie Patentowym", correct: true },
            { text: "Datą publikacji wynalazku", correct: false },
            { text: "Datą rozpoczęcia produkcji", correct: false },
            { text: "Datą uzyskania zgody inwestora", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "33. Jaki charakter ma prawo pierwszeństwa do uzyskania patentu:",
        answers: [
            { text: "Materialny", correct: true },
            { text: "Formalny", correct: false },
            { text: "Tymczasowy", correct: false },
            { text: "Umowny", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "34. Jakie zachowanie stanowi nieuczciwą konkurencję:",
        answers: [
            { text: "Wprowadzanie w błąd co do pochodzenia towarów", correct: true },
            { text: "Oferowanie rabatów klientom", correct: false },
            { text: "Zwiększenie nakładów na reklamę", correct: false },
            { text: "Podnoszenie cen produktów", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "35. Jakie uprawnienia uzyskiwane są poprzez udzielenie patentu przez Urząd Patentowy RP:",
        answers: [
            { text: "Wyłączne prawo do korzystania z wynalazku w celach zarobkowych", correct: true },
            { text: "Prawo do sprzedaży produktu bez podatków", correct: false },
            { text: "Prawo do nieograniczonej produkcji", correct: false },
            { text: "Prawo do publikacji wynalazku", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "36. W kraju, w którym działa przedsiębiorstwo XYZ, zmieniono przepisy regulujące ochronę danych osobowych. Zmiana ta dotyczy:",
        answers: [
            { text: "Makrootoczenia przedsiębiorstwa", correct: true },
            { text: "Mikrootoczenia przedsiębiorstwa", correct: false },
            { text: "Wewnętrznej struktury organizacyjnej", correct: false },
            { text: "Strategii marketingowej", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "37. W kraju, w którym działa przedsiębiorstwo XYZ, istotnie zmieniła się stopa bezrobocia. Zmiana ta dotyczy:",
        answers: [
            { text: "Makrootoczenia przedsiębiorstwa", correct: true },
            { text: "Mikrootoczenia przedsiębiorstwa", correct: false },
            { text: "Procesów rekrutacyjnych", correct: false },
            { text: "Struktury kosztów", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "38. Dwaj główni konkurenci przedsiębiorstwa ABC właśnie ogłosili współpracę strategiczną. Zmiana ta dotyczy:",
        answers: [
            { text: "Mikrootoczenia przedsiębiorstwa", correct: true },
            { text: "Makrootoczenia przedsiębiorstwa", correct: false },
            { text: "Wewnętrznych procesów produkcyjnych", correct: false },
            { text: "Struktury organizacyjnej", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "39. Główny dostawca przedsiębiorstwa ABC właśnie ogłosił upadłość. Zmiana ta dotyczy:",
        answers: [
            { text: "Mikrootoczenia przedsiębiorstwa", correct: true },
            { text: "Makrootoczenia przedsiębiorstwa", correct: false },
            { text: "Wewnętrznych procesów zarządzania", correct: false },
            { text: "Polityki cenowej", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "40. W kraju, w którym działa przedsiębiorstwo XYZ zmienia się struktura wiekowa obywateli (następuje starzenie społeczeństwa). Zmiana ta dotyczy:",
        answers: [
            { text: "Makrootoczenia przedsiębiorstwa", correct: true },
            { text: "Mikrootoczenia przedsiębiorstwa", correct: false },
            { text: "Strategii sprzedaży", correct: false },
            { text: "Procesów produkcyjnych", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "41. W metodzie SWOT szanse oznaczają:",
        answers: [
            { text: "Korzystne czynniki zewnętrzne", correct: true },
            { text: "Korzystne czynniki wewnętrzne", correct: false },
            { text: "Niekorzystne czynniki zewnętrzne", correct: false },
            { text: "Niekorzystne czynniki wewnętrzne", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "42. W przedsiębiorstwie XYZ dotychczas handlowcy prowadzili rozmowy z klientami, posługując się własną wiedzą, umiejętnościami i doświadczeniem. Obecnie wprowadzono zasadę, iż handlowcy powinni posługiwać się ujednoliconymi scenariuszami rozmowy przygotowanymi przez kierownictwo. Której z cech struktury organizacyjnej dotyczy ta zmiana:",
        answers: [
            { text: "Formalizacji", correct: true },
            { text: "Centralizacji", correct: false },
            { text: "Rozpiętości kierowania", correct: false },
            { text: "Specjalizacji", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "43. W przedsiębiorstwie ABC dotychczas handlowcy mogli ustalać warunki umów z klientami jedynie wtedy, gdy wcześniej zostały one zaakceptowane przez dyrektora handlowego. Obecnie wprowadzono zasadę, że handlowcy mogą samodzielnie ustalać warunki sprzedaży oferowane klientom. Której z cech struktury organizacyjnej dotyczy ta zmiana:",
        answers: [
            { text: "Decentralizacji", correct: true },
            { text: "Formalizacji", correct: false },
            { text: "Specjalizacji", correct: false },
            { text: "Hierarchiczności", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "44. W przedsiębiorstwie ABC dotychczas wszyscy pracownicy podlegali bezpośrednio dyrektorowi naczelnemu. Obecnie powołano dwóch zastępców dyrektora, którzy podlegają dyrektorowi, a którym z kolei podlegają pracownicy wykonawczy. Której z cech struktury organizacyjnej dotyczy ta zmiana:",
        answers: [
            { text: "Rozpiętości kierowania", correct: true },
            { text: "Centralizacji", correct: false },
            { text: "Formalizacji", correct: false },
            { text: "Specjalizacji", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "45. Które dwie cechy struktury organizacyjnej są połączone ze sobą w ten sposób, że zwiększenie jednej zmniejsza drugą:",
        answers: [
            { text: "Centralizacja i decentralizacja", correct: true },
            { text: "Formalizacja i specjalizacja", correct: false },
            { text: "Hierarchiczność i rozpiętość kierowania", correct: false },
            { text: "Specjalizacja i centralizacja", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "46. Cechą charakterystyczną stanowiska sztabowego w organizacji jest to, iż:",
        answers: [
            { text: "Pełni funkcje doradcze, bez uprawnień decyzyjnych", correct: true },
            { text: "Ma bezpośrednią władzę nad pracownikami liniowymi", correct: false },
            { text: "Odpowiada za realizację celów operacyjnych", correct: false },
            { text: "Jest odpowiedzialne za produkcję", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "47. Zgodnie z definicją struktury mechanistycznej jest ona:",
        answers: [
            { text: "Silnie sformalizowana i hierarchiczna", correct: true },
            { text: "Elastyczna i organiczna", correct: false },
            { text: "Zdecentralizowana i płaska", correct: false },
            { text: "Zorientowana na projekty", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "48. W przedsiębiorstwie ABC zasadniczy podział na działy przedstawia się następująco: dział projektowania, dział produkcji, dział handlowy, dział marketingu, dział księgowości. Jaki typ struktury organizacyjnej reprezentuje to przedsiębiorstwo:",
        answers: [
            { text: "Struktura funkcjonalna", correct: true },
            { text: "Struktura macierzowa", correct: false },
            { text: "Struktura projektowa", correct: false },
            { text: "Struktura liniowa", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "49. Struktura przedsiębiorstwa ABC oparta jest na dwóch nakładających się kryteriach grupowania: z jednej strony istnieje podział na dział projektowania, dział produkcji, dział handlowy, dział marketingu, dział księgowości, a z drugiej podział na zespoły projektowe. Jaki typ struktury organizacyjnej reprezentuje to przedsiębiorstwo:",
        answers: [
            { text: "Struktura macierzowa", correct: true },
            { text: "Struktura funkcjonalna", correct: false },
            { text: "Struktura liniowa", correct: false },
            { text: "Struktura organiczna", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "50. Elastyczna i w bardzo niewielkim stopniu sformalizowana struktura organizacyjna przedsiębiorstwa to struktura:",
        answers: [
            { text: "Organiczna", correct: true },
            { text: "Mechanistyczna", correct: false },
            { text: "Hierarchiczna", correct: false },
            { text: "Funkcjonalna", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "51. W której ze struktur organizacyjnych pracownik ma więcej niż jednego przełożonego:",
        answers: [
            { text: "Struktura macierzowa", correct: true },
            { text: "Struktura liniowa", correct: false },
            { text: "Struktura funkcjonalna", correct: false },
            { text: "Struktura płaska", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "52. Zmienne brane pod uwagę w metodzie BCG to:",
        answers: [
            { text: "Względny udział w rynku i tempo wzrostu rynku", correct: true },
            { text: "Koszty produkcji i zysk", correct: false },
            { text: "Popyt i podaż", correct: false },
            { text: "Siła konkurencji i bariery wejścia", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "53. W metodzie BCG gwiazdy od znaków zapytania różnią się:",
        answers: [
            { text: "Wysokim udziałem w rynku", correct: true },
            { text: "Niskim tempem wzrostu rynku", correct: false },
            { text: "Wysokimi kosztami produkcji", correct: false },
            { text: "Niską rentownością", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "54. Analiza pięciu sił konkurencyjnych Portera nie obejmuje:",
        answers: [
            { text: "Siły negocjacyjnej dostawców", correct: false },
            { text: "Zagrożeń ze strony nowych produktów", correct: false },
            { text: "Tempo wzrostu rynku", correct: true },
            { text: "Rywalizacji wewnątrz sektora", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "55. W metodzie BCG gwiazdy od dojnych krów różnią się:",
        answers: [
            { text: "Wysokim tempem wzrostu rynku", correct: true },
            { text: "Niskim udziałem w rynku", correct: false },
            { text: "Wysokimi kosztami operacyjnymi", correct: false },
            { text: "Niską rentownością", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "56. Zgodnie z definicją dywersyfikacja pozioma zależna działalności przedsiębiorstwa to:",
        answers: [
            { text: "Rozszerzenie oferty o produkty powiązane z dotychczasową działalnością", correct: true },
            { text: "Wejście na zupełnie nowy rynek", correct: false },
            { text: "Integracja pionowa z dostawcami", correct: false },
            { text: "Zmiana kanałów dystrybucji", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "57. Zgodnie z definicją dywersyfikacja pozioma niezależna działalności przedsiębiorstwa to:",
        answers: [
            { text: "Rozszerzenie oferty o produkty niezwiązane z dotychczasową działalnością", correct: true },
            { text: "Integracja z konkurentami", correct: false },
            { text: "Zmiana technologii produkcji", correct: false },
            { text: "Rozszerzenie oferty o powiązane produkty", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "58. W jaki sposób wysoka nieprzewidywalność otoczenia wpływa na poziom zapasów materiałów:",
        answers: [
            { text: "Zwiększa poziom zapasów", correct: true },
            { text: "Zmniejsza poziom zapasów", correct: false },
            { text: "Nie ma wpływu na poziom zapasów", correct: false },
            { text: "Powoduje ich całkowite wyeliminowanie", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "59. W jaki sposób wysoka złożoność i niepewność otoczenia wpływają na poziom centralizacji władzy w przedsiębiorstwie:",
        answers: [
            { text: "Zmniejsza poziom centralizacji", correct: true },
            { text: "Zwiększa poziom centralizacji", correct: false },
            { text: "Nie ma wpływu na centralizację", correct: false },
            { text: "Powoduje pełną decentralizację", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "60. Sytuacja, w której na danym rynku występuje tylko jeden klient i wielu dostawców, to:",
        answers: [
            { text: "Monopson", correct: true },
            { text: "Monopol", correct: false },
            { text: "Oligopol", correct: false },
            { text: "Konkurencja doskonała", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "61. Która z konfiguracji rynkowych daje klientowi lepszą pozycję przetargową:",
        answers: [
            { text: "Monopson", correct: true },
            { text: "Monopol", correct: false },
            { text: "Oligopol", correct: false },
            { text: "Konkurencja monopolistyczna", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "62. Która z ról organizacyjnych nie jest rolą kierowniczą:",
        answers: [
            { text: "Specjalista ds. IT", correct: true },
            { text: "Kierownik projektu", correct: false },
            { text: "Dyrektor operacyjny", correct: false },
            { text: "Menedżer zespołu", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "63. Która z funkcji zarządzania obejmuje tworzenie struktury organizacyjnej przedsiębiorstwa:",
        answers: [
            { text: "Organizowanie", correct: true },
            { text: "Planowanie", correct: false },
            { text: "Kontrolowanie", correct: false },
            { text: "Motywowanie", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "64. Właściwa kolejność działań w procesie kontroli to:",
        answers: [
            { text: "Ustalenie standardów, pomiar wyników, analiza odchyleń", correct: true },
            { text: "Pomiar wyników, analiza odchyleń, ustalenie standardów", correct: false },
            { text: "Analiza odchyleń, pomiar wyników, ustalenie standardów", correct: false },
            { text: "Ustalenie standardów, analiza odchyleń, pomiar wyników", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "65. O efekcie synergicznym mówimy, gdy:",
        answers: [
            { text: "Całość daje więcej niż suma części", correct: true },
            { text: "Koszty produkcji maleją", correct: false },
            { text: "Zysk rośnie liniowo", correct: false },
            { text: "Popyt równa się podaży", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "66. Elementem funkcji organizowania nie jest:",
        answers: [
            { text: "Określanie celów strategicznych", correct: true },
            { text: "Podział zadań", correct: false },
            { text: "Tworzenie struktury hierarchicznej", correct: false },
            { text: "Koordynacja działań", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "67. Elementem funkcji planowania jest:",
        answers: [
            { text: "Określanie celów strategicznych", correct: true },
            { text: "Podział zadań między pracownikami", correct: false },
            { text: "Kontrola wyników", correct: false },
            { text: "Motywowanie zespołu", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "68. Funkcje planowania i organizowania skupione są:",
        answers: [
            { text: "Na przygotowaniu przedsiębiorstwa do działania", correct: true },
            { text: "Na kontroli wyników", correct: false },
            { text: "Na motywowaniu pracowników", correct: false },
            { text: "Na analizie odchyleń", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "69. Elementem funkcji kontroli jest:",
        answers: [
            { text: "Analiza odchyleń od standardów", correct: true },
            { text: "Określanie celów strategicznych", correct: false },
            { text: "Podział zadań", correct: false },
            { text: "Tworzenie struktur", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "70. Elementem funkcji organizowania jest:",
        answers: [
            { text: "Koordynacja działań", correct: true },
            { text: "Określanie celów finansowych", correct: false },
            { text: "Pomiar wyników", correct: false },
            { text: "Analiza rynku", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "71. Do jakiej grupy metodyk zarządzania projektami należy metodyka PMI/PMBoK?",
        answers: [
            { text: "Metodyki tradycyjne", correct: true },
            { text: "Metodyki zwinne", correct: false },
            { text: "Metodyki hybrydowe", correct: false },
            { text: "Metodyki adaptacyjne", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "72. Która z metodyk obejmuje całość procesów zarządzania projektami przez wszystkie osoby związane z projektem np. zarząd?",
        answers: [
            { text: "PRINCE2", correct: true },
            { text: "PMI/PMBoK", correct: false },
            { text: "Scrum", correct: false },
            { text: "Agile", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "73. Która z metodyk zarządzania projektami określa najmniej ról w projekcie?",
        answers: [
            { text: "Scrum", correct: true },
            { text: "PRINCE2", correct: false },
            { text: "PMI/PMBoK", correct: false },
            { text: "Kanban", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "74. W której metodyce zarządzania projektami określona jest wprost grupa procesów dotyczących zarządzania zasobami?",
        answers: [
            { text: "PMI/PMBoK", correct: true },
            { text: "PRINCE2", correct: false },
            { text: "Scrum", correct: false },
            { text: "Agile", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "75. Którą metodykę zarządzania projektami charakteryzuje ciągłe uzasadnienie biznesowe?",
        answers: [
            { text: "PRINCE2", correct: true },
            { text: "PMI/PMBoK", correct: false },
            { text: "Scrum", correct: false },
            { text: "Kanban", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "76. Zestaw wartości, przekonań, zachowań, obyczajów i postaw, który pomaga członkom organizacji zrozumieć, za czym organizacja się opowiada, jak działa i co uważa za ważne to:",
        answers: [
            { text: "Kultura organizacyjna", correct: true },
            { text: "Strategia przedsiębiorstwa", correct: false },
            { text: "Struktura organizacyjna", correct: false },
            { text: "Polityka zarządzania", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "77. Upełnomocnienie pracowników polega na:",
        answers: [
            { text: "Przekazaniu im większej odpowiedzialności i autonomii", correct: true },
            { text: "Zwiększeniu kontroli nad ich działaniami", correct: false },
            { text: "Ograniczeniu ich wpływu na decyzje", correct: false },
            { text: "Zmniejszeniu ich roli w procesach", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "78. Wymiarami siatki przywódczej są:",
        answers: [
            { text: "Troska o ludzi i troska o zadania", correct: true },
            { text: "Autorytet i elastyczność", correct: false },
            { text: "Kontrola i delegowanie", correct: false },
            { text: "Innowacyjność i stabilność", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "79. Przywództwo charyzmatyczne polega na tym, iż:",
        answers: [
            { text: "Lider inspiruje podwładnych swoją wizją i osobowością", correct: true },
            { text: "Lider stosuje ścisłą kontrolę i procedury", correct: false },
            { text: "Lider unika podejmowania decyzji", correct: false },
            { text: "Lider deleguje większość zadań", correct: false }
        ]
    },
    {
        category: "Zarządzanie",
        question: "80. Kierowanie konfliktem w organizacjach polega na:",
        answers: [
            { text: "Rozwiązywaniu sporów i minimalizowaniu ich negatywnych skutków", correct: true },
            { text: "Ignorowaniu konfliktów", correct: false },
            { text: "Wzmaganiu rywalizacji między stronami", correct: false },
            { text: "Eliminacji wszystkich sporów", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "81. Ile wynosi szósta potęga liczby i?",
        answers: [
            { text: "-1", correct: true },
            { text: "1", correct: false },
            { text: "i", correct: false },
            { text: "-i", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "82. Ile rozwiązań w ciele liczb zespolonych ma równanie z³ = 1 + i?",
        answers: [
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "1", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "83. Jaki jest warunek istnienia macierzy odwrotnej do A?",
        answers: [
            { text: "Wyznacznik macierzy A musi być różny od zera", correct: true },
            { text: "Macierz A musi być symetryczna", correct: false },
            { text: "Macierz A musi być diagonalna", correct: false },
            { text: "Wszystkie elementy macierzy A muszą być dodatnie", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "84. Wyznacznik iloczynu macierzy A i B spełnia ogólny warunek:",
        answers: [
            { text: "det(AB) = det(A) * det(B)", correct: true },
            { text: "det(AB) = det(A) + det(B)", correct: false },
            { text: "det(AB) = det(A) - det(B)", correct: false },
            { text: "det(AB) = det(A) / det(B)", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "85. Jaką postać ma wzór na wysokość jednorazowej składki netto dla polisy na życie:",
        answers: [
            { text: "Suma wartości bieżącej świadczeń pomnożona przez prawdopodobieństwo zdarzenia", correct: true },
            { text: "Suma wartości przyszłej świadczeń podzielona przez oprocentowanie", correct: false },
            { text: "Różnica między wartością świadczeń a kosztami administracyjnymi", correct: false },
            { text: "Iloczyn wartości świadczeń i stopy procentowej", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "86. Stopa jednorazowej składki netto dla polisy terminowej na dożycie dla mężczyzn w wieku lat 30 jest:",
        answers: [
            { text: "Zależna od tabel przeżywalności i stopy dyskontowej", correct: true },
            { text: "Stała dla wszystkich grup wiekowych", correct: false },
            { text: "Równa wartości świadczenia", correct: false },
            { text: "Niezależna od płci ubezpieczonego", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "87. Kredyt z oprocentowaniem nominalnym 10% w wysokości 10 tys. spłacany jest w 5 ratach rocznych (kapitalizacja złożona, zgodna). Jaki typ oprocentowania jest korzystniejszy dla klienta?",
        answers: [
            { text: "Oprocentowanie efektywne", correct: true },
            { text: "Oprocentowanie nominalne", correct: false },
            { text: "Oprocentowanie stałe", correct: false },
            { text: "Oprocentowanie zmienne", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "88. Kredyt z oprocentowaniem nominalnym 10% w wysokości 10 tys. spłacany jest w 5 ratach rocznych (kapitalizacja złożona, zgodna). Czy korzystniejsze są spłaty o stałych łącznych ratach, czy też o stałych ratach kapitałowych?",
        answers: [
            { text: "Stałe raty kapitałowe", correct: true },
            { text: "Stałe łączne raty", correct: false },
            { text: "Obie metody są równoważne", correct: false },
            { text: "Zależy od stopy inflacji", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "89. Czym jest awersja do ryzyka?",
        answers: [
            { text: "Skłonnością do unikania niepewnych sytuacji", correct: true },
            { text: "Preferencją dla ryzykownych inwestycji", correct: false },
            { text: "Obojętnością wobec niepewności", correct: false },
            { text: "Chęcią maksymalizacji zysku", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "90. Jaki jest wzór na oczekiwaną stopę zwrotu dla portfela budowanego metodą Markowitza?",
        answers: [
            { text: "Suma iloczynów wag aktywów i ich oczekiwanych stóp zwrotu", correct: true },
            { text: "Średnia arytmetyczna stóp zwrotu aktywów", correct: false },
            { text: "Iloczyn wag aktywów i wariancji", correct: false },
            { text: "Różnica między zyskiem a ryzykiem", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "91. Całka oznaczona funkcji f(x) w granicach całkowania x = a, x = b jest równoważna:",
        answers: [
            { text: "Różnicy wartości funkcji pierwotnej w punktach b i a", correct: true },
            { text: "Sumie wartości funkcji w punktach a i b", correct: false },
            { text: "Iloczynowi funkcji i przedziału całkowania", correct: false },
            { text: "Pochodnej funkcji w punkcie b", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "92. Kiedy całka oznaczona funkcji f(x) w granicach całkowania x = a, x = b jest równa różnicy wartości funkcji pierwotnej w punktach x = a, x = b?",
        answers: [
            { text: "Gdy funkcja f(x) jest ciągła na przedziale [a, b]", correct: true },
            { text: "Gdy funkcja f(x) jest różniczkowalna w punkcie a", correct: false },
            { text: "Gdy funkcja f(x) jest stała", correct: false },
            { text: "Gdy funkcja f(x) jest ograniczona", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "93. Kryterium Leibniza dotyczy zbieżności szeregów liczbowych:",
        answers: [
            { text: "Naprzemiennych", correct: true },
            { text: "Geometrycznych", correct: false },
            { text: "Harmonicznych", correct: false },
            { text: "Dodatnich", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "94. Warunkiem koniecznym zbieżności szeregu liczbowego ∑∞ an jest, aby:",
        answers: [
            { text: "Granica an dąży do zera", correct: true },
            { text: "Suma an jest ograniczona", correct: false },
            { text: "an jest zawsze dodatnie", correct: false },
            { text: "an jest monotoniczne", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "95. W równaniu różniczkowym pierwszego rzędu występuje:",
        answers: [
            { text: "Funkcja i jej pierwsza pochodna", correct: true },
            { text: "Funkcja i jej druga pochodna", correct: false },
            { text: "Tylko funkcja bez pochodnych", correct: false },
            { text: "Funkcja i jej nieskończone pochodne", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "96. W równaniu różniczkowym drugiego rzędu, liniowym i jednorodnym o stałych współczynnikach występuje:",
        answers: [
            { text: "Funkcja, jej pierwsza i druga pochodna", correct: true },
            { text: "Funkcja i jej pierwsza pochodna", correct: false },
            { text: "Funkcja i jej trzecia pochodna", correct: false },
            { text: "Tylko funkcja i stała", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "97. Z funkcją wielu zmiennych mamy do czynienia, gdy:",
        answers: [
            { text: "Wartość funkcji zależy od więcej niż jednej zmiennej niezależnej", correct: true },
            { text: "Funkcja ma wiele wartości dla jednego argumentu", correct: false },
            { text: "Funkcja jest różniczkowalna w wielu punktach", correct: false },
            { text: "Funkcja jest ciągła na wielu przedziałach", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "98. Pochodna funkcji w punkcie istnieje, gdy:",
        answers: [
            { text: "Granica ilorazu różnicowego istnieje i jest skończona", correct: true },
            { text: "Funkcja jest ciągła w tym punkcie", correct: false },
            { text: "Funkcja ma wartość w tym punkcie", correct: false },
            { text: "Funkcja jest monotoniczna", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "99. Ciąg jest silnie rosnący, gdy:",
        answers: [
            { text: "Każdy kolejny wyraz jest większy od poprzedniego", correct: true },
            { text: "Każdy kolejny wyraz jest większy lub równy poprzedniemu", correct: false },
            { text: "Suma wyrazów jest dodatnia", correct: false },
            { text: "Granica ciągu jest nieskończona", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "100. Jeśli pochodna w punkcie x0 jest równa zero to funkcja:",
        answers: [
            { text: "Może mieć w tym punkcie ekstremum lokalne", correct: true },
            { text: "Zawsze ma maksimum w tym punkcie", correct: false },
            { text: "Zawsze ma minimum w tym punkcie", correct: false },
            { text: "Jest stała w tym punkcie", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "101. Jeżeli zmienna losowa X ma rozkład symetryczny względem a ∈ ℝ, to:",
        answers: [
            { text: "Wartość oczekiwana wynosi a", correct: true },
            { text: "Wariancja wynosi a", correct: false },
            { text: "Mediana wynosi zero", correct: false },
            { text: "Rozkład jest jednomodalny", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "102. Niech X będzie zmienną losową o rozkładzie ciągłym o gęstości f. Wówczas jej wartość oczekiwana jest równa:",
        answers: [
            { text: "Całce z iloczynu x i f(x) po całym zbiorze wartości", correct: true },
            { text: "Sumie wartości x pomnożonych przez f(x)", correct: false },
            { text: "Średniej arytmetycznej próby", correct: false },
            { text: "Medianie rozkładu", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "103. Jeżeli X jest zmienną losową o rozkładzie N(2,1), to:",
        answers: [
            { text: "Średnia wynosi 2, a odchylenie standardowe 1", correct: true },
            { text: "Średnia wynosi 1, a wariancja 2", correct: false },
            { text: "Wariancja wynosi 1, a mediana 2", correct: false },
            { text: "Rozkład jest jednostajny", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "104. Jeżeli X jest zmienną losową typu ciągłego o gęstości f, to:",
        answers: [
            { text: "Prawdopodobieństwo X = a wynosi 0 dla dowolnego a", correct: true },
            { text: "Prawdopodobieństwo X = a jest równe f(a)", correct: false },
            { text: "Prawdopodobieństwo X > a wynosi f(a)", correct: false },
            { text: "Gęstość f(x) jest stała", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "105. Test Kołmogorowa służy do badania:",
        answers: [
            { text: "Zgodności rozkładu empirycznego z teoretycznym", correct: true },
            { text: "Równości średnich dwóch populacji", correct: false },
            { text: "Niezależności zmiennych", correct: false },
            { text: "Homoskedastyczności", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "106. Błąd pierwszego rodzaju to:",
        answers: [
            { text: "Odrzucenie prawdziwej hipotezy zerowej", correct: true },
            { text: "Zaakceptowanie fałszywej hipotezy zerowej", correct: false },
            { text: "Błąd losowy w próbkowaniu", correct: false },
            { text: "Niewłaściwe określenie poziomu istotności", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "107. W agregatowym indeksie cenowym Laspeyresa porównujemy:",
        answers: [
            { text: "Ceny bieżące z cenami bazowymi przy stałych ilościach bazowych", correct: true },
            { text: "Ceny bieżące z cenami bazowymi przy stałych ilościach bieżących", correct: false },
            { text: "Ilości bieżące z ilościami bazowymi przy stałych cenach", correct: false },
            { text: "Ceny i ilości bieżące z bazowymi", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "108. Co to jest indeks łańcuchowy?",
        answers: [
            { text: "Indeks obliczany na podstawie porównania kolejno następujących po sobie okresów", correct: true },
            { text: "Indeks porównujący bieżący okres z okresem bazowym", correct: false },
            { text: "Indeks ważony średnią geometryczną", correct: false },
            { text: "Indeks stały dla wszystkich okresów", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "109. Miarą rozproszenia danych jest między innymi:",
        answers: [
            { text: "Odchylenie standardowe", correct: true },
            { text: "Mediana", correct: false },
            { text: "Średnia arytmetyczna", correct: false },
            { text: "Moda", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "110. Miarą poziomu współzależności pomiędzy dwiema zmiennymi nominalnymi, z których przynajmniej jedna zawiera trzy albo większą liczbę potencjalnie przyjmowanych wartości jest między innymi:",
        answers: [
            { text: "Współczynnik V Craméra", correct: true },
            { text: "Współczynnik korelacji Pearsona", correct: false },
            { text: "Współczynnik Spearmana", correct: false },
            { text: "Kowariancja", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "111. Co między innymi obrazuje dynamikę zmian zjawisk ekonomicznych?",
        answers: [
            { text: "Indeksy cen", correct: true },
            { text: "Średnia arytmetyczna", correct: false },
            { text: "Mediana dochodów", correct: false },
            { text: "Wariancja PKB", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "112. Co to jest indeks jednopodstawowy?",
        answers: [
            { text: "Indeks porównujący każdy okres z jednym stałym okresem bazowym", correct: true },
            { text: "Indeks porównujący kolejne okresy między sobą", correct: false },
            { text: "Indeks ważony ilościami bieżącymi", correct: false },
            { text: "Indeks stały dla wszystkich zmiennych", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "113. Kamień milowy w zarządzaniu projektami to:",
        answers: [
            { text: "Kluczowe zdarzenie oznaczające zakończenie etapu", correct: true },
            { text: "Codzienne zadanie w harmonogramie", correct: false },
            { text: "Punkt krytyczny na ścieżce projektu", correct: false },
            { text: "Zadanie o największym koszcie", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "114. Ścieżka krytyczna pozwala przede wszystkim na:",
        answers: [
            { text: "Określenie minimalnego czasu realizacji projektu", correct: true },
            { text: "Zmniejszenie kosztów projektu", correct: false },
            { text: "Wyeliminowanie wszystkich opóźnień", correct: false },
            { text: "Zwiększenie elastyczności harmonogramu", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "115. Które z narzędzi zarządzania projektami pozwala na wyświetlanie zadań na osi czasu?",
        answers: [
            { text: "Wykres Gantta", correct: true },
            { text: "Diagram PERT", correct: false },
            { text: "Matryca BCG", correct: false },
            { text: "Analiza SWOT", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "116. Co oznacza TCP/IP?",
        answers: [
            { text: "Transmission Control Protocol/Internet Protocol", correct: true },
            { text: "Transfer Control Process/Internet Provider", correct: false },
            { text: "Technical Communication Protocol/Interface Process", correct: false },
            { text: "Transmission Capacity Protocol/Internet Pathway", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "117. Sztuczna inteligencja odwzorowuje:",
        answers: [
            { text: "Procesy myślowe człowieka", correct: true },
            { text: "Tylko obliczenia matematyczne", correct: false },
            { text: "Procesy mechaniczne maszyn", correct: false },
            { text: "Tylko przetwarzanie danych tekstowych", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "118. Co jest podstawowym mechanizmem w systemach sztucznej inteligencji?",
        answers: [
            { text: "Uczenie maszynowe", correct: true },
            { text: "Stałe algorytmy", correct: false },
            { text: "Przetwarzanie równoległe", correct: false },
            { text: "Szyfrowanie danych", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "119. Zaliczanie obiektów do klas to:",
        answers: [
            { text: "Klasyfikacja", correct: true },
            { text: "Regresja", correct: false },
            { text: "Klasteryzacja", correct: false },
            { text: "Optymalizacja", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "120. Hierarchizacja kategorii w modelu danych pozwala na:",
        answers: [
            { text: "Uporządkowanie danych według poziomów ważności", correct: true },
            { text: "Zwiększenie szybkości obliczeń", correct: false },
            { text: "Zmniejszenie liczby rekordów", correct: false },
            { text: "Automatyczne usuwanie duplikatów", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "121. Jak nazywa się język pozwalający na zapis obiektów i właściwości interfejsu WPF?",
        answers: [
            { text: "XAML", correct: true },
            { text: "XML", correct: false },
            { text: "C#", correct: false },
            { text: "HTML", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "122. Interfejs pozwalający na responsywne wyświetlanie zawartości na dowolnym urządzeniu z systemem Windows określany jest mianem:",
        answers: [
            { text: "UWP", correct: true },
            { text: "WPF", correct: false },
            { text: "ASP.NET", correct: false },
            { text: "WinForms", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "123. W przypadku dużej liczby operacji wstawień do środka kolekcji najlepszym typem kolekcji będzie:",
        answers: [
            { text: "LinkedList", correct: true },
            { text: "ArrayList", correct: false },
            { text: "Stack", correct: false },
            { text: "Queue", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "124. Kolekcja pozwalająca na wycofywanie ostatnich operacji to:",
        answers: [
            { text: "Stack", correct: true },
            { text: "Queue", correct: false },
            { text: "Array", correct: false },
            { text: "HashSet", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "125. Na system bazy danych składa się:",
        answers: [
            { text: "DBMS, dane i aplikacje", correct: true },
            { text: "Tylko dane i tabele", correct: false },
            { text: "Tylko DBMS i aplikacje", correct: false },
            { text: "Tylko dane i zapytania", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "126. Odkrywanie wiedzy w danych, wcześniej nieznanych zależności, schematów i trendów na podstawie dużej liczby danych dotyczy pojęcia:",
        answers: [
            { text: "Data Mining", correct: true },
            { text: "Data Warehousing", correct: false },
            { text: "Big Data", correct: false },
            { text: "Machine Learning", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "127. Kostkę OLAP można scharakteryzować jako:",
        answers: [
            { text: "Wielowymiarową strukturę danych", correct: true },
            { text: "Płaską bazę relacyjną", correct: false },
            { text: "Jednowymiarowy zbiór rekordów", correct: false },
            { text: "Hierarchiczny model danych", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "128. Niech będzie dany algorytm postaci: Algorytm B = { if(g) A1 else A2 }. Wiadomo, że warunek g wymaga wykonania t(g) operacji dominujących. Algorytmy A1 i A2 wymagają wykonania odpowiednio t(A1) i t(A2) operacji dominujących. Ile operacji dominujących wykonane zostanie w algorytmie B?",
        answers: [
            { text: "t(g) + max(t(A1), t(A2))", correct: true },
            { text: "t(g) + t(A1) + t(A2)", correct: false },
            { text: "t(g) * (t(A1) + t(A2))", correct: false },
            { text: "max(t(g), t(A1), t(A2))", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "129. Drzewo rozpinające graf (ang. Spanning Tree) to drzewo, które zawiera wszystkie wierzchołki grafu G, natomiast zbiór krawędzi drzewa jest podzbiorem zbioru krawędzi grafu. Do jego wyznaczenia można wykorzystać?",
        answers: [
            { text: "Algorytm Kruskala", correct: true },
            { text: "Algorytm QuickSort", correct: false },
            { text: "Algorytm Dijkstry", correct: false },
            { text: "Metodę bąbelkową", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "130. Jakie funkcje pełni serwer Apache?",
        answers: [
            { text: "Obsługa żądań HTTP i dostarczanie stron WWW", correct: true },
            { text: "Zarządzanie bazami danych", correct: false },
            { text: "Kompilacja kodu źródłowego", correct: false },
            { text: "Szyfrowanie danych", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "131. Dokumenty udostępniane przez serwery HTTP są identyfikowane za pomocą adresów URL (Uniform Resource Locator). Adres URL jest łańcuchem znakowym, który zawiera:",
        answers: [
            { text: "Protokół, nazwę hosta i ścieżkę zasobu", correct: true },
            { text: "Tylko nazwę pliku", correct: false },
            { text: "Tylko adres IP serwera", correct: false },
            { text: "Tylko protokół i port", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "132. W modelu MVC aplikacji internetowej warstwę danych zapisujemy w klasach:",
        answers: [
            { text: "Modelu", correct: true },
            { text: "Widoku", correct: false },
            { text: "Kontrolera", correct: false },
            { text: "Prezentacji", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "133. W nowym modelu obiektowym PHP (+5.0) konstruktor klasy Klasa zapisujemy jako:",
        answers: [
            { text: "__construct()", correct: true },
            { text: "Klasa()", correct: false },
            { text: "constructor()", correct: false },
            { text: "new Klasa()", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "134. Co to jest programowanie imperatywne?",
        answers: [
            { text: "Określanie sekwencji instrukcji do wykonania", correct: true },
            { text: "Definiowanie reguł logicznych bez sekwencji", correct: false },
            { text: "Opisywanie funkcji matematycznych", correct: false },
            { text: "Tworzenie struktur danych", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "135. Przykładem języka programowania logicznego jest:",
        answers: [
            { text: "Prolog", correct: true },
            { text: "C++", correct: false },
            { text: "Java", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "136. Co w języku programowania C oznacza modyfikator extern przed nazwą stałej globalnej?",
        answers: [
            { text: "Deklaruje, że stała jest zdefiniowana w innym pliku", correct: true },
            { text: "Ogranicza widoczność stałej do bieżącego pliku", correct: false },
            { text: "Tworzy stałą o wartości domyślnej", correct: false },
            { text: "Definiuje stałą jako zmienną lokalną", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "137. Zakładając, że liczba całkowita 15 jest zapisana w systemie U2 na 1 bajcie, jaką liczbę otrzymamy w wyniku operacji negacji bitowej tej liczby?",
        answers: [
            { text: "-16", correct: true },
            { text: "15", correct: false },
            { text: "0", correct: false },
            { text: " -15", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "138. Jaka jest średnia złożoność algorytmu quicksort?",
        answers: [
            { text: "O(n log n)", correct: true },
            { text: "O(n²)", correct: false },
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "139. Ze względu na podejście do obsługi typów zmiennych Python jest językiem o typowaniu (typing):",
        answers: [
            { text: "Dynamicznym", correct: true },
            { text: "Statycznym", correct: false },
            { text: "Mieszanym", correct: false },
            { text: "Ręcznym", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "140. Blok kodu w języku Python oznaczony jest za pomocą:",
        answers: [
            { text: "Wcięć", correct: true },
            { text: "Nawiasów klamrowych", correct: false },
            { text: "Średników", correct: false },
            { text: "Słowa kluczowego end", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "141. Ekspresyjność rachunku zdań jest:",
        answers: [
            { text: "Ograniczona do wyrażeń logicznych bez kwantyfikatorów", correct: true },
            { text: "Pełna dla wszystkich funkcji matematycznych", correct: false },
            { text: "Zależna od zmiennych ciągłych", correct: false },
            { text: "Nieskończona dla wszystkich zdań", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "142. Relacja w relacyjnym modelu danych jest:",
        answers: [
            { text: "Zbiorem krotek o tej samej strukturze", correct: true },
            { text: "Zbiorem niepowiązanych rekordów", correct: false },
            { text: "Hierarchią obiektów", correct: false },
            { text: "Tablicą o zmiennej liczbie kolumn", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "143. Operacja selekcji w języku SQL pozwala na:",
        answers: [
            { text: "Wybranie wierszy spełniających określony warunek", correct: true },
            { text: "Łączenie tabel", correct: false },
            { text: "Grupowanie danych", correct: false },
            { text: "Sortowanie wyników", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "144. Jak należy zamknąć bieżący obiekt okna w kodzie aplikacji Windows Presentation Foundation lub Windows Forms:",
        answers: [
            { text: "Wywołaniem metody Close()", correct: true },
            { text: "Ustawieniem właściwości Visible na false", correct: false },
            { text: "Wywołaniem metody Dispose()", correct: false },
            { text: "Ustawieniem właściwości Enabled na false", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "145. W celu sprawdzenia liczby elementów kolekcji np. List czy Stack należy odwołać się do:",
        answers: [
            { text: "Właściwości Count", correct: true },
            { text: "Metody Size()", correct: false },
            { text: "Właściwości Length", correct: false },
            { text: "Metody GetCount()", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "146. Czego przykładem jest poniższy kod: class A { private string x; public string GetX { return x; } }",
        answers: [
            { text: "Właściwości z getterem", correct: true },
            { text: "Metody statycznej", correct: false },
            { text: "Konstruktora klasy", correct: false },
            { text: "Interfejsu", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "147. Kod pośredni C# (CIL) powstaje w wyniku:",
        answers: [
            { text: "Kompilacji kodu źródłowego C#", correct: true },
            { text: "Interpretacji kodu w runtime", correct: false },
            { text: "Tłumaczenia na język maszynowy", correct: false },
            { text: "Optymalizacji kodu w edytorze", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "148. Poniższy diagram UML jest przykładem:",
        hasImage: true,
        imageUrl: "148.jpg",
        answers: [
            { text: "Kompozycji", correct: false },
            { text: "Agregacji", correct: true },
            { text: "Dziedziczenia", correct: false },
            { text: "Asocjacji", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "149. Przy spełnionych założeniach twierdzenia Gaussa-Markowa estymatory parametrów jednorównaniowego liniowego modelu ekonometrycznego są:",
        answers: [
            { text: "Nieobciążone, skuteczne i zgodne", correct: true },
            { text: "Obciążone, ale skuteczne", correct: false },
            { text: "Nieobciążone, ale nieskuteczne", correct: false },
            { text: "Zgodne, ale obciążone", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "150. Prognozowanie ex-ante polega na wnioskowaniu o przyszłych wartościach zmiennej endogenicznej na podstawie:",
        answers: [
            { text: "Dotychczasowych danych i modelu", correct: true },
            { text: "Tylko bieżących obserwacji", correct: false },
            { text: "Losowych założeń", correct: false },
            { text: "Stałych parametrów", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "151. Występowanie zjawiska autokorelacji składnika losowego jest spodziewane dla modelu ekonometrycznego opisującego:",
        answers: [
            { text: "Dane szeregów czasowych", correct: true },
            { text: "Dane przekrojowe", correct: false },
            { text: "Dane losowe", correct: false },
            { text: "Dane nominalne", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "152. Do wyboru jednego spośród kilku modeli ekonometrycznych nie służy/ą:",
        answers: [
            { text: "Kryterium istotności statystycznej", correct: false },
            { text: "Kryterium informacyjne Akaike (AIC)", correct: false },
            { text: "Kryterium Bayesa (BIC)", correct: false },
            { text: "Test normalności reszt", correct: true }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "153. Dany jest model (przy standardowych oznaczeniach): yt = α0 + α1 · xt + st. Jest to przykład modelu:",
        answers: [
            { text: "Regresji liniowej", correct: true },
            { text: "Regresji nieliniowej", correct: false },
            { text: "Autoregresji", correct: false },
            { text: "Modelu ARIMA", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "154. Dany jest model (przy standardowych oznaczeniach): yt = yt−1 + εt. Jest to model:",
        answers: [
            { text: "Błędnego spaceru", correct: true },
            { text: "Regresji liniowej", correct: false },
            { text: "Modelu MA(1)", correct: false },
            { text: "Modelu AR(2)", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "155. Proces stochastyczny Xt jest stacjonarny w szerszym sensie według definicji, jeżeli:",
        answers: [
            { text: "Średnia i wariancja są stałe, a kowariancja zależy tylko od przesunięcia", correct: true },
            { text: "Średnia rośnie liniowo z czasem", correct: false },
            { text: "Wariancja jest zmienna w czasie", correct: false },
            { text: "Kowariancja jest stała", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "156. Do estymacji parametrów modelu ARMA(0,1) posłużyć się można:",
        answers: [
            { text: "Metodą najmniejszych kwadratów", correct: true },
            { text: "Metodą gradientową", correct: false },
            { text: "Metodą Monte Carlo", correct: false },
            { text: "Metodą prób i błędów", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "157. Jakie warunki muszą być spełnione, aby można było mówić, że o zadaniu programowania mieszanego liniowego (PML):",
        answers: [
            { text: "Funkcja celu i ograniczenia są liniowe, a zmienne mogą być ciągłe lub dyskretne", correct: true },
            { text: "Wszystkie zmienne są ciągłe", correct: false },
            { text: "Funkcja celu jest nieliniowa", correct: false },
            { text: "Ograniczenia są nieliniowe", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "158. Co przedstawia graf w metodzie ścieżki krytycznej?",
        answers: [
            { text: "Zależności między zadaniami i ich czas trwania", correct: true },
            { text: "Koszty poszczególnych zadań", correct: false },
            { text: "Hierarchię zespołu projektowego", correct: false },
            { text: "Rozkład zasobów w czasie", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "159. Które sformułowanie przedstawia zasadę optymalności Bellmana?",
        answers: [
            { text: "Optymalna decyzja w każdym kroku prowadzi do optymalnego rozwiązania globalnego", correct: true },
            { text: "Każda decyzja jest niezależna od poprzednich", correct: false },
            { text: "Koszty minimalizują się liniowo", correct: false },
            { text: "Rozwiązanie zależy od losowych zmiennych", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "160. Sformułowanie modelu programowania liniowego nie wymaga w zapisie matematycznym:",
        answers: [
            { text: "Określenia prawdopodobieństw zdarzeń", correct: true },
            { text: "Funkcji celu", correct: false },
            { text: "Ograniczeń liniowych", correct: false },
            { text: "Zmiennych decyzyjnych", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "161. Co jest optymalizowane, jakie jest kryterium optymalizacji w metodzie ścieżki krytycznej?",
        answers: [
            { text: "Czas realizacji projektu", correct: true },
            { text: "Koszty projektu", correct: false },
            { text: "Liczba zasobów", correct: false },
            { text: "Jakość wyników", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "162. Co przedstawia graf stosowany w metodzie programowania dynamicznego?",
        answers: [
            { text: "Etapy decyzyjne i ich możliwe stany", correct: true },
            { text: "Zależności czasowe między zadaniami", correct: false },
            { text: "Strukturę organizacyjną projektu", correct: false },
            { text: "Rozkład kosztów w czasie", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "163. Zadanie: „Jeśli będę uważał na wykładzie i przeczytam podręcznik to na pewno zdam egzamin” można zapisać w języku logiki przyjmując: p - będę uważał na wykładzie; q – przeczytam podręcznik; s - zdam egzamin w postaci:",
        answers: [
            { text: "(p ∧ q) → s", correct: true },
            { text: "p ∨ q → s", correct: false },
            { text: "p → (q ∧ s)", correct: false },
            { text: "(p → q) ∧ s", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "164. System logiczny to układ złożony z języka, operacji konsekwencji oraz semantyki języka. Natomiast język systemu składa się z:",
        answers: [
            { text: "Symboli, reguł składni i semantyki", correct: true },
            { text: "Tylko symboli i reguł", correct: false },
            { text: "Tylko operacji i semantyki", correct: false },
            { text: "Tylko zmiennych i stałych", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "165. Formułą w rachunku predykatów jest:",
        answers: [
            { text: "Wyrażenie z kwantyfikatorami i predykatami", correct: true },
            { text: "Wyrażenie z samymi zmiennymi", correct: false },
            { text: "Stałe logiczne bez zmiennych", correct: false },
            { text: "Równanie algebraiczne", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "166. We wnioskowaniu przesłankę oczywistą, ale pominiętą nazywa się przesłanką:",
        answers: [
            { text: "Enthymematyczną", correct: true },
            { text: "Eksplicytną", correct: false },
            { text: "Domniemaną", correct: false },
            { text: "Warunkową", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "167. Poprawną definicją algorytmu jest:",
        answers: [
            { text: "Skończony zbiór instrukcji rozwiązujący problem w skończonym czasie", correct: true },
            { text: "Zbiór losowych operacji", correct: false },
            { text: "Nieskończona sekwencja działań", correct: false },
            { text: "Lista zmiennych i ich wartości", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "168. Podstawowe cechy algorytmu to:",
        answers: [
            { text: "Skuteczność, skończoność, jednoznaczność", correct: true },
            { text: "Losowość, nieskończoność, zmienność", correct: false },
            { text: "Szybkość, prostota, elastyczność", correct: false },
            { text: "Złożoność, nieokreśloność, otwartość", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "169. Algorytm asymetryczny szyfrowania to algorytm z dwoma lub więcej kluczami szyfrowania: publicznym i prywatnym. Wykorzystuje on przede wszystkim:",
        answers: [
            { text: "Matematykę modularną", correct: true },
            { text: "Liniowe równania", correct: false },
            { text: "Funkcje losowe", correct: false },
            { text: "Operacje bitowe", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "170. Algorytm wyszukiwania binarnego jest stosowany w:",
        answers: [
            { text: "Posortowanych zbiorach danych", correct: true },
            { text: "Nieposortowanych zbiorach danych", correct: false },
            { text: "Grafach nieskierowanych", correct: false },
            { text: "Macierzach rzadkich", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "171. W algorytmie wypisującym wierzchołki grafu w porządku DFS (ang. Depth-First-Search) należy użyć struktury danych:",
        answers: [
            { text: "Stosu", correct: true },
            { text: "Kolejki", correct: false },
            { text: "Tablicy", correct: false },
            { text: "Listy dwukierunkowej", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "172. W algorytmie wypisującym wierzchołki grafu w porządku BFS (ang. Breadth-First-Search) należy użyć struktury danych:",
        answers: [
            { text: "Kolejki", correct: true },
            { text: "Stosu", correct: false },
            { text: "Tablicy", correct: false },
            { text: "Drzewa binarnego", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "173. Podstawową różnicą pomiędzy kodem kompilowanym a skryptowym jest:",
        answers: [
            { text: "Kompilowany jest tłumaczony na kod maszynowy przed wykonaniem, skryptowy interpretowany w trakcie", correct: true },
            { text: "Kompilowany jest wolniejszy od skryptowego", correct: false },
            { text: "Skryptowy wymaga kompilatora", correct: false },
            { text: "Kompilowany nie wymaga interpretera", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "174. „Przenaszalność kodu” oznacza, że:",
        answers: [
            { text: "Kod może być uruchomiony na różnych platformach bez zmian", correct: true },
            { text: "Kod jest łatwy do modyfikacji", correct: false },
            { text: "Kod jest szybki w wykonaniu", correct: false },
            { text: "Kod jest odporny na błędy", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "175. Czy program napisany w języku skryptowym po jego uruchomieniu może być modyfikowany?",
        answers: [
            { text: "Tak, ponieważ jest interpretowany w czasie rzeczywistym", correct: true },
            { text: "Nie, ponieważ jest skompilowany", correct: false },
            { text: "Tak, ale tylko w trakcie kompilacji", correct: false },
            { text: "Nie, ponieważ jest statyczny", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "176. „Interpreter” to inaczej:",
        answers: [
            { text: "Program wykonujący kod linia po linii", correct: true },
            { text: "Program tłumaczący kod na język maszynowy", correct: false },
            { text: "Edytor kodu źródłowego", correct: false },
            { text: "Kompilator kodu pośredniego", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "177. Jakie składniki oprogramowania są niezbędne do rozwijania programu w języku Python?",
        answers: [
            { text: "Interpreter Pythona i edytor kodu", correct: true },
            { text: "Kompilator i debugger", correct: false },
            { text: "Tylko interpreter", correct: false },
            { text: "Tylko edytor kodu", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "178. IDE to inaczej:",
        answers: [
            { text: "Zintegrowane środowisko programistyczne", correct: true },
            { text: "Interfejs danych zewnętrznych", correct: false },
            { text: "Interpreter dynamiczny", correct: false },
            { text: "Indeksowany edytor", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "179. Jakie elementy muszą być zawarte w pakiecie dystrybucyjnym programu napisanego w języku Python?",
        answers: [
            { text: "Kod źródłowy, plik setup.py i dokumentacja", correct: true },
            { text: "Tylko kod źródłowy", correct: false },
            { text: "Tylko skompilowany plik", correct: false },
            { text: "Tylko dokumentacja", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "180. Czy i pod jakimi warunkami w programie napisanym w języku Python można korzystać z bibliotek napisanych w języku C?",
        answers: [
            { text: "Tak, przy użyciu wiązań takich jak ctypes lub CFFI", correct: true },
            { text: "Nie, Python nie wspiera bibliotek C", correct: false },
            { text: "Tak, ale tylko w trybie kompilowanym", correct: false },
            { text: "Tak, bez żadnych dodatkowych narzędzi", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "181. W której metodyce zarządzania projektami zostały określone trzy poziomy planowania?",
        answers: [
            { text: "PMI/PMBoK", correct: true },
            { text: "PRINCE2", correct: false },
            { text: "Scrum", correct: false },
            { text: "Agile", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "182. Sterowanie etapem w metodyce PRINCE2 polega na:",
        answers: [
            { text: "Monitorowaniu postępu i zarządzaniu odchyleniami", correct: true },
            { text: "Planowaniu całego projektu", correct: false },
            { text: "Określaniu celów strategicznych", correct: false },
            { text: "Tworzeniu zespołów projektowych", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "183. Six Sigma i schematy przepływów, to narzędzia zalecane w PMI/PMBoK do:",
        answers: [
            { text: "Zarządzania jakością", correct: true },
            { text: "Planowania harmonogramu", correct: false },
            { text: "Zarządzania ryzykiem", correct: false },
            { text: "Określania budżetu", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "184. Warstwę prezentacji klienta aplikacji internetowej określamy w języku:",
        answers: [
            { text: "HTML/CSS/JavaScript", correct: true },
            { text: "SQL", correct: false },
            { text: "PHP", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "185. Do pobierania zawartości strony WWW ze źródeł, które mogą powodować opóźnienia w ich wyświetlaniu należy stosować:",
        answers: [
            { text: "Asynchroniczne zapytania AJAX", correct: true },
            { text: "Synchroniczne zapytania HTTP", correct: false },
            { text: "Stałe odświeżanie strony", correct: false },
            { text: "Lokalne przechowywanie danych", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "186. Za dostosowanie zawartości strony WWW do szerokości urządzenia, na którym jest wyświetlana odpowiada:",
        answers: [
            { text: "Responsywny design (CSS Media Queries)", correct: true },
            { text: "Stałe ustawienia HTML", correct: false },
            { text: "Skrypty JavaScript", correct: false },
            { text: "Tylko backend aplikacji", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "187. Sprawdzenie poprawności danych (np. adresu e-mail) wpisanego przez użytkownika w formularzu na stronie WWW najłatwiej zrealizować przez:",
        answers: [
            { text: "Walidację po stronie klienta w JavaScript", correct: true },
            { text: "Walidację tylko po stronie serwera", correct: false },
            { text: "Ręczne sprawdzanie danych", correct: false },
            { text: "Użycie bazy danych", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "188. Poprawność systemu logicznego określa związek pomiędzy:",
        answers: [
            { text: "Składnią a semantyką", correct: true },
            { text: "Składnią a zmiennymi", correct: false },
            { text: "Semantyką a danymi", correct: false },
            { text: "Zmiennymi a operatorami", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "189. Poprzednikiem w regule systemu regułowego jest zazwyczaj:",
        answers: [
            { text: "Warunek logiczny", correct: true },
            { text: "Wynik działania", correct: false },
            { text: "Stały parametr", correct: false },
            { text: "Zmienna losowa", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "190. Kluczem w relacji jest:",
        answers: [
            { text: "Zbiór atrybutów jednoznacznie identyfikujący krotkę", correct: true },
            { text: "Dowolny atrybut w tabeli", correct: false },
            { text: "Zbiór wszystkich atrybutów", correct: false },
            { text: "Atrybut o największej wartości", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "191. Druga postać normalna relacji wyklucza:",
        answers: [
            { text: "Zależności funkcyjne niepełne", correct: true },
            { text: "Zależności między kluczami", correct: false },
            { text: "Powtarzające się rekordy", correct: false },
            { text: "Złożone klucze główne", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "192. W kluczu nie może występować:",
        answers: [
            { text: "Wartość NULL", correct: true },
            { text: "Wartość liczbowa", correct: false },
            { text: "Wartość tekstowa", correct: false },
            { text: "Wartość unikalna", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "193. Klucz obcy występuje w relacji pełniącej rolę:",
        answers: [
            { text: "Relacji podrzędnej odnoszącej się do klucza głównego innej relacji", correct: true },
            { text: "Relacji nadrzędnej", correct: false },
            { text: "Relacji niezależnej", correct: false },
            { text: "Relacji tymczasowej", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "194. Funkcjonalność systemów dziedzinowych dotyczy:",
        answers: [
            { text: "Specyficznych potrzeb danej branży", correct: true },
            { text: "Ogólnego zarządzania firmą", correct: false },
            { text: "Tylko analizy danych", correct: false },
            { text: "Tylko komunikacji wewnętrznej", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "195. Funkcjonalność systemów CRM dotyczy:",
        answers: [
            { text: "Zarządzania relacjami z klientami", correct: true },
            { text: "Planowania zasobów przedsiębiorstwa", correct: false },
            { text: "Analizy finansowej", correct: false },
            { text: "Zarządzania produkcją", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "196. Funkcjonalność systemów ERP dotyczy:",
        answers: [
            { text: "Integracji procesów biznesowych w przedsiębiorstwie", correct: true },
            { text: "Tylko zarządzania klientami", correct: false },
            { text: "Tylko analizy danych", correct: false },
            { text: "Tylko obiegu dokumentów", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "197. Podstawowa funkcjonalność systemów obiegu dokumentów dotyczy:",
        answers: [
            { text: "Zarządzania przepływem dokumentów w firmie", correct: true },
            { text: "Tworzenia baz danych", correct: false },
            { text: "Analizy finansowej", correct: false },
            { text: "Zarządzania relacjami z klientami", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "198. Celem nadrzędnym narzędzi Business Intelligence jest:",
        answers: [
            { text: "Wsparcie decyzji biznesowych poprzez analizę danych", correct: true },
            { text: "Automatyzacja produkcji", correct: false },
            { text: "Zarządzanie personelem", correct: false },
            { text: "Tworzenie raportów finansowych", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "199. Związek pomiędzy przypadkami użycia z poniższego diagramu oznacza, że:",
        hasImage: true,
        imageUrl: "199.jpg",
        answers: [
            { text: "Przypadek użycia A zawsze obejmuje zachowanie Przypadku użycia B", correct: true },
            { text: "Przypadek użycia B jest opcjonalnym rozszerzeniem Przypadku użycia A", correct: false },
            { text: "Przypadek użycia B” jest opcjonalnym rozszerzeniem „Przypadku użycia A", correct: false },
            { text: "Przypadek użycia A” i Przypadek użycia B są wzajemnie wykluczające się", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "200. Związek pomiędzy przypadkami użycia z poniższego diagramu oznacza, że:",
        hasImage: true,
        imageUrl: "200.jpg",
        answers: [
            { text: "Przypadek użycia A opcjonalnie rozszerza zachowanie Przypadku użycia B”", correct: true },
            { text: "Przypadek użycia B zawsze obejmuje zachowanie Przypadku użycia A", correct: false },
            { text: "Przypadek użycia A” i Przypadek użycia B są niezależnymi przypadkami użycia", correct: false },
            { text: "Przypadek A i B są równoważne", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "201. Związek widoczny na poniższym diagramie przypadków użycia oznacza, że:",
        hasImage: true,
        imageUrl: "201.jpg",
        answers: [
            { text: "Przypadek użycia B i Przypadek użycia C rozszerzają Przypadek użycia A", correct: false },
            { text: "Przypadek użycia A obejmuje zachowanie „Przypadku użycia B” i Przypadku użycia C", correct: true },
            { text: "Przypadek użycia A jest uogólnieniem Przypadku użycia B” i Przypadku użycia C", correct: false },
            { text: "Przypadek użycia A i Przypadek użycia B są powiązane z Przypadkiem użycia C", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "202. Związek pomiędzy aktorami na poniższym diagramie przypadków użycia oznacza, że:",
        hasImage: true,
        imageUrl: "202.jpg",
        answers: [
            { text: "Aktor X jest specjalizacją aktora Y", correct: false },
            { text: "Aktor Y jest specjalizacją aktora X", correct: true },
            { text: "Aktor X i aktor Y są niezależnymi aktorami", correct: false },
            { text: "Aktor X jest niezależny od aktora Y", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "203. Celem rachunkowości finansowej jest:",
        answers: [
            { text: "Dostarczenie informacji dla zarządzania wewnętrznego", correct: false },
            { text: "Dostarczenie informacji dla interesariuszy zewnętrznych", correct: true },
            { text: "Optymalizacja procesów produkcyjnych", correct: false },
            { text: "Zarządzanie zasobami ludzkimi", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "204. Podstawy prawne rachunkowości finansowej kształtuje:",
        answers: [
            { text: "Kodeks cywilny", correct: false },
            { text: "Ustawa o rachunkowości", correct: true },
            { text: "Kodeks spółek handlowych", correct: false },
            { text: "Prawo podatkowe", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "205. Do zasad rachunkowości zalicza się:",
        answers: [
            { text: "Zasada memoriałowa", correct: true },
            { text: "Zasada kasowa", correct: false },
            { text: "Zasada elastyczności", correct: false },
            { text: "Zasada minimalizacji", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "206. Płynność to zdolność do terminowego regulowania:",
        answers: [
            { text: "Zobowiązań krótkoterminowych", correct: true },
            { text: "Zobowiązań długoterminowych", correct: false },
            { text: "Kapitału własnego", correct: false },
            { text: "Aktywów trwałych", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "207. Podstawowe sprawozdanie finansowe składa się z:",
        answers: [
            { text: "Bilansu, rachunku zysków i strat, rachunku przepływów pieniężnych", correct: true },
            { text: "Bilansu, rachunku zysków i strat, analizy SWOT", correct: false },
            { text: "Bilansu, rachunku przepływów pieniężnych, raportu rocznego", correct: false },
            { text: "Rachunku zysków i strat, rachunku przepływów pieniężnych, analizy finansowej", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "208. Spółka zwiększa kapitał obcy poprzez:",
        answers: [
            { text: "Emisję akcji", correct: false },
            { text: "Zaciągnięcie kredytu", correct: true },
            { text: "Sprzedaż aktywów", correct: false },
            { text: "Wypłatę dywidendy", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "209. Najważniejszym celem NBP jest:",
        answers: [
            { text: "Stabilizacja cen", correct: true },
            { text: "Maksymalizacja zysku", correct: false },
            { text: "Zwiększenie zatrudnienia", correct: false },
            { text: "Wzrost gospodarczy", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "210. Której z wymienionych funkcji nie pełni NBP:",
        answers: [
            { text: "Emitowanie pieniądza", correct: false },
            { text: "Regulacja stóp procentowych", correct: false },
            { text: "Zarządzanie długiem publicznym", correct: false },
            { text: "Prowadzenie polityki fiskalnej", correct: true }
        ]
    },
    {
        category: "Finanse",
        question: "211. Polityka restrykcyjna banku centralnego polega na:",
        answers: [
            { text: "Zwiększeniu podaży pieniądza", correct: false },
            { text: "Obniżeniu stóp procentowych", correct: false },
            { text: "Zmniejszeniu podaży pieniądza", correct: true },
            { text: "Zwiększeniu wydatków rządowych", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "212. Hipoteza Fishera mówi, że wzrostowi inflacji o 1% towarzyszy wzrost nominalnej stopy procentowej:",
        answers: [
            { text: "O 1%", correct: true },
            { text: "O 0,5%", correct: false },
            { text: "O 2%", correct: false },
            { text: "Nie ma bezpośredniego wpływu", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "213. W systemie zmiennego kursu walutowego wzmocnienie kursu danej waluty nazywamy:",
        answers: [
            { text: "Aprecjacja", correct: true },
            { text: "Deprecjacja", correct: false },
            { text: "Revaluacja", correct: false },
            { text: "Devaluacja", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "214. W systemie stałego kursu walutowego osłabienie kursu danej waluty przez rząd nazywamy:",
        answers: [
            { text: "Devaluacja", correct: true },
            { text: "Aprecjacja", correct: false },
            { text: "Revaluacja", correct: false },
            { text: "Deprecjacja", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "215. Przepisy regulujące podejmowanie działalności gospodarczej przez przedsiębiorcę będącego osobą fizyczną znajdują się w:",
        answers: [
            { text: "Kodeksie cywilnym", correct: false },
            { text: "Ustawie o swobodzie działalności gospodarczej", correct: true },
            { text: "Kodeksie spółek handlowych", correct: false },
            { text: "Prawo przedsiębiorców", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "216. Naczelna podstawa prawna wolności działalności gospodarczej zawarta jest w:",
        answers: [
            { text: "Konstytucji RP", correct: true },
            { text: "Kodeksie cywilnym", correct: false },
            { text: "Ustawie o rachunkowości", correct: false },
            { text: "Prawo przedsiębiorców", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "217. Przepisy nakładające obowiązek zapłaty odsetek za opóźnienie świadczenia pieniężnego znajdują się w:",
        answers: [
            { text: "Kodeksie cywilnym", correct: true },
            { text: "Kodeksie karnym", correct: false },
            { text: "Ustawie o rachunkowości", correct: false },
            { text: "Prawo przedsiębiorców", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "218. Jednostka organizacyjna uzyskuje osobowość prawną z chwilą:",
        answers: [
            { text: "Wpisu do rejestru", correct: true },
            { text: "Zawarcia umowy", correct: false },
            { text: "Podjęcia działalności", correct: false },
            { text: "Otrzymania zgody organu", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "219. Powstanie, ustrój i ustanie osób prawnych określa (określają):",
        answers: [
            { text: "Kodeks cywilny", correct: true },
            { text: "Kodeks spółek handlowych", correct: false },
            { text: "Ustawa o rachunkowości", correct: false },
            { text: "Prawo przedsiębiorców", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "220. Zasadnicze przepisy dotyczące zawiązania spółki cywilnej znajdują się w:",
        answers: [
            { text: "Kodeksie cywilnym", correct: true },
            { text: "Kodeksie spółek handlowych", correct: false },
            { text: "Ustawie o swobodzie działalności gospodarczej", correct: false },
            { text: "Prawo przedsiębiorców", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "221. Zasadnicze przepisy dotyczące funkcjonowania spółek handlowych znajdują się w:",
        answers: [
            { text: "Kodeksie spółek handlowych", correct: true },
            { text: "Kodeksie cywilnym", correct: false },
            { text: "Ustawie o rachunkowości", correct: false },
            { text: "Prawo przedsiębiorców", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "222. Umowa spółki jawnej powinna zawierać:",
        answers: [
            { text: "Określenie wkładów wspólników", correct: true },
            { text: "Określenie liczby pracowników", correct: false },
            { text: "Określenie lokalizacji siedziby", correct: false },
            { text: "Określenie strategii marketingowej", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "223. Spółka z ograniczoną odpowiedzialnością może być utworzona przez:",
        answers: [
            { text: "Jednego lub więcej wspólników", correct: true },
            { text: "Tylko osoby fizyczne", correct: false },
            { text: "Tylko osoby prawne", correct: false },
            { text: "Co najmniej dwóch wspólników", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "224. Do powstania spółki akcyjnej wymaga się:",
        answers: [
            { text: "Podpisania statutu i wniesienia kapitału zakładowego", correct: true },
            { text: "Tylko podpisania statutu", correct: false },
            { text: "Tylko wniesienia kapitału zakładowego", correct: false },
            { text: "Zgody organu administracji", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "225. Jaka jest forma umowy o przeniesieniu patentu?",
        answers: [
            { text: "Pisemna", correct: true },
            { text: "Ustna", correct: false },
            { text: "Notarialna", correct: false },
            { text: "Elektroniczna", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "226. Jakie są kryteria zdolności patentowej?",
        answers: [
            { text: "Nowość, poziom wynalazczy, zastosowanie przemysłowe", correct: true },
            { text: "Innowacyjność, użyteczność, estetyka", correct: false },
            { text: "Oryginalność, funkcjonalność, trwałość", correct: false },
            { text: "Ekskluzywność, rentowność, skalowalność", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "227. Co jest przedmiotem ochrony prawnoautorskiej?",
        answers: [
            { text: "Utwory literackie, artystyczne, naukowe", correct: true },
            { text: "Wynalazki techniczne", correct: false },
            { text: "Znaki towarowe", correct: false },
            { text: "Wzory przemysłowe", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "228. Jakie są zasady rozporządzania i korzystania z opracowania przez jego twórcę?",
        answers: [
            { text: "Twórca ma prawo do korzystania i rozporządzania opracowaniem", correct: true },
            { text: "Twórca traci prawa po opublikowaniu", correct: false },
            { text: "Opracowanie przechodzi na własność wydawcy", correct: false },
            { text: "Twórca musi uzyskać zgodę na każde użycie", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "229. Co to jest utwór rozpowszechniony?",
        answers: [
            { text: "Utwór udostępniony publicznie za zgodą twórcy", correct: true },
            { text: "Utwór niepublikowany", correct: false },
            { text: "Utwór chroniony patentem", correct: false },
            { text: "Utwór w domenie publicznej", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "230. Metodą ochrony programów komputerowych jest:",
        answers: [
            { text: "Prawo autorskie", correct: true },
            { text: "Patent", correct: false },
            { text: "Znak towarowy", correct: false },
            { text: "Wzór przemysłowy", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "231. Jakie są przesłanki dozwolonego użytku prywatnego?",
        answers: [
            { text: "Korzystanie w celach osobistych, bez rozpowszechniania", correct: true },
            { text: "Korzystanie w celach komercyjnych", correct: false },
            { text: "Korzystanie w celach edukacyjnych", correct: false },
            { text: "Korzystanie w celach badawczych", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "232. Kiedy przysługuje nam prawo cytatu?",
        answers: [
            { text: "W celach naukowych, krytycznych, polemicznych", correct: true },
            { text: "W celach komercyjnych", correct: false },
            { text: "W celach rozrywkowych", correct: false },
            { text: "W celach reklamowych", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "233. Badanie coroczne sprawozdań finansowych jest obligatoryjne dla:",
        answers: [
            { text: "Spółek akcyjnych", correct: true },
            { text: "Spółek cywilnych", correct: false },
            { text: "Przedsiębiorców jednoosobowych", correct: false },
            { text: "Stowarzyszeń", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "234. Do metod inwentaryzacji należą:",
        answers: [
            { text: "Spis z natury, weryfikacja sald", correct: true },
            { text: "Analiza dokumentów, kontrola wewnętrzna", correct: false },
            { text: "Audyt zewnętrzny, rewizja finansowa", correct: false },
            { text: "Ocena ryzyka, planowanie strategiczne", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "235. Środek trwały przyjmuje się do ewidencji według:",
        answers: [
            { text: "Wartości początkowej", correct: true },
            { text: "Wartości rynkowej", correct: false },
            { text: "Wartości księgowej", correct: false },
            { text: "Wartości rezydualnej", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "236. Do jakiego układu ewidencyjnego kosztów należy konto „Podatki i opłaty”:",
        answers: [
            { text: "Układ funkcjonalny", correct: false },
            { text: "Układ rodzajowy", correct: true },
            { text: "Układ kalkulacyjny", correct: false },
            { text: "Układ procesowy", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "237. Koszty własnej kotłowni w firmie ewidencjonowane są w układzie funkcjonalnym jako:",
        answers: [
            { text: "Koszty wydziałowe", correct: true },
            { text: "Koszty ogólne", correct: false },
            { text: "Koszty sprzedaży", correct: false },
            { text: "Koszty administracyjne", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "238. Rachunek przepływów pieniężnych może zostać przygotowany metodą:",
        answers: [
            { text: "Bezpośrednią lub pośrednią", correct: true },
            { text: "Tylko bezpośrednią", correct: false },
            { text: "Tylko pośrednią", correct: false },
            { text: "Analityczną", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "239. W którym wariancie ustalania wyniku finansowego dokonuje się korekty przychodów ze sprzedaży +/- zmiana stanu produktów?",
        answers: [
            { text: "Wariancie kalkulacyjnym", correct: true },
            { text: "Wariancie porównawczym", correct: false },
            { text: "Wariancie memoriałowym", correct: false },
            { text: "Wariancie kasowym", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "240. Miarą ryzyka systematycznego jest współczynnik beta (β), który określa siłę reakcji stopy zwrotu spółki na zmianę stopy zwrotu indeksu giełdowego. Jeżeli wartość współczynnika jest w przedziale 0<β<1, to:",
        answers: [
            { text: "Akcje spółki są mniej ryzykowne niż rynek", correct: true },
            { text: "Akcje spółki są bardziej ryzykowne niż rynek", correct: false },
            { text: "Akcje spółki nie są skorelowane z rynkiem", correct: false },
            { text: "Akcje spółki mają stałą stopę zwrotu", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "241. Co jest korektą na wyniku finansowym w metodzie pośredniej rachunku przepływu pieniężnego?",
        answers: [
            { text: "Amortyzacja", correct: true },
            { text: "Przychody ze sprzedaży", correct: false },
            { text: "Koszty operacyjne", correct: false },
            { text: "Podatek dochodowy", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "242. W modelu zdyskontowanych przepływów koszt kapitału własnego szacuje się:",
        answers: [
            { text: "Za pomocą modelu CAPM", correct: true },
            { text: "Za pomocą stopy wolnej od ryzyka", correct: false },
            { text: "Za pomocą stopy inflacji", correct: false },
            { text: "Za pomocą stopy dywidendy", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "243. Złożoność obliczeniową wyznacza się na podstawie liczby operacji dominujących w danym algorytmie. Taką operacją dominującą nie będzie:",
        answers: [
            { text: "Dodawanie stałej", correct: true },
            { text: "Pętla for", correct: false },
            { text: "Rekurencja", correct: false },
            { text: "Sortowanie", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "244. Złożoność wyznacza się zazwyczaj z dokładnością do rzędu wielkości przy zastosowaniu notacji asymptotycznej. W notacji tej definiuje się, że funkcja f : N → R jest rzędu Θ(g), jeśli istnieją stałe c1 > 0 i c2 > 0 oraz liczba m ∈ N takie, że:",
        answers: [
            { text: "c1 * g(n) ≤ f(n) ≤ c2 * g(n) dla n ≥ m", correct: true },
            { text: "f(n) = g(n) dla n ≥ m", correct: false },
            { text: "f(n) < g(n) dla n ≥ m", correct: false },
            { text: "f(n) > g(n) dla n ≥ m", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "245. Dana jest posortowana tablica T zawierająca n różnych elementów. Jaka jest złożoność algorytmu wyszukiwania binarnego elementu x:",
        answers: [
            { text: "O(log n)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(n log n)", correct: false },
            { text: "O(1)", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "246. Formuła φ jest niezmiennikiem instrukcji warunkowej w strukturze, jeżeli:",
        answers: [
            { text: "Jest prawdziwa przed i po wykonaniu instrukcji", correct: true },
            { text: "Jest fałszywa przed wykonaniem instrukcji", correct: false },
            { text: "Zmienia się w zależności od warunku", correct: false },
            { text: "Jest niezależna od struktury", correct: false }
        ]
    },
    {
        category: "Struktury Danych i Algorytmy",
        question: "247. Algorytm jest poprawny częściowo, jeśli:",
        answers: [
            { text: "Dla poprawnych danych wejściowych daje poprawny wynik", correct: true },
            { text: "Zawsze kończy się w skończonym czasie", correct: false },
            { text: "Daje poprawny wynik dla wszystkich danych", correct: false },
            { text: "Nie ma błędów składniowych", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "248. Która warstwa w architekturze MVC odpowiada za przekazanie danych do prezentacji?",
        answers: [
            { text: "Kontroler", correct: true },
            { text: "Model", correct: false },
            { text: "Widok", correct: false },
            { text: "Baza danych", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "249. Przykładem tzw. tłustego klienta internetowego, którego nie należy stosować we współczesnych rozwiązaniach jest:",
        answers: [
            { text: "Aplikacja desktopowa", correct: true },
            { text: "Aplikacja webowa", correct: false },
            { text: "Aplikacja mobilna", correct: false },
            { text: "Aplikacja w chmurze", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "250. Jaki mechanizm odpowiada za mapowanie adresów URL na funkcje kontrolera?",
        answers: [
            { text: "Routing", correct: true },
            { text: "Autoryzacja", correct: false },
            { text: "Walidacja", correct: false },
            { text: "Serializacja", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "251. Kolekcje generyczne w obiektowych językach programowania to:",
        answers: [
            { text: "Zbiory danych o określonym typie", correct: true },
            { text: "Zbiory danych bez określonego typu", correct: false },
            { text: "Tablice o stałym rozmiarze", correct: false },
            { text: "Listy o nieograniczonej długości", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "252. Kolekcja w językach C#/Java pozwalająca na obsługę żądań napływających kolejno do systemu to:",
        answers: [
            { text: "Queue", correct: true },
            { text: "Stack", correct: false },
            { text: "List", correct: false },
            { text: "Array", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "253. W jaki sposób można zapisać realizację kilku odpowiedzialności przez klasę w programowaniu obiektowym?",
        answers: [
            { text: "Przez implementację interfejsów", correct: true },
            { text: "Przez dziedziczenie wielokrotne", correct: false },
            { text: "Przez polimorfizm", correct: false },
            { text: "Przez enkapsulację", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "254. Wykonanie różnego kodu dla tej samej nazwy metody w zależności od rodzaju obiektu w programowaniu obiektowym to:",
        answers: [
            { text: "Polimorfizm", correct: true },
            { text: "Dziedziczenie", correct: false },
            { text: "Abstrakcja", correct: false },
            { text: "Enkapsulacja", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "255. Zadaniem maszyny wirtualnej w kodzie zarządzanym jest:",
        answers: [
            { text: "Wykonywanie kodu pośredniego", correct: true },
            { text: "Kompilacja kodu źródłowego", correct: false },
            { text: "Optymalizacja algorytmów", correct: false },
            { text: "Zarządzanie pamięcią", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "256. Przekroczenie indeksu tablicy w języku C#/Java skutkuje:",
        answers: [
            { text: "Wyjątkiem IndexOutOfRangeException", correct: true },
            { text: "Błędem kompilacji", correct: false },
            { text: "Zwracaniem wartości null", correct: false },
            { text: "Pominięciem operacji", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "257. Autentyczność danych jest zachowana, gdy:",
        answers: [
            { text: "Dane nie zostały zmienione bez autoryzacji", correct: true },
            { text: "Dane są dostępne dla wszystkich", correct: false },
            { text: "Dane są zaszyfrowane", correct: false },
            { text: "Dane są kopiowane", correct: false }
        ]
    },
    {
        category: "Sieci Komputerowe",
        question: "258. Poufność danych jest zachowana, gdy:",
        answers: [
            { text: "Dane są dostępne tylko dla upoważnionych osób", correct: true },
            { text: "Dane są publicznie dostępne", correct: false },
            { text: "Dane są zaszyfrowane", correct: false },
            { text: "Dane są replikowane", correct: false }
        ]
    },
    {
        category: "Sieci Komputerowe",
        question: "259. Dostępność danych jest zapewniona, gdy:",
        answers: [
            { text: "Dane są dostępne w razie potrzeby", correct: true },
            { text: "Dane są zaszyfrowane", correct: false },
            { text: "Dane są archiwizowane", correct: false },
            { text: "Dane są chronione hasłem", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "260. Heteroskedastyczność składnika losowego jednorównaniowego liniowego modelu ekonometrycznego dotyczy sytuacji, w której:",
        answers: [
            { text: "Wariancja składnika losowego jest zmienna", correct: true },
            { text: "Wariancja składnika losowego jest stała", correct: false },
            { text: "Składnik losowy jest skorelowany", correct: false },
            { text: "Składnik losowy jest niezależny", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "261. Analizę istotności współczynnika determinacji w jednorównaniowym liniowym modelu ekonometrycznym dokonać można z użyciem:",
        answers: [
            { text: "Testu F", correct: true },
            { text: "Testu t", correct: false },
            { text: "Testu chi-kwadrat", correct: false },
            { text: "Testu normalności", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "262. Według założeń Klasycznej Metody Najmniejszych Kwadratów zmiennymi losowymi w jednorównaniowym liniowym modelu ekonometrycznym są:",
        answers: [
            { text: "Składniki losowe", correct: true },
            { text: "Zmienne objaśniające", correct: false },
            { text: "Parametry modelu", correct: false },
            { text: "Zmienne objaśniane", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "263. Estymując parametry wielorównaniowego modelu ekonometrycznego można posłużyć się Klasyczną Metodą Najmniejszych Kwadratów w sytuacji, gdy jest to model:",
        answers: [
            { text: "Rekurencyjny", correct: true },
            { text: "Nierekurencyjny", correct: false },
            { text: "Nieliniowy", correct: false },
            { text: "Dynamiczny", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "264. W modelu ekonometrycznym grupa zmiennych egzogenicznych opisuje zbiorczo interesujące badacza zjawisko. Aby zbadać łączną istotność wpływu wybranej grupy zmiennych na zmienną endogeniczną, należy posłużyć się:",
        answers: [
            { text: "Testem F", correct: true },
            { text: "Testem t", correct: false },
            { text: "Testem chi-kwadrat", correct: false },
            { text: "Testem Jarque-Bera", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "265. Skutkiem występowania współliniowości zmiennych objaśniających w modelu ekonometrycznym nie jest:",
        answers: [
            { text: "Zwiększenie błędu standardowego estymatorów", correct: false },
            { text: "Zmniejszenie precyzji estymacji", correct: false },
            { text: "Niestabilność estymatorów", correct: false },
            { text: "Obciążenie estymatorów", correct: true }
        ]
    },
    {
        category: "Statystyka",
        question: "266. Niech X będzie zmienną losową o skończonej wartości oczekiwanej EX. Wówczas dla jej wariancji D²X prawdziwy jest wzór:",
        answers: [
            { text: "D²X = E(X²) - (EX)²", correct: true },
            { text: "D²X = E(X) - E(X²)", correct: false },
            { text: "D²X = E(X²) + (EX)²", correct: false },
            { text: "D²X = E(X) / E(X²)", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "267. Niech x₀ będzie medianą zmiennej losowej X. Wówczas, dla jej dystrybuanty F prawdziwy jest warunek:",
        answers: [
            { text: "F(x₀) = 0.5", correct: true },
            { text: "F(x₀) = 0", correct: false },
            { text: "F(x₀) = 1", correct: false },
            { text: "F(x₀) = E(X)", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "268. Niech X będzie zmienną losową o rozkładzie Poissona z λ = 7. Wtedy:",
        answers: [
            { text: "E(X) = 7, Var(X) = 7", correct: true },
            { text: "E(X) = 7, Var(X) = 49", correct: false },
            { text: "E(X) = 49, Var(X) = 7", correct: false },
            { text: "E(X) = 7, Var(X) = 0", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "269. Niech X będzie zmienną losową o rozkładzie N(0,1) i niech Φ będzie jej dystrybuantą. Wtedy:",
        answers: [
            { text: "Φ(0) = 0.5", correct: true },
            { text: "Φ(0) = 0", correct: false },
            { text: "Φ(0) = 1", correct: false },
            { text: "Φ(0) = -1", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "270. Niech X będzie cechą o rozkładzie normalnym o wartości oczekiwanej m i nieznanym odchyleniu standardowym σ. Wówczas, statystyka służąca do weryfikacji hipotez H₀: m = 5, H₁: m ≠ 5 ma rozkład:",
        answers: [
            { text: "t-Studenta", correct: true },
            { text: "Normalny", correct: false },
            { text: "Chi-kwadrat", correct: false },
            { text: "F", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "271. Niech X będzie cechą o rozkładzie normalnym o wartości oczekiwanej m i znanym odchyleniu standardowym σ. Wówczas, statystyka służąca do weryfikacji hipotez H₀: m = 5, H₁: m ≠ 5 ma rozkład:",
        answers: [
            { text: "Normalny", correct: true },
            { text: "t-Studenta", correct: false },
            { text: "Chi-kwadrat", correct: false },
            { text: "F", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "272. Analiza wariancji służy do:",
        answers: [
            { text: "Porównania średnich kilku grup", correct: true },
            { text: "Porównania wariancji dwóch grup", correct: false },
            { text: "Analizy trendów w czasie", correct: false },
            { text: "Oceny korelacji między zmiennymi", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "273. Odrzucenie hipotezy głównej w ANOVA oznacza, że:",
        answers: [
            { text: "Istnieje istotna różnica między średnimi grup", correct: true },
            { text: "Wszystkie grupy mają równe średnie", correct: false },
            { text: "Wariancje grup są równe", correct: false },
            { text: "Dane nie są normalnie rozłożone", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "274. Warstwę widoku w typowej aplikacji internetowej w architekturze MVC tworzymy za pomocą:",
        answers: [
            { text: "HTML, CSS, JavaScript", correct: true },
            { text: "SQL", correct: false },
            { text: "PHP", correct: false },
            { text: "C#", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "275. Strona HTML5 powinna zaczynać się od deklaracji:",
        answers: [
            { text: "<!DOCTYPE html>", correct: true },
            { text: "<html>", correct: false },
            { text: "<head>", correct: false },
            { text: "<body>", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "276. Jaki element pozwoli na import do HTML kodu JavaScript z zewnętrznego pliku:",
        answers: [
            { text: "<script src=\"plik.js\"></script>", correct: true },
            { text: "<link rel=\"script\" href=\"plik.js\">", correct: false },
            { text: "<js src=\"plik.js\"></js>", correct: false },
            { text: "<import script=\"plik.js\">", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "277. W celu zapisania większej ilości informacji wyłącznie po stronie klienta internetowego należy wykorzystać:",
        answers: [
            { text: "LocalStorage", correct: true },
            { text: "Cookies", correct: false },
            { text: "SessionStorage", correct: false },
            { text: "IndexedDB", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "278. Co to jest preprocesor?",
        answers: [
            { text: "Narzędzie przetwarzające kod przed kompilacją", correct: true },
            { text: "Narzędzie do debugowania", correct: false },
            { text: "Narzędzie do optymalizacji", correct: false },
            { text: "Narzędzie do testowania", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "279. Czym jest unia w języku C?",
        answers: [
            { text: "Struktura danych, w której wszystkie pola współdzielą ten sam obszar pamięci", correct: true },
            { text: "Struktura danych z wieloma polami", correct: false },
            { text: "Typ danych dla liczb całkowitych", correct: false },
            { text: "Funkcja łącząca dwa zbiory", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "280. Jak wygląda zapis binarny liczby zmiennoprzecinkowej podwójnej precyzji w standardzie IEEE 758-1979?",
        answers: [
            { text: "64 bity: 1 bit znaku, 11 bitów wykładnika, 52 bity mantysy", correct: true },
            { text: "32 bity: 1 bit znaku, 8 bitów wykładnika, 23 bity mantysy", correct: false },
            { text: "16 bitów: 1 bit znaku, 5 bitów wykładnika, 10 bitów mantysy", correct: false },
            { text: "128 bitów: 1 bit znaku, 15 bitów wykładnika, 112 bitów mantysy", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "281. Graficzny sposób przedstawienia algorytmu to:",
        answers: [
            { text: "Schemat blokowy", correct: true },
            { text: "Diagram klas", correct: false },
            { text: "Diagram sekwencji", correct: false },
            { text: "Diagram przypadków użycia", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "282. Obiekty w GUI w środowiskach obiektowych komunikują się na zasadzie wzorca:",
        answers: [
            { text: "Obserwator", correct: true },
            { text: "Fabryka", correct: false },
            { text: "Singleton", correct: false },
            { text: "Adapter", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "283. Typ obiektu agregującego dowolną liczbę obiektów to:",
        answers: [
            { text: "Kolekcja", correct: true },
            { text: "Tablica", correct: false },
            { text: "Lista", correct: false },
            { text: "Zbiór", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "284. Klasę lub metodę, która nie będzie już dalej rozszerzana, oznaczamy w C# jako:",
        answers: [
            { text: "sealed", correct: true },
            { text: "final", correct: false },
            { text: "static", correct: false },
            { text: "abstract", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "285. Co oznacza ostatnia litera C w metodyce projektowania klas za pomocą diagramów CRC?",
        answers: [
            { text: "Collaborators", correct: true },
            { text: "Classes", correct: false },
            { text: "Responsibilities", correct: false },
            { text: "Components", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "286. Jeśli po wysłaniu komunikatu nadawca wstrzymuje przetwarzanie do momentu aż odbiorca obsłuży komunikat, wówczas mówimy, że komunikat jest:",
        answers: [
            { text: "Synchroniczny", correct: true },
            { text: "Asynchroniczny", correct: false },
            { text: "Bezpośredni", correct: false },
            { text: "Pośredni", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "287. Jeśli po wysłaniu komunikatu nadawca kontynuuje przetwarzanie, nie czekając aż odbiorca obsłuży komunikat, wówczas mówimy, że komunikat jest:",
        answers: [
            { text: "Asynchroniczny", correct: true },
            { text: "Synchroniczny", correct: false },
            { text: "Bezpośredni", correct: false },
            { text: "Pośredni", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "288. Na podanym diagramie BPMN występują bramki typu:",
        hasImage: true,
        imageUrl: "288.jpg",
        answers: [
            { text: "XOR", correct: true },
            { text: "AND", correct: false },
            { text: "OR", correct: false },
            { text: "NAND", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "289. Mechanizm porozumiewania się w BPMN oparty na komunikatach pozwala na:",
        answers: [
            { text: "Wymianę informacji między procesami", correct: true },
            { text: "Synchronizację zadań", correct: false },
            { text: "Definiowanie warunków", correct: false },
            { text: "Grupowanie zadań", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "290. W PRINCE2 miarę dla poszczególnych ryzyk wylicza się jako:",
        answers: [
            { text: "Iloczyn prawdopodobieństwa i wpływu", correct: true },
            { text: "Suma prawdopodobieństwa i wpływu", correct: false },
            { text: "Różnica prawdopodobieństwa i wpływu", correct: false },
            { text: "Iloczyn wpływu i czasu", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "291. Cena emisyjna obligacji zerokuponowych jest:",
        answers: [
            { text: "Niższa od ceny nominalnej", correct: true },
            { text: "Wyższa od ceny nominalnej", correct: false },
            { text: "Równa cenie nominalnej", correct: false },
            { text: "Zmienna w czasie", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "292. Wzrost przeciętnego poziomu cen w połączeniu z depresją (jako fazą cyklu koniunkturalnego) w gospodarce określamy jako:",
        answers: [
            { text: "Stagflacja", correct: true },
            { text: "Inflacja", correct: false },
            { text: "Deflacja", correct: false },
            { text: "Recesja", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "293. Bezrobocie, które pojawia się wtedy, kiedy płaca jest rozmyślnie utrzymywana powyżej poziomu równowagi na rynku pracy (np. w wyniku działalności związków zawodowych czy wprowadzeniu płacy minimalnej) nazywamy:",
        answers: [
            { text: "Bezrobocie strukturalne", correct: true },
            { text: "Bezrobocie frykcyjne", correct: false },
            { text: "Bezrobocie koniunkturalne", correct: false },
            { text: "Bezrobocie sezonowe", correct: false }
        ]
    },
    {
        category: "Sieci Komputerowe",
        question: "294. Jak nazywane są systemy kryptograficzne, które używają dwóch kluczy do szyfrowania i odczytu?",
        answers: [
            { text: "Asymetryczne", correct: true },
            { text: "Symetryczne", correct: false },
            { text: "Hybrydowe", correct: false },
            { text: "Kwadratowe", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "295. Prognozowanie za pomocą SSN to:",
        answers: [
            { text: "Prognozowanie z użyciem sieci neuronowych", correct: true },
            { text: "Prognozowanie z użyciem szeregów czasowych", correct: false },
            { text: "Prognozowanie z użyciem regresji", correct: false },
            { text: "Prognozowanie z użyciem analizy skupień", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "296. Szkieletowe systemy regułowe oparte są na systemach logicznych:",
        answers: [
            { text: "Dedukcyjnych", correct: true },
            { text: "Indukcyjnych", correct: false },
            { text: "Abdukcyjnych", correct: false },
            { text: "Probabilistycznych", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "297. Jaki mechanizm logiczny stosowany jest do wnioskowania w języku Prolog:",
        answers: [
            { text: "Unifikacja", correct: true },
            { text: "Dedukcja", correct: false },
            { text: "Indukcja", correct: false },
            { text: "Abdukcja", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "298. Systemy regułowe bazują na wiedzy:",
        answers: [
            { text: "Deklaratywnej", correct: true },
            { text: "Proceduralnej", correct: false },
            { text: "Heurystycznej", correct: false },
            { text: "Statystycznej", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "299. Jakie są zasady działania SSN typu MLP (perceptron wielowarstwowy)?",
        answers: [
            { text: "Uczenie nadzorowane z propagacją wsteczną", correct: true },
            { text: "Uczenie nienadzorowane", correct: false },
            { text: "Uczenie przez wzmacnianie", correct: false },
            { text: "Uczenie przez rywalizację", correct: false }
        ]
    },
    {
        category: "Sztuczna Inteligencja",
        question: "300. Uczenie sieci neuronowej polega na:",
        answers: [
            { text: "Dostosowaniu wag synaps", correct: true },
            { text: "Zmianie struktury sieci", correct: false },
            { text: "Dodawaniu nowych neuronów", correct: false },
            { text: "Usuwaniu neuronów", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "301. Opłata skarbowa jest ewidencjonowana na koncie:",
        answers: [
            { text: "Podatki i opłaty", correct: true },
            { text: "Koszty sprzedaży", correct: false },
            { text: "Przychody operacyjne", correct: false },
            { text: "Rozrachunki z dostawcami", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "302. Zakup maszyny z odroczonym terminem płatności jest ewidencjonowany po stronie:",
        answers: [
            { text: "Zobowiązań", correct: true },
            { text: "Aktywów", correct: false },
            { text: "Przychodów", correct: false },
            { text: "Kapitału własnego", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "303. Cykl środków pieniężnych w firmie ABC wynosi 5 dni. Jak należy zinterpretować ten wynik?",
        answers: [
            { text: "Firma potrzebuje 5 dni na przekształcenie zapasów w gotówkę", correct: true },
            { text: "Firma ma 5 dni na spłatę zobowiązań", correct: false },
            { text: "Firma generuje zysk co 5 dni", correct: false },
            { text: "Firma utrzymuje płynność przez 5 dni", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "304. W firmie ABC wskaźnik ogólnego zadłużenia jest na poziomie 0,6. Wynik ten oznacza, że:",
        answers: [
            { text: "60% aktywów jest finansowanych долгiem", correct: true },
            { text: "40% aktywów jest finansowanych долгiem", correct: false },
            { text: "60% kapitału własnego jest zadłużone", correct: false },
            { text: "Firma ma 60% zysku z długu", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "305. Formuła φ w rachunku predykatów jest spełniona, jeśli: p ⇒ q, ¬q",
        answers: [
            { text: "¬p", correct: true },
            { text: "p", correct: false },
            { text: "q", correct: false },
            { text: "¬p ∧ q", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "306. Możliwość zastosowania reguły modus tollens ¬p wynika z:",
        answers: [
            { text: "p ⇒ q, ¬q", correct: true },
            { text: "p ⇒ q, q", correct: false },
            { text: "¬p ⇒ q, ¬q", correct: false },
            { text: "p ∧ q, ¬q", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "307. Problem weryfikacji czy formuła jest tautologią w KRP jest:",
        answers: [
            { text: "Rozstrzygalny", correct: true },
            { text: "Nierozstrzygalny", correct: false },
            { text: "Częściowo rozstrzygalny", correct: false },
            { text: "Złożony obliczeniowo", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "308. W jakiej bazie można znaleźć informacje dotyczące znaków towarowych wszystkich oficjalnych urzędów ds. znaków towarowych, które uczestniczą w działaniach na poziomie krajowym, międzynarodowym i unijnym?",
        answers: [
            { text: "TMview", correct: true },
            { text: "Espacenet", correct: false },
            { text: "WIPO", correct: false },
            { text: "EPO", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "309. W jaki sposób można uzyskać informacje, czy wynalazek lub produkt o określonych atrybutach jest chroniony na terenie RP?",
        answers: [
            { text: "Przez sprawdzenie w bazie Urzędu Patentowego RP", correct: true },
            { text: "Przez złożenie wniosku do sądu", correct: false },
            { text: "Przez kontakt z producentem", correct: false },
            { text: "Przez analizę rynku", correct: false }
        ]
    },
    {
        category: "Prawo",
        question: "310. Czy istnieje, zorganizowana w formie bazy danych, możliwość kontaktu uprawnionych ze służbami celnymi i policją, aby pomóc chronić produkty przed podrabianiem?",
        answers: [
            { text: "Tak, w systemie IPR", correct: true },
            { text: "Nie, brak takiej bazy", correct: false },
            { text: "Tak, w bazie TMview", correct: false },
            { text: "Tak, w systemie WIPO", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "311. Na podstawie danych przedstawionych w tabeli, względny udział w rynku analizowanego przedsiębiorstwa wynosi (wartość x w analizie BCG):",
        answers: [
            { text: "0,35", correct: true },
            { text: "0,25", correct: false },
            { text: "0,45", correct: false },
            { text: "0,50", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "312. Na podstawie danych przedstawionych w tabeli, dynamika produktu oferowanego przez analizowane przedsiębiorstwo wynosi (wartość y w analizie BCG):",
        answers: [
            { text: "138%", correct: true },
            { text: "125%", correct: false },
            { text: "150%", correct: false },
            { text: "110%", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "313. Na podstawie danych przedstawionych w tabeli, produkt analizowanego przedsiębiorstwa w ujęciu analizy BCG jest (dynamika całego sektora wynosi 11%):",
        answers: [
            { text: "Gwiazda", correct: true },
            { text: "Dojna krowa", correct: false },
            { text: "Znak zapytania", correct: false },
            { text: "Pies", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "314. Ile wektorów liniowo niezależnych potrzeba do rozpięcia bazy w przestrzeni trójwymiarowej?",
        answers: [
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "315. Ile wynosi część rzeczywista liczby zespolonej z = (1 + i) / (1 - i)?",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "-1", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "316. Ile wynosi wyznacznik z macierzy A = [[-1, 0, 0], [4, 2, 0], [1, -2, -3]]?",
        answers: [
            { text: "6", correct: true },
            { text: "-6", correct: false },
            { text: "12", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "317. Pan Kowalski dokonuje na koniec każdego roku wpłaty w wysokości 1000 przez 5 lat. Obliczyć przyszłą wartość renty na koniec ostatniego okresu, jeżeli w banku obowiązuje oprocentowanie 3% w skali roku.",
        answers: [
            { text: "5309,03 zł", correct: true },
            { text: "5000 zł", correct: false },
            { text: "5150 zł", correct: false },
            { text: "5500 zł", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "318. Cena emisyjna dwuletnich obligacji zerokuponowych o cenie wykupu 100 zł wynosi 95 zł. Obliczyć rentowność tej inwestycji.",
        answers: [
            { text: "2,57%", correct: true },
            { text: "5%", correct: false },
            { text: "3%", correct: false },
            { text: "4%", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "319. Kredyt w wysokości 10 tys. spłacany jest w 5 rocznych ratach łącznych w wysokości: A1 = 3 tys., A2 = 3,3 tys., A3 = 2,55 tys., A4 = 2,3 tys. (stopa procentowa 10% w stosunku rocznym, kapitalizacja zgodna z dołu). Odsetki Z3 płacone w 3 racie są równe:",
        answers: [
            { text: "450 zł", correct: true },
            { text: "300 zł", correct: false },
            { text: "500 zł", correct: false },
            { text: "600 zł", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "320. Oceniono metodą kapitałową cztery urządzenia dostępne na rynku. Dla stopy procentowej 3% NPV1=200, NPV2=50, NPV3=-10, NPV4=0. Które z tych urządzeń należy kupić?",
        answers: [
            { text: "Urządzenie 1", correct: true },
            { text: "Urządzenie 2", correct: false },
            { text: "Urządzenie 3", correct: false },
            { text: "Urządzenie 4", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "321. W celu weryfikacji zestawu hipotez H₀: m = 30, H₁: m < 30 zastosowano statystykę U o rozkładzie N(0,1). Jej wartość obliczona na podstawie 15 danych wynosi 0,3. Na podstawie tych informacji:",
        answers: [
            { text: "Nie ma podstaw do odrzucenia H₀", correct: true },
            { text: "Odrzucamy H₀ na poziomie istotności 0,05", correct: false },
            { text: "Odrzucamy H₀ na poziomie istotności 0,01", correct: false },
            { text: "Test jest niejednoznaczny", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "322. Na podstawie 22 pomiarów określono, że średnie stężenie pyłów PM10 w pewnej miejscowości wynosiło 43μg/m³ przy odchyleniu stand. 13 μg/m³. W celu sprawdzenia czy wartość oczekiwana stężenia pyłów PM10 w tej miejscowości jest istotnie niższa niż 50 μg/m³ należy zweryfikować hipotezy:",
        answers: [
            { text: "H₀: m = 50, H₁: m < 50", correct: true },
            { text: "H₀: m = 50, H₁: m > 50", correct: false },
            { text: "H₀: m = 43, H₁: m ≠ 43", correct: false },
            { text: "H₀: m = 50, H₁: m ≠ 50", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "323. Niech X będzie zmienną losową o rozkładzie N(1,2). Niech F będzie jej dystrybuantą. Wtedy:",
        answers: [
            { text: "F(1) = 0,5", correct: true },
            { text: "F(1) = 0", correct: false },
            { text: "F(1) = 1", correct: false },
            { text: "F(1) = 0,25", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "324. Niech X będzie zmienną losową o następującym rozkładzie: xᵢ = [-1, 0, 5], pᵢ = [0,5, 0,4, 0,1]. Wtedy:",
        answers: [
            { text: "E(X) = 0", correct: true },
            { text: "E(X) = 1", correct: false },
            { text: "E(X) = -1", correct: false },
            { text: "E(X) = 5", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "325. Odchylenie od harmonogramu (SV) w metodzie wartości wypracowanej (EVM) liczone jest jako różnica pomiędzy:",
        answers: [
            { text: "EV - PV", correct: true },
            { text: "AC - PV", correct: false },
            { text: "EV - AC", correct: false },
            { text: "PV - AC", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "326. Rozwiązaniem całki nieoznaczonej ∫ √(5x - 2) dx jest:",
        answers: [
            { text: "(2/15)(5x - 2)^(3/2) + C", correct: true },
            { text: "(1/5)√(5x - 2) + C", correct: false },
            { text: "(5/2)(5x - 2)^(1/2) + C", correct: false },
            { text: "(2/5)(5x - 2) + C", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "327. Pole ograniczone funkcjami y = 2 - x² oraz y = x² wynosi:",
        answers: [
            { text: "8/3", correct: true },
            { text: "4/3", correct: false },
            { text: "2", correct: false },
            { text: "16/3", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "328. Czy szereg postaci ∑∞ (1/n) jest zbieżny?",
        answers: [
            { text: "Nie, jest rozbieżny", correct: true },
            { text: "Tak, jest zbieżny", correct: false },
            { text: "Zbieżny tylko dla n > 1", correct: false },
            { text: "Zbieżny warunkowo", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "329. Funkcja z = x² + y² - xy + x + y w obszarze x ≤ 0, y ≤ 0, x + y ≥ -3 przyjmuje wartość najmniejszą w punkcie:",
        answers: [
            { text: "(-1, -1)", correct: true },
            { text: "(0, 0)", correct: false },
            { text: "(-2, -1)", correct: false },
            { text: "(-3, 0)", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "330. W celu zbadania przebiegu zmienności funkcji jednej zmiennej należy:",
        answers: [
            { text: "Obliczyć pochodne i znaleźć punkty krytyczne", correct: true },
            { text: "Obliczyć całkę funkcji", correct: false },
            { text: "Znależć wartość średnią", correct: false },
            { text: "Sporządzić wykres bez analizy", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "331. W jaki sposób można wykorzystać rachunek różniczkowy w badaniu zależności pomiędzy dochodem a wydatkami na dane dobro?",
        answers: [
            { text: "Obliczając elastyczność popytu", correct: true },
            { text: "Obliczając średnią wydatków", correct: false },
            { text: "Sumując wydatki", correct: false },
            { text: "Porównując dochody", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "332. Pan Kowalski dokonuje na początku każdego roku wpłaty w wysokości 1000 przez 5 lat. Obliczyć przyszłą wartość renty na koniec ostatniego okresu, jeżeli w banku obowiązuje oprocentowanie 3% w skali roku.",
        answers: [
            { text: "5525,63 zł", correct: true },
            { text: "5000 zł", correct: false },
            { text: "5150 zł", correct: false },
            { text: "5300 zł", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "333. Obliczyć cenę trzyletnich obligacji zerokuponowych o stałym oprocentowaniu 6% rocznie i cenie wykupu 10 tys.",
        answers: [
            { text: "8396,19 zł", correct: true },
            { text: "9000 zł", correct: false },
            { text: "8000 zł", correct: false },
            { text: "10000 zł", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "334. Kredyt w wysokości 10 tys. spłacany jest w 4 rocznych ratach łącznych w wysokości: A1 = 3 tys., A2 = 3,8 tys., A4 = 2,75 tys. (stopa procentowa 10% w stosunku rocznym, kapitalizacja zgodna z dołu). Rata łączna A3 jest równa:",
        answers: [
            { text: "2,42 tys.", correct: true },
            { text: "3 tys.", correct: false },
            { text: "2,5 tys.", correct: false },
            { text: "2 tys.", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "335. Jaką postać ma portfel budowany metodą Markowitza dla awersji do ryzyka równej zero?",
        answers: [
            { text: "Portfel o najwyższej oczekiwanej stopie zwrotu", correct: true },
            { text: "Portfel o minimalnej wariancji", correct: false },
            { text: "Portfel równoważony", correct: false },
            { text: "Portfel bez ryzyka", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "336. Przesuwanie zadań na późniejszy termin w harmonogramie projektu związane jest z:",
        answers: [
            { text: "Opóźnieniem", correct: true },
            { text: "Przyspieszeniem", correct: false },
            { text: "Optymalizacją zasobów", correct: false },
            { text: "Zmianą zakresu", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "337. Jakie narzędzie należy zastosować do wyspecyfikowania zadań projektowych, które muszą być zrealizowane w celu osiągnięcia zakładanych celów?",
        answers: [
            { text: "Struktura podziału pracy (WBS)", correct: true },
            { text: "Diagram Gantta", correct: false },
            { text: "Analiza SWOT", correct: false },
            { text: "Metoda PERT", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "338. Które z działań dotyczących zadań na ścieżce krytycznej może nie przynieść skrócenia czasu realizacji projektu?",
        answers: [
            { text: "Dodanie zasobów do zadania równoległego", correct: true },
            { text: "Skrócenie czasu trwania zadania krytycznego", correct: false },
            { text: "Zwiększenie efektywności zadania krytycznego", correct: false },
            { text: "Równoległe wykonanie zadań krytycznych", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "339. Zasób, dla którego koszt naliczany jest w jednostkach zużycia, niezależnie od długości trwania zadania w MS Project, należy zdefiniować jako:",
        answers: [
            { text: "Materiałowy", correct: true },
            { text: "Pracowniczy", correct: false },
            { text: "Stały", correct: false },
            { text: "Zmienny", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "340. Które z czynników (pozacenowych determinant) nie będą miały wpływu na wielkość podaży danego produktu?",
        answers: [
            { text: "Preferencje konsumentów", correct: true },
            { text: "Koszty produkcji", correct: false },
            { text: "Technologia produkcji", correct: false },
            { text: "Ceny zasobów", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "341. Przedsiębiorstwo rozważa inwestycję, która z prawdopodobieństwem 75% zakończy się zyskiem w wysokości 1 000 000 zł, a z prawdopodobieństwem 25% zakończy się stratą 100 000 zł. Ile wynosi wartość oczekiwana tej inwestycji?",
        answers: [
            { text: "725 000 zł", correct: true },
            { text: "900 000 zł", correct: false },
            { text: "500 000 zł", correct: false },
            { text: "800 000 zł", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "342. Dla danych: koszt stały = 1000 zł/mies.; jednostkowy koszt zmienny = 2 zł/szt.; cena jednostkowa = 3 zł/szt. Oblicz próg rentowności (inaczej – punkt krytyczny):",
        answers: [
            { text: "1000 sztuk", correct: true },
            { text: "500 sztuk", correct: false },
            { text: "2000 sztuk", correct: false },
            { text: "1500 sztuk", correct: false }
        ]
    },
    {
        category: "Zarządzanie Projektami",
        question: "343. Na podstawie poniższych danych ustal długość ścieżki krytycznej dla opisanego procesu:",
        hasImage: true,
        imageUrl: "343.jpg",
        answers: [
            { text: "9 godzin", correct: true },
            { text: "10 godzin", correct: false },
            { text: "8 godzin", correct: false },
            { text: "14 godzin", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "344. Jeśli bieżąca wielkość produkcji jest wyższa niż punkt krytyczny (próg rentowności), to:",
        answers: [
            { text: "Firma osiąga zysk", correct: true },
            { text: "Firma ponosi stratę", correct: false },
            { text: "Firma nie osiąga zysku ani straty", correct: false },
            { text: "Koszty są równe przychodom", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "345. Młyny i ze zbioru M mają zapas mąki równy z(i), a piekarnie j ze zbioru P mają popyt równy p(j). Niech x(i, j) opisuje wielkość dostaw z młyna i do piekarni j. Jaką postać ma ograniczenie w modelu programowania liniowego mieszanego, które gwarantuje, że popyt wszystkich piekarni zostanie zaspokojony:",
        answers: [
            { text: "∑_i x(i, j) = p(j) dla każdego j", correct: true },
            { text: "∑_j x(i, j) = z(i) dla każdego i", correct: false },
            { text: "∑_i x(i, j) ≤ p(j) dla każdego j", correct: false },
            { text: "∑_j x(i, j) ≥ z(i) dla każdego i", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "346. Pierwsze dopuszczalne rozwiązanie zadania programowania liniowego dane jest tablicą simpleksową. Ile wynosi wartość funkcji celu x₀ po wykonaniu następnej iteracji algorytmu simpleks:",
        answers: [
            { text: "5", correct: true },
            { text: "0", correct: false },
            { text: "10", correct: false },
            { text: "21", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "347. Przy uprawie pszenicy konieczne jest stosowanie mieszanki kilku nawozów j ze zbioru N. Nawozy te zawierają różne składniki i ze zbioru S. Zawartość procentowa składnika i w nawozie j wynosi z(i, j). Mieszanka musi zawierać co najmniej m(j) składnika j. Niech x(j) oznacza udział nawozu j w mieszance. Jaką postać ma ograniczenie, które zapewnia, że wybrana mieszanka nawozów będzie zawierać co najmniej wymaganą ilość wszystkich składników j:",
        answers: [
            { text: "∑_j z(i, j) * x(j) ≥ m(i) dla każdego i", correct: true },
            { text: "∑_i z(i, j) * x(j) ≤ m(j) dla każdego j", correct: false },
            { text: "∑_j z(i, j) * x(j) = m(i) dla każdego i", correct: false },
            { text: "∑_i z(i, j) * x(j) ≥ m(j) dla każdego j", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "348. Jaka jest postać zadania dualnego dla zadania pierwotnego w postaci: max x₀ = 28x₁ + 24x₂, 2x₁ + 6x₂ ≤ 12, 4x₁ + 2x₂ ≤ 14, x₁, x₂ ≥ 0",
        answers: [
            { text: "min y₀ = 12y₁ + 14y₂, 2y₁ + 4y₂ ≥ 28, 6y₁ + 2y₂ ≥ 24, y₁, y₂ ≥ 0", correct: true },
            { text: "max y₀ = 12y₁ + 14y₂, 2y₁ + 4y₂ ≤ 28", correct: false },
            { text: "min y₀ = 28y₁ + 24y₂, 2y₁ + 6y₂ ≥ 12", correct: false },
            { text: "min y₀ = 12y₁ + 14y₂, 4y₁ + 2y₂ ≥ 28", correct: false }
        ]
    },
    {
        category: "Matematyka",
        question: "349. Brygadzista musi przydzielić pracowników j = 1,…,5 do stanowisk k = A,…,E. Wydajność pracownika j na stanowisku k wynosi w(j, k). Należy tak przydzielić pracowników do stanowisk by zmaksymalizować łączną wydajność. Niech x(j, k) będzie zmienną przyjmującą wartość 1 gdy pracownik j jest przydzielony do stanowiska k, a 0 w przeciwnym razie. Jaką postać ma ograniczenie, które wymusza, by dokładnie jeden pracownik został przydzielony do stanowiska k:",
        answers: [
            { text: "∑_j x(j, k) = 1 dla każdego k", correct: true },
            { text: "∑_k x(j, k) = 1 dla każdego j", correct: false },
            { text: "∑_j x(j, k) ≤ 1 dla każdego k", correct: false },
            { text: "∑_k x(j, k) ≥ 1 dla każdego j", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "350. Zakupiona w firmie produkcyjnej maszyna dziewiarska wymagająca montażu jest ewidencjonowana jako:",
        answers: [
            { text: "Środek trwały w budowie", correct: true },
            { text: "Gotowy środek trwały", correct: false },
            { text: "Zapas materiałów", correct: false },
            { text: "Koszt operacyjny", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "351. Otrzymana dywidenda jest ewidencjonowana w firmie jako:",
        answers: [
            { text: "Przychód finansowy", correct: true },
            { text: "Koszt operacyjny", correct: false },
            { text: "Zobowiązanie", correct: false },
            { text: "Kapitał własny", correct: false }
        ]
    },
    {
        category: "Rachunkowość",
        question: "352. Gdzie w przepływach pieniężnych przedstawia się otrzymanie pożyczki dwuletniej?",
        answers: [
            { text: "Działalność finansowa", correct: true },
            { text: "Działalność operacyjna", correct: false },
            { text: "Działalność inwestycyjna", correct: false },
            { text: "Kapitał własny", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "353. Firma X finansuje się: akcjami zwykłymi, które stanowią 40% ogółu kapitału, których koszt szacuje się na poziomie 12% i kredytem stanowiącym 60% ogółu kapitału, którego stopa nominalna wynosi 14% rocznie. Firma wypracowuje zysk operacyjny i płaci podatek dochodowy 19%. Średni ważony koszt kapitału firmy X przedstawia zapis:",
        answers: [
            { text: "11,28%", correct: true },
            { text: "13%", correct: false },
            { text: "10%", correct: false },
            { text: "12%", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "354. Przy stałej krańcowej stopie technicznej substytucji czynników wytwórczych izokwantę przedstawia:",
        answers: [
            { text: "Linia prosta", correct: true },
            { text: "Hiperbola", correct: false },
            { text: "Parabola", correct: false },
            { text: "Krzywa wypukła", correct: false }
        ]
    },
    {
        category: "Mikroekonomia",
        question: "355. Jeżeli spadek ceny o 1% powoduje wzrost wielkości popytu o 2%, to popyt jest:",
        answers: [
            { text: "Elastyczny", correct: true },
            { text: "Nieelastyczny", correct: false },
            { text: "Jednostkowo elastyczny", correct: false },
            { text: "Doskonale elastyczny", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "356. Jeżeli PKB wzrósł nominalnie z 200 do 220, a inflacja wyniosła 10%, to realny wzrost PKB wyniósł:",
        answers: [
            { text: "0%", correct: true },
            { text: "10%", correct: false },
            { text: "5%", correct: false },
            { text: "-10%", correct: false }
        ]
    },
    {
        category: "Makroekonomia",
        question: "357. Jeżeli PKB realnie wzrósł, a nominalnie spadł, to:",
        answers: [
            { text: "Wystąpiła deflacja", correct: true },
            { text: "Wystąpiła inflacja", correct: false },
            { text: "Ceny pozostały stałe", correct: false },
            { text: "PKB nie zmienił się", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "358. Który typ oprogramowania steruje wykorzystaniem zasobów komputera?",
        answers: [
            { text: "System operacyjny", correct: true },
            { text: "Oprogramowanie aplikacyjne", correct: false },
            { text: "Oprogramowanie narzędziowe", correct: false },
            { text: "Firmware", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "359. Jaki model jest podstawą języka Visual Basic for Application?",
        answers: [
            { text: "Model obiektowy", correct: true },
            { text: "Model proceduralny", correct: false },
            { text: "Model funkcyjny", correct: false },
            { text: "Model logiczny", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "360. Pasek narzędzi Toolbox w oknie edytora VBA dla Excela pozwala na:",
        answers: [
            { text: "Dodawanie kontrolek do formularzy", correct: true },
            { text: "Edytowanie kodu źródłowego", correct: false },
            { text: "Zarządzanie arkuszami", correct: false },
            { text: "Kompilację kodu", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "361. Jaki typ komputera jest używany do obsługi wielkich baz danych?",
        answers: [
            { text: "Serwer", correct: true },
            { text: "Komputer osobisty", correct: false },
            { text: "Laptop", correct: false },
            { text: "Komputer wbudowany", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "362. Przedsiębiorstwo XYZ, zajmujące się wynajmem samochodów, zatrudnia w swoich punktach obsługi klienta wysoce wykwalifikowany personel. Ten fakt jest, w ujęciu analizy SWOT:",
        answers: [
            { text: "Mocną stroną", correct: true },
            { text: "Słabą stroną", correct: false },
            { text: "Szansą", correct: false },
            { text: "Zagrożeniem", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "363. Przedsiębiorstwo XYZ posiada patenty na najnowocześniejsze rozwiązania technologiczne w swojej branży. Ten fakt jest, w ujęciu analizy SWOT:",
        answers: [
            { text: "Mocną stroną", correct: true },
            { text: "Słabą stroną", correct: false },
            { text: "Szansą", correct: false },
            { text: "Zagrożeniem", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "364. Według koncepcji analizy pięciu sił konkurencyjnych Portera, które ze zjawisk zwiększałoby atrakcyjność analizowanego sektora:",
        answers: [
            { text: "Niski poziom zagrożenia ze strony substytutów", correct: true },
            { text: "Wysoka siła przetargowa dostawców", correct: false },
            { text: "Silna konkurencja wewnętrzna", correct: false },
            { text: "Wysokie bariery wejścia", correct: false }
        ]
    },
    {
        category: "Strategia Biznesowa",
        question: "365. Wraz z upływem czasu i zmniejszającą się dynamiką rynku, produkt obecnie będący znakiem zapytania stanie się w przyszłości:",
        answers: [
            { text: "Pies", correct: true },
            { text: "Gwiazda", correct: false },
            { text: "Dojna krowa", correct: false },
            { text: "Znak zapytania", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "366. Ekonometryk pracujący na danych przekrojowych (niezależnych od czasu) na pewno nie zetknie się z problemem:",
        answers: [
            { text: "Autokorelacji", correct: true },
            { text: "Heteroskedastyczności", correct: false },
            { text: "Współliniowości", correct: false },
            { text: "Niestacjonarności", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "367. Metoda Hellwiga doboru zmiennych objaśniających jako właściwy wybiera podzbiór o:",
        answers: [
            { text: "Najwyższej zdolności informacyjnej", correct: true },
            { text: "Najniższej korelacji", correct: false },
            { text: "Najmniejszej liczbie zmiennych", correct: false },
            { text: "Najwyższej wariancji", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "368. Czy zasadna jest estymacja parametrów funkcji produkcji Cobba-Douglasa za pomocą Klasycznej Metody Najmniejszych Kwadratów?",
        answers: [
            { text: "Tak, po logarytmizacji", correct: true },
            { text: "Nie, wymaga metody nieliniowej", correct: false },
            { text: "Tak, bez żadnych modyfikacji", correct: false },
            { text: "Nie, tylko metoda GMM", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "369. Do estymacji parametrów wielorównaniowego modelu ekonometrycznego o równaniach współzależnych można posłużyć się:",
        answers: [
            { text: "Metodą 2SLS", correct: true },
            { text: "Metodą Najmniejszych Kwadratów", correct: false },
            { text: "Metodą maksymalnej wiarygodności", correct: false },
            { text: "Metodą Hellwiga", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "370. Do weryfikacji hipotez H₀: m = 35, H₁: m < 35 zastosowano statystykę U o rozkładzie N(0,1). Jej wartość obliczona na podstawie 18 danych wynosi -1,8. Wiemy, że dla dystrybuanty Φ rozkładu N(0,1) mamy: Φ(1,28) ≈ 0,9, Φ(1,64) ≈ 0,95, Φ(1,96) ≈ 0,975. Wówczas:",
        answers: [
            { text: "Odrzucamy H₀ na poziomie 0,05", correct: true },
            { text: "Nie odrzucamy H₀ na poziomie 0,05", correct: false },
            { text: "Odrzucamy H₀ na poziomie 0,01", correct: false },
            { text: "Test jest niejednoznaczny", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "371. Do weryfikacji hipotez H₀: m = 57, H₁: m ≠ 57 zastosowano statystykę U o rozkładzie N(0,1). Jej wartość obliczona na podstawie 45 danych wynosi -1,8. Wiemy, że dla dystrybuanty Φ rozkładu N(0,1) mamy: Φ(1,28) ≈ 0,9, Φ(1,64) ≈ 0,95, Φ(1,96) ≈ 0,975. Wówczas:",
        answers: [
            { text: "Nie odrzucamy H₀ na poziomie 0,05", correct: true },
            { text: "Odrzucamy H₀ na poziomie 0,05", correct: false },
            { text: "Odrzucamy H₀ na poziomie 0,01", correct: false },
            { text: "Odrzucamy H₀ na poziomie 0,1", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "372. Do weryfikacji hipotez H₀: m = 123, H₁: m > 123 zastosowano statystykę U o rozkładzie N(0,1). Jej wartość obliczona na podstawie 76 danych wynosi 1,4. Wiemy, że dla dystrybuanty Φ rozkładu N(0,1) mamy: Φ(1,28) ≈ 0,9, Φ(1,64) ≈ 0,95, Φ(1,96) ≈ 0,975. Wówczas:",
        answers: [
            { text: "Nie odrzucamy H₀ na poziomie 0,05", correct: true },
            { text: "Odrzucamy H₀ na poziomie 0,05", correct: false },
            { text: "Odrzucamy H₀ na poziomie 0,01", correct: false },
            { text: "Odrzucamy H₀ na poziomie 0,1", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "373. Analiza 91 przypadków wypłat odszkodowań komunikacyjnych w pewnej firmie ubezpieczeniowej pokazała, że średnia wartość odszkodowania (w tys. zł) wynosi 11,2 przy odchyleniu stand. 2,5. W celu sprawdzenia, czy wartość oczekiwana wypłat jest istotnie wyższa niż 10 tys. zł należy zweryfikować hipotezy:",
        answers: [
            { text: "H₀: m = 10, H₁: m > 10", correct: true },
            { text: "H₀: m = 10, H₁: m < 10", correct: false },
            { text: "H₀: m = 11,2, H₁: m ≠ 11,2", correct: false },
            { text: "H₀: m = 10, H₁: m ≠ 10", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "374. 40 spośród 135 ankietowanych klientów pewnego banku uznało stosowane w nim prowizje za zbyt wysokie. W celu weryfikacji, że prowizje są zbyt wysokie dla ponad 30% klientów banku należy przeprowadzić test następującego zestawu hipotez:",
        answers: [
            { text: "H₀: p = 0,3, H₁: p > 0,3", correct: true },
            { text: "H₀: p = 0,3, H₁: p < 0,3", correct: false },
            { text: "H₀: p = 0,296, H₁: p ≠ 0,296", correct: false },
            { text: "H₀: p = 0,3, H₁: p ≠ 0,3", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "375. Na podstawie analizy obserwacji 36 dni pracy bankomatu obliczono średnią dzienną wartość wypłat równą 15,7 tys. zł i odchylenie stand. równe 1,8 tys. zł. W celu sprawdzenia przypuszczenia, że odchylenie stand. wartości dziennych wypłat z bankomatu (wyrażonych w tys. zł) jest istotnie mniejsze niż 2 należy zweryfikować następujący zestaw hipotez:",
        answers: [
            { text: "H₀: σ = 2, H₁: σ < 2", correct: true },
            { text: "H₀: σ = 2, H₁: σ > 2", correct: false },
            { text: "H₀: σ = 1,8, H₁: σ ≠ 1,8", correct: false },
            { text: "H₀: σ = 2, H₁: σ ≠ 2", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "376. Definiowanie klasy w Visual Basic for Application polega na:",
        answers: [
            { text: "Tworzeniu szablonu dla obiektów", correct: true },
            { text: "Deklaracji zmiennych globalnych", correct: false },
            { text: "Tworzeniu procedur", correct: false },
            { text: "Definiowaniu funkcji", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "377. W trybie projektowania tabeli bazy danych programu MS Access można:",
        answers: [
            { text: "Określić typy danych i klucze", correct: true },
            { text: "Wprowadzać dane do tabeli", correct: false },
            { text: "Tworzyć zapytania SQL", correct: false },
            { text: "Generować raporty", correct: false }
        ]
    },
    {
        category: "Bazy Danych",
        question: "378. Czy tablica, w której nie ma żadnego rekordu, zawiera jakąkolwiek informację?",
        answers: [
            { text: "Tak, strukturę i definicję pól", correct: true },
            { text: "Nie, jest całkowicie pusta", correct: false },
            { text: "Tak, dane domyślne", correct: false },
            { text: "Nie, tylko metadane", correct: false }
        ]
    },
    {
        category: "Rozwój Aplikacji Internetowych",
        question: "379. Językiem znacznikowym wykorzystywanym do tworzenia dokumentów hipertekstowych WWW jest:",
        answers: [
            { text: "HTML", correct: true },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: false },
            { text: "XML", correct: false }
        ]
    },
    {
        category: "Sieci Komputerowe",
        question: "380. Która maska jest wykorzystywana do oznaczenia adresów IP klasy B?",
        answers: [
            { text: "255.255.0.0", correct: true },
            { text: "255.0.0.0", correct: false },
            { text: "255.255.255.0", correct: false },
            { text: "255.255.255.255", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "381. W jakiej tablicy można odczytać nazwę bieżąco wykonywanego skryptu PHP?",
        answers: [
            { text: "$_SERVER", correct: true },
            { text: "$_GET", correct: false },
            { text: "$_POST", correct: false },
            { text: "$_SESSION", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "382. Informację o nazwie przeglądarki w JavaScript uzyskamy odwołując się do właściwości:",
        answers: [
            { text: "navigator.userAgent", correct: true },
            { text: "window.location", correct: false },
            { text: "document.title", correct: false },
            { text: "navigator.platform", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "383. Po zadeklarowaniu w języku JavaScript zmiennej var i = 10, zmienna i będzie miała typ:",
        answers: [
            { text: "Number", correct: true },
            { text: "String", correct: false },
            { text: "Boolean", correct: false },
            { text: "Object", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "384. Co zostanie wypisane na standardowe wyjście w wyniku wykonania poniższego kodu: int x[5] = { 1, 2, 3, }; int *p = &x[0]; *++p += 10; for (int i = 0; i < 5; i++) { printf(\"%d \", x[i]); }",
        answers: [
            { text: "1 12 3 0 0", correct: true },
            { text: "1 2 13 0 0", correct: false },
            { text: "11 2 3 0 0", correct: false },
            { text: "1 2 3 10 0", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "385. Jak należy uzupełnić format w funkcji printf, aby wartości poszczególnych zmiennych zostały wypisane na standardowe wyjście jako: c = A, a = 10, x = 1.23456e+17; int a = 10; double x = 123.456; char c = 'A'; printf(\"c = ..., a = ..., x = ...\\n\", c, a, x);",
        answers: [
            { text: "c = %c, a = %d, x = %.5e", correct: true },
            { text: "c = %s, a = %i, x = %f", correct: false },
            { text: "c = %c, a = %f, x = %d", correct: false },
            { text: "c = %d, a = %d, x = %e", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "386. Co zostanie wypisane na standardowe wyjście po wykonaniu następującego kodu? void swap(int, int); int main() { int x = 10, y = 20; swap(x, y); printf(\"x = %d, y = %.0f\\n\", x, y); } void swap(int a, int b) { int c = a; a = b; b = c; }",
        answers: [
            { text: "x = 10, y = 20", correct: true },
            { text: "x = 20, y = 10", correct: false },
            { text: "x = 10, y = 10", correct: false },
            { text: "x = 20, y = 20", correct: false }
        ]
    },
    {
        category: "Języki Programowania",
        question: "387. Jaki interfejs implementowany jest w klasie w celu kopiowania wartości obiektu do nowej instancji?",
        answers: [
            { text: "ICloneable", correct: true },
            { text: "IComparable", correct: false },
            { text: "IDisposable", correct: false },
            { text: "IEnumerable", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "388. Jaki związek pomiędzy dwiema klasami należy zastosować w klasie, która zarządza kolekcją obiektów drugiej klasy?",
        answers: [
            { text: "Agregacja", correct: true },
            { text: "Dziedziczenie", correct: false },
            { text: "Kompozycja", correct: false },
            { text: "Asocjacja", correct: false }
        ]
    },
    {
        category: "Inżynieria Oprogramowania",
        question: "389. Co się stanie, gdy edytor programistyczny (Visual Studio, Net Beans) oznaczy w którejś linijce kodu warning (ostrzeżenie)?",
        answers: [
            { text: "Kod skompiluje się, ale może działać niepoprawnie", correct: true },
            { text: "Kod nie zostanie skompilowany", correct: false },
            { text: "Program automatycznie się zatrzyma", correct: false },
            { text: "Błąd zostanie zignorowany", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "390. Wiedzę analityczną można pozyskać z wykorzystaniem:",
        answers: [
            { text: "Eksploracji danych", correct: true },
            { text: "Kompilacji kodu", correct: false },
            { text: "Testowania jednostkowego", correct: false },
            { text: "Optymalizacji algorytmów", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "391. Do zewnętrznych źródeł pozyskiwania wiedzy należy zaliczyć:",
        answers: [
            { text: "Bazy danych publicznych", correct: true },
            { text: "Wewnętrzne raporty firmy", correct: false },
            { text: "Dokumentacja kodu", correct: false },
            { text: "Notatki projektowe", correct: false }
        ]
    },
    {
        category: "Informatyka",
        question: "392. Pozyskanie wiedzy z danych nie jest realizowane przez:",
        answers: [
            { text: "Kompilację kodu", correct: true },
            { text: "Analizę statystyczną", correct: false },
            { text: "Eksplorację danych", correct: false },
            { text: "Modelowanie predykcyjne", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "393. W jakich sytuacjach należy przeprowadzić estymację modelu ekonometrycznego z wykorzystaniem metody Cochrane-Orcutt’a:",
        answers: [
            { text: "Występuje autokorelacja reszt", correct: true },
            { text: "Występuje heteroskedastyczność", correct: false },
            { text: "Występuje współliniowość", correct: false },
            { text: "Dane są niestacjonarne", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "394. Regresja (metoda) krokowa wsteczna polega na skonstruowaniu modelu zawierającego:",
        answers: [
            { text: "Zmienne o największym znaczeniu statystycznym", correct: true },
            { text: "Wszystkie dostępne zmienne", correct: false },
            { text: "Losowo wybrane zmienne", correct: false },
            { text: "Zmienne o najmniejszej korelacji", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "395. Jak należy interpretować związek między zmiennymi x i y w modelu: ln y = α₀ + α₁x + ε:",
        answers: [
            { text: "Zmiana x o 1 jednostkę powoduje procentową zmianę y o α₁", correct: true },
            { text: "Zmiana x o 1% powoduje zmianę y o α₁", correct: false },
            { text: "Zmiana y o 1 jednostkę zależy od α₁", correct: false },
            { text: "Zmiana x i y jest liniowa", correct: false }
        ]
    },
    {
        category: "Ekonometria i Nauki Aktuarialne",
        question: "396. Dany jest model: Xₜ = α · Yₜ₋₁ + εₜ, Yₜ = β · Xₜ₋₁ + μₜ. Czy parametry tego modelu można szacować Klasyczną Metodą Najmniejszych Kwadratów?",
        answers: [
            { text: "Nie, wymaga metod instrumentalnych", correct: true },
            { text: "Tak, bez modyfikacji", correct: false },
            { text: "Tak, po transformacji", correct: false },
            { text: "Nie, tylko metodą GMM", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "397. Pan Kowalski dokonuje na początku każdego kwartału wpłaty w wysokości 1000. Obliczyć przyszłą wartość renty po pięciu latach, jeżeli w banku obowiązuje oprocentowanie 4% w skali roku.",
        answers: [
            { text: "21 648,58 zł", correct: true },
            { text: "20 000 zł", correct: false },
            { text: "22 000 zł", correct: false },
            { text: "21 000 zł", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "398. Bank A ma w swojej ofercie lokatę dwuletnią z kapitalizacją kwartalną złożoną z dołu. Nominalna stopa procentowa 2%. Bank B ma w swojej ofercie lokatę dwuletnią z kapitalizacją kwartalną złożoną z góry. Nominalna stopa dyskontowa 2%. Która oferta jest korzystniejsza?",
        answers: [
            { text: "Bank A", correct: true },
            { text: "Bank B", correct: false },
            { text: "Obie są równe", correct: false },
            { text: "Brak danych do oceny", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "399. Nominalna stopa procentowa (oprocentowanie z dołu) jest równa 10%. Równoważna jej stopa dyskontowa (oprocentowanie z góry) jest:",
        answers: [
            { text: "9,09%", correct: true },
            { text: "10%", correct: false },
            { text: "11%", correct: false },
            { text: "8%", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "400. Jak zmienia się stopa jednorazowej składki netto dla polisy na życie?",
        answers: [
            { text: "Rośnie wraz z wiekiem ubezpieczonego", correct: true },
            { text: "Maleje wraz z wiekiem", correct: false },
            { text: "Pozostaje stała", correct: false },
            { text: "Zależy od płci", correct: false }
        ]
    },
    {
        category: "Finanse",
        question: "401. Oceniono metodą kapitałową pewne urządzenie otrzymując przy stopie procentowej 3% NPV= -1200. Wewnętrzna stopa zwrotu dla urządzenia jest:",
        answers: [
            { text: "Niższa niż 3%", correct: true },
            { text: "Wyższa niż 3%", correct: false },
            { text: "Równa 3%", correct: false },
            { text: "Nieokreślona", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "402. 17 spośród 70 ankietowanych przedsiębiorców uznało nowe rozwiązania podatkowe za korzystne. W celu weryfikacji przypuszczenia, że nowe przepisy podatkowe za korzystne uznaje istotnie mniej niż 1/4 przedsiębiorców należy przeprowadzić test następującego zestawu hipotez:",
        answers: [
            { text: "H₀: p = 0,25, H₁: p < 0,25", correct: true },
            { text: "H₀: p = 0,25, H₁: p > 0,25", correct: false },
            { text: "H₀: p = 0,243, H₁: p ≠ 0,243", correct: false },
            { text: "H₀: p = 0,25, H₁: p ≠ 0,25", correct: false }
        ]
    },
    {
        category: "Statystyka",
        question: "403. W celu badania istotności korelacji pomiędzy dwoma cechami można zastosować statystykę r daną wzorem √(1 - r²) √(n - 2), która:",
        answers: [
            { text: "Ma rozkład t-Studenta", correct: true },
            { text: "Ma rozkład normalny", correct: false },
            { text: "Ma rozkład chi-kwadrat", correct: false },
            { text: "Ma rozkład F", correct: false }
        ]
    },
        {
            category: "Statystyka",
            question: "404. Pewna linia lotnicza dokonała analizy liczby przewożonych pasażerów w wybranych 110 lotach. W przypadku 27 spośród nich, sprzedano bilety na mniej niż 85% miejsc w samolotach. W celu weryfikacji, czy na tej podstawie można stwierdzić, że ponad 15% wolnych miejsc jest w istotnie mniej niż 30% lotów należy przeprowadzić test następującego zestawu hipotez:",
            answers: [
                { text: "H₀: p = 0,3, H₁: p < 0,3", correct: true },
                { text: "H₀: p = 0,3, H₁: p > 0,3", correct: false },
                { text: "H₀: p = 0,245, H₁: p ≠ 0,245", correct: false },
                { text: "H₀: p = 0,3, H₁: p ≠ 0,3", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "405. Jaką rolę pełni metoda GET wykorzystywana w protokole http?",
            answers: [
                { text: "Pobieranie danych z serwera", correct: true },
                { text: "Wysyłanie danych do serwera", correct: false },
                { text: "Usuwanie danych na serwerze", correct: false },
                { text: "Modyfikowanie danych na serwerze", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "406. Jakie wartości zostaną wypisane na standardowe wyjście w wyniku wykonania poniższego kodu:\nint a = 1;\na = a++ + ++a;\nprintf(\"%d %d %d\\n\", a, a++, a++);",
            answers: [
                { text: "4 4 5", correct: true },
                { text: "1 2 3", correct: false },
                { text: "3 3 4", correct: false },
                { text: "2 3 4", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "407. Jaki znak (znaki) służy do wstawiania komentowania linii lub części linii w kodzie źródłowym zapisanym w języku C?",
            answers: [
                { text: "//", correct: true },
                { text: "#", correct: false },
                { text: "/* */", correct: false },
                { text: "--", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "408. Elementem dokumentacji użytkowej nie jest:",
            answers: [
                { text: "Dokumentacja techniczna", correct: true },
                { text: "Instrukcja obsługi", correct: false },
                { text: "Podręcznik użytkownika", correct: false },
                { text: "Pomoc kontekstowa", correct: false }
            ]
        },
        {
            category: "Sztuczna Inteligencja",
            question: "409. Odpowiedź sztucznego neuronu #N_0# o aktywacji \"skok jednostkowy\" wynosi:",
            hasImage: true,
            imageUrl: "409.jpg",
            answers: [
                { text: "1, jeśli suma ważona wejść jest większa od progu", correct: true },
                { text: "0, jeśli suma ważona wejść jest mniejsza od progu", correct: false },
                { text: "-1", correct: false },
                { text: "0,5", correct: false }
            ]
        },
        {
            category: "Matematyka",
            question: "410. Z trzech surowców s1, s2 i s3 produkuje się dwie mieszanki M1, M2. Ilość surowców jest ograniczona odpowiednio do 100, 200 i 300 jednostek. Ograniczenia zużycia trzech surowców związanych z produkcją dwóch mieszanek w proporcjach: mieszanka M1 – 3:5:1; mieszanka M2 – 2:3:2 mają postać:",
            answers: [
                { text: "3x₁ + 2x₂ ≤ 100, 5x₁ + 3x₂ ≤ 200, x₁ + 2x₂ ≤ 300", correct: true },
                { text: "3x₁ + 5x₂ ≤ 100, 2x₁ + 3x₂ ≤ 200, x₁ + 2x₂ ≤ 300", correct: false },
                { text: "x₁ + x₂ ≤ 100, 2x₁ + 3x₂ ≤ 200, 3x₁ + 2x₂ ≤ 300", correct: false },
                { text: "3x₁ + 2x₂ ≥ 100, 5x₁ + 3x₂ ≥ 200, x₁ + 2x₂ ≥ 300", correct: false }
            ]
        },
        {
            category: "Matematyka",
            question: "411. W pewnym pierwotnym modelu programowania liniowego wprowadzono zmienne x6 i x7, które są zmiennymi sztucznymi stosowanymi w metodzie dwóch faz algorytmu simpleks. Jaka funkcja kryterialna może być zastosowana do wyznaczenia pierwszego rozwiązania bazowego problemu pierwotnego?",
            answers: [
                { text: "min x₆ + x₇", correct: true },
                { text: "max x₆ + x₇", correct: false },
                { text: "min x₁ + x₂", correct: false },
                { text: "max x₁ + x₂", correct: false }
            ]
        },
        {
            category: "Matematyka",
            question: "412. Produkcja 3 wyrobów w liczbie x1, x2, x3 musi się odbywać w proporcji 3:2:5. Jaką postać liniową ma ta zależność:",
            answers: [
                { text: "3x₁ = 2x₂ = 5x₃", correct: true },
                { text: "x₁ + x₂ + x₃ = 3", correct: false },
                { text: "3x₁ + 2x₂ + 5x₃ = 0", correct: false },
                { text: "x₁ = 3, x₂ = 2, x₃ = 5", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "413. W ramach pewnego projektu trzeba wykonać operacje j oznaczone literami A,…,G. W tabeli podane są czasy tych wykonywania operacji p(j), a także najwcześniejsze ES(j) oraz najpóźniejsze LS(j) czasy ich rozpoczęcia. Skrócenie których operacji może skrócić czas wykonywania całego projektu?\n\n| j | p(j) | ES(j) | LS(j) |\n|---|------|-------|-------|\n| A | 4    | 0     | 0     |\n| B | 2    | 0     | 2     |\n| C | 4    | 2     | 6     |\n| D | 3    | 4     | 7     |\n| E | 6    | 4     | 4     |\n| F | 3    | 7     | 13    |\n| G | 6    | 10    | 10    |",
            answers: [
                { text: "Operacje A, E, G", correct: true },
                { text: "Operacje B, C, F", correct: false },
                { text: "Operacje D, F", correct: false },
                { text: "Wszystkie operacje", correct: false }
            ]
        },
        {
            category: "Ekonometria i Nauki Aktuarialne",
            question: "414. Testem stabilności postaci analitycznej modelu ekonometrycznego jest:",
            answers: [
                { text: "Test Chow", correct: true },
                { text: "Test t", correct: false },
                { text: "Test F", correct: false },
                { text: "Test Jarque-Bera", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "415. W teście istotności pojedynczej zmiennej otrzymano p-value = 0,95. W związku z tym:",
            answers: [
                { text: "Nie ma podstaw do odrzucenia hipotezy zerowej", correct: true },
                { text: "Odrzucamy hipotezę zerową", correct: false },
                { text: "Zmienna jest istotna", correct: false },
                { text: "Test jest niejednoznaczny", correct: false }
            ]
        },
        {
            category: "Ekonometria i Nauki Aktuarialne",
            question: "416. Współczynnik determinacji skorygowany jest stosowany, gdy:",
            answers: [
                { text: "Chcemy uwzględnić liczbę zmiennych w modelu", correct: true },
                { text: "Model jest nieliniowy", correct: false },
                { text: "Dane są heteroskedastyczne", correct: false },
                { text: "Występuje autokorelacja", correct: false }
            ]
        },
        {
            category: "Ekonometria i Nauki Aktuarialne",
            question: "417. Wyestymowano parametry modelu: Yₜ = 0,9 · Xₜ + 0,5 · Zₜ, Zₜ = Yₜ₋₁. Jeżeli wartość zmiennej Xₜ jednorazowo wzrosła o jednostkę, to w rezultacie w następnym okresie zmienna Yₜ:",
            answers: [
                { text: "Wzrośnie o 0,9", correct: true },
                { text: "Wzrośnie o 0,5", correct: false },
                { text: "Zmniejszy się o 0,9", correct: false },
                { text: "Pozostanie bez zmian", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "418. W przypadku testowania hipotez H₀: m = m₀, H₁: m ≠ m₀ obliczona wartość statystyki t daje podstawy do odrzucenia hipotezy głównej na poziomie istotności α. Na tej podstawie testując hipotezy H₀: m = m₀, H₁: m > m₀, możemy stwierdzić, że:",
            answers: [
                { text: "Nie ma podstaw do odrzucenia H₀", correct: true },
                { text: "Odrzucamy H₀", correct: false },
                { text: "Test jest niejednoznaczny", correct: false },
                { text: "Potrzebne są dodatkowe dane", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "419. Dokonano analizy spalin 61 samochodów pewnej marki i obliczono, że w ich przypadku średnia emisja cząstek stałych wynosi 0,007 g/km, przy odchyleniu stand. równym 0,001 g/km. W celu sprawdzenia czy wartość oczekiwana emisji cząstek stałych w samochodach tej marki istotnie przekracza normę równą 0,005 g/km należy przeprowadzić test następującego zestawu hipotez:",
            answers: [
                { text: "H₀: m = 0,005, H₁: m > 0,005", correct: true },
                { text: "H₀: m = 0,005, H₁: m < 0,005", correct: false },
                { text: "H₀: m = 0,007, H₁: m ≠ 0,007", correct: false },
                { text: "H₀: m = 0,005, H₁: m ≠ 0,005", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "420. Niech F będzie dystrybuantą zmiennej losowej o rozkładzie N(2,3). Wtedy:",
            answers: [
                { text: "F(2) = 0,5", correct: true },
                { text: "F(2) = 0", correct: false },
                { text: "F(2) = 1", correct: false },
                { text: "F(2) = 0,25", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "421. Niech X i Y będą niezależnymi zmiennymi losowymi takimi, że D²X = 9, D²Y = 4. Wtedy D²(X - Y):",
            answers: [
                { text: "13", correct: true },
                { text: "5", correct: false },
                { text: "36", correct: false },
                { text: "16", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "422. Dla ilości sprzedaży pewnego produktu wyznaczono indeks łańcuchowy. Wartość tego indeksu w roku 2018 wynosiła 1,21. Oznacza to, że:",
            answers: [
                { text: "Sprzedaż w 2018 wzrosła o 21% w stosunku do 2017", correct: true },
                { text: "Sprzedaż w 2018 wzrosła o 21% w stosunku do bazy", correct: false },
                { text: "Sprzedaż w 2018 spadła o 21%", correct: false },
                { text: "Sprzedaż w 2018 jest 1,21 raza wyższa niż w 2017", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "423. Dla ilości sprzedaży pewnego produktu wyznaczono indeks o stałej podstawie, jako podstawę przyjmując rok 2016. Wartość tego indeksu w roku 2017 wynosiła 1,21, natomiast w roku 2018 indeks wynosił 0,83. Oznacza to, że:",
            answers: [
                { text: "Sprzedaż w 2018 była niższa niż w 2016", correct: true },
                { text: "Sprzedaż w 2018 była wyższa niż w 2017", correct: false },
                { text: "Sprzedaż w 2018 była równa sprzedaży w 2017", correct: false },
                { text: "Sprzedaż w 2018 wzrosła o 83% w stosunku do 2016", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "424. Które miary badają nam kształt rozkładu badanej cechy?",
            answers: [
                { text: "Skosność i kurtoza", correct: true },
                { text: "Średnia i mediana", correct: false },
                { text: "Wariancja i odchylenie standardowe", correct: false },
                { text: "Moda i rozstęp", correct: false }
            ]
        },
        {
            category: "Statystyka",
            question: "425. Współczynnik korelacji Spearmana określa:",
            answers: [
                { text: "Siłę i kierunek monotonicznej zależności między zmiennymi", correct: true },
                { text: "Liniową zależność między zmiennymi", correct: false },
                { text: "Przyczynowość między zmiennymi", correct: false },
                { text: "Zależność wykładniczą między zmiennymi", correct: false }
            ]
        },
        {
            category: "Matematyka",
            question: "426. W wyniku rozwiązania gry o sumie zero gracz A stosując dwie strategie A1 i A2 z częstością odpowiednio p1=14/15 i p2=1/15 osiągnie przeciętny zysk w wysokości v=2180/15. Ile wynosi przegrana gracza B i jak powinien zachować się gracz A w najbliższej grze?",
            answers: [
                { text: "Przegrana B = 2180/15, A powinien wybrać A1", correct: true },
                { text: "Przegrana B = 0, A powinien wybrać A2", correct: false },
                { text: "Przegrana B = 2180/15, A powinien wybrać A2", correct: false },
                { text: "Przegrana B = 14/15, A powinien losowo wybrać strategię", correct: false }
            ]
        },
        {
            category: "Matematyka",
            question: "427. Które ze strategii graczy A i B są zdominowane przez pozostałe w grze o sumie 0, w której macierz wypłat przedstawia się następująco:\n\n|   | B1  | B2  | B3  |\n|---|-----|-----|-----|\n| A1| 10  | 230 | 50  |\n| A2| 150 | 250 | 140 |\n| A3| 80  | 200 | 220 |",
            answers: [
                { text: "A1 i B2 są zdominowane", correct: true },
                { text: "A3 i B1 są zdominowane", correct: false },
                { text: "A2 i B3 są zdominowane", correct: false },
                { text: "Żadna strategia nie jest zdominowana", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "428. Jak w metodzie PERT szacuje się średni oczekiwany czas trwania czynności (to) i jaką postać przyjmuje wariancja σ² - miara rozbieżności pomiędzy optymistyczną i pesymistyczną oceną czasu trwania czynności (oznaczenia: a – czas optymistyczny, m – czas modalny, b – czas pesymistyczny):",
            answers: [
                { text: "to = (a + 4m + b)/6, σ² = ((b - a)/6)²", correct: true },
                { text: "to = (a + m + b)/3, σ² = (b - a)²", correct: false },
                { text: "to = (a + 2m + b)/4, σ² = ((b - a)/4)²", correct: false },
                { text: "to = (a + m + b)/3, σ² = ((b - a)/3)²", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "429. Jaki język należy zastosować do zaprojektowania struktury klas?",
            answers: [
                { text: "UML", correct: true },
                { text: "SQL", correct: false },
                { text: "HTML", correct: false },
                { text: "CSS", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "430. Brak modyfikatora widoczności dla klasy oznacza, że klasa będzie miała widoczność:",
            answers: [
                { text: "Internal w C#", correct: true },
                { text: "Public w C#", correct: false },
                { text: "Private w C#", correct: false },
                { text: "Protected w C#", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "431. W celu utworzenia dokumentacji XML dla kodu w środowisku Visual Studio należy:",
            answers: [
                { text: "Użyć komentarzy z trzema ukośnikami (///)", correct: true },
                { text: "Dodać atrybut [Documentation]", correct: false },
                { text: "Użyć znacznika <doc>", correct: false },
                { text: "Skonfigurować plik XML w ustawieniach projektu", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "432. W celu przeprowadzenia testów jednostkowych w środowisku .NET należy:",
            answers: [
                { text: "Użyć frameworka MSTest lub NUnit", correct: true },
                { text: "Skompilować kod z flagą --test", correct: false },
                { text: "Dodać bibliotekę Selenium", correct: false },
                { text: "Użyć tylko konsoli debugowania", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "433. Komentarz klasy lub metody w .NET dla dokumentacji XML umieszczamy po znakach:",
            answers: [
                { text: "///", correct: true },
                { text: "//", correct: false },
                { text: "/*", correct: false },
                { text: "#", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "434. Kod, który powinien zostać wykonany niezależnie od tego czy wystąpi wyjątek należy umieścić w sekcji:",
            answers: [
                { text: "finally", correct: true },
                { text: "try", correct: false },
                { text: "catch", correct: false },
                { text: "throw", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "435. Metody testujące kod klas muszą być w środowisku Visual Studio oznaczane przez zastosowanie:",
            answers: [
                { text: "[TestMethod]", correct: true },
                { text: "[RunTest]", correct: false },
                { text: "[UnitTest]", correct: false },
                { text: "[Execute]", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "436. Wyrzucanie wyjątków w środowisku Visual Studio musi być testowane poprzez wykorzystanie:",
            answers: [
                { text: "Assert.ThrowsException", correct: true },
                { text: "TryCatch.Assert", correct: false },
                { text: "Exception.Test", correct: false },
                { text: "Throw.Validate", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "437. W repozytorium kodu źródłowego aplikacji w środowisku .git pomijamy zwykle (.gitignore):",
            answers: [
                { text: "Pliki tymczasowe i binaria", correct: true },
                { text: "Pliki źródłowe .cs", correct: false },
                { text: "Pliki konfiguracyjne projektu", correct: false },
                { text: "Dokumentację kodu", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "438. Nowy kod aplikacji, który dopiero będzie testowany (przygotowanie nowych funkcji) zapisujemy w środowisku .git w:",
            answers: [
                { text: "Nowej gałęzi (branch)", correct: true },
                { text: "Głównej gałęzi (main)", correct: false },
                { text: "Pliku tymczasowym", correct: false },
                { text: "Zewnętrznym repozytorium", correct: false }
            ]
        },
        {
            category: "Struktury Danych i Algorytmy",
            question: "439. Jakiego algorytmu użyjesz do efektywnego wyszukiwania elementu w liście L zawierającej n elementów?",
            answers: [
                { text: "Wyszukiwanie liniowe", correct: true },
                { text: "Wyszukiwanie binarne", correct: false },
                { text: "Algorytm QuickSort", correct: false },
                { text: "Algorytm BFS", correct: false }
            ]
        },
        {
            category: "Struktury Danych i Algorytmy",
            question: "440. Jakiego algorytmu użyjesz do efektywnego wyszukiwania elementu w posortowanej tablicy T zawierającej n elementów?",
            answers: [
                { text: "Wyszukiwanie binarne", correct: true },
                { text: "Wyszukiwanie liniowe", correct: false },
                { text: "Algorytm QuickSort", correct: false },
                { text: "Algorytm DFS", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "441. W programowaniu strukturalnym Dijkstra zaproponował użycie tylko trzech rodzajów struktur. Nie należy do nich:",
            answers: [
                { text: "Rekurencja", correct: true },
                { text: "Sekwencja", correct: false },
                { text: "Selekcja", correct: false },
                { text: "Iteracja", correct: false }
            ]
        },
        {
            category: "Struktury Danych i Algorytmy",
            question: "442. Heurystyka jest wykorzystywana w celu:",
            answers: [
                { text: "Znalezienia przybliżonego rozwiązania w krótkim czasie", correct: true },
                { text: "Gwarancji optymalnego rozwiązania", correct: false },
                { text: "Zastąpienia algorytmów dokładnych", correct: false },
                { text: "Uniknięcia analizy problemu", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "443. Jaki mechanizm należy wykorzystać, projektując dostęp do danych w aplikacji PHP?",
            answers: [
                { text: "PDO", correct: true },
                { text: "FTP", correct: false },
                { text: "HTTP", correct: false },
                { text: "SMTP", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "444. W jakim pliku w środowisku PHP należy włączyć sterownik określonej bazy danych?",
            answers: [
                { text: "php.ini", correct: true },
                { text: "config.php", correct: false },
                { text: "index.php", correct: false },
                { text: "database.php", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "445. Jeżeli serwer nie będzie mógł przetworzyć skryptu PHP z powodu błędu, zwrócony zostanie kod statusu HTTP:",
            answers: [
                { text: "500", correct: true },
                { text: "404", correct: false },
                { text: "403", correct: false },
                { text: "200", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "446. Wstępny wygląd stron (położenie elementów) oraz ich hierarchię dla interfejsu klienta internetowego tworzymy, wykorzystując:",
            answers: [
                { text: "Wireframe", correct: true },
                { text: "CSS", correct: false },
                { text: "JavaScript", correct: false },
                { text: "SQL", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "447. Kursor w proceduralnym języku SQL jest:",
            answers: [
                { text: "Obiektem do iteracji po wynikach zapytania", correct: true },
                { text: "Wskaźnikiem na tabelę", correct: false },
                { text: "Zmienną tymczasową", correct: false },
                { text: "Funkcją agregującą", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "448. Zapis modelu relacyjnego jako modelu obiektowego jest:",
            answers: [
                { text: "Mapowaniem ORM", correct: true },
                { text: "Normalizacją bazy danych", correct: false },
                { text: "Indeksowaniem tabel", correct: false },
                { text: "Tworzeniem kluczy obcych", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "449. W celu pobrania danych z dwóch lub więcej relacji konieczne jest użycie:",
            answers: [
                { text: "JOIN", correct: true },
                { text: "WHERE", correct: false },
                { text: "GROUP BY", correct: false },
                { text: "ORDER BY", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "450. Warunkiem złączenia teta jest:",
            answers: [
                { text: "Dowolne wyrażenie logiczne w klauzuli ON", correct: true },
                { text: "Równość kluczy głównych", correct: false },
                { text: "Zgodność typów danych", correct: false },
                { text: "Unikalność wartości w kolumnach", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "451. Aby rozróżnić dwie klasy o identycznych nazwach w języku C#, należy wykorzystać:",
            answers: [
                { text: "Namespace", correct: true },
                { text: "Alias", correct: false },
                { text: "Modyfikator sealed", correct: false },
                { text: "Dziedziczenie", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "452. Co zostanie wypisane po wywołaniu metody Main() w języku C# jeśli:\npublic class A { public A() { Console.Write(\"Klasa A,\"); } public A(int x) { Console.Write(\"Klasa A\" + x + \",\"); } }\nclass B : A { public B() : base(2) { } }\npublic static void Main(string[] args) { A k1 = new A(1); B k2 = new B(); }",
            answers: [
                { text: "Klasa A1,Klasa A2,", correct: true },
                { text: "Klasa A,Klasa A,", correct: false },
                { text: "Klasa A1,Klasa A,", correct: false },
                { text: "Klasa A2,Klasa A1,", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "453. Zbiór pewnych funkcji (kontrakt), które realizują różne klasy najlepiej zaprojektować w postaci:",
            answers: [
                { text: "Interfejsu", correct: true },
                { text: "Klasy abstrakcyjnej", correct: false },
                { text: "Klasy statycznej", correct: false },
                { text: "Struktury", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "454. Co jest wymagane w Visual Studio, aby w projekcie danej aplikacji można było korzystać z innego projektu aplikacji?",
            answers: [
                { text: "Dodanie referencji do projektu", correct: true },
                { text: "Kompilacja obu projektów osobno", correct: false },
                { text: "Użycie tej samej przestrzeni nazw", correct: false },
                { text: "Scalenie projektów w jeden", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "455. Którego kodu nie są w stanie wygenerować automatycznie współczesne środowiska programistyczne np. Visual Studio?",
            answers: [
                { text: "Logiki biznesowej", correct: true },
                { text: "Konstruktorów", correct: false },
                { text: "Metod get/set", correct: false },
                { text: "Interfejsów", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "456. Wymagania funkcjonalne, formułowane w trakcie projektowania systemu informatycznego dotyczą:",
            answers: [
                { text: "Funkcji, które system powinien realizować", correct: true },
                { text: "Szybkości działania systemu", correct: false },
                { text: "Bezpieczeństwa danych", correct: false },
                { text: "Skalowalności systemu", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "457. Wymagania niefunkcjonalne, formułowane w trakcie projektowania systemu informatycznego dotyczą:",
            answers: [
                { text: "Wymagań dotyczących wydajności i bezpieczeństwa", correct: true },
                { text: "Sposobu implementacji funkcji", correct: false },
                { text: "Interfejsu użytkownika", correct: false },
                { text: "Działań użytkownika w systemie", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "458. Specyfikacja wymagań dla zintegrowanego systemu zarządzania dotyczy systemu przeznaczonego do:",
            answers: [
                { text: "Integracji procesów biznesowych w firmie", correct: true },
                { text: "Zarządzania bazami danych", correct: false },
                { text: "Tworzenia interfejsów użytkownika", correct: false },
                { text: "Analizy danych statystycznych", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "459. Związek pomiędzy aktorami na poniższym diagramie przypadków użycia oznacza, że:",
            hasImage: true,
            imageUrl: "459.jpg",
            answers: [
                { text: "Generalizacja – hierarchiczny podział ról, gdzie aktor Y dziedziczy przypadki użycia aktora X (specjalizacja roli)", correct: true },
                { text: "Asocjacja – prosty związek, w którym aktor X współdziała bez hierarchii z aktorem Y", correct: false },
                { text: "Zależność «include» – aktor Y automatycznie rozszerza przypadki użycia aktora X", correct: false },
                { text: "Agregacja aktorów – kompozycja ról, w której rolę Y stanowi składnik roli X", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "460. W węźle sygnału nadawczego na diagramie czynności następuje:",
            answers: [
                { text: "Wysłanie sygnału do innego procesu", correct: true },
                { text: "Zakończenie procesu", correct: false },
                { text: "Rozpoczęcie nowej czynności", correct: false },
                { text: "Scalenie przepływów", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "461. Który z diagramów UML może służyć do modelowania dynamiki systemu?",
            answers: [
                { text: "Diagram sekwencji", correct: true },
                { text: "Diagram klas", correct: false },
                { text: "Diagram pakietów", correct: false },
                { text: "Diagram wdrożenia", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "462. Poniższy diagram zawiera:",
            hasImage: true,
            imageUrl: "462.jpg",
            answers: [
                { text: "Diagram sekwencji UML z trzema lifelines, sześcioma komunikatami (pięć synchronicznych i jeden asynchroniczny) oraz ramką ref", correct: true },
                { text: "Diagram komunikacyjny UML z wyraźnie zaznaczonymi rolami uczestników i strukturą połączeń między nimi", correct: false },
                { text: "Diagram aktywności UML ilustrujący przepływ sterowania między czynnościami w serwerze dokumentów", correct: false },
                { text: "Diagram struktury statycznej UML przedstawiający komponenty klienta i serwera", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "463. Jaki rodzaj związku między klasami A i B wynika z poniższego fragmentu kodu C#:\npublic class KlasaB {...} \npublic class KlasaA { public void Metoda(KlasaB b) {...} }",
            answers: [
                { text: "Zależność", correct: true },
                { text: "Dziedziczenie", correct: false },
                { text: "Agregacja", correct: false },
                { text: "Kompozycja", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "464. Który z wzorców projektowych najlepiej nadaje się do rozwiązania następującego problemu: Czytelnik pragnie wypożyczyć książkę. Wszystkie egzemplarze książki są aktualnie wypożyczone. Czytelnik rejestruje się jako osoba, która chce być powiadamiana, jeśli tylko pojawi się jakiś wolny egzemplarz.",
            answers: [
                { text: "Obserwator", correct: true },
                { text: "Singleton", correct: false },
                { text: "Fabryka", correct: false },
                { text: "Strategia", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "465. „List comprehension” w języku Python jest wydajnym mechanizmem tworzenia złożonych sekwencji. Jaka sekwencja zostanie utworzona w wyniku wykonania kodu: „for i in [(i,j) for i in range(2) for j in range(1,3)]: print(i)”:",
            answers: [
                { text: "(0,1) (0,2) (1,1) (1,2)", correct: true },
                { text: "0 1 2 3", correct: false },
                { text: "(1,1) (1,2) (2,1) (2,2)", correct: false },
                { text: "0 1 1 2", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "466. W języku Python wynikiem wykonania kodu: print(\"Licencjat.\"[:-2]) będzie:",
            answers: [
                { text: "Licencjat", correct: true },
                { text: "Licencj", correct: false },
                { text: "at.", correct: false },
                { text: "Licencjat.", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "467. W języku Python 3.7 wynikiem wykonania kodu: print \"Licencjat.\"[:-2] będzie:",
            answers: [
                { text: "Błąd składniowy", correct: true },
                { text: "Licencjat", correct: false },
                { text: "Licencjat.", correct: false },
                { text: "Licencj", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "468. Do szacowania kosztu realizacji przedsięwzięcia informatycznego można wykorzystać:",
            answers: [
                { text: "Metodę COCOMO", correct: true },
                { text: "Metodę Monte Carlo", correct: false },
                { text: "Analizę SWOT", correct: false },
                { text: "Diagram Gantta", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "469. Metoda delficka ustalania kosztów polega na:",
            answers: [
                { text: "Konsultacjach z ekspertami w iteracyjnych rundach", correct: true },
                { text: "Analizie statystycznej danych historycznych", correct: false },
                { text: "Symulacji komputerowej", correct: false },
                { text: "Porównaniu z podobnymi projektami", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "470. Szacowanie rozmiaru oprogramowania wykonuje się w oparciu o:",
            answers: [
                { text: "Punkty funkcyjne", correct: true },
                { text: "Liczbę linii kodu", correct: false },
                { text: "Czas realizacji", correct: false },
                { text: "Liczbę programistów", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "471. Do wyznaczenia granic projektu w metodzie punktów funkcyjnych wykorzystujemy:",
            answers: [
                { text: "Diagram kontekstowy", correct: true },
                { text: "Diagram klas", correct: false },
                { text: "Diagram sekwencji", correct: false },
                { text: "Diagram Gantta", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "472. Do obliczenia wagi przypadku użycia wykorzystujemy:",
            answers: [
                { text: "Liczbę aktorów i kroków", correct: true },
                { text: "Liczbę linii kodu", correct: false },
                { text: "Czas realizacji", correct: false },
                { text: "Liczbę zmiennych", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "473. Pracochłonność w metodzie COCOMO jest ustalana w oparciu o:",
            answers: [
                { text: "Rozmiar projektu i współczynniki korekcyjne", correct: true },
                { text: "Liczbę programistów", correct: false },
                { text: "Budżet projektu", correct: false },
                { text: "Czas realizacji", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "474. Jakie podstawowe narzędzie wykorzysta zespół zwinny w celu zdefiniowania wymagań klienta?",
            answers: [
                { text: "User stories", correct: true },
                { text: "Diagram Gantta", correct: false },
                { text: "Macierz RACI", correct: false },
                { text: "Analiza SWOT", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "475. Jeżeli członek zespołu zgłosi propozycję zmiany w projekcie PRINCE2, kto może ją zaakceptować?",
            answers: [
                { text: "Komitet sterujący", correct: true },
                { text: "Kierownik zespołu", correct: false },
                { text: "Analityk biznesowy", correct: false },
                { text: "Programista", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "476. Do jakiego celu kierownik projektu wykorzysta macierz RACI w metodyce PMI/PMBoK?",
            answers: [
                { text: "Określenia ról i odpowiedzialności", correct: true },
                { text: "Planowania harmonogramu", correct: false },
                { text: "Analizy ryzyka", correct: false },
                { text: "Szacowania kosztów", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "477. Osoba odpowiedzialna za wygląd strony WWW będzie modyfikować najczęściej warstwę:",
            answers: [
                { text: "Prezentacji (CSS)", correct: true },
                { text: "Logiki biznesowej", correct: false },
                { text: "Bazy danych", correct: false },
                { text: "Serwera", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "478. W celu ułatwienia pracy z dużą liczbą stylów CSS dla aplikacji internetowej można wykorzystać:",
            answers: [
                { text: "Preprocesory CSS (np. SASS)", correct: true },
                { text: "JavaScript", correct: false },
                { text: "HTML5", correct: false },
                { text: "PHP", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "479. Listę sterowników dla baz danych dostępnych w PHP określamy w pliku:",
            answers: [
                { text: "php.ini", correct: true },
                { text: "config.php", correct: false },
                { text: "db_connect.php", correct: false },
                { text: "index.php", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "480. Łącze ODBC (Open Database Connectivity) wykorzystywane do tworzenia aplikacji to:",
            answers: [
                { text: "Standardowy interfejs dostępu do baz danych", correct: true },
                { text: "Protokół sieciowy", correct: false },
                { text: "Język zapytań SQL", correct: false },
                { text: "Biblioteka PHP", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "481. Do tworzenia aplikacji bazodanowych stosowany jest:",
            answers: [
                { text: "SQL", correct: true },
                { text: "HTML", correct: false },
                { text: "CSS", correct: false },
                { text: "JavaScript", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "482. Jakimi podstawowymi metodami mogą posłużyć się programiści, aby zaprojektować klasy:",
            answers: [
                { text: "Dziedziczenie i hermetyzacja", correct: true },
                { text: "Iteracja i sekwencja", correct: false },
                { text: "Rekurencja i optymalizacja", correct: false },
                { text: "Normalizacja i indeksowanie", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "483. W diagramach klas UML agregację oznaczamy symbolem:",
            answers: [
                { text: "Pusty romb", correct: true },
                { text: "Wypełniony romb", correct: false },
                { text: "Strzałka", correct: false },
                { text: "Kropka", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "484. Do oznaczania prywatnych metod w diagramach klas UML służy symbol:",
            answers: [
                { text: "-", correct: true },
                { text: "+", correct: false },
                { text: "#", correct: false },
                { text: "~", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "485. Których grup pracowników dotyczy polityka bezpieczeństwa danych?",
            answers: [
                { text: "Wszystkich pracowników organizacji", correct: true },
                { text: "Tylko działu IT", correct: false },
                { text: "Tylko kadry zarządzającej", correct: false },
                { text: "Tylko pracowników administracyjnych", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "486. Respektowanie zapisów polityki bezpieczeństwa danych daje dodatkową korzyść dla organizacji w postaci:",
            answers: [
                { text: "Zwiększenia zaufania klientów", correct: true },
                { text: "Zmniejszenia liczby pracowników", correct: false },
                { text: "Obniżenia kosztów produkcji", correct: false },
                { text: "Skrócenia czasu realizacji projektów", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "487. Wdrożenie procedur bezpieczeństwa, polityki bezpieczeństwa czy zasad, reguł itp. jest zadaniem:",
            answers: [
                { text: "Działu IT i zarządu", correct: true },
                { text: "Tylko zarządu", correct: false },
                { text: "Tylko działu HR", correct: false },
                { text: "Programistów", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "488. Który z symboli krotności oznacza, że pomiędzy obiektami A i B może nie występować powiązanie?",
            answers: [
                { text: "0..*", correct: true },
                { text: "1..*", correct: false },
                { text: "1", correct: false },
                { text: "*", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "489. Jeśli atrybut jest widoczny tylko w danej klasie, to jego poziom widoczności jest:",
            answers: [
                { text: "Private", correct: true },
                { text: "Public", correct: false },
                { text: "Protected", correct: false },
                { text: "Internal", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "490. Jeśli atrybut jest widoczny tylko w danej klasie i klasach pochodnych, to jego poziom widoczności jest:",
            answers: [
                { text: "Protected", correct: true },
                { text: "Private", correct: false },
                { text: "Public", correct: false },
                { text: "Internal", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "491. Wspólnicy spółki z ograniczoną odpowiedzialnością są zobowiązani jedynie do świadczeń:",
            answers: [
                { text: "Określonych w umowie spółki", correct: true },
                { text: "Pełnej odpowiedzialności za długi", correct: false },
                { text: "Zabezpieczenia majątku spółki", correct: false },
                { text: "Zarządzania spółką", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "492. Wspólnicy spółki z ograniczoną odpowiedzialnością za zobowiązania spółki:",
            answers: [
                { text: "Nie ponoszą odpowiedzialności", correct: true },
                { text: "Odpowiadają całym swoim majątkiem", correct: false },
                { text: "Odpowiadają tylko do wysokości wkładu", correct: false },
                { text: "Odpowiadają solidarnie", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "493. Do zgłoszenia spółki partnerskiej do sądu rejestrowego należy dołączyć:",
            answers: [
                { text: "Umowę spółki i listę partnerów", correct: true },
                { text: "Tylko umowę spółki", correct: false },
                { text: "Tylko listę wspólników", correct: false },
                { text: "Bilans finansowy", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "494. Powództwo przeciwko osobie prawnej lub innemu podmiotowi niebędącemu osobą fizyczną wytacza się według:",
            answers: [
                { text: "Miejsca siedziby podmiotu", correct: true },
                { text: "Miejsca zamieszkania powoda", correct: false },
                { text: "Miejsca zdarzenia", correct: false },
                { text: "Dowolnego sądu w kraju", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "495. Powództwo o roszczenie majątkowe przeciwko przedsiębiorcy można wytoczyć przed sąd:",
            answers: [
                { text: "Miejsca siedziby przedsiębiorcy", correct: true },
                { text: "Miejsca zamieszkania powoda", correct: false },
                { text: "Dowolnego sądu okręgowego", correct: false },
                { text: "Sądu najwyższego", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "496. Sąd w toku postępowania może skierować strony do mediacji:",
            answers: [
                { text: "Na każdym etapie postępowania", correct: true },
                { text: "Tylko przed rozpoczęciem sprawy", correct: false },
                { text: "Tylko po wydaniu wyroku", correct: false },
                { text: "Wyłącznie na wniosek stron", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "497. Z zawezwaniem do próby ugodowej – bez względu na własność rzeczową – można zwrócić się do:",
            answers: [
                { text: "Sądu rejonowego", correct: true },
                { text: "Sądu okręgowego", correct: false },
                { text: "Sądu apelacyjnego", correct: false },
                { text: "Mediatora prywatnego", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "498. W przypadku, gdy nie można w pełni spłacić wszystkich wierzytelności spółki jawnej, albowiem nie wystarcza na ten cel aktywów majątkowych spółki, należy posłużyć się:",
            answers: [
                { text: "Majątkiem wspólników", correct: true },
                { text: "Tylko majątkiem spółki", correct: false },
                { text: "Funduszem rezerwowym", correct: false },
                { text: "Pożyczką bankową", correct: false }
            ]
        },
        {
            category: "Prawo",
            question: "499. W razie zaistnienia potrzeby zastosowania przepisów ustawy obejmującej przepisy części ogólnej i przepisy części szczegółowej należy:",
            answers: [
                { text: "Najpierw zastosować przepisy ogólne", correct: true },
                { text: "Zastosować tylko przepisy szczegółowe", correct: false },
                { text: "Pominąć przepisy ogólne", correct: false },
                { text: "Zastosować przepisy w dowolnej kolejności", correct: false }
            ]
        },
        {
            category: "Mikroekonomia",
            question: "500. Przedsiębiorstwo XYZ produkuje, jako jedyne na świecie, wyrób A. Która z decyzji przedsiębiorstwa XYZ spowoduje zwiększenie barier wejścia na ten rynek:",
            answers: [
                { text: "Opatentowanie technologii produkcji", correct: true },
                { text: "Obniżenie ceny wyrobu", correct: false },
                { text: "Zwiększenie produkcji", correct: false },
                { text: "Wycofanie wyrobu z rynku", correct: false }
            ]
        },
        {
            category: "Mikroekonomia",
            question: "501. Przedsiębiorstwo ABC jest producentem specjalistycznych podzespołów X. Istnieją dwa przedsiębiorstwa (A i B), które używają tych podzespołów w swoich wyrobach. ABC jest dostawcą obu tych przedsiębiorstw. Przedsiębiorstwa A i B właśnie ogłosiły fuzję. Co to oznacza dla firmy ABC?",
            answers: [
                { text: "Może zmniejszyć się liczba odbiorców", correct: true },
                { text: "Zwiększy się popyt na podzespoły", correct: false },
                { text: "ABC stanie się monopolistą", correct: false },
                { text: "ABC będzie musiało obniżyć ceny", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "502. Produkt A przedsiębiorstwa XYZ jest, wg macierzy BCG, psem. Oznacza to, że przedsiębiorstwo XYZ powinno:",
            answers: [
                { text: "Wycofać produkt z rynku", correct: true },
                { text: "Zwiększyć inwestycje w produkt", correct: false },
                { text: "Utrzymać produkt bez zmian", correct: false },
                { text: "Rozwijać produkt na nowym rynku", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "503. Produkt A przedsiębiorstwa XYZ jest, wg macierzy BCG, dojną krową. Oznacza to, że przedsiębiorstwo XYZ powinno:",
            answers: [
                { text: "Maksymalizować zyski z produktu", correct: true },
                { text: "Wycofać produkt z rynku", correct: false },
                { text: "Zainwestować w rozwój produktu", correct: false },
                { text: "Zmniejszyć produkcję", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "504. Produkt A przedsiębiorstwa XYZ jest, wg macierzy BCG, gwiazdą. Oznacza to, że przedsiębiorstwo XYZ powinno:",
            answers: [
                { text: "Inwestować w rozwój produktu", correct: true },
                { text: "Wycofać produkt z rynku", correct: false },
                { text: "Zmniejszyć inwestycje", correct: false },
                { text: "Utrzymać produkt bez zmian", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "505. Możliwą jednostką, w której podajemy wynik analizy ścieżki krytycznej, są:",
            answers: [
                { text: "Dni", correct: true },
                { text: "Procenty", correct: false },
                { text: "Kilogramy", correct: false },
                { text: "Litry", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "506. W analizie BCG wyrób X ma wysoki udział w dynamicznie rozwijającym się rynku. W związku z tym jest:",
            answers: [
                { text: "Gwiazdą", correct: true },
                { text: "Psem", correct: false },
                { text: "Dojną krową", correct: false },
                { text: "Znakiem zapytania", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "507. W analizie BCG wyrób X ma niski udział w dynamicznie rozwijającym się rynku. W związku z tym jest:",
            answers: [
                { text: "Znakiem zapytania", correct: true },
                { text: "Gwiazdą", correct: false },
                { text: "Psem", correct: false },
                { text: "Dojną krową", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "508. W analizie BCG wyrób X ma wysoki udział w stabilnym się rynku. W związku z tym jest:",
            answers: [
                { text: "Dojną krową", correct: true },
                { text: "Gwiazdą", correct: false },
                { text: "Psem", correct: false },
                { text: "Znakiem zapytania", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "509. W analizie BCG wyrób X ma niski udział w stabilnym rynku. W związku z tym jest:",
            answers: [
                { text: "Psem", correct: true },
                { text: "Gwiazdą", correct: false },
                { text: "Dojną krową", correct: false },
                { text: "Znakiem zapytania", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "510. Jeśli w języku Python 3.7 zdefiniujemy kod:\nr = [1, \"2\", \"b\"*3]\nprint( r )\nto wynikiem jego wykonania będzie:",
            answers: [
                { text: "[1, '2', 'bbb']", correct: true },
                { text: "[1, 2, bbb]", correct: false },
                { text: "1 2 bbb", correct: false },
                { text: "[1, '2', 'b']", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "511. Jeśli w języku Python 3.7 zdefiniujemy kod:\ni = 11\nwhile i>0:\nprint( i ) i -= 2\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "11 9 7 5 3 1", correct: true },
                { text: "11 10 9 8 7 6", correct: false },
                { text: "10 8 6 4 2 0", correct: false },
                { text: "11 9 7 5 3 1 0", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "512. Jeśli w języku Python 3.7 zdefiniujemy kod:\ni = 11\nwhile i:\nprint( i ) i -= 2\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "11 9 7 5 3 1", correct: true },
                { text: "11 10 9 8 7 6", correct: false },
                { text: "10 8 6 4 2 0", correct: false },
                { text: "11 9 7 5 3 1 0", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "513. Jeśli w języku Python 3.7, zdefiniujemy kod:\ni = 11\nif i>10:\nprint( \"i>10 ,\", i ) elif i>6:\nprint(\"i>6 ,\", i)\nelse: print(\"i<=5 ,\", i)\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "i>10 , 11", correct: true },
                { text: "i>6 , 11", correct: false },
                { text: "i<=5 , 11", correct: false },
                { text: "i>10 , i>6", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "514. Jeśli w języku Python 3.7 zdefiniujemy kod:\ni = 5 if i>10:\nprint( \"i>10 ,\", i ) else:\nif i>5:\nprint(\"i>5 ,\", i) else:\nprint(\"i<=5 ,\", i)\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "i<=5 , 5", correct: true },
                { text: "i>10 , 5", correct: false },
                { text: "i>5 , 5", correct: false },
                { text: "Błąd składniowy", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "515. Jeśli w języku Python 3.7, zdefiniujemy kod:\na=3; b=4;\nb,a = a,b\nprint(a, b, end=\"!\")\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "4 3!", correct: true },
                { text: "3 4!", correct: false },
                { text: "3 3!", correct: false },
                { text: "4 4!", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "516. Jeśli w języku Python 3.7 zdefiniujemy kod:\na=3; b=4; c=2;\nb,a = a*b**c, a//c*b print(a, b, end=\"!\\n\")\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "6 48!", correct: true },
                { text: "3 4!", correct: false },
                { text: "48 6!", correct: false },
                { text: "4 3!", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "517. Jeśli w języku Python 3.7 zdefiniujemy kod:\nx=1; y=0\ntry:\nz = x / y except:\nprint (\"Niepoprawne dane\") else:\nprint (\"Wynik:\", z)\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "Niepoprawne dane", correct: true },
                { text: "Wynik: 0", correct: false },
                { text: "Błąd składniowy", correct: false },
                { text: "Wynik: 1", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "518. Jeśli w języku Python 3.7 zdefiniujemy kod: #-*- coding: ibm852 -*-\nto wynikiem jego wykonania będzie (pomijając łamanie wiersza):",
            answers: [
                { text: "Nic, jest to deklaracja kodowania", correct: true },
                { text: "Błąd składniowy", correct: false },
                { text: "ibm852", correct: false },
                { text: "Kodowanie zmienione", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "519. Jeśli w języku Python 3.7 zdefiniujemy kod:\nclass Kwadrat:\nbok = 0\ndef wyswietl(self):\nprint(\"pole=\", self.pole()) def pole(self):\nreturn self.bok ** 2\nclass Szescian(Kwadrat):\ndef pole(self):\nreturn Kwadrat.pole(self)*6\nto powyższy kod:",
            answers: [
                { text: "Definiuje hierarchię klas z nadpisywaniem metody", correct: true },
                { text: "Zawiera błąd składniowy", correct: false },
                { text: "Nie pozwala na dziedziczenie", correct: false },
                { text: "Nie definiuje metod", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "520. Zdarzenie „powstaje nowa technologia, która zapewni lepszą jakość produktów przy mniejszym koszcie” w zarządzaniu projektami należy potraktować jako:",
            answers: [
                { text: "Szansę", correct: true },
                { text: "Ryzyko", correct: false },
                { text: "Zagrożenie", correct: false },
                { text: "Problem", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "521. Jakie podstawowe narzędzie wykorzysta menedżer projektu PRINCE2 do zarządzania ryzykiem?",
            answers: [
                { text: "Rejestr ryzyka", correct: true },
                { text: "Diagram Gantta", correct: false },
                { text: "Macierz BCG", correct: false },
                { text: "Analiza SWOT", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "522. Zdarzenie „musimy użyć nowej technologii, w której nie mamy doświadczenia” w zarządzaniu projektami należy traktować jako:",
            answers: [
                { text: "Ryzyko", correct: true },
                { text: "Szansę", correct: false },
                { text: "Zagrożenie", correct: false },
                { text: "Czynnik neutralny", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "523. W którym miejscu strony HTML należy umieścić podstawowe informacje wykorzystywane przez wyszukiwarki internetowe do indeksowania stron?",
            answers: [
                { text: "W sekcji <head>", correct: true },
                { text: "W sekcji <body>", correct: false },
                { text: "W pliku CSS", correct: false },
                { text: "W skrypcie JavaScript", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "524. Jakiej techniki należy użyć w celu bieżącego odświeżania danych z serwisu giełdowego na stronie HTML?",
            answers: [
                { text: "WebSocket", correct: true },
                { text: "Refresh meta tag", correct: false },
                { text: "Cron job", correct: false },
                { text: "Manualne odświeżanie", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "525. Konfiguracji protokołu HTTPS po stronie serwera w celu zabezpieczenia przesyłanych danych wymaga:",
            answers: [
                { text: "Certyfikatu SSL/TLS", correct: true },
                { text: "Pliku HTML", correct: false },
                { text: "Skryptu JavaScript", correct: false },
                { text: "Bazy danych", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "526. Praktyczne wykorzystanie regułowego systemu szkieletowego wymaga zdefiniowania przez użytkownika:",
            answers: [
                { text: "Bazy reguł", correct: true },
                { text: "Interfejsu graficznego", correct: false },
                { text: "Schematu bazy danych", correct: false },
                { text: "Algorytmu sortowania", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "527. Do realizacji klauzul Horna w Prologu stosuje się:",
            answers: [
                { text: "Rezolucję SLD", correct: true },
                { text: "Metodę Monte Carlo", correct: false },
                { text: "Algorytm Dijkstry", correct: false },
                { text: "Rekurencję liniową", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "528. Sprawdzenie pewnej hipotezy jest realizowane przez wnioskowanie:",
            answers: [
                { text: "Dedukcyjne", correct: true },
                { text: "Indukcyjne", correct: false },
                { text: "Statystyczne", correct: false },
                { text: "Heurystyczne", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "529. Złączenie naturalne wymaga by w obu łączonych relacjach:",
            answers: [
                { text: "Istniały kolumny o tej samej nazwie", correct: true },
                { text: "Wszystkie kolumny miały różne nazwy", correct: false },
                { text: "Były różne klucze główne", correct: false },
                { text: "Nie było kluczy obcych", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "530. W celu zapewnienia integralności danych w różnych relacjach konieczne jest:",
            answers: [
                { text: "Użycie kluczy obcych", correct: true },
                { text: "Unikanie indeksów", correct: false },
                { text: "Rozdzielenie tabel", correct: false },
                { text: "Zastosowanie normalizacji 1NF", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "531. Mechanizm upraszczania opisu jakiegoś obiektu (np. banku) w projektowaniu obiektowym określamy jako:",
            answers: [
                { text: "Abstrakcja", correct: true },
                { text: "Hermetyzacja", correct: false },
                { text: "Dziedziczenie", correct: false },
                { text: "Polimorfizm", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "532. Grupa metod, która realizuje kluczowe zadania dla klasy np. zakładanieKonta, wykonajPrzelew itp. dla konta bankowego, określana jest w programowaniu obiektowym jako:",
            answers: [
                { text: "Interfejs", correct: true },
                { text: "Konstruktor", correct: false },
                { text: "Atrybut", correct: false },
                { text: "Klasa abstrakcyjna", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "533. Przekazywanie danych jakiegoś obiektu do innej zewnętrznej aplikacji biznesowej w postaci XML można zrealizować w .NET za pomocą:",
            answers: [
                { text: "XmlSerializer", correct: true },
                { text: "JSON.stringify", correct: false },
                { text: "BinaryFormatter", correct: false },
                { text: "StreamWriter", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "534. W odniesieniu do której grupy metod zastosowanie nie jest zazwyczaj wymagane w przypadku konstrukcji systemów do wspomagania podejmowania decyzji dobrze ustrukturyzowanych:",
            answers: [
                { text: "Metody heurystyczne", correct: true },
                { text: "Metody optymalizacyjne", correct: false },
                { text: "Metody statystyczne", correct: false },
                { text: "Metody liniowe", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "535. Konstrukcja systemów do wspomagania podejmowania decyzji słabo ustrukturyzowanych bazuje na zastosowaniu metod:",
            answers: [
                { text: "Heurystycznych", correct: true },
                { text: "Liniowych", correct: false },
                { text: "Statystycznych", correct: false },
                { text: "Optymalizacyjnych", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "536. Implementacja algorytmów ukierunkowanych na wspomaganie decyzji w przedsiębiorstwie może być realizowana za pomocą:",
            answers: [
                { text: "Języków programowania takich jak Python", correct: true },
                { text: "Tylko arkuszy kalkulacyjnych", correct: false },
                { text: "HTML i CSS", correct: false },
                { text: "Ręcznej analizy danych", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "537. Procesy decyzyjne w przedsiębiorstwie nie są wspomagane przez rozwiązania informatyczne ukierunkowane na:",
            answers: [
                { text: "Projektowanie graficzne", correct: true },
                { text: "Analizę danych", correct: false },
                { text: "Modelowanie procesów", correct: false },
                { text: "Optymalizację decyzji", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "538. Model dziedziny (konceptualny) nie zawiera:",
            answers: [
                { text: "Szczegółów implementacyjnych", correct: true },
                { text: "Klas i ich atrybutów", correct: false },
                { text: "Relacji między obiektami", correct: false },
                { text: "Encji biznesowych", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "539. Jeżeli obiekty jednej klasy pełnią rolę całości, a obiekty innej klasy rolę części, przy czym obiekty pełniące rolę części mogą należeć do kilku obiektów pełniących rolę całości, to mamy do czynienia z:",
            answers: [
                { text: "Agregacją", correct: true },
                { text: "Kompozycją", correct: false },
                { text: "Dziedziczeniem", correct: false },
                { text: "Zależnością", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "540. Jeżeli obiekty jednej klasy pełnią rolę całości, a obiekty innej klasy rolę części, przy czym obiekt pełniący rolę części może w danym momencie należeć tylko do jednego obiektu typu całość, to mamy do czynienia z:",
            answers: [
                { text: "Kompozycją", correct: true },
                { text: "Agregacją", correct: false },
                { text: "Dziedziczeniem", correct: false },
                { text: "Zależnością", correct: false }
            ]
        },
        {
            category: "Matematyka",
            question: "541. Rozwiązań grę o sumie zero przy macierzy wypłat danej poniższą tabelą. Jakie decyzje powinien podjąć gracz A, a jakie gracz B:\n\n|   | B1  | B2  | B3  |\n|---|-----|-----|-----|\n| A1| 20  | -150| -250|\n| A2| 150 | -80 | -100|\n| A3| 250 | 100 | 40  |",
            answers: [
                { text: "A powinien wybrać A3, B powinien wybrać B2", correct: true },
                { text: "A powinien wybrać A1, B powinien wybrać B1", correct: false },
                { text: "A powinien wybrać A2, B powinien wybrać B3", correct: false },
                { text: "A powinien wybrać A3, B powinien wybrać B1", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "542. W ramach projektu trzeba m.in. wykonać cztery operacje oznaczone literami a,…,d, o czasach trwania wynoszących odpowiednio 1, 2, 3 i 4 godzinę. O której godzinie najpóźniej powinna się rozpocząć operacja a, jeżeli dopiero po jej zakończeniu będą mogły rozpocząć się operacje b, c i d, a ich tzw. najpóźniejsze dopuszczalne terminy zakończenia określono odpowiednio na godzinę: 7:00, 6:00, 8:00:",
            answers: [
                { text: "3:00", correct: true },
                { text: "4:00", correct: false },
                { text: "5:00", correct: false },
                { text: "6:00", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "543. W celu bezpiecznego wywołania kodu SQL w aplikacji internetowej najlepiej jest wykorzystać:",
            answers: [
                { text: "Przygotowane zapytania (prepared statements)", correct: true },
                { text: "Zwykłe zapytania SQL", correct: false },
                { text: "Skrypty JavaScript", correct: false },
                { text: "Pliki konfiguracyjne", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "544. Mechanizm pozwalający na niezaplanowane wykonanie kodu SQL np. za pomocą formularza HTML określany jest jako:",
            answers: [
                { text: "SQL Injection", correct: true },
                { text: "Cross-Site Scripting", correct: false },
                { text: "Buffer Overflow", correct: false },
                { text: "Phishing", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "545. W celu uniknięcia problemów z bezpieczeństwem w JavaScript nie należy wykorzystywać funkcji:",
            answers: [
                { text: "eval()", correct: true },
                { text: "alert()", correct: false },
                { text: "console.log()", correct: false },
                { text: "parseInt()", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "546. Komunikacja zaszyfrowana pomiędzy klientem a serwerem WWW odbywa się standardowo na porcie:",
            answers: [
                { text: "443", correct: true },
                { text: "80", correct: false },
                { text: "21", correct: false },
                { text: "8080", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "547. Odpowiedź z serwera o braku uprawnień klienta do żądanego zasobu oznaczona jest statusem błędu:",
            answers: [
                { text: "403", correct: true },
                { text: "404", correct: false },
                { text: "500", correct: false },
                { text: "401", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "548. Warunkiem koniecznym pozwalającym na komunikację pomiędzy klientem a serwerem po porcie HTTPS jest ważny certyfikat:",
            answers: [
                { text: "SSL/TLS", correct: true },
                { text: "FTP", correct: false },
                { text: "HTTP", correct: false },
                { text: "SSH", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "549. Nadrzędnym celem polityki bezpieczeństwa danych jest:",
            answers: [
                { text: "Ochrona poufności i integralności danych", correct: true },
                { text: "Zwiększenie szybkości systemu", correct: false },
                { text: "Zmniejszenie kosztów IT", correct: false },
                { text: "Ułatwienie dostępu do danych", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "550. Wymiernym efektem polityki bezpieczeństwa danych jest/są:",
            answers: [
                { text: "Zmniejszenie liczby incydentów bezpieczeństwa", correct: true },
                { text: "Zwiększenie liczby użytkowników", correct: false },
                { text: "Skrócenie czasu realizacji projektów", correct: false },
                { text: "Obniżenie kosztów produkcji", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "551. Określ, kiedy system informatyczny organizacji można uznać za bezwarunkowo bezpieczny:",
            answers: [
                { text: "Nigdy, zawsze istnieje ryzyko", correct: true },
                { text: "Po wdrożeniu antywirusa", correct: false },
                { text: "Po zaszyfrowaniu danych", correct: false },
                { text: "Po audycie IT", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "552. Podstawowym, programowym mechanizmem zabezpieczającym system komputerowy jest:",
            answers: [
                { text: "Zapora sieciowa (firewall)", correct: true },
                { text: "Szyfrowanie dysku", correct: false },
                { text: "Kopia zapasowa", correct: false },
                { text: "Antywirus", correct: false }
            ]
        },
        {
            category: "Sieci Komputerowe",
            question: "553. Zapewnienia bezpiecznej komunikacji sieciowej pomiędzy dwoma budynkami nie można uzyskać przez:",
            answers: [
                { text: "Publiczne Wi-Fi", correct: true },
                { text: "VPN", correct: false },
                { text: "Szyfrowane połączenie LAN", correct: false },
                { text: "Dedykowaną linię światłowodową", correct: false }
            ]
        },
        {
            category: "Struktury Danych i Algorytmy",
            question: "554. Algorytm budowy drzewa kodowego dla optymalnego kodu prefiksowego Huffmana jest przykładem:",
            answers: [
                { text: "Algorytmu zachłannego", correct: true },
                { text: "Programowania dynamicznego", correct: false },
                { text: "Wyszukiwania binarnego", correct: false },
                { text: "Rekurencji", correct: false }
            ]
        },
        {
            category: "Struktury Danych i Algorytmy",
            question: "555. Poprawnym algorytmem rozwiązującym rekurencyjnie problem wyznaczania silni liczby naturalnej n (n!) jest algorytm postaci:",
            answers: [
                { text: "n! = n * (n-1)! dla n > 1, 1! = 1", correct: true },
                { text: "n! = n + (n-1)! dla n > 1, 1! = 1", correct: false },
                { text: "n! = n * n dla n > 1, 1! = 0", correct: false },
                { text: "n! = (n-1)! dla n > 1, 1! = 1", correct: false }
            ]
        },
        {
            category: "Struktury Danych i Algorytmy",
            question: "556. Programowanie dynamiczne to strategia rozwiązywania zagadnień optymalizacyjnych, która nie wymaga:",
            answers: [
                { text: "Pełnego przeszukiwania przestrzeni rozwiązań", correct: true },
                { text: "Podziału problemu na podproblemy", correct: false },
                { text: "Zapamiętywania rozwiązań podproblemów", correct: false },
                { text: "Optymalnej podstruktury", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "557. Mechanizm, jaki może zastosować programista klienta internetowego do ukrycia hasła wpisywanego do pola <input>, to:",
            answers: [
                { text: "type=\"password\"", correct: true },
                { text: "type=\"hidden\"", correct: false },
                { text: "style=\"display:none\"", correct: false },
                { text: "type=\"text\"", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "558. Co zrobi przeglądarka w przypadku błędu w składni języka CSS (np. zła nazwa właściwości dla jakiegoś selektora):",
            answers: [
                { text: "Zignoruje błędną regułę", correct: true },
                { text: "Wyświetli komunikat o błędzie", correct: false },
                { text: "Przerwie renderowanie strony", correct: false },
                { text: "Zastosuje domyślne style", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "559. W przypadku konieczności szybkiego odwołania się do dużej ilości danych przez aplikację internetową na podstawie jakiejś wartości, najlepiej zastosować bazę:",
            answers: [
                { text: "Klucz-wartość", correct: true },
                { text: "Relacyjną", correct: false },
                { text: "Dokumentową", correct: false },
                { text: "Grafową", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "560. Jakiego typu aplikację internetową można wykorzystać w celu utworzenia witryny pozwalającej na prezentację i modyfikację treści:",
            answers: [
                { text: "CMS", correct: true },
                { text: "CRM", correct: false },
                { text: "ERP", correct: false },
                { text: "E-commerce", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "561. Krotka w relacji identyfikowana jest przez:",
            answers: [
                { text: "Klucz główny", correct: true },
                { text: "Klucz obcy", correct: false },
                { text: "Indeks", correct: false },
                { text: "Nazwę relacji", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "562. Jaki warunek musi spełnić klasa, aby kolekcja obiektów tej klasy mogła być posortowana?",
            answers: [
                { text: "Implementacja interfejsu IComparable", correct: true },
                { text: "Posiadanie konstruktora", correct: false },
                { text: "Bycie klasą abstrakcyjną", correct: false },
                { text: "Hermetyzacja atrybutów", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "563. W sytuacji, w której można utworzyć tylko jeden obiekt danej klasy, najlepiej zastosować wzorzec:",
            answers: [
                { text: "Singleton", correct: true },
                { text: "Fabryka", correct: false },
                { text: "Obserwator", correct: false },
                { text: "Strategia", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "564. Kompozycja w programowaniu obiektowym jest typem relacji, w której:",
            answers: [
                { text: "Część nie może istnieć bez całości", correct: true },
                { text: "Część może istnieć niezależnie od całości", correct: false },
                { text: "Całość dziedziczy po części", correct: false },
                { text: "Część jest współdzielona między wieloma całościami", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "565. Projekt i implementacja sklepu internetowego dedykowanego masowemu odbiorcy (klientowi) dotyczy relacji:",
            answers: [
                { text: "B2C", correct: true },
                { text: "B2B", correct: false },
                { text: "C2C", correct: false },
                { text: "B2G", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "566. Projekt i implementacja platformy odwzorowującej sytuacje popytowo-podażowe między firmami dotyczy relacji:",
            answers: [
                { text: "B2B", correct: true },
                { text: "B2C", correct: false },
                { text: "C2C", correct: false },
                { text: "B2G", correct: false }
            ]
        },
        {
            category: "Informatyka",
            question: "567. Projekt i implementacja platformy odwzorowującej interakcje pomiędzy przedsiębiorcami a urzędami administracji rządowej i samorządowej dotyczy relacji:",
            answers: [
                { text: "B2G", correct: true },
                { text: "B2B", correct: false },
                { text: "B2C", correct: false },
                { text: "C2C", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "568. Analiza wymagań jest składową procesu wytwarzania oprogramowania następującą po:",
            answers: [
                { text: "Inicjacji projektu", correct: true },
                { text: "Projektowaniu systemu", correct: false },
                { text: "Implementacji", correct: false },
                { text: "Testowaniu", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "569. W przypadku konieczności outsourcingu usług informatycznych:",
            answers: [
                { text: "Należy określić SLA", correct: true },
                { text: "Wystarczy wybrać najtańszą ofertę", correct: false },
                { text: "Nie wymaga to umowy", correct: false },
                { text: "Proces jest zawsze wewnętrzny", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "570. Węzeł połączenia na diagramie czynności kończy przebiegi rozpoczęte:",
            answers: [
                { text: "W węźle rozgałęzienia", correct: true },
                { text: "W węźle sygnału", correct: false },
                { text: "W węźle początkowym", correct: false },
                { text: "W węźle końcowym", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "571. Rozdzielenie przepływów na równoległe na diagramie czynności występuje w:",
            answers: [
                { text: "Węźle rozgałęzienia", correct: true },
                { text: "Węźle połączenia", correct: false },
                { text: "Węźle sygnału", correct: false },
                { text: "Węźle początkowym", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "572. Podproces typu Ad Hoc w BPMN kończy się, gdy:",
            answers: [
                { text: "Wszystkie zadania zostaną wykonane", correct: true },
                { text: "Upłynie określony czas", correct: false },
                { text: "Nastąpi sygnał zewnętrzny", correct: false },
                { text: "Proces główny się zakończy", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "573. Jaką miarę zastosuje menedżer projektu w PRINCE 2 dla ryzyka związanego z parametrami projektu?",
            answers: [
                { text: "Ocena prawdopodobieństwa i wpływu", correct: true },
                { text: "Analiza kosztów", correct: false },
                { text: "Diagram Gantta", correct: false },
                { text: "Macierz BCG", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "574. Dla ryzyka negatywnego, które w projekcie zostało określone jako mało prawdopodobne z małym wpływem na projekt stosujemy strategię:",
            answers: [
                { text: "Akceptacja", correct: true },
                { text: "Unikanie", correct: false },
                { text: "Przeniesienie", correct: false },
                { text: "Zmniejszenie", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "575. Dla ryzyka negatywnego, które w projekcie zostało określone jako wysoce prawdopodobne z dużym wpływem na projekt stosujemy strategię:",
            answers: [
                { text: "Unikanie", correct: true },
                { text: "Akceptacja", correct: false },
                { text: "Przeniesienie", correct: false },
                { text: "Zmniejszenie", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "576. Dla ryzyka negatywnego, które w projekcie zostało określone jako prawdopodobne z umiarkowanym wpływem na projekt stosujemy strategię:",
            answers: [
                { text: "Zmniejszenie", correct: true },
                { text: "Akceptacja", correct: false },
                { text: "Unikanie", correct: false },
                { text: "Przeniesienie", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "577. Prawdopodobieństwo wystąpienia ryzyka w projekcie w metodyce PRINCE2 określa się metodą:",
            answers: [
                { text: "Ekspercką", correct: true },
                { text: "Statystyczną", correct: false },
                { text: "Symulacyjną", correct: false },
                { text: "Losową", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "578. Określenie ryzyka w tradycyjnym zarządzaniu projektami należy rozpocząć od:",
            answers: [
                { text: "Identyfikacji ryzyk", correct: true },
                { text: "Analizy kosztów", correct: false },
                { text: "Planowania harmonogramu", correct: false },
                { text: "Oceny wpływu", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "579. Kto jest odpowiedzialny za obserwację określonego ryzyka w projekcie w metodyce PRINCE2?",
            answers: [
                { text: "Właściciel ryzyka", correct: true },
                { text: "Kierownik projektu", correct: false },
                { text: "Zespół projektowy", correct: false },
                { text: "Komitet sterujący", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "580. Kto jest odpowiedzialny za opracowanie reakcji na ryzyko po jego wystąpieniu w metodyce PRINCE2?",
            answers: [
                { text: "Właściciel ryzyka", correct: true },
                { text: "Kierownik zespołu", correct: false },
                { text: "Analityk projektu", correct: false },
                { text: "Programista", correct: false }
            ]
        },
        {
            category: "Zarządzanie Projektami",
            question: "581. Kto odpowiada za obserwację wydarzeń zewnętrznych mogących stanowić ryzyko dla projektu?",
            answers: [
                { text: "Kierownik projektu", correct: true },
                { text: "Właściciel ryzyka", correct: false },
                { text: "Zespół projektowy", correct: false },
                { text: "Komitet sterujący", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "582. W celu pobrania danych z dwóch lub więcej relacji konieczne jest użycie:",
            answers: [
                { text: "JOIN", correct: true },
                { text: "WHERE", correct: false },
                { text: "GROUP BY", correct: false },
                { text: "ORDER BY", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "583. W celu zapewnienia integralności danych w różnych relacjach konieczne jest:",
            answers: [
                { text: "Użycie kluczy obcych", correct: true },
                { text: "Unikanie indeksów", correct: false },
                { text: "Rozdzielenie tabel", correct: false },
                { text: "Zastosowanie normalizacji 1NF", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "584. Kategorie i związki można przedstawić na diagramie:",
            answers: [
                { text: "Encji i związków (ERD)", correct: true },
                { text: "Sekwencji", correct: false },
                { text: "Stanów", correct: false },
                { text: "Pakietów", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "585. Fakt, że klasa A implementuje interfejs B w języku C#, oznaczany jest przez:",
            answers: [
                { text: "A : B", correct: true },
                { text: "A extends B", correct: false },
                { text: "A -> B", correct: false },
                { text: "A implements B", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "586. Konstruktory mogą wywoływać się nawzajem poprzez konstrukcję:",
            answers: [
                { text: "this()", correct: true },
                { text: "base()", correct: false },
                { text: "super()", correct: false },
                { text: "call()", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "587. Przeciążenie operatora dodawania dla klasy Ułamek w C# wymaga napisania funkcji:",
            answers: [
                { text: "public static Ułamek operator +(Ułamek a, Ułamek b)", correct: true },
                { text: "public void operator +(Ułamek a, Ułamek b)", correct: false },
                { text: "public static void Add(Ułamek a, Ułamek b)", correct: false },
                { text: "public Ułamek operator Add(Ułamek a, Ułamek b)", correct: false }
            ]
        },
        {
            category: "Bazy Danych",
            question: "588. Instrukcją pozwalającą na dostęp do danych w SQL, jest instrukcja:",
            answers: [
                { text: "SELECT", correct: true },
                { text: "INSERT", correct: false },
                { text: "UPDATE", correct: false },
                { text: "DELETE", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "589. Podstawowy obiekt służący do realizacji technologii SOA to:",
            answers: [
                { text: "Usługa (Service)", correct: true },
                { text: "Klasa", correct: false },
                { text: "Interfejs", correct: false },
                { text: "Moduł", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "590. Który styl CSS będzie miał najwyższy priorytet przy ustalaniu ostatecznego wyglądu elementu HTML:",
            answers: [
                { text: "Styl z atrybutem !important", correct: true },
                { text: "Styl inline", correct: false },
                { text: "Styl w pliku zewnętrznym", correct: false },
                { text: "Styl w sekcji <style>", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "591. Zespół odpowiedzialny za frontend nie będzie korzystał z języka:",
            answers: [
                { text: "SQL", correct: true },
                { text: "HTML", correct: false },
                { text: "CSS", correct: false },
                { text: "JavaScript", correct: false }
            ]
        },
        {
            category: "Inżynieria Oprogramowania",
            question: "592. Warstwa logiki biznesowej może być budowana za pomocą:",
            answers: [
                { text: "C#", correct: true },
                { text: "HTML", correct: false },
                { text: "CSS", correct: false },
                { text: "XML", correct: false }
            ]
        },
        {
            category: "Języki Programowania",
            question: "593. Który algorytm szyfrujący jest standardowo wspierany poprzez funkcję PHP:",
            answers: [
                { text: "SHA-256", correct: true },
                { text: "RSA", correct: false },
                { text: "DES", correct: false },
                { text: "MD5", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "594. Menu w standardzie HTML5 powinno być zapisywane w znaczniku:",
            answers: [
                { text: "<nav>", correct: true },
                { text: "<menu>", correct: false },
                { text: "<ul>", correct: false },
                { text: "<div>", correct: false }
            ]
        },
        {
            category: "Rozwój Aplikacji Internetowych",
            question: "595. W jakim znaczniku włączamy informację o zewnętrznym arkuszu stylów do kodu HTML:",
            answers: [
                { text: "<link>", correct: true },
                { text: "<style>", correct: false },
                { text: "<script>", correct: false },
                { text: "<meta>", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "596. Jeśli posiadasz: wiedzę ekspercką, umiejętność tworzenia nowatorskich rozwiązań, motywację do osiągnięć i rozwiązywania problemów, to z pewnością:",
            answers: [
                { text: "Jesteś przedsiębiorczy", correct: true },
                { text: "Jesteś leniwy", correct: false },
                { text: "Brakuje ci ambicji", correct: false },
                { text: "Nie lubisz wyzwań", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "597. Jeśli zachowanie innych uważam za właściwe, to odwołuję się do:",
            answers: [
                { text: "Norm społecznych", correct: true },
                { text: "Własnych przekonań", correct: false },
                { text: "Prawa karnego", correct: false },
                { text: "Intuicji", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "598. Zdolność do głębszych przemyśleń, zastanowienia się nad sobą, swoimi działaniami, to:",
            answers: [
                { text: "Refleksyjność", correct: true },
                { text: "Impulsywność", correct: false },
                { text: "Asertywność", correct: false },
                { text: "Empatia", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "599. Postawa charakteryzująca się dystansem emocjonalnym do wykonywanych zadań, przekonaniem, iż cel uświęca środki, to:",
            answers: [
                { text: "Makiazm", correct: true },
                { text: "Empatia", correct: false },
                { text: "Altruizm", correct: false },
                { text: "Perfekcjonizm", correct: false }
            ]
        },
        {
            category: "Zarządzanie",
            question: "600. Przełożony zwraca się do podwładnych przez „Ty”, a oni do niego przez „Pan”, spożywają posiłki w przerwach w pracy w różnych pomieszczeniach o różnym standardzie. Świadczy to o:",
            answers: [
                { text: "Wysokim dystansie władzy", correct: true },
                { text: "Równości w zespole", correct: false },
                { text: "Braku hierarchii", correct: false },
                { text: "Niskim morale zespołu", correct: false }
            ]
        }
    ];