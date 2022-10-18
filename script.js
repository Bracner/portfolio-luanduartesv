function menuShow() {
    let menuMobile = document.querySelector('.menu-responsive');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        
    } else {
        menuMobile.classList.add('open');
    }
}

window.sr = ScrollReveal({reset: true});

sr.reveal ('.main, .projetos h2', {duration: 2000});
sr.reveal ('.skills, .habilidades h2', {duration: 2000});
sr.reveal ('.sobre h2,p', {duration: 2000});
sr.reveal ('.landpage h2,p, .landpage h1, .bottons', {duration: 2000});
