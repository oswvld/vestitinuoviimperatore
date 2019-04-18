$(document).ready(function(){
	$('#minigioco_1b > .btn-home').on('click', function(){
		destroy_minigioco_1b();
		showPage('index');
	});

	$('#minigioco_1b > .btn-retry').on('click', function(){
		restart_minigioco_1b();
	})

	$('#minigioco_1b .btn-mappa').on('click', function(){
		destroy_minigioco_1b();
    	showPage('pg-map');
  	});
});