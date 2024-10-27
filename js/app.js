document.addEventListener("DOMContentLoaded", (event) => {
    // Submenu
    let subMenu = document.querySelector(".menu__sub");

    window.addEventListener("click", (e) => {
        if(e.target.closest(".toggle")){
            subMenu.style.display = "flex";
        }else{
            subMenu.style.display = "none";
        }
    });

    // Obtener la fecha objetivo (ajusta según tus necesidades)
    const countDownDate = new Date("2024-10-31T20:00:00").getTime();

    // Actualizar el contador cada segundo
    const x = setInterval(() => {
    // Obtener la fecha y hora actual en milisegundos
    const now = new Date().getTime();

    // Calcular la diferencia en milisegundos
    const distance = countDownDate - now;

    // Cálculos para obtener días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si el contador llega a cero, detenemos el intervalo
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = '00';
        document.getElementById("hours").innerHTML = '00';
        document.getElementById("minutes").innerHTML = '00';
        document.getElementById("seconds").innerHTML = '00';
    }
    }, 1000);

    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".header__title",{
        y: 40,
        duration: 1,
        filter: "blur(10px)",
        opacity: 0,
        scale: 1.3,
        ease: 'bounce.out'
    });

    gsap.from(".header__text",{
        y: 40,
        duration: 1,
        filter: "blur(10px)",
        opacity: 0,
        scale: 1.3,
        delay: 0.5,
        ease: 'bounce.out'
    });

    gsap.from(".header__content .btn",{
        y: 40,
        duration: 1,
        filter: "blur(10px)",
        opacity: 0,
        scale: 1.3,
        delay: 1,
        ease: 'bounce.out'
    });

    const main_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
        }
    })
    main_tl.from('.main__title', {scaleY: 1.2, y: -100, opacity: 0, filter: "blur(5px)"})
    main_tl.from('.main__text', {y: 100, opacity: 0})

    const timer_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.spider-web-decoration h2',
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
        }
    })
    timer_tl.from('.spider-web-decoration h2', {scaleY: 1.2, y: -100, opacity: 0, filter: "blur(5px)"})
    timer_tl.from('.spider-web-decoration p', {y: 100, opacity: 0})

    const squares = gsap.utils.toArray(".timer__square");

    squares.forEach((square, i) => {
        gsap.from(square, {
            scrollTrigger: {
                trigger: square,
                start: "top 50%",
                toggleActions: "play pause play reverse",
            },
            x: 200,
            opacity: 0,
            filter: "blur(10px)",
            delay: i / 4
        });
    });

    const events_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#events',
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
        }
    })
    events_tl.from('#events h2', {scaleY: 1.2, y: -100, opacity: 0, filter: "blur(5px)"})
    events_tl.from('#events h2+p', {y: 100, opacity: 0})

    const posters = gsap.utils.toArray(".ratio-m");

    posters.forEach((poster, i) => {
        gsap.from(poster, {
            scrollTrigger: {
                trigger: poster,
                start: "top 50%",
                toggleActions: "play pause play reverse",
            },
            x: 200,
            opacity: 0,
            filter: "blur(10px)",
            delay: i / 4
        });
    });

});

function scrollToSection(section){
    const targetElement = document.getElementById(`${section}`);
    if (targetElement) {
        gsap.to(window, { duration: 1, scrollTo: targetElement, ease: "power1.out" });
    }else{
        alert(`No se encontró la sección con el ID: ${section}`);
    }
}