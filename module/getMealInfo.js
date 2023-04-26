const likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const likeApiKey = 'DQ1WY7tbkUIhRnRaIdyZ';

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
      <p class="like-symbol" data-id=${meal[0].idMeal}><i class="fa fa-heart"></i></p>
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
          // console.log(likeAPI.likes, likeAPI.item_id, likesId);
        }
      });
    });
    // To add or Create like when Heart is pressed
    const likesButton = foodCards.querySelectorAll('.like-symbol');
    likesButton.forEach((likeButton) => {
      likeButton.addEventListener('click', (e) => {
        // eslint-disable-next-line max-len
        const targetCounter = e.target.nextElementSibling.children[0].innerText;
        // eslint-disable-next-line max-len
        e.target.nextElementSibling.children[0].innerText = (+targetCounter) + 1;
        fetch(`${likeApi}${likeApiKey}/likes/`, {
          method: 'POST',
          body: JSON.stringify({
            item_id: likeButton.getAttribute('data-id'),
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      });
    });
  });
};

export default displayFoodDetails;
