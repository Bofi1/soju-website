gsap.registerPlugin(ScrollTrigger);

// f5 always on top
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});


window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});  


if (window.innerWidth > 600) {

    console.log(window.innerWidth);
    

    // first page animation
gsap.to("#soju-letters", {
    x: 0,
    opacity: 1,
    scrolltrigger: {
        trigger: "#soju-letters",
    }
})

gsap.to(".soju-bottle", {
    // x:"100rem",
    opacity: 1,
    // duration: 1,
    scrollTrigger: {
        trigger: ".soju-bottle",
    }
})


// scroll with bottle
gsap.to(".soju-bottle", {
    x: "600rem",
    scale: 1.3,
    rotate: 0,
    scrollTrigger: {
        trigger: "#soju-letters",
        endTrigger: "#text",
        start: "50% center",
        end: "50% center",
        markers: false,
        // pin: true,
        scrub: true
    }
})

ScrollTrigger.create({
    trigger: "#soju-letters",
    endTrigger: "#text",
    start: "50% center",
    end: "50% center",
    pin: ".soju-bottle",
    markers: false
  });

ScrollTrigger.create({
    trigger: "#text",
    endTrigger: "#text2",
    start: "50% center",
    end: "center center",
    pin: ".soju-bottle",
    markers: false
  });
} 




///////////7



if (window.innerWidth < 600) {
        // first page animation
gsap.to("#soju-letters", {
    x: 0,
    opacity: 1,
    scrolltrigger: {
        trigger: "#soju-letters",
    }
})

gsap.to(".soju-bottle", {
    // x:"100rem",
    opacity: 1,
    // duration: 1,
    scrollTrigger: {
        trigger: ".soju-bottle",
    }
})


// scroll with bottle
gsap.to(".soju-bottle", {
    x: "900rem",
    scale: 2.8,
    rotate: 0,
    scrollTrigger: {
        trigger: "#soju-letters",
        endTrigger: "#text",
        start: "50% center",
        end: "50% center",
        markers: true,
        // pin: true,
        scrub: true
    }
})

ScrollTrigger.create({
    trigger: "#soju-letters",
    endTrigger: "#text",
    start: "50% center",
    end: "50% center",
    pin: ".soju-bottle",
    markers: true
  });

ScrollTrigger.create({
    trigger: "#text",
    endTrigger: "#text2",
    start: "50% center",
    end: "50% center",
    pin: ".soju-bottle",
    markers: true
  });
}




  


