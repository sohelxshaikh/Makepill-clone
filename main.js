function cursor() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");
  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
}

function section1() {
  let tl = gsap.timeline();
  let typeSplit = new SplitType(".text-container h1 ", {
    types: "lines, words , chars",
    // tagName: "h1",
  });
  tl.from(".header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
  tl.from(".text-container .word, .text-container p ", {
    y: "100%",
    opacity: 0,
    duration: 0.4,
    ease: "power1.out",
    stagger: 0.1,
  });
}
cursor();
section1();

// *************************  section 2 animation *************************************

function section2() {
  let body = document.querySelector("body");
  let cursor = document.querySelector(".cursor");
  let sectionTwo = document.querySelector(".section2");
  sectionTwo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: "<i class='fa-solid fa-volume-high'></i>",
      color: "black",
      fontSize: "25px",
      margin: "20px",
    });
    gsap.to(body, {
      background: "#0f0f0f",
      color: "#fff",
    });
  });
  sectionTwo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      height: "18px",
      width: "18px",
      margin: 0,
      innerHTML: "",
    });
    gsap.to(body, {
      background: "#fff",
      color: "#000",
    });
  });
}
section2();

// *************************  section 3 animation *************************************

function section3() {
  let cursor = document.querySelector(".cursor");
  let sectionThree = document.querySelector(".section3");

  // NOW WE WANT TO CHANGE OUR CURSOR TO BLACK WHEN IT ENTER TO SECTION3

  sectionThree.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
    });
  });
  sectionThree.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      background: "#fff",
    });
  });
}
section3();

function section4() {
  let sectionFour = document.querySelector(".section4");
  let cursor = document.querySelector(".cursor");
  sectionFour.addEventListener("mouseenter", () => {
    cursor.style.background = "#0f0f0f";
  });
  gsap.to(sectionFour, {
    background: "#0f0f0f",
    color: "white",

    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "botttom center",
      scrub: 2,
    },
  });
  gsap.to(".services", {
    color: "white",
    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "botttom center",
      scrub: 2,
      // markers: true,
    },
  });
  sectionFour.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
      scrollTrigger: {
        trigger: ".section4 .four .moving-text",
        start: "bottom center",
        end: "bottom center",
        scrub: 0.1,
        // markers: true,
      },
    });
  });

  // **************** Project *******************
  let parentEl = document.querySelector(".bg");
  let childEl = document.querySelectorAll(".first-project .first");
  childEl.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let ids = item.getAttribute("data-id");
      let bgEl = document.querySelector(`.id-${ids}`);
      // console.log(bgEl);

      parentEl.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });
      bgEl.style.display = "block";
      gsap.to(".cursor", {
        height: "100px",
        width: "100px",
        innerHTML: "<p>See Project</p>",
      });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(".cursor", {
        height: "18px",
        width: "18px",
        innerHTML: "",
        duration: 0.1,
        margin: 0,
      });
    });
  });
}
section4();

function section5() {
  let sectionFive = document.querySelector(".section5");
  let cursor = document.querySelector(".cursor");

  // FOR CHANGING OUR CURSOR COLOR TO BLACK

  sectionFive.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
      duration: 0.1,
    });
  });

  gsap.from(".section5 .five .left h1, .section5 .five .left h5", {
    y: 100,
    opacity: 0,
    stagger: 1,
    duration: 3,

    scrollTrigger: {
      trigger: ".section5 .five",
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}
section5();

// =========================SECTION7 ANIMATIONS-====================

function section7() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");
  let sectionSeven = document.querySelector(".section7");

  gsap.to(body, {
    background: "#0f0f0f",
    color: "white",
    scrollTrigger: {
      trigger: ".section6 .right",
      start: "bottom 60%",
      end: "bottom 40%",
      scrub: 1,
    },
  });

  // LET CHANGE OUR CURSOR TO WHITE WHEN BACKGROUND IS BLACK

  sectionSeven.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".section6 .right",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  });

  // LET CHANGE OUR CURSOR TO balc WHEN BACKGROUND IS white
  sectionSeven.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      background: "black",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".section5 .right",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  });
}
section7();
