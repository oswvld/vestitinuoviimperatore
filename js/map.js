$(document).ready(function(){
	$('#pg-map .map-panel').on('mouseenter', function(){
		$(this).find('.thumbnail').removeClass('thumbnailHidden');
		$(this).find('.thumbnail').addClass('thumbnailShown');
	});

	$('#pg-map .map-panel').on('mouseleave', function(){
		$(this).find('.thumbnail').removeClass('thumbnailShown');
		$(this).find('.thumbnail').addClass('thumbnailHidden');
	});

	$('#pg-map .btn-home').on('click', function(){
		showPage('index');
	});

	$('#pg-map .map-panel').on('click', function(){
		var id_scene = $(this)[0].id;
		var new_scene = null;

		switch(id_scene){
			case 'pnl-copertina':
				new_page = 'index';
			break;

			case 'pnl-000':
				new_page = 'page000';
			break;

			case 'pnl-010':
				new_page = 'page010';
			break;

			case 'pnl-020':
				new_page = 'page020';
			break;

			case 'pnl-030':
				new_page = 'page030';
			break;

			case 'pnl-040':
				new_page = 'page040';
			break;

			case 'pnl-041':
				new_page = 'page041';
			break;

			case 'pnl-050':
				new_page = 'page050';
			break;

			case 'pnl-051':
				new_page = 'page051';
			break;

			case 'pnl-052':
				new_page = 'page052';
			break;

			case 'pnl-060':
				new_page = 'page060';
			break;

			case 'pnl-080':
				new_page = 'page080';
			break;

			case 'pnl-100':
				new_page = 'page100';
			break;

			case 'pnl-FA2':
				new_page = 'pageFA2';
			break;

			case 'pnl-110':
				new_page = 'page110';
			break;

			case 'pnl-090':
				new_page = 'page090';
			break;

			case 'pnl-070':
				new_page = 'page070';
			break;

			case 'pnl-052':
				new_page = 'page052';
			break;

			case 'pnl-121':
				new_page = 'page121';
			break;

			case 'pnl-131':
				new_page = 'page131';
			break;

			case 'pnl-120':
				new_page = 'page120';
			break;

			case 'pnl-130':
				new_page = 'page130';
			break;

			case 'pnl-140':
				new_page = 'page140';
			break;

			case 'pnl-FO':
				new_page = 'pageFO';
			break;

			case 'pnl-FA1':
				new_page = 'pageFA1';
			break;
		}

		showPage(new_page);
	});
});