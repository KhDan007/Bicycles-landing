function ibg(){

	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}
	
ibg();


$(document).ready(function(){
	$('.icon-menu').click(function(){
		$('.icon-menu, .menu__body, .header__logo').toggleClass('active');

		$('body').toggleClass('lock');
	});

	$('.slider').slick({
		arrows:true,
		dots:true,
		// adaptiveHeight:true,
	});
});


