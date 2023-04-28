/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/addComment.js":
/*!******************************!*\
  !*** ./module/addComment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./module/displayComments.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./module/popup.js\");\n\r\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst addComment = async (id) => {\r\n  const name = document.querySelector('.name').value;\r\n  const yourComment = document.querySelector('.your-comment').value;\r\n  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/i3eTd09nELlrgd0snSwn/comments?item_id=${id}`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: +id,\r\n      username: name,\r\n      comment: yourComment,\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json; charset=Utf-8',\r\n    },\r\n  }).then((res) => {\r\n    document.querySelector('form').reset();\r\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\r\n    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.id);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/addComment.js?");

/***/ }),

/***/ "./module/addLike.js":
/*!***************************!*\
  !*** ./module/addLike.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likeCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeCount.js */ \"./module/likeCount.js\");\n\r\n\r\nconst like = async (id) => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/likes/', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: +id,\r\n    }),\r\n  });\r\n  (0,_likeCount_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (like);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/addLike.js?");

/***/ }),

/***/ "./module/commentCounter.js":
/*!**********************************!*\
  !*** ./module/commentCounter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (item) => item.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/commentCounter.js?");

/***/ }),

/***/ "./module/displayComments.js":
/*!***********************************!*\
  !*** ./module/displayComments.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./module/commentCounter.js\");\n\r\n\r\nconst getComments = async (id, element) => {\r\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/i3eTd09nELlrgd0snSwn/comments?item_id=${+id}`)\r\n    .then((response) => response.json()).then((item) => {\r\n      element.innerHTML = '';\r\n      item.forEach((subItem) => {\r\n        element.innerHTML += `\r\n        ${subItem.creation_date} ${subItem.username}: ${subItem.comment} </br>`;\r\n      });\r\n      const showCommentElement = document.querySelector('.strComment');\r\n      showCommentElement.innerHTML = `Comments : ${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item)}`;\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/displayComments.js?");

/***/ }),

/***/ "./module/getMealInfo.js":
/*!*******************************!*\
  !*** ./module/getMealInfo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _itemCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemCount.js */ \"./module/itemCount.js\");\n/* harmony import */ var _likeCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeCount.js */ \"./module/likeCount.js\");\n/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addLike.js */ \"./module/addLike.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./module/popup.js\");\n\r\n\r\n\r\n\r\n\r\nconst foodCards = document.querySelector('.food-list');\r\nconst meals = [];\r\nconst renderHtmlPage = async (meal) => {\r\n  await meal.forEach((item) => {\r\n    foodCards.innerHTML += `\r\n    <div class=\"food-card\">\r\n    <img src=\"${item.meals[0].strMealThumb}\" class=\"img-food\">\r\n    <div class=\"food-info\">\r\n      <p class=\"food-name\">${item.meals[0].strMeal}</p>\r\n      </div>\r\n      <div class=\"like-section\">\r\n      <p class=\"like-symbol\" data-id=\"${item.meals[0].idMeal}\"><i id=\"${item.meals[0].idMeal}\" class=\" like fa fa-heart\"></i></p>\r\n      <div class=\"like-count\" data-id=\"${item.meals[0].idMeal}\">\r\n      </div>\r\n      <div class=\"likes\">likes</div>\r\n    </div>\r\n    <div class=\"button\">\r\n    <input type=\"button\" class=\"btnComments\" id=\"${item.meals[0].idMeal}\" value=\"Comments\">\r\n    <input type=\"button\" class=\"btnReserve\" value=\"Reserve\">\r\n    </div>\r\n    </div>\r\n    `;\r\n    (0,_likeCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const btnLike = document.querySelectorAll('.like');\r\n    btnLike.forEach((btn) => {\r\n      btn.addEventListener('click', (e) => {\r\n        const id = Number(e.target.id);\r\n        (0,_addLike_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\nconst displayFoodDetails = async () => {\r\n  const getResponse = async () => {\r\n    for (let i = 52770; i < 52778; i += 1) {\r\n      const objectItem = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`).then((res) => res.json());\r\n      meals.push(objectItem);\r\n    }\r\n    return Promise.all(meals);\r\n  };\r\n  getResponse().then((meals) => {\r\n    renderHtmlPage(meals);\r\n  }).then(async () => {\r\n    // Get and display number of likes\r\n    (0,_likeCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    // Get and display number of items\r\n    const numOfItems = document.querySelector('.number-of-items');\r\n    (0,_itemCount_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meals.length, numOfItems);\r\n\r\n    const btnComment = document.querySelectorAll('.btnComments');\r\n    btnComment.forEach((element) => {\r\n      element.addEventListener('click', (e) => {\r\n        (0,_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.id);\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFoodDetails);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/getMealInfo.js?");

