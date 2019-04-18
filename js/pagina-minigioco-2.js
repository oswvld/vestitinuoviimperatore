$(document).ready(function(){
	$('#minigioco_2 > .btn-home').on('click', function(){
		destroy_minigioco_2();
		showPage('index');
	});

	$('#minigioco_2 > .btn-retry').on('click', function(){
		restart_minigioco_2();
	})

	$('#minigioco_2 .btn-mappa').on('click', function(){
		destroy_minigioco_2();
    	showPage('pg-map');
  	});
});