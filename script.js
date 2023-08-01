"use strict";

//  My Web page

const head = document.querySelector(".header");
// Selection
const section1 = document.querySelector("#section--1");

const btnScrollTo = document.querySelector(".scroll--to-btn");
const btnContent = document.querySelector(".content-writing");
const btnVideo = document.querySelector(".video-editing");
const btnWebDev = document.querySelector(".web-development-btn");
const btnNext = document.querySelector(".next-sample");
const btnPrevious = document.querySelector(".previous-sample");

// const paraServices = document.querySelector(".services-para-start");
// const paraContentWriting = document.querySelector(".Content--writing-para");
// const paraVideoEditing = document.querySelector(".video-editing-para");
// const paraWebDev = document.querySelector(".web-development-para");

const contentWritingSample = document.querySelector(".essay-sample");
const webDevSample = document.querySelector(".web-development");
const videoEditingSample = document.querySelector(".video");

const contentSampletitle = document.querySelector(".Content-Test");
const webDevSampleTitle = document.querySelector(".webdev-Test");
const videoSampleTiltle = document.querySelector(".video-Test");

//init

head.scrollIntoView({
  behavior: "smooth",
});
//varriables

// let activeBtn;
// let currentPara;
let currentSample;
let nextPreviousSample;
let nextPreviousName;
//Arrays

// const serviceAllBtns = [btnContent, btnVideo, btnWebDev];

// const serviceAllPara = [
//   paraContentWriting,
//   paraVideoEditing,
//   paraWebDev,
//   paraServices,
// ];

const allSamples = [contentWritingSample, webDevSample, videoEditingSample];

const allSampleName = [
  contentSampletitle,
  webDevSampleTitle,
  videoSampleTiltle,
];
//functions

// const currentParaDisplay = function () {
//   serviceAllPara.forEach((para) => {
//     if (para === currentPara) {
//       para.classList.remove("hidden");
//     } else {
//       para.classList.add("hidden");
//     }
//   });
// };

// const activeBtnCheckDisplay = function () {
//   serviceAllBtns.forEach((btn) => {
//     if (btn === activeBtn) {
//       btn.classList.add("active");
//     } else {
//       btn.classList.remove("active");
//     }
//   });
//   activeBtn.classList.add("active");
// };

// Event listners
btnNext.addEventListener("click", function () {
  allSamples.forEach((sample, i) => {
    if (!sample.classList.contains("hidden")) {
      sample.classList.add("hidden");
      allSampleName[i].classList.add("hidden");
      i++;
      if (i > 2) {
        i = 0;
      }

      nextPreviousSample = allSamples[i];
      nextPreviousName = allSampleName[i];
    }
  });
  nextPreviousSample.classList.remove("hidden");
  nextPreviousName.classList.remove("hidden");
});
btnPrevious.addEventListener("click", function () {
  allSamples.forEach((sample, i) => {
    if (!sample.classList.contains("hidden")) {
      sample.classList.add("hidden");
      allSampleName[i].classList.add("hidden");
      i--;
      if (i < 0) {
        i = 2;
      }

      nextPreviousSample = allSamples[i];
      nextPreviousName = allSampleName[i];
    }
  });
  nextPreviousSample.classList.remove("hidden");
  nextPreviousName.classList.remove("hidden");
});

// btnContent.addEventListener("click", function () {
//   activeBtn = btnContent;
//   currentPara = paraContentWriting;
//   // activeBtnCheckDisplay();
//   // currentParaDisplay();
// });

// btnVideo.addEventListener("click", function () {
//   activeBtn = btnVideo;
//   currentPara = paraVideoEditing;
//   // activeBtnCheckDisplay();
//   // currentParaDisplay();
// });

// btnWebDev.addEventListener("click", function () {
//   activeBtn = btnWebDev;
//   currentPara = paraWebDev;
//   // activeBtnCheckDisplay();
//   // currentParaDisplay();
// });

btnScrollTo.addEventListener("click", function () {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

// page navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link--btn")) return;
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//

//

const serviceAllBtn = document.querySelectorAll(".btn-ser");
const serviceAllParas = document.querySelectorAll(".services-para");
const section1services = document.querySelector(".section-1-box");

section1services.addEventListener("click", (e) => {
  const clicked = e.target;
  if (!e.target.classList.contains("btn-ser")) return;

  serviceAllBtn.forEach((btn) => btn.classList.remove("active"));
  serviceAllParas.forEach((p) => p.classList.add("hidden"));
  clicked.classList.add("active");

  //

  document
    .querySelector(`.ser-para-${clicked.dataset.btn}`)
    .classList.remove("hidden");
});

// serBtn.addEventListener("click", function () {
//   console.log(serBtn);
// });

//Nav items fade animation

const nav = document.querySelector(".nav");

const hoverHandler = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const links = e.target.closest("nav").querySelectorAll(".nav__link");
    const logo = e.target.closest("nav").querySelector("img");
    links.forEach((el) => {
      if (el !== e.target) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", hoverHandler.bind(0.5));

nav.addEventListener("mouseout", hoverHandler.bind(1));

/// Interscetion Observer ApI

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    const section1Box = entry.target.querySelector(".section-1-box");

    if (!entry.isIntersecting) return;
    section1Box.classList.remove("opacity");
    observer.unobserve(entry.target);

    // if (entry.isIntersecting) {
    //   entry.target.querySelector(".section-1-box").classList.remove("opacity");
    // } else {
    //   entry.target.querySelector(".section-1-box").classList.add("opacity");
    // }
  });
};
const obsOption = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver(obsCallback, obsOption);

observer.observe(section1);

//Section Samples Scroll Animation
const allSections = document.querySelectorAll(".section");

const section2 = document.querySelector("#section--2");

const sampleAnimation = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting || !entry.intersectionRatio > 0.16) return;
  entry.target.classList.remove("opacity");
  observer.unobserve(entry.target);
};
const sampleObserver = new IntersectionObserver(sampleAnimation, {
  root: null,
  threshold: 0.16,
});
allSections.forEach((section) => {
  sampleObserver.observe(section);
  section.classList.add("opacity");
});
