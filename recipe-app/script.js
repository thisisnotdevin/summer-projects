async function getRandomMeal() {
    const randomMeal = fetch("https://www.themealdb.com/api/json/v1/1/random.php");
}

async function getmealById(id){
    const meal = fetch("http//www.themealdb.com/api/json/v1/1/lookup.php?i=52772"+id);
}

async function getMealsBySearch(term) {
    const meals = fetch("www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}
}