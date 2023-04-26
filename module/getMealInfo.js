import countItems from './itemCount.js';

const foodCards = document.querySelector('.food-list');
const meals = [];
function renderHtmlPage(meals) {
  foodCards.innerHTML = meals.map((meal) => `
  <div class="food-card">
    <img src="${meal[0].strMealThumb}" class="img-food">
    <div class="food-info">
      <p class="food-name">${meal[0].strMeal}</p>
      </div>
      <div class="like-section">
      <p class="like-symbol" data-id=${meal[0].idMeal}>&#10084;</p>
      <div class="like-count" data-id=${meal[0].idMeal}>
      </div>
      <div class="likes">likes</div>
    </div>
    <div class="button">
      <input type="button" class="btnComments" value="Comments">
      <input type="button" class="btnReserve" value="Reserve">
    </div>
  </div>
`).join('');
}

const displayFoodDetails = () => {
  const getResponse = async () => {
    for (let i = 0; i < 9; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
        {
          method: 'GET',
        },
      );
      // eslint-disable-next-line no-await-in-loop
      const foodRandomdata = await response.json();
      meals.push(foodRandomdata.meals);
      // eslint-disable-next-line space-infix-ops
    }
    return meals;
  };
  getResponse().then((meals) => {
    renderHtmlPage(meals);
  }).then(async () => {
    const numOfItems = document.querySelector('.number-of-items');
    countItems(meals.length, numOfItems);
  });
};

export default displayFoodDetails;
