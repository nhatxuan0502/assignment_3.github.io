"use strict";
// regex
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// An thong tin ca nhan
const inputEmail = document.querySelector(".email");
const btnSubmit = document.querySelector(".submit");
const infoContent = document.querySelector(".info-content");
const emailContainer = document.querySelector(".input-email");
btnSubmit.addEventListener("click", function () {
  if (regex.test(inputEmail.value.toLowerCase())) {
    infoContent.classList.remove("info-content");
    emailContainer.classList.add("info-content");
  } else {
    alert("The email is invalid, please try again!");
  }
});

// View More - View Less
let headerTitle = [
  document.querySelector(".experience"),
  document.querySelector(".education"),
  document.querySelector(".activity"),
  document.querySelector(".hobby"),
  document.querySelector(".language"),
  document.querySelector(".skills"),
];
let btnViewMore = document.querySelectorAll(".view-more");
let btnViewLess = document.querySelectorAll(".view-less");
let contentDetails = document.querySelectorAll(".content-detail");
for (let i = 0; i < headerTitle.length; i++) {
  headerTitle[i].addEventListener("mouseover", function handleMouseOver() {
    btnViewMore[i].style.visibility = "visible";
  });
  headerTitle[i].addEventListener("mouseout", function handleMouseOut() {
    btnViewMore[i].style.visibility = "hidden";
  });
  btnViewMore[i].addEventListener("click", function () {
    contentDetails[i].classList.remove("content-detail");
    btnViewMore[i].classList.add("content-detail");
  });
  btnViewLess[i].addEventListener("click", function () {
    contentDetails[i].classList.add("content-detail");
    btnViewMore[i].classList.remove("content-detail");
  });
}

// // job info hidden
// let infoUl = document.querySelectorAll(".show-item");
// let viewMore = document.querySelectorAll(".viewMore");
// let viewLess = document.querySelectorAll(".viewLess");
// let gridTitle = document.querySelectorAll(".grid-item h1");
// console.log("gridtitle", gridTitle.length);
// console.log("viewmore", viewMore.length);
// console.log("viewless", viewLess.length);
// console.log("infoul", infoUl.length);

// function showElement(obj) {
//   obj.classList.remove("hidden");
// }

// const hideElement = function (obj) {
//   obj.classList.add("hidden");
// };

// // lặp qua từ grid item và thêm sự kiện
// for (let i = 0; i < viewMore.length; i++) {
//   // console.log(gridTitle[i]);
//   // Hiển thị viewMore khi di chuột qua
//   gridTitle[i].addEventListener("mouseover", function () {
//     // chỉ show View More nếu không có info của item
//     if (infoUl[i].classList.contains("hidden")) {
//       showElement(viewMore[i]);
//     }
//   });
//   viewMore[i].addEventListener("mouseover", function () {
//     showElement(viewMore[i]);
//   });
//   // Ẩn view More khi di chuột ra khỏi
//   gridTitle[i].addEventListener("mouseout", function () {
//     hideElement(viewMore[i]);
//   });
//   viewMore[i].addEventListener("mouseout", function () {
//     hideElement(viewMore[i]);
//   });

//   // Hiển thị info khi click vào View more đồng thời ẩn view more đi
//   viewMore[i].addEventListener("click", function () {
//     showElement(infoUl[i]);
//     hideElement(viewMore[i]);
//   });
//   // Ẩn đi khi clck vào view Less
//   viewLess[i].addEventListener("click", function () {
//     hideElement(infoUl[i]);
//   });
// }
