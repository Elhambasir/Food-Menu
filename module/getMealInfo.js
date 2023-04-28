import countItems from './itemCount.js';
import getLikes from './likeCount.js';
import like from './addLike.js';

const foodCards = document.querySelector('.food-list');
const meals = [];
function renderHtmlPage(meal) {
  meal.forEach((item) => {
    foodCards.innerHTML += `
    <div class="food-card">
    <img src="${item.meals[0].strMealThumb}" class="img-food">
    <div class="food-info">
      <p class="food-name">${item.meals[0].strMeal}</p>
      </div>
      <div class="like-section">
      <p class="like-symbol" data-id="${item.meals[0].idMeal}"><i id="${item.meals[0].idMeal}" class=" like fa fa-heart"></i></p>
      <div class="like-count" data-id="${item.meals[0].idMeal}">
      </div>
      <div class="likes">likes</div>
    </div>
    <div class="button">
    <input type="button" class="btnComments" value="Comments">
    <input type="button" class="btnReserve" value="Reserve">
    </div>
    </div>
    `;
    getLikes();
    const btnLike = document.querySelectorAll('.like');
    btnLike.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = Number(e.target.id);
        like(id);
      });
    });
  });
}

const displayFoodDetails = () => {
  const getResponse = async () => {
    for (let i = 52770; i < 52778; i += 1) {
      const objectItem = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`).then((res) => res.json());
      meals.push(objectItem);
    }
    return Promise.all(meals);
  };
  getResponse().then((meals) => {
    renderHtmlPage(meals);
  }).then(async () => {
    // Get and display number of likes
    getLikes();
    // Get and display number of items
    const numOfItems = document.querySelector('.number-of-items');
    countItems(meals.length, numOfItems);
  });
};

export default displayFoodDetails;