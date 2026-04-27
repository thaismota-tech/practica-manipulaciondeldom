// 1. Mi proyecto
const headerImages = [
    'assets/imagenes/1.jpg',
    'assets/imagenes/2.jpg',
    'assets/imagenes/3.jpg'
];

const galleryData = [
    { url: 'assets/imagenes/viajes-1.jpg', desc: 'Una mujer descansando en una hamaca mirando hacia el mar.' },
    { url: 'assets/imagenes/viajes-2.jpg', desc: 'Un camino hacia un bungalow en las Maldivas.' },
    { url: 'assets/imagenes/viajes-3.jpg', desc: 'El cielo azul con señales de destinos turísticos de várias ciudades' },
    { url: 'assets/imagenes/viajes-4.jpg', desc: 'La plaza de España en Sevilla.' },
    { url: 'assets/imagenes/viajes-7.jpg', desc: 'Un castillo de el medio de un pueblo en España.' },
    { url: 'assets/imagenes/viajes-6.jpg', desc: 'Un puente junto a acantilado.' }
];

// Función principal que se ejecuta al cargar la página
window.onload = function() {
    
    // HEADER ALEATORIO 
    const headerImgElement = document.getElementById('header-img');
    
    // Índice aleatorio basado en el largo del array
    const randomIndex = Math.floor(Math.random() * headerImages.length);
    
    // URL aleatoria al src del header
    headerImgElement.src = headerImages[randomIndex];

    // GALERÍA DINÁMICA
    const galleryContainer = document.getElementById('gallery-container');

    galleryData.forEach(item => {
        // Crear el contenedor de la tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        //Crear la imagen
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.desc;

        // Crear el contenedor del texto
        const content = document.createElement('div');
        content.classList.add('card-content');
        
        const description = document.createElement('p');
        description.textContent = item.desc;

        // Juntar las piezas
        content.appendChild(description);
        card.appendChild(img);
        card.appendChild(content);

        // Poner la tarjeta terminada en la galería
        galleryContainer.appendChild(card);
    });
};