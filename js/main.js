// Header state code
const header = document.querySelector('.header')
const intro = document.querySelector('.page-intro')
const project = document.querySelector('.page-project')

window.addEventListener('scroll', () => {
    if(intro.getBoundingClientRect().top <= header.offsetHeight) {
        header.classList.add('page')
        if (project.getBoundingClientRect().top <= header.offsetHeight && project.getBoundingClientRect().top > project.getBoundingClientRect().height * -1) {
            header.classList.add('project')
        } else {
            header.classList.remove('project')
        }
    } else {
        header.classList.remove('page')
    }
});


// SlotMachine Code
window.addEventListener("DOMContentLoaded", () =>{
    const slotmachines = document.querySelectorAll(".slotmachine");
    
    for (let i = 0; i < slotmachines.length; i++) {
        const slotmachine = slotmachines[i];
        const slots = slotmachine.querySelectorAll("span")
        currentSlot = slotmachine.getAttribute("data-index");
        setInterval(() => {
            for (let j = 0; j < slots.length; j++) {
                const slot = slots[j];
                slot.style.transform = "translateY(" + currentSlot * -100 + "%)";
                if (j == currentSlot) {
                    slot.classList.add("active");
                } else {
                    slot.classList.remove("active");
                }
            }

            if (currentSlot == slots.length -1) {
                currentSlot = 0;
            } else {
                currentSlot++;
            }
            slotmachine.setAttribute("data-index", currentSlot)
        }, 1000);
        
    }
})


// GSAP Split Text
gsap.from(".page-backdrop img", {duration: 1, delay: .2, opacity: "0"});
gsap.from(".header-logo", {duration: 1, delay: .5, y: "-50%", opacity: "0"});

const headerNav = new SplitText(".header-nav")
gsap.from(headerNav.words, {duration: 0.5, delay: .5, y: "-50%", autoAlpha: 0, stagger: 0.05});

const backdropText = new SplitText(".page-backdrop h2")
gsap.from(backdropText.words, {duration: .3, delay: 0.5, y: "-100%", autoAlpha: 0, stagger: 0.05});

gsap.from(".page-backdrop li", {duration: .75, delay: 1.5, y: "-100%", autoAlpha: 0});

const aniWords = gsap.utils.toArray(".ani-words");
aniWords.forEach(text => {
    let SplitClient = new SplitText(text, { type: "words" });
    let words = SplitClient.words; 
    gsap.from(words, {
        duration: 0.8,
        opacity: 0,
        y: "-50%",
        stagger: 0.05,
        scrollTrigger: {
            trigger: words,
            start: "top 75%",
            end: "top 20%",
            scrub: false
        }
    });
});

const projectAside = gsap.utils.toArray(".project-backdrop_details");
projectAside.forEach(text => {
    let SplitClient = new SplitText(text, { type: "words" });
    let words = SplitClient.words; 
    gsap.from(words, {
        duration: 0.8,
        opacity: 0,
        x: "-50%",
        stagger: 0.05,
        scrollTrigger: {
            trigger: words,
            start: "top 80%",
            end: "top 50%",
            scrub: true
        }
    });
});

gsap.utils.toArray(".comparison-section").forEach(section => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "center center",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + section.offsetWidth,
            scrub: true,
            pin: true,
            anticipatePin: 1
        },
        defaults: { ease: "none" }
    });
    // animate the container one way...
    tl.fromTo(section.querySelector(".after-image"), { xPercent: 100, x: 0 }, { xPercent: 0 })
        // ...and the image the opposite way (at the same time)
        .fromTo(section.querySelector(".after-image img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
});