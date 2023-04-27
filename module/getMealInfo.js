import countItems from './itemCount.js';

const likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const likeApiKey = 'DQ1WY7tbkUIhRnRaIdyZ';

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
      <p class="like-symbol" data-id="${item.meals[0].idMeal}"><i class="fa fa-heart"></i></p>
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
  });
}

const displayFoodDetails = () => {
  const getResponse = async () => {
    for (let i = 52770; i < 52777; i += 1) {
      const objectItem = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`).then((res) => res.json());
      meals.push(objectItem);
    }
    return Promise.all(meals);
  };
  getResponse().then((meals) => {
    renderHtmlPage(meals);
  }).then(async () => {
    const numOfItems = document.querySelector('.number-of-items');
    countItems(meals.length, numOfItems);
    const likeCounterAPI = await fetch(`${likeApi}${likeApiKey}/likes/`)
      .then((response) => response.json())
      .then((data) => data);

    const likesCounter = foodCards.querySelectorAll('.like-count');
    likesCounter.forEach((likeCounter) => {
      const likesId = likeCounter.getAttribute('data-id');
      const liked = document.querySelectorAll('.like-symbol');
      const element = likeCounter;
      likeCounterAPI.forEach((likeAPI) => {
        if (likesId === likeAPI.item_id) {
          liked.forEach((likedItem) => {
            if (likesId === likedItem.getAttribute('data-id')) {
              likedItem.classList.add('liked');
            }
          });
          element.innerHTML = likeAPI.likes;
        }
      });
    });
    // To add or Create like when Heart is pressed
  });
};

export default displayFoodDetails;
