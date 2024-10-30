// const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='


// const recipes_cards = document.querySelector('recipes_cards')


// function getMeals(category = "Breakfast"){
//     fetch(API + category)
//        // JSON STRING
//       .then( response => response.json())
//       .then(foods => {
//           console.log(foods.meals);
//           recipes_cards.innerHTML = foods.meals.slice(0,6).map( el => {
//             return renderCard (el)
//           }).join('')

//       })
// }

// //dom

// getMeals()

// function renderCard(food){
//     return `
//     <div class="card">
//     <div class="card-img">
//     <img src="${food.strMealThumb}" alt="">
//     </div>
//     <div class="card-text">
//     <h4>Savory Herb-Infused Chicken</h4>
//     <p>
//      Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken
//     </p>
//                    <p> 40 Min - easy prep -3 server</p>
//                <button>view  recipe</button>
//             </div>


    
//     </div>

//     `
// }








/* 
git add .
git commit - "lesson 8"
git push
*/







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