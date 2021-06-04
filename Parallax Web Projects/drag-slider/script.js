document.addEventListener("DOMContentLoaded", function (e) {
  const container = document.querySelector(".container");
  const slider = document.querySelector(".slider");
  const nav = document.querySelector(".nav");
  const winW = window.innerWidth;
  const animSpd = 750; //Change also in css
  const distOfLetGo = winW * 0.2;
  let curSlide = 1;
  let animation = false;
  let autoScrollVar = true;
  let diff = 0;

  //    Generating slides
  let arrCities = ["Amsterdam", "Rome", "New—York", "Singapore", "Prague"]; //change number of slides in css also
  let numOfCities = arrCities.length;
  let arrCitiesDivided = [];

  arrCities.map((city) => {
    let length = city.length;
    let letters = Math.floor(length / 4);
    let exp = new RegExp(".{1," + letters + "}", "g");

    arrCitiesDivided.push(city.match(exp));
  });
  console.log(arrCitiesDivided);

  let generateSlide = function (city) {
    let frag1 = document.createDocumentFragment();
    // for navigation
    let frag2 = document.createDocumentFragment();
    const numSlide = arrCities.indexOf(arrCities[city]) + 1;
    const firstLetter = arrCitiesDivided[city][0].charAt(0);

    const slide =
      $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
    <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
    <div class="slide__text-wrapper slide--${numSlide}__text-wrapper"></div>
</div>`);

    const letter = $(
      `<div class="slide__letter slide--${numSlide}__letter"> ${firstLetter} </div>`
    );

    for (let i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
      const text = $(
        `<div class="slide__text slide__text--${i + 1}">${
          arrCitiesDivided[city][i]
        }</div>`
      );
      frag1.append(text);
    }

    const navSlide = $(
      `<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`
    );
    frag2.append(navSlide);
    nav.append(frag2);

    slide
      .find(`.slide--${numSlide}__text-wrapper`)
      .append(letter)
      .append(frag1);

    slider.append(slide);

    if (arrCities[city].length <= 4) {
      $(".slide--" + numSlide)
        .find(".slide__text")
        .css("font-size", "12vw");
    }
  };

  for (let i = 0, length = numOfCities; i < length; i++) {
    generateSlide(i);
  }

  $(".nav__slide--1").addClass("nav-active");

  //   Navigation
});
