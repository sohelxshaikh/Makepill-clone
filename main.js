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
