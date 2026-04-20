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

// click en fondo para resetear
document.body.addEventListener('click', (e) => {
    if(!e.target.classList.contains('floating-img')){
        images.forEach(i => {
            i.classList.remove('active');
            i.classList.remove('dim');
        });
    }
});
