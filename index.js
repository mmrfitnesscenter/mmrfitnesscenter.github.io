
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