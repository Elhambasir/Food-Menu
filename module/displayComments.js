import commentCounter from './commentCounter.js';

const getComments = async (id, element) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/i3eTd09nELlrgd0snSwn/comments?item_id=${+id}`)
    .then((response) => response.json()).then((item) => {
      element.innerHTML = '';
      item.forEach((subItem) => {
        element.innerHTML += `
        ${subItem.creation_date} ${subItem.username}: ${subItem.comment} </br>`;
      });
      const showCommentElement = document.querySelector('.strComment');
      showCommentElement.innerHTML = `Comments : ${commentCounter(item)}`;
    });
};
export default getComments;