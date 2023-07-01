"use strict";

//  My Web page

// Selection
const section1 = document.querySelector("#section--1");

const btnScrollTo = document.querySelector(".scroll--to-btn");
const btnContent = document.querySelector(".content-writing");
const btnVideo = document.querySelector(".video-editing");
const btnWebDev = document.querySelector(".web-development-btn");
const btnNext = document.querySelector(".next-sample");
const btnPrevious = document.querySelector(".previous-sample");

const paraServices = document.querySelector(".services-para-start");
const paraContentWriting = document.querySelector(".Content--writing-para");
const paraVideoEditing = document.querySelector(".video-editing-para");
const paraWebDev = document.querySelector(".web-development-para");

const contentWritingSample = document.querySelector(".essay-sample");
const webDevSample = document.querySelector(".web-development");
const videoEditingSample = document.querySelector(".video");

const contentSampletitle = document.querySelector(".Content-Test");
const webDevSampleTitle = document.querySelector(".webdev-Test");
const videoSampleTiltle = document.querySelector(".video-Test");
//varriables

let activeBtn;
let currentPara;
let currentSample;
let nextPreviousSample;
let nextPreviousName;
//Arrays

const serviceAllBtns = [btnContent, btnVideo, btnWebDev];

const serviceAllPara = [
  paraContentWriting,
  paraVideoEditing,
  paraWebDev,
  paraServices,
];

const allSamples = [contentWritingSample, webDevSample, videoEditingSample];

const allSampleName = [
  contentSampletitle,
  webDevSampleTitle,
  videoSampleTiltle,
];
//functions

const currentParaDisplay = function () {
  serviceAllPara.forEach((para) => {
    if (para === currentPara) {
      para.classList.remove("hidden");
    } else {
      para.classList.add("hidden");
    }
  });
};

const activeBtnCheckDisplay = function () {
  serviceAllBtns.forEach((btn) => {
    if (btn === activeBtn) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  activeBtn.classList.add("active");
};

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

btnContent.addEventListener("click", function () {
  activeBtn = btnContent;
  currentPara = paraContentWriting;
  activeBtnCheckDisplay();
  currentParaDisplay();
});

btnVideo.addEventListener("click", function () {
  activeBtn = btnVideo;
  currentPara = paraVideoEditing;
  activeBtnCheckDisplay();
  currentParaDisplay();
});

btnWebDev.addEventListener("click", function () {
  activeBtn = btnWebDev;
  currentPara = paraWebDev;
  activeBtnCheckDisplay();
  currentParaDisplay();
});

btnScrollTo.addEventListener("click", function () {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});
