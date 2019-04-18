$(document).ready(function(){
	$('#minigioco_1a > .btn-home').on('click', function(){
		destroy_minigioco_1a();
		showPage('index');
	});

	$('#minigioco_1a > .btn-retry').on('click', function(){
		restart_minigioco_1a();
	})

	$('#minigioco_1a .btn-mappa').on('click', function(){
		destroy_minigioco_1a();
    	showPage('pg-map');
  	});
});