gsap.registerPlugin(ScrollTrigger);


// always refresh on top
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);



// first page animation
gsap.to("#soju-letters", {
    x: "-100rem",
    opacity: 1,
    scrolltrigger: {
        trigger: "#soju-letters",
    }
})

gsap.to(".soju-bottle", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".soju-bottle",
    }
})



// scroll with bottle
gsap.to(".soju-bottle", {
    x: "600rem",
    scale: 0.8,
    rotate: 0,
    scrollTrigger: {
        trigger: ".soju-bottle",
        markers: false,
        start: "center center",
        end: "180% center",
        pin: true,
        scrub: true
    }
})

gsap.to("#tittlepin", {
    scrollTrigger: {
        trigger: ".soju-bottle",
        markers: false,
        start: "52% center",
        end: "180% center",
        pin: true
    }
})


