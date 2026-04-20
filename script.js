document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll('.floating-img');
const mensaje = document.getElementById("mensaje");
const audio = document.getElementById("audio");
const boton = document.querySelector('.contacto');
const apoyoBtn = document.querySelector(".apoyo-btn");
const apoyoInfo = document.querySelector(".apoyo-info");

// 🔥 MOVIMIENTO SUAVE (SIN ROMPER SCALE)
images.forEach((img, index) => {

    let x = 0;
    let y = 0;
    let scale = 1;

    function animate() {
        x += Math.sin(Date.now() * 0.001 + index) * 0.3;
        y += Math.cos(Date.now() * 0.001 + index) * 0.3;

        img.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

        requestAnimationFrame(animate);
    }

    animate();

    // HOVER
    img.addEventListener('mouseenter', () => {
        scale = 1.4;
        img.style.opacity = "1";
        img.style.filter = "grayscale(0%)";
    });

    img.addEventListener('mouseleave', () => {
        scale = 1;
        img.style.opacity = "0.6";
        img.style.filter = "grayscale(100%)";
    });

    // CLICK (enfocar imagen)
    img.addEventListener('click', (e) => {
        e.stopPropagation();

        images.forEach(i => {
            i.style.opacity = "0.2";
        });

        img.style.opacity = "1";
        scale = 1.6;
    });

});

// CLICK FUERA (reset)
document.body.addEventListener('click', () => {
    images.forEach(img => {
        img.style.opacity = "0.6";
    });
});

// 🔊 AUDIO
if (boton && audio) {
    boton.addEventListener('mouseenter', () => {
        audio.play().catch(()=>{});
    });
}

// 💰 BOTÓN APOYO
if (apoyoBtn && apoyoInfo) {
    apoyoBtn.addEventListener("click", () => {
        apoyoInfo.style.display =
            apoyoInfo.style.display === "block" ? "none" : "block";
    });
}

// ⚠️ MENSAJE INICIAL
if (mensaje) {
    setTimeout(() => {
        mensaje.textContent = "El proceso apenas comienza...";
        mensaje.style.opacity = "1";

        setTimeout(() => {
            mensaje.style.opacity = "0";
        }, 3000);

    }, 2000);

    // mensajes aleatorios
    setInterval(() => {
        if (Math.random() < 0.3) {
            mensaje.textContent = "Sigue avanzando...";
            mensaje.style.opacity = "1";

            setTimeout(() => {
                mensaje.style.opacity = "0";
            }, 2000);
        }
    }, 5000);
}

});
