// Selecciona todas las imágenes
const images = document.querySelectorAll('.floating-img');

// Movimiento suave automático
images.forEach(img => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    function move() {
        x += (Math.random() - 0.5) * 10;
        y += (Math.random() - 0.5) * 10;

        img.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(move);
    }

    move();

    // Efecto hover (cuando pasas el mouse)
    img.addEventListener('mouseenter', () => {
        img.style.transform += " scale(1.5)";
        img.style.opacity = "1";
        img.style.filter = "grayscale(0%)";
    });

    img.addEventListener('mouseleave', () => {
        img.style.opacity = "0.6";
        img.style.filter = "grayscale(100%)";
    });
});

// MENSAJE TIPO ALERTA
const mensaje = document.getElementById("mensaje");

setTimeout(() => {
    mensaje.textContent = "El proceso apenas comienza...";
    mensaje.style.opacity = "1";

    setTimeout(() => {
        mensaje.style.opacity = "0";
    }, 4000);

}, 3000);

// BOTÓN APOYO
const btn = document.querySelector(".apoyo-btn");
const info = document.querySelector(".apoyo-info");

btn.addEventListener("click", () => {
    info.style.display = info.style.display === "block" ? "none" : "block";
});
document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.floating-img');

    images.forEach(img => {
        img.addEventListener('click', () => {

            // quitar estados anteriores
            images.forEach(i => {
                i.classList.remove('active');
                i.classList.remove('dim');
            });

            // activar la seleccionada
            img.classList.add('active');

            // bajar las otras
            images.forEach(i => {
                if(i !== img){
                    i.classList.add('dim');
                }
            });
        });
    });

    // click fuera para resetear
    document.body.addEventListener('click', (e) => {
        if(!e.target.classList.contains('floating-img')){
            images.forEach(i => {
                i.classList.remove('active');
                i.classList.remove('dim');
            });
        }
    });

    const mensaje = document.getElementById('mensaje');
    const audio = document.getElementById('audio');
    const boton = document.querySelector('.contacto');
    const apoyoBtn = document.querySelector('.apoyo-btn');
    const apoyoInfo = document.querySelector('.apoyo-info');

    // sonido al pasar
    if(boton && audio){
        boton.addEventListener('mouseenter', ()=>{
            audio.play();
        });
    }

    // mostrar apoyo
    if(apoyoBtn && apoyoInfo){
        apoyoBtn.onclick = ()=>{
            apoyoInfo.style.display = apoyoInfo.style.display==="block"?"none":"block";
        };
    }

    // mensaje aleatorio
    if(mensaje){
        setInterval(()=>{
            if(Math.random()<0.3){
                mensaje.innerText="Bienvenidos...";
                mensaje.style.opacity=1;
                setTimeout(()=>mensaje.style.opacity=0,2000);
            }
        },4000);
    }

});
