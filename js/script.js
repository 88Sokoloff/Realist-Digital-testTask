// Swiper slider

var mySwiper = new Swiper('.swiper-container', {
	speed: 500,
	spaceBetween: 70,
	slidesPerView: 3,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// Parallax effect

document.getElementById('move').onmousemove = function(e) {
    var w = window.innerWidth;
    var offsetX = 0.5 - e.pageX / w;
    var leaf = document.getElementsByClassName('oak-leaf')[0];
    var leaves = document.getElementsByClassName('oak-leaves')[0];
    var offsetForM = parseInt(leaf.getAttribute('data-offset'));
    var offsetForB = parseInt(leaves.getAttribute('data-offset'));
    var translateM = "translate(" + Math.round(offsetX * offsetForM) + "px";
    var translateB = "translate(-" + Math.round(offsetX * offsetForB) + "px";
    leaf.style.webkitTransform = translateM;
    leaf.style.MozTransform = translateM;
    leaf.style.transform = translateM;
    leaves.style.webkitTransform = translateB;
    leaves.style.MozTransform = translateB;
    leaves.style.transform = translateB;
};