// --- Завдання 1: Робота з об'єктами ---
let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    isWatched: true,
    
    // Метод для виведення інформації
    movieInfo() {
        console.log(`Назва: ${this.title}, Режисер: ${this.director}, Рік виходу: ${this.year}, Жанр: ${this.genre}, Переглянуто: ${this.isWatched ? "Так" : "Ні"}`);
    },

    // Додаткове завдання: метод markAsRead (markAsWatched)
    markAsWatched() {
        this.isWatched = true;
    }
};

console.log("--- Завдання 1 ---");
movie.movieInfo();

// Зміна значення властивості на протилежне
movie.isWatched = !movie.isWatched;
movie.movieInfo();
movie.markAsWatched(); // Повертаємо назад через метод


// --- Завдання 2: Робота з масивами та об'єктами ---
let filmoteka = [
    { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi", isWatched: true },
    { title: "The Matrix", director: "Lana Wachowski", year: 1999, genre: "Action", isWatched: false },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, genre: "Sci-Fi", isWatched: true }
];

function displayFilmoteka() {
    console.log("--- Список фільмів у бібліотеці ---");
    filmoteka.forEach(item => {
        console.log(`Назва: ${item.title}, Режисер: ${item.director}, Рік виходу: ${item.year}, Жанр: ${item.genre}, Переглянуто: ${item.isWatched ? "Так" : "Ні"}`);
    });
}

console.log("--- Завдання 2 ---");
displayFilmoteka();

// Додавання нової книги/фільму за допомогою push()[cite: 14]
filmoteka.push({ title: "Parasite", director: "Bong Joon Ho", year: 2019, genre: "Thriller", isWatched: false });
console.log("Після додавання нового фільму:");
displayFilmoteka();


// --- Завдання 3: Робота з методами масивів ---
console.log("--- Завдання 3 ---");

// 1. Сортування за роком видання (зростання)[cite: 14]
filmoteka.sort((a, b) => a.year - b.year);
console.log("Відсортовані фільми за роком виходу:", filmoteka);

// 2. Фільтрація непереглянутих фільмів[cite: 14]
let unWatchedMovies = filmoteka.filter(item => !item.isWatched);
console.log("Непереглянуті фільми:", unWatchedMovies);

// 3. Пошук фільму за режисером за допомогою find()[cite: 14]
let nolanMovie = filmoteka.find(item => item.director === "Christopher Nolan");
console.log("Фільм режисера Christopher Nolan:", nolanMovie);


// --- Додаткові індивідуальні завдання ---
// Функція обчислення середнього року видання всіх фільмів[cite: 14]
function calculateAverageYear() {
    if (filmoteka.length === 0) return 0;
    let sumYears = filmoteka.reduce((sum, item) => sum + item.year, 0);
    return Math.round(sumYears / filmoteka.length);
}
console.log("Середній рік виходу фільмів у колекції:", calculateAverageYear());


// --- Завдання 4: Взаємодія з користувачем через prompt/confirm ---[cite: 14]
function addNewMovieFromPrompt() {
    let title = prompt("Введіть назву фільму:");
    if (!title) return; // Якщо скасовано
    let director = prompt("Введіть режисера фільму:");
    let year = +prompt("Введіть рік виходу фільму:");
    let genre = prompt("Введіть жанр фільму:");
    let isWatched = confirm("Чи переглянуто цей фільм?");

    // Додавання до масиву[cite: 14]
    filmoteka.push({ title, director, year, genre, isWatched });
    
    console.log("--- Список після додавання нового користувацького фільму ---");
    displayFilmoteka();
    alert("Фільм успішно додано! Перевірте консоль.");
}