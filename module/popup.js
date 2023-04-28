import getComments from './displayComments.js';
// eslint-disable-next-line import/no-cycle
import addComment from './addComment.js';

const getLikesById = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/likes')
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line consistent-return
      data.forEach((likeCounter) => {
        if (+likeCounter.item_id === +id) {
          document.querySelector('.likesNum').innerHTML = `${'Likes : '}${likeCounter.likes}`;
          getComments(+id, document.querySelector('.comments'));
        }
      });
      const btnSubmit = document.querySelector('.submit');
      btnSubmit.addEventListener('click', () => { addComment(id); });

      const btnClose = document.querySelector('#btnClose');
      btnClose.addEventListener('click', () => {
        const popuptElement = document.querySelector('.popup');
        popuptElement.setAttribute('style', 'display:none;');
      });
    });
};
const renderPopup = async (id) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((d) => {
      const master = document.querySelector('.container');
      master.innerHTML = `
      <span class="fa fa-close align-end" id="btnClose"></span>
        <div class="image"><img src="${d.meals[0].strMealThumb}" /></div>
        <p class="title">${d.meals[0].strMeal}</p>
        <div class="names-content" id="names-content">
          <div class="area">Area: ${d.meals[0].strArea} </div>
          <div  class="likesNum">Likes: ${getLikesById(d.meals[0].idMeal)}</div>
          <div  class="category">Category: ${d.meals[0].strCategory}</div>
          <div  class="strTag">Tags: ${d.meals[0].strTags}</div>
        </div>
        <div class="list">
        <h2>Add Comments</h2>
        <div class="comments"></div>
        </div>
        
        <form class="form-control" id="Form">
        <input type="text" class="name" id="input" placeholder="your name">
        <textarea class="your-comment" name="comment" id="Text" cols="30" rows="5" placeholder="your comment"></textarea>
        <button class="submit" type="button">Add comment</button>
        </form>`;
      const popuptElement = document.querySelector('.popup');
      popuptElement.setAttribute('style', 'display:block;');
    });
};
export default renderPopup;