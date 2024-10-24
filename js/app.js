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

});