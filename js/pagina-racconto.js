$(document).ready(function(){
	$('.racconto .btn-home').on('click', function(){
		$('.pergamena').addClass('pergamenaHidden');
      	$('.pergamena').removeClass('pergamenaShown');
		showPage('index');
	});

	$('.racconto .btn-mappa').on('click', function(){
		$('.pergamena').addClass('pergamenaHidden');
      	$('.pergamena').removeClass('pergamenaShown');
    	showPage('pg-map');
  	});
});