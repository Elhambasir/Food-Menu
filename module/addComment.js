import getComments from './displayComments.js';
// eslint-disable-next-line import/no-cycle
import renderPopup from './popup.js';

const addComment = async (id) => {
  const name = document.querySelector('.name').value;
  const yourComment = document.querySelector('.your-comment').value;
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/i3eTd09nELlrgd0snSwn/comments?item_id=${id}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: +id,
      username: name,
      comment: yourComment,
    }),
    headers: {
      'Content-Type': 'application/json; charset=Utf-8',
    },
  }).then((res) => {
    document.querySelector('form').reset();
    renderPopup(id);
    getComments(res.id);
  });
};
export default addComment;