let slider;

show = (filterClass) => {
	if (filterClass){
		console.log(`Should filter ${filterClass}`);
		let allImages = document.querySelectorAll('div.gallery img');
		console.log(allImages);
		allImages.forEach( image => {
			image.classList.add('hidden');
		});

		let filteredImages = document.querySelectorAll(`div.gallery img.${filterClass}`);
		filteredImages.forEach(image => {
			image.classList.remove('hidden');
		});
	} else {
		let allImages = document.querySelectorAll('div.gallery img');
		allImages.forEach( image => {
			image.classList.remove('hidden');
		});
	}
}

showFilteredModal = (filter, modalName) => {
	console.log(`Should filter ${filter}`);
	//Muestras el modal con la función que necesites 
	//$('#modal').venobox();

	//filtras el slick carousel
	$('.slider').slick('slickUnfilter');
	$('.slider').slick('slickFilter', filter);
	// nombre de la clase que identifica al modal
	$('.modal').toggleClass('is-visible');

}


$(document).ready(function(){
  slider = $('.slider').slick({
	  dots: true,
	  infinite: false,
	  arrows: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});

$('.modal-toggle').on('click', function(e) {
	$('.slider').slick('slickUnfilter');
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});