const heroTitle = document.getElementById("hero-title");
const titlePage = document.getElementById("title-container");
const homePage = document.getElementById("home-page");
const codeAnimationContainer = document.querySelector(
  ".code-animation-container"
);

const numberOfItems = 40;
const homePageContent = document.getElementById("home-page-content-container");

mouseActive = false;

//sleeper function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function flashBlock(el, delay) {
  return new Promise((resolve) => {
    let content = el.textContent;

    setTimeout(() => {
      el.innerHTML = "&#9646;";
    }, 100);

    setTimeout(() => {
      el.innerHTML = content; // restore original content here
      resolve(); // resolve AFTER delay
    }, delay);
  });
}

function typeOut(el, newText, restore = false) {
  return new Promise((resolve) => {
    const original = el.textContent;
    el.classList.add("codify");

    const letters = newText.split("");
    el.textContent = "";

    letters.forEach((l, i) => {
      setTimeout(() => {
        el.textContent += l;

        if (i === letters.length - 1) {
          // last letter typed
          if (restore) {
            setTimeout(() => {
              el.textContent = original;
              el.classList.remove("codify");
              resolve();
            }, 300);
          } else {
            el.classList.remove("codify");
            resolve();
          }
        }
      }, i * 20);
    });
  });
}

const welcomeMessage = document.querySelector(".welcome-message");
const welcomeMessageContainer = document.getElementById(
  "welcome-message-container"
);
const instruction = document.querySelector(".instruction");

typeOut(welcomeMessage, `<h1>Welcome to the home page<h1>`, true).then(
  () => (instruction.style.opacity = "1")
);

if (heroTitle) {
  //this is the old code for creating the opening web titles
  heroTitle.innerHTML = "";
  flashBlock(heroTitle, 500);

  setTimeout(function typeTitle() {
    heroTitleText.split("").forEach((letter, i) => {
      setTimeout(function typingEach() {
        let span = document.createElement("span");
        span.textContent = letter;
        span.classList.add("letter");
        heroTitle.appendChild(span);
      }, i * 100);
    });
  }, 1000);

  setTimeout(addLetters, 3000);

  async function addLetters() {
    await sleep(150);
    heroTitle.textContent = "mAtT wRiGhEs ";
    heroTitle.style.fontFamily = "Tahoma";
    heroTitle.style.color = "red";
    await sleep(150);
    heroTitle.textContent = "MATT WRIGHTES C";
    heroTitle.style.fontFamily = "Times New Roman";
    heroTitle.style.color = "blue";
    await sleep(150);
    heroTitle.textContent = "<h1>MATT WRIGHTE CO<h1>";
    heroTitle.style.fontFamily = "Cascadia Mono";
    heroTitle.style.color = "#6A9955";
    await sleep(150);
    heroTitle.textContent = ">><<";
    heroTitle.style.fontFamily = "Wingdings";
    heroTitle.style.color = "white";
    await sleep(150);
    heroTitle.textContent = "MATT WRIGHT CODE";
    heroTitle.style.fontFamily = "Forum, serif";
    heroTitle.style.color = "antiquewhite";
    heroTitle.style.transform = "translate(-50%, -50%) scale(1.1)";
    allItems.forEach((item) => {
      item.style.opacity = "1";
    });
    allItems.forEach((item, i) => {
      setTimeout(function itemDelay() {
        item.style.transform = "translateY(-200%)";
      }, i * 40);
    });
    await sleep(1500);
    heroTitle.style.opacity = "0";
    await sleep(1000);

    let a = document.createElement("a");
    a.setAttribute("href", "./alt-home.html");
    a.click();
  }
}

/*fun new task -

each echo needs to conclude with the circle shrinking afterwards. so it needs to override the rest of the animation. 
*/

let circleHeading = document.querySelector(".circle-heading");
const codeCircle = document
  .querySelectorAll(".code-circle")
  .forEach((circle, i) => {
    circle.setAttribute("draggable", "false");
    let originalSrc = circle.src;
    circle.addEventListener("mouseenter", () => {
      mouseActive = true;
      if (window.innerWidth > 1079) {
        circleHeading.style.opacity = "1";
        switch (i) {
          case 0:
            circle.src = "home.svg";
            circleHeading.textContent = "HOME";
            break;
          case 1:
            circle.src = "proj.svg";
            circleHeading.textContent = "ALL PROJECTS";
            break;
          case 2:
            circle.src = "time.svg";
            circleHeading.textContent = "DYNAMIC RETRO TIMER";
            break;
          case 3:
            circle.src = "gd.svg";
            circleHeading.textContent = "SLEEPHAWK: GRAPHIC DESIGN PORTFOLIO";
            break;
          case 4:
            circle.src = "cmgmt.svg";
            circleHeading.textContent =
              "THINGS MADE PUBLIC: CONTENT MANAGEMENT AND AUDIT";
            break;
          default:
            break;
        }
      }
    });
    circle.addEventListener("mouseleave", () => {
      mouseActive = false;
      circleHeading.style.opacity = "0";
      circle.src = originalSrc;
    });
  });

const codeCircleWrapper = document.querySelectorAll(".code-circle-wrapper");

let animationIntervalID = setInterval(() => {
  codeCircleWrapper.forEach((circle, i) => {
    setTimeout(() => {
      circle.style.transform = "scale(1.05)";
      circle.style.filter = "brightness(2)";
    }, 100 * codeCircleWrapper.length - i * 100);
    setTimeout(() => {
      circle.style.transform = "scale(1)";
      circle.style.filter = "brightness(1)";
    }, 150 * codeCircleWrapper.length - i * 100);
  });
}, 4500);

codeCircleWrapper.forEach((circle) => {
  circle.addEventListener("click", () => {
    clearInterval(animationIntervalID);
    welcomeMessageContainer.style.opacity = "0";
    codeCircleWrapper.forEach((individual, i) => {
      individual.classList.remove("code-circle-hover-class");
      document.querySelectorAll(".code-circle").forEach((rotation) => {
        rotation.style.animationDuration = "7s";
        rotation.style.animationTimingFunction = "ease-out";
        circleHeading.style.transform = "translate(-50%, -50%) scale(1.5)";
      });
      setTimeout(() => {
        setTimeout(() => {
          individual.style.transform = "scale(0)";
          individual.style.filter = "brightness(0)";
        }, i * 80);
      }, 300);
    });
  });
  let a = circle.querySelector("a");
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const href = a.href;
    setTimeout(() => {
      window.location.href = href;
    }, 1300);
  });
});

/*---------------------------------------------*/
/*-Code wall---------------------*/
/*---------------------------------------------*/

let codeDummy = `<body><header><nav></nav></header> <main> <div id="title-container">`;

const codeDummySpans = codeDummy.split("").map((letter) => {
  let span = document.createElement("span");
  span.textContent = letter;
  return span;
});

for (let i = 0; i < numberOfItems; i++) {
  let div = document.createElement("div");
  div.classList.add("item");
}

const allItems = document.querySelectorAll(".item");

allItems.forEach((item) => {
  codeDummySpans.forEach((span) => {
    item.appendChild(span.cloneNode(true));
  });
});
