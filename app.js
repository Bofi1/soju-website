gsap.registerPlugin(ScrollTrigger);

// f5 always on top
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });  


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
        endTrigger: "#text",
        end: "50% center",
        pin: true,
        scrub: true
    }
})

gsap.to(".soju-bottle", {
    pin: true,
    scrollTrigger: {
        trigger: "#text",
        markers: true,
        start: "50% center",
        endTrigger: "#text2",
        end: "center center",
    }
})


