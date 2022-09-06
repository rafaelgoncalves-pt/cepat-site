const header = document.querySelector('.header')
const intro = document.querySelector('.page-intro')
const project = document.querySelector('.page-project')

window.addEventListener('scroll', () => {
    if(intro.getBoundingClientRect().top <= header.offsetHeight) {
        header.classList.add('page')
        console.log(project.getBoundingClientRect().top)
        console.log(project.getBoundingClientRect().height)
        console.log(header.offsetHeight)
        if (project.getBoundingClientRect().top <= header.offsetHeight && project.getBoundingClientRect().top > project.getBoundingClientRect().height * -1) {
            header.classList.add('project')
        } else {
            header.classList.remove('project')
        }
    } else {
        header.classList.remove('page')
    }
});