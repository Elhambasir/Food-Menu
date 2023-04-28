const countItems = async (numberOfItem, element) => {
  if (numberOfItem === 0) {
    element.innerHTML = ' ( 0 )';
  } else {
    element.innerHTML = `Number of Items ( ${numberOfItem} )`;
  }
};

export default countItems;