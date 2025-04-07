gsap.registerPlugin(ScrollTrigger)

gsap.to(".soju-bottle", {
    opacity: 1,
    x: 100,
    scrolltrigger: {
        trigger: ".soju-bottle",
        pin: true,
    }
})

gsap.to("#soju-letters", {
    x: -100,
    opacity: 1,
    scrolltrigger: {
        trigger: "#soju-letters",
        pin: true,
    }
})