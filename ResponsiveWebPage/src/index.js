/*import "../assets/css/styles.css";*/
import "../assets/scss/styles.scss";
import logo from "../assets/img/logo.svg";
import logo1 from "../assets/img/Logo1.svg";
import logo2 from "../assets/img/Logo2.svg";
import logo3 from "../assets/img/Logo3.svg";
import logo4 from "../assets/img/Logo4.svg";
import logo5 from "../assets/img/Logo5.svg";

import stand from "../assets/img/stand.png";
import pose from "../assets/img/pose.png";
import bubble from "../assets/img/bubble.png";

import calculator from "../assets/img/calculator.png";
import camera from "../assets/img/camera.png";
import card from "../assets/img/creditcard.png";

import subscription from "../assets/img/subscription.png";
import metrics from "../assets/img/indepthmetrics.png";
import arrow from "../assets/img/downarrow.png";

document.addEventListener("DOMContentLoaded", (event) => {
  const logoImage = document.querySelector(".logo-nav__logo");
  const logo1Image = document.querySelector("#logo1");
  const logo2Image = document.querySelector("#logo2");
  const logo3Image = document.querySelector("#logo3");
  const logo4Image = document.querySelector("#logo4");
  const logo5Image = document.querySelector("#logo5");

  const standImage = document.querySelector(".right-content__stand-image");
  const poseImage = document.querySelector(
    ".right-content__skateboarding-image"
  );
  const bubbleImage = document.querySelector(".right-content__bubble-image");

  const calculatorImage = document.querySelector(".Calculator__image");
  const cameraImage = document.querySelector(".Camera__image");
  const cardImage = document.querySelector(".Card__image");

  const subscriptionImage = document.querySelector(".subscription-image");
  const metricsImage = document.querySelector(".in-depth-metric__image");
  const arrowImage = document.querySelector(".grow-your-business__cta-arrow");

  if (logoImage) {
    logoImage.src = logo;
  }
  if (logo1Image) {
    logo1Image.src = logo1;
  }
  if (logo2Image) {
    logo2Image.src = logo2;
  }
  if (logo3Image) {
    logo3Image.src = logo3;
  }
  if (logo4Image) {
    logo4Image.src = logo4;
  }
  if (logo5Image) {
    logo5Image.src = logo5;
  }

  if (standImage) {
    standImage.src = stand;
  }
  if (poseImage) {
    poseImage.src = pose;
  }
  if (bubbleImage) {
    bubbleImage.src = bubble;
  }

  if (calculatorImage) {
    calculatorImage.src = calculator;
  }
  if (cameraImage) {
    cameraImage.src = camera;
  }
  if (cardImage) {
    cardImage.src = card;
  }

  if (subscriptionImage) {
    subscriptionImage.src = subscription;
  }
  if (metricsImage) {
    metricsImage.src = metrics;
  }
  if (arrowImage) {
    arrowImage.src = arrow;
  }
});
