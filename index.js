
function toggleSidenav() {
    var sidenavContainer = document.getElementsByClassName('side-nav-container')[0];
    sidenavContainer.classList.toggle('hide-tab');
    sidenavContainer.classList.toggle('hide-mobile');
    var sidenav = document.getElementsByClassName('side-nav')[0];
    sidenav.classList.toggle('side-nav-close');
}

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function moveSlide(dir) {
    var leftSlide = document.getElementById('slide-left');
    var centerSlide = document.getElementById('slide-center');
    var rightSlide = document.getElementById('slide-right');

    if (dir === 'Right') {
        leftSlide.id = 'slide-center';
        centerSlide.id ='slide-right';
        rightSlide.id = 'slide-left';
    } else if (dir === 'Left') {
        leftSlide.id = 'slide-right';
        centerSlide.id ='slide-left';
        rightSlide.id = 'slide-center';
    }
}

function moveGallery(dir) {
    var left2Image = document.getElementById('gallery-image-left-2');
    var left1Image = document.getElementById('gallery-image-left-1');
    var centerImage = document.getElementById('gallery-image-center');
    var right1Image = document.getElementById('gallery-image-right-1');
    var right2Image = document.getElementById('gallery-image-right-2');

    if (dir === 'Left') {
        left2Image.id = 'gallery-image-left-1';
        left1Image.id = 'gallery-image-center';
        centerImage.id = 'gallery-image-right-1';
        right1Image.id = 'gallery-image-right-2';
        right2Image.id = 'gallery-image-left-2';
    } else if (dir === 'Right') {
        left2Image.id = 'gallery-image-right-2';
        left1Image.id = 'gallery-image-left-2';
        centerImage.id = 'gallery-image-left-1';
        right1Image.id = 'gallery-image-center';
        right2Image.id = 'gallery-image-right-1';
    }
}