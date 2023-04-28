import './style.css';
import displayFoodDetails from '../module/getMealInfo.js';
import popup from '../module/popup.js';
import addComment from '../module/addComment.js';

document.addEventListener('DOMContentLoaded', displayFoodDetails(), popup, addComment);