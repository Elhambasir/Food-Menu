const getComments = async (id, element) => {
  element.innerHTML = '';
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/i3eTd09nELlrgd0snSwn/comments?item_id=${id}`)
    .then((response) => response.json()).then((item) => {
      item.forEach((item) => {
        element.innerHTML += `
        ${item.creation_date} ${item.username}: ${item.comment} </br>`;
      });
    });
};
export default getComments;