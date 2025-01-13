document.addEventListener("DOMContentLoaded", () => {
    gsap.config({
        trialWarn: false
    });

    let timeline = gsap.timeline({duration: 5,});

    timeline.to(".trade_transparency", {
        scaleY: 0.22,
        scaleX: 0.1,
    }, 1)

    timeline.to(".banner_image", {
        scaleX: 0.9,
        scaleY: 0.7,
    }, 1)

    timeline.set(".trade_transparent_text", {
        display: "none",
    }, 1)
    timeline.to(".trade_transparency", {
        display: "none",
    }, 1)

    timeline.to(".trade_say_hola", {
        display: "block",
    }, 1)

    timeline.fromTo(".say_text", {
        x: -1200,
    }, {
        x: -90,
    }, 2)
    timeline.fromTo(".h_mark_text", {
        x: -1200,
    }, {
        x: 0,
    }, 2)
    timeline.fromTo(".hola_text", {
        x: 1200,
    }, {
        x: 0,
    }, 2)

    timeline.fromTo(".say_hola_prime", {
        x: 0,
    }, {
        x: -7,
        duration: 5,
    }, 3)

    timeline.fromTo(".a_facilities_sect", {
        display: "none",
        opacity: 0,
        x: 1200
    }, {
        display: "flex",
        opacity: 1,
        x: 0,
        duration: 1
    }, 3)

    timeline.fromTo(".tranparency_to", {
        x: -1200,
    }, {
        x: 0,
    }, 4)
})