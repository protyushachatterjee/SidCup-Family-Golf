gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    delay: 0.5,
    height: "85px",
    scrollTrigger: {
        trigger: "#nav",
        scroll: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.from("#nav h4, img", {
    opacity: 0,
    y: -50,
    stagger: 0.2,
    delay: 0.3
})



gsap.from("#main #page1", {
    opacity: 0,
    delay: 1.5,
    duration: 1
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroll: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 1
    }
})

var cursor = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
var body = document.querySelector("body")

body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
        ease: "back.out",


    })
    gsap.to(crsrBlur, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
        ease: "back.out",
        top: "-20%",
        left: "-7%",
        bottom: "-20%"

    })
})

gsap.from("#about",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroll:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from("#green h4",{
    y:100,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
        scroll:"body",
        trigger:"#green",
        start:"top 70%",
        end:"top 80%",
        scrub:2
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    // duration:0.7,
    // delay:0.4,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page4",
        start:"top 50%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#colon2",{
    x:-70,
    y:-70,
    // duration:0.7,
    // delay:0.4,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page4",
        start:"top 50%",
        end:"top 40%",
        scrub:3
    }
})

