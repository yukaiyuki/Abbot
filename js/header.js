// header btn
const headerSecondBtn = document.getElementsByClassName("header__second-btn")[0];
const headerSecondContent = document.getElementsByClassName("header__second-btn-content")[0];
const headerSecondClose = document.getElementsByClassName("header__second-close")[0];

headerSecondBtn.onclick = function () {
	headerSecondContent.style.display = "grid";
	headerSecondBtn.style.display = "none";
	headerSecondClose.style.display = "block";
}
headerSecondClose.onclick = function () {
	headerSecondContent.style.display = "none";
	headerSecondBtn.style.display = "block";
	headerSecondClose.style.display = "none";
}

// header search
const searchSecondBtn = document.getElementsByClassName("header__second-search-btn")[0];
const searchSecondContent = document.getElementsByClassName("header__second-search-content")[0];
const searchSecondClose = document.getElementsByClassName("header__second-search-close")[0];

searchSecondBtn.onclick = function () {
	searchSecondContent.style.display = "grid";
}
searchSecondClose.onclick = function () {
	searchSecondContent.style.display = "none";
}