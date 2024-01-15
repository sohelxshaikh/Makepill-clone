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
