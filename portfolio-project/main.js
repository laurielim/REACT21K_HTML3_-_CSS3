let header = document.querySelector("#header");
let logo = document.querySelector("#logo");

const minHeader = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    logo.style.fontSize = "2rem";
    header.style.backgroundColor = "#05080fee";
  } else {
    logo.style.fontSize = "4rem";
    header.style.backgroundColor = "#05080f00";
  }
};
document.addEventListener("scroll", minHeader);

let backToTop = document.querySelector(".back-to-top");

const toTop = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    backToTop.style.bottom = "20px";
  } else {
    backToTop.style.bottom = "-50px";
  }
};
document.addEventListener("scroll", toTop);
