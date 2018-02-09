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
	breakpoints: {
		480: {
			slidesPerView: 1,
			spaceBetween: 80
		}
	}
});

// Parallax effect

var wrapper = document.querySelector('.move'),
		leaf = document.querySelector('.oak-leaf'),
		leaves = document.querySelector('.oak-leaves'),
		r_branch = document.querySelector('.right-branch'),
		l_branch = document.querySelector('.left-branch');

wrapper.addEventListener('mousemove',function(e){
	var pageX = e.clientX,
			pageY = e.clientY;
	leaf.style.transform = 'translateX(' + pageX/25 + '%) translateY(' + pageY/25 + '%)';
	leaves.style.transform = 'translateX(' + pageX/50 + '%) translateY(' + pageY/50 + '%)';
	// r_branch.style.width = (37 + pageX/100) + '%';
	// l_branch.style.width = (37 + pageX/100) + '%';
});

// Accordion

var acc = document.getElementsByClassName("accordion")[0],
		conteiner = document.getElementsByClassName("header-conteiner")[0],
		logo = document.getElementsByClassName("header-logo")[0];

acc.addEventListener("click", function() {
  this.classList.toggle("active");
  conteiner.classList.toggle("unclipped");
  logo.classList.toggle("moved");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
});