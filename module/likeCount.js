const getLikes = async () => {
  const foodCards = document.querySelector('.food-list');
  const likesCounter = foodCards.querySelectorAll('.like-count');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/likes/')
    .then((response) => response.json())
    .then((data) => {
      likesCounter.forEach((likeCounter) => {
        const likesId = likeCounter.getAttribute('data-id');
        const matchingObject = data.find((obj) => obj.item_id === +likesId);
        if (matchingObject) {
          likeCounter.innerHTML = matchingObject.likes;
          likeCounter.parentNode.firstElementChild.firstElementChild.classList.add('liked');
        } else {
          likeCounter.innerHTML = '0';
        }
      });
    });
};
export default getLikes;