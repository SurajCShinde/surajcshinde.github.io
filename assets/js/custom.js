// JavaScript Document



$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


	/* Handles the page being scrolled by ensuring the navigation is always in
 * view.
 */
function handleScroll(){

  // check that this is a relatively modern browser
  if (window.XMLHttpRequest){

    // determine the distance scrolled down the page
    var offset = window.pageYOffset
               ? window.pageYOffset
               : document.documentElement.scrollTop;

    // set the appropriate class on the navigation
    document.getElementById('navigation').className =
        (offset > 104 ? 'fixed' : '');

  }

}

// add the scroll event listener
if (window.addEventListener){
  window.addEventListener('scroll', handleScroll, false);
}else{
  window.attachEvent('onscroll', handleScroll);
}


});