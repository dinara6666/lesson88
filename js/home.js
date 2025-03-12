
const menu = [
    {
        img: 'break.svg',
        name: 'breakfest'
    },



    {
        img: 'lunch.svg',
        name: 'lunch'
    },


    {
        img: 'dinner.svg',
        name: 'dinner'
    },


    {
        img: 'dessert.svg',
        name: 'dessert'
    },


    {
        img: 'quick.svg',
        name: 'quick bite!'
    },

]


//DOM
const menuEl = document.getElementById('menu')

menuEl.innerHTML = menu.map( m => {
    return `
        <div>
                <img src="../img/${m.img}" alt="">
                <h4>${m.name}</h4>
            </div>`
}).join(``)


async function getMeals(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();

    const recipesCards = document.querySelector('.recipes-cards');
    recipesCards.innerHTML = ''; 

    if (data.meals && data.meals.length > 0) {
        const mealsToShow = data.meals.slice(0, 6);
        renderMeals(mealsToShow);
    } else {
        recipesCards.innerHTML = '<p>No meals found for this category.</p>';
    }
}

function renderMeals(meals) {
    const recipesCards = document.querySelector('.recipes-cards');
    meals.forEach(meal => {
        recipesCards.innerHTML += renderCard(meal);
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = 1; 
    });
}

function renderCard(food) {
    return `
    <div class="card">
        <div class="card-img">
            <img src="${food.strMealThumb}" alt="">
        </div>
        <div class="card-text">
            <h4>${food.strMeal.length > 25 ? food.strMeal.substring(0,23) + '...' : food.strMeal}</h4>
            <div>
                <p>40 Min - easy prep - 3 serves</p>
                <button onclick="showRecipeId('${food.idMeal}')">view recipe</button>
            </div>
        </div>
    </div>`;
}

async function showRecipeId(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const meal = data.meals[0];
    alert(`Recipe: ${meal.strMeal}\nInstructions: ${meal.strInstructions}`);
}

const recipeButtons = document.querySelectorAll('.recipes-buttons button');

getMeals("Starter");

recipeButtons.forEach(button => {
    button.addEventListener('click', () => {
        recipeButtons.forEach(btn => btn.classList.remove('active-button'));
        button.classList.add('active-button');
        const category = button.textContent;
        getMeals(category);
    });
});