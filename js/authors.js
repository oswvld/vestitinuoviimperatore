$(document).ready(function(){
	$('#pg-authors .btn-home').on('click', function(){
		showPage('index');
	});

	$('#hover_alena').on('mouseenter', function(){
		$('#nuvola_alena').removeClass('hiddenNuvola');
		$('#nuvola_alena').addClass('shownNuvola');
	});

	$('#hover_alena').on('mouseleave', function(){
		$('#nuvola_alena').removeClass('shownNuvola');
		$('#nuvola_alena').addClass('hiddenNuvola');
	});

	$('#hover_dani').on('mouseenter', function(){
		$('#nuvola_dani').removeClass('hiddenNuvola');
		$('#nuvola_dani').addClass('shownNuvola');
	});

	$('#hover_dani').on('mouseleave', function(){
		$('#nuvola_dani').removeClass('shownNuvola');
		$('#nuvola_dani').addClass('hiddenNuvola');
	});

	$('#hover_italo').on('mouseenter', function(){
		$('#nuvola_italo').removeClass('hiddenNuvola');
		$('#nuvola_italo').addClass('shownNuvola');
	});

	$('#hover_italo').on('mouseleave', function(){
		$('#nuvola_italo').removeClass('shownNuvola');
		$('#nuvola_italo').addClass('hiddenNuvola');
	});

	$('#hover_irene').on('mouseenter', function(){
		$('#nuvola_irene').removeClass('hiddenNuvola');
		$('#nuvola_irene').addClass('shownNuvola');
	});

	$('#hover_irene').on('mouseleave', function(){
		$('#nuvola_irene').removeClass('shownNuvola');
		$('#nuvola_irene').addClass('hiddenNuvola');
	});

	$('#hover_livia').on('mouseenter', function(){
		$('#nuvola_livia').removeClass('hiddenNuvola');
		$('#nuvola_livia').addClass('shownNuvola');
	});

	$('#hover_livia').on('mouseleave', function(){
		$('#nuvola_livia').removeClass('shownNuvola');
		$('#nuvola_livia').addClass('hiddenNuvola');
	});

	$('#hover_simona').on('mouseenter', function(){
		$('#nuvola_simona').removeClass('hiddenNuvola');
		$('#nuvola_simona').addClass('shownNuvola');
	});

	$('#hover_simona').on('mouseleave', function(){
		$('#nuvola_simona').removeClass('shownNuvola');
		$('#nuvola_simona').addClass('hiddenNuvola');
	});
});