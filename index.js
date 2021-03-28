console.log("Ran index.js!");

function toggleSidenav() {
    var sidenavContainer = document.getElementsByClassName('side-nav-container')[0];
    sidenavContainer.classList.toggle('hide-tab');
    sidenavContainer.classList.toggle('hide-mobile');
    var sidenav = document.getElementsByClassName('side-nav')[0];
    sidenav.classList.toggle('side-nav-close');
}

// var currCar = 0;

// function right() {
//     var arr = Array.prototype.slice.call(document.getElementsByClassName("carImg"));
//     var x = arr.shift();
//     arr.push(x);
//     var t = document.getElementById("car");
//     t.innerHTML = null;
//     // t.appendChild(arr[0]);
//     // arr.forEach(e => t.appendChild(e));
//     for (var i = 0; i < 3; i++) {
//         if (i == 1) {
//             console.log(arr[i]);
//             arr[i].classList.add("active");
//         } else {
//             arr[i].classList.remove("active");
//         }
//         t.appendChild(arr[i]);
//     }
// }

// function left() {
//     var arr = Array.prototype.slice.call(document.getElementsByClassName("carImg"));
//     var x = arr.pop();
//     arr.unshift(x);
//     var t = document.getElementById("car");
//     t.innerHTML = null;
//     // t.appendChild(arr[0]);
//     for (var i = 0; i < 3; i++) {
//         if (i == 1) {
//             console.log(arr[i]);
//             arr[i].classList.add("active");
//         } else {
//             arr[i].classList.remove("active");
//         }
//         t.appendChild(arr[i]);
//     }
// }