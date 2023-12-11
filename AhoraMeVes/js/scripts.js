//-----------------------------------------------------------//
//------------------- Carousel index.html -------------------//
//-----------------------------------------------------------//

// Método para hacer funcionar el carousel del index.html.
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


//--------------------------------------------------------------//
//------------------- Position checkbox menú -------------------//
//--------------------------------------------------------------//

// Método para cambiar la position del checkbox del menú a fixed.
function menuActivated() {
    var checkbox = document.getElementById('menu__toggle');
    var label = document.getElementById('menu-btn');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            label.id = 'menu__btn_checked'; // Cambiamos el id por otro
        } else {
            label.id = 'menu-btn'; // Vuelve al ID original
        }
    });
}


//--------------------------------------------------------------//
//------------------- SlideShow comprar.html -------------------//
//--------------------------------------------------------------//

// Método para cambiar los botones de anterior y siguiente de la imagen de comprar.html.
function plusSlides(n) {
    showSlidesComprar(slideIndex += n);
}

// Método para cambiar las imágenes la gafa en cuestión de comprar.html.
function currentSlide(n) {
    showSlidesComprar(slideIndex = n);
}

// Método para hacer funcionar el slideShow de comprar.html.
function showSlidesComprar(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
}