/***/ }),

/***/ "./module/itemCount.js":
/*!*****************************!*\
  !*** ./module/itemCount.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = async (numberOfItem, element) => {\r\n  if (numberOfItem === 0) {\r\n    element.innerHTML = ' ( 0 )';\r\n  } else {\r\n    element.innerHTML = `Number of Items ( ${numberOfItem} )`;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/itemCount.js?");

/***/ }),

/***/ "./module/likeCount.js":
/*!*****************************!*\
  !*** ./module/likeCount.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\r\n  const foodCards = document.querySelector('.food-list');\r\n  const likesCounter = foodCards.querySelectorAll('.like-count');\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/likes/')\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      likesCounter.forEach((likeCounter) => {\r\n        const likesId = likeCounter.getAttribute('data-id');\r\n        const matchingObject = data.find((obj) => obj.item_id === +likesId);\r\n        if (matchingObject) {\r\n          likeCounter.innerHTML = matchingObject.likes;\r\n          likeCounter.parentNode.firstElementChild.firstElementChild.classList.add('liked');\r\n        } else {\r\n          likeCounter.innerHTML = '0';\r\n        }\r\n      });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/likeCount.js?");

/***/ }),

/***/ "./module/popup.js":
/*!*************************!*\
  !*** ./module/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./module/displayComments.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./module/addComment.js\");\n\r\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst getLikesById = async (id) => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/likes')\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      // eslint-disable-next-line consistent-return\r\n      data.forEach((eachItem) => {\r\n        if (+eachItem.item_id === +id) {\r\n          document.querySelector('.likesNum').innerHTML = `${'Likes : '}${eachItem.likes}`;\r\n          (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+id, document.querySelector('.comments'));\r\n        }\r\n      });\r\n      const btnSubmit = document.querySelector('.submit');\r\n      btnSubmit.addEventListener('click', () => { (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(+id); });\r\n\r\n      const btnClose = document.querySelector('#btnClose');\r\n      btnClose.addEventListener('click', () => {\r\n        const popuptElement = document.querySelector('.popup');\r\n        popuptElement.setAttribute('style', 'display:none;');\r\n      });\r\n    });\r\n};\r\nconst renderPopup = async (id) => {\r\n  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${+id}`)\r\n    .then((res) => res.json())\r\n    .then((d) => {\r\n      const master = document.querySelector('.container');\r\n      master.innerHTML = `\r\n      <span class=\"fa fa-close align-end\" id=\"btnClose\"></span>\r\n        <div class=\"image\"><img src=\"${d.meals[0].strMealThumb}\" /></div>\r\n        <p class=\"title\">${d.meals[0].strMeal}</p>\r\n        <div class=\"names-content\" id=\"names-content\">\r\n          <div class=\"area\">Area: ${d.meals[0].strArea} </div>\r\n          <div  class=\"likesNum\">Likes: ${getLikesById(d.meals[0].idMeal)}</div>\r\n          <div  class=\"category\">Category: ${d.meals[0].strCategory}</div>\r\n          <div  class=\"strComment\">Comments: </div>\r\n        </div>\r\n        <div class=\"list\">\r\n        <h2>Add Comments</h2>\r\n        <div class=\"comments\"></div>\r\n        </div>\r\n        \r\n        <form class=\"form-control\" id=\"Form\">\r\n        <input type=\"text\" class=\"name\" id=\"input\" placeholder=\"your name\">\r\n        <textarea class=\"your-comment\" name=\"comment\" id=\"Text\" cols=\"30\" rows=\"5\" placeholder=\"your comment\"></textarea>\r\n        <button class=\"submit\" type=\"button\">Add comment</button>\r\n        </form>`;\r\n      const popuptElement = document.querySelector('.popup');\r\n      popuptElement.setAttribute('style', 'display:block;');\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPopup);\n\n//# sourceURL=webpack://javascript-capstone-2/./module/popup.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".food-container {\\r\\n  padding: 10px;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #f1f1f1;\\r\\n  margin: 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: inline;\\r\\n  padding: 20px;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\nli a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.food-list {\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  gap: 25px;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.food-card {\\r\\n  border: 1px solid lightblue;\\r\\n  border-radius: 2%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  float: left;\\r\\n}\\r\\n\\r\\n.food-card img {\\r\\n  width: 100%;\\r\\n  border-radius: 2%;\\r\\n}\\r\\n\\r\\n.food-info {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.like-section {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 5px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\ndiv.button {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 7px;\\r\\n}\\r\\n\\r\\ndiv.button input {\\r\\n  flex: 1;\\r\\n  border: 1px solid lightblue;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\ndiv.button input:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: cadetblue;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.like-symbol {\\r\\n  color: lightgray;\\r\\n}\\r\\n\\r\\n.liked {\\r\\n  color: orange;\\r\\n}\\r\\n\\r\\n.like-symbol:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 99%;\\r\\n  margin: 0 auto;\\r\\n  border: 1px solid #000;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  z-index: 4;\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 103vh;\\r\\n  width: 100%;\\r\\n  backdrop-filter: blur(4px);\\r\\n}\\r\\n\\r\\n#btnClose {\\r\\n  cursor: pointer;\\r\\n  position: absolute;\\r\\n  top: 20px;\\r\\n  right: 20px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 80vh;\\r\\n  position: relative;\\r\\n  background-color: white;\\r\\n  margin: 60px 90px;\\r\\n  padding: 16px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  gap: 10px;\\r\\n  flex-direction: column;\\r\\n  border-radius: 15px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.names-content {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  gap: 25px;\\r\\n  padding: 8px 30px;\\r\\n}\\r\\n\\r\\n.area,\\r\\n.category,\\r\\n.likesNum,\\r\\n.strComment {\\r\\n  background: rgba(175, 172, 172, 0.3);\\r\\n  padding: 8px;\\r\\n  border-radius: 15px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  width: 400px;\\r\\n}\\r\\n\\r\\n.image img {\\r\\n  width: 100%;\\r\\n  border-radius: 5%;\\r\\n}\\r\\n\\r\\n.align-end {\\r\\n  align-self: end;\\r\\n}\\r\\n\\r\\nform {\\r\\n  margin-top: 12px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n  gap: 15px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  height: 30px;\\r\\n  padding-left: 15px;\\r\\n  padding-right: 15px;\\r\\n  border-radius: 5px;\\r\\n  border: 1px solid cadetblue;\\r\\n  cursor: pointer;\\r\\n  font-size: 16px;\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 7px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: cadetblue;\\r\\n  outline: none;\\r\\n  color: white;\\r\\n  border: white;\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  background-color: #2ac5b0;\\r\\n  box-shadow: 0 3px #666;\\r\\n  transform: translateY(1px);\\r\\n}\\r\\n\\r\\n.text {\\r\\n  margin-top: 20px;\\r\\n  border: 1px solid #cfd8dc;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  padding: 0.75rem;\\r\\n  width: 70%;\\r\\n  font-size: 0.7rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_getMealInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/getMealInfo.js */ \"./module/getMealInfo.js\");\n/* harmony import */ var _module_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/popup.js */ \"./module/popup.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _module_getMealInfo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\ndocument.addEventListener('DOMContentLoaded', _module_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\n\n//# sourceURL=webpack://javascript-capstone-2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;