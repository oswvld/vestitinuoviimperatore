$(document).ready(function(){
	$('#minigioco_1c > .btn-home').on('click', function(){
		destroy_minigioco_1c();
		showPage('index');
	});

	$('#minigioco_1c > .btn-retry').on('click', function(){
		restart_minigioco_1c();
	})

	$('#minigioco_1c .btn-mappa').on('click', function(){
		destroy_minigioco_1c();
    	showPage('pg-map');
  	});
});