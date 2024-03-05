const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0; //we are on 1 image

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    //Selecting all the images and adding style property none so all images will be hidden
    //then it is selecting 1 image and when n will be 2 it will select 2 image.
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1; //when we click on back btn and we are on the first img so it will directly display the last image.
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    //when we click on next btn and we are on the first img so it will directly display the next image.
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

//scrolling
const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
