
function toggleSidenav() {
    var sidenavContainer = document.getElementsByClassName('side-nav-container')[0];
    sidenavContainer.classList.toggle('hide-tab');
    sidenavContainer.classList.toggle('hide-mobile');
    var sidenav = document.getElementsByClassName('side-nav')[0];
    sidenav.classList.toggle('side-nav-close');
}

function moveSlide(dir) {
    var leftSlide = document.getElementById('slide-left');
    var centerSlide = document.getElementById('slide-center');
    var rightSlide = document.getElementById('slide-right');

    if (dir === 'Left') {
        leftSlide.id = 'slide-center';
        centerSlide.id ='slide-right';
        rightSlide.id = 'slide-left';
    } else if (dir === 'Right') {
        leftSlide.id = 'slide-right';
        centerSlide.id ='slide-left';
        rightSlide.id = 'slide-center';
    }
}

var currentActiveSlide = 2;

function moveGallery(dir) {

    var gallerySlides = document.getElementsByClassName('gallery-main-image');
    var gallerySecondSlides = document.getElementsByClassName('gallery-image');

    gallerySlides[currentActiveSlide].classList.toggle('hide');
    gallerySecondSlides[currentActiveSlide].classList.toggle('image-selected');


    if (dir === 'Left') {
        currentActiveSlide = currentActiveSlide == 0 ? gallerySlides.length - 1: currentActiveSlide - 1;
    } else if (dir === 'Right') {
        currentActiveSlide = currentActiveSlide == gallerySlides.length-1 ? 0: currentActiveSlide + 1;
    }
    gallerySlides[currentActiveSlide].classList.toggle('hide');
    gallerySecondSlides[currentActiveSlide].classList.toggle('image-selected');

}

function galleryImageClick(imageNumber) {
    var galleryMainSlides = document.getElementsByClassName('gallery-main-image');
    var gallerySlides = document.getElementsByClassName('gallery-image');

    galleryMainSlides[currentActiveSlide].classList.toggle('hide');
    gallerySlides[currentActiveSlide].classList.toggle('image-selected');

    currentActiveSlide = imageNumber-1;

    galleryMainSlides[currentActiveSlide].classList.toggle('hide');
    gallerySlides[currentActiveSlide].classList.toggle('image-selected');
}