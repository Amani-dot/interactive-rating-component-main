// alert("working");

const button = document.querySelector(".button");
const ratings = document.querySelectorAll(".ratings");
const placeHolder = document.querySelector("#rate");
const popUp = document.querySelector(".pop-up");
const main_content = document.querySelector(".main");

/* ? Start Ratings with zero */

let rate = 0;

/* Eventlisterner for all ratings */

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const selected = document.querySelector(".checked");
    if (selected) selected.classList.remove("checked");
    e.target.classList.add("checked");
    rate = e.target.textContent;
  });
});

/* Button */
button.addEventListener("click", () => {
  if (rate) {
    main_content.classList.add("hide");
    popUp.classList.remove("hide");
    placeHolder.textContent = rate;
  }
});
