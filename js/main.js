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
gsap.from(".header-logo", {duration: 0.25, delay: 0.2, y: "-50%", autoAlpha: 0});

const headerNav = new SplitText(".header-nav")
gsap.from(headerNav.words, {duration: 0.5, delay: 1, y: "-50%", autoAlpha: 0, stagger: 0.05});

const backdropText = new SplitText(".page-backdrop h2")
gsap.from(backdropText.words, {duration: 2, delay: 0.5, y: "-100%", autoAlpha: 0, stagger: 0.05});

gsap.from(".page-backdrop li", {duration: 1, delay: 1.5, y: "-100%", autoAlpha: 0});

const introValues = gsap.utils.toArray(".page-intro ul");
introValues.forEach(text => {
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

const projectTitle = gsap.utils.toArray(".project-backdrop h2");
projectTitle.forEach(text => {
    let SplitClient = new SplitText(text, { type: "words" });
    let words = SplitClient.words; 
    gsap.from(words, {
        duration: 0.8,
        opacity: 0,
        y: "-50%",
        stagger: 0.05,
        scrollTrigger: {
            trigger: words,
            start: "top 80%",
            end: "top 20%",
            scrub: true
        }
    });
});

const projectDescription = gsap.utils.toArray(".project-backdrop > p");
projectDescription.forEach(text => {
    let SplitClient = new SplitText(text, { type: "chars" });
    let chars = SplitClient.chars; 
    gsap.from(chars, {
        duration: 0.8,
        opacity: 0,
        y: "-50%",
        stagger: 0.05,
        scrollTrigger: {
            trigger: chars,
            start: "top 80%",
            end: "top 50%",
            scrub: true
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

const teamMessage = gsap.utils.toArray(".page-team > h2");
teamMessage.forEach(text => {
    let SplitClient = new SplitText(text, { type: "words" });
    let words = SplitClient.words; 
    gsap.from(words, {
        duration: 0.8,
        opacity: 0,
        y: "-50%",
        stagger: 0.05,
        scrollTrigger: {
            trigger: words,
            start: "top 70%",
            end: "top 20%",
            scrub: true
        }
    });
});