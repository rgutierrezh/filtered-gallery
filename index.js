let slider;

show = (filterClass) => {
	let filteredGallery = document.getElementById('filteredGallery');
	let gallery = document.getElementById('gallery');

	if(filteredGallery.hasChildNodes()){
		let images = document.querySelectorAll('div#filteredGallery img');
		images.forEach(image => {
			image.classList.remove('show');
			gallery.append(image);
		});
	}

	if (filterClass){
		filteredGallery.classList.remove('d-none');
		gallery.classList.add('d-none');

		let filteredImages = document.querySelectorAll(`div.gallery img.${filterClass}`);
		filteredImages.forEach(image => {
			filteredGallery.append(image);
			image.classList.add('hidden');
			setTimeout(function () {
				image.classList.remove('hidden');
				image.classList.add('show');
			}, 200)
		});
		let hiddenImages = document.querySelectorAll(`div.gallery img.hidden`);
	} else {
		gallery.classList.remove('d-none');
		filteredGallery.classList.add('d-none');
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
