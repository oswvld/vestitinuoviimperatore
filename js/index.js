var dbg = false;

var esito_minigioco_1a = null;
var esito_minigioco_1b = null;
var esito_minigioco_1c = null;
var esito_minigioco_2 = null;

/* ===== RUNTIME ===== */

var currentStatus = "index";

showPage(currentStatus);

/* === show page === */

function showPage(next_page) {
  var previous = currentStatus;
  var next = next_page;

  if(dbg){
    console.log('previous: '+previous)
    console.log('next: '+next)
  }

  if(next == 'minigioco_1a' || next == 'minigioco_1b' || next == 'minigioco_1c' || next == 'minigioco_2'){
    $('.rim-details').css('display','none');
    $('.outer-rim').css('display','block');
  }
  else{
    $('.rim-details').css('display','block');
    $('.outer-rim').css('display','none');
  }

  $('#'+previous).removeClass('shownPage');
  $('#'+previous).addClass('hiddenPage');
  $('#'+next).removeClass('hiddenPage');
  $('#'+next).addClass('shownPage');

  setTimeout(function(){
    $('#'+next+' .pergamena').fadeIn(2000);
    $('#'+next+' .testo').fadeIn(2000, function(){
      $('#'+next+' .pergamena').addClass('pergamenaShown');
      $('#'+next+' .pergamena').removeClass('pergamenaHidden');
    });
  }, 2000);

  currentStatus = next;

}

/* ====== LISTENERS ====== */

$(document).ready(function(){
  $('.btn-crediti').on('click', function(){
    showPage('pg-credits');
  });

  $('.btn-autori').on('click', function(){
    showPage('pg-authors');
  });

  $('#index .btn-mappa').on('click', function(){
    showPage('pg-map');
  });

  $('.main-logo').on('mouseenter', function(){
    $('.main-logo .normal').css('display','none')
    $('.main-logo .colored').css('display','block')
  })

  $('.main-logo').on('mouseleave', function(){
    $('.main-logo .normal').css('display','block')
    $('.main-logo .colored').css('display','none')
  })

  $('.btn-home').on('mouseenter', function(){
    $('.btn-home .normal').css('display','none')
    $('.btn-home .colored').css('display','block')
  })

  $('.btn-home').on('mouseleave', function(){
    $('.btn-home .normal').css('display','block')
    $('.btn-home .colored').css('display','none')
  })

  $('.btn-crediti').on('mouseenter', function(){
    $(this).find('.btn-hover').removeClass('btn-hover-hidden')
    $(this).find('.btn-hover').addClass('btn-hover-shown')
  })

  $('.btn-crediti').on('mouseleave', function(){
    $(this).find('.btn-hover').removeClass('btn-hover-shown')
    $(this).find('.btn-hover').addClass('btn-hover-hidden')
  })

  $('.btn-autori').on('mouseenter', function(){
    $(this).find('.btn-hover').removeClass('btn-hover-hidden')
    $(this).find('.btn-hover').addClass('btn-hover-shown')
  })

  $('.btn-autori').on('mouseleave', function(){
    $(this).find('.btn-hover').removeClass('btn-hover-shown')
    $(this).find('.btn-hover').addClass('btn-hover-hidden')
  })

  $('.btn-mappa').on('mouseenter', function(){
    $(this).find('.btn-hover').removeClass('btn-hover-hidden')
    $(this).find('.btn-hover').addClass('btn-hover-shown')
  })

  $('.btn-mappa').on('mouseleave', function(){
    $(this).find('.btn-hover').removeClass('btn-hover-shown')
    $(this).find('.btn-hover').addClass('btn-hover-hidden')
  })

  $('#index .main-logo').on('click', function(){
    showPage('page000');
  });

  $('#page000 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];

    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
    $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
    $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page010 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];

    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
    $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
    $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page020 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];

    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
    $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
    $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page030 .testo').on('click', function(){

    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];

    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
      initialize_minigioco_1a();
    });
  });

  $('#page040 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];

    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page041 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page050 .testo').on('click', function(){

    if( esito_minigioco_1a == 'b' && esito_minigioco_1b == 'b' )
      $('#page060 .interchange').text('tra cui anche i due funzionari che già erano stati a vederla');
    else
      $('#page060 .interchange').text('tra cui il funzionario che era riuscito a vederla');

    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
      initialize_minigioco_1b();
    });
  });

  $('#page051 .testo').on('click', function(){

    if( esito_minigioco_1a == 'b' && esito_minigioco_1b == 'b' )
      $('#page060 .interchange').text('tra cui anche i due funzionari che già erano stati a vederla');
    else
      $('#page060 .interchange').text('tra cui il funzionario che era riuscito a vederla');

    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page052 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page060 .testo').on('click', function(){

    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
      initialize_minigioco_1c();
    });
  });

  $('#page070 .testo').on('click', function(){
    start_minigioco_2();
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page080 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page090 .testo').on('click', function(){
    start_minigioco_2();
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page100 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page110 .testo').on('click', function(){

    if( esito_minigioco_1a == 'v' && esito_minigioco_1b == 'v' )
      var next_page = 'page120';
    else
      var next_page = 'page121';

    var current_page = currentStatus;
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page120 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page121 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page130 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page131 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#page140 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#pageFO .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#pageFA1 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });

  $('#pageFA2 .testo').on('click', function(){
    var current_page = currentStatus;
    var next_page = pages[current_page]['goRight'];
    $('#'+current_page+' .pergamena').fadeOut(1000);
    $('#'+current_page+' .testo').fadeOut(1000, function(){
      $('#'+current_page+' .pergamena').addClass('pergamenaHidden');
      $('#'+current_page+' .pergamena').removeClass('pergamenaShown');
      showPage(next_page);
    });
  });
});

/* ===== copertina ===== */
function hideCopertina() {
  $('#index').removeClass('shownPage');
  $('#index').addClass('hiddenPage');
}

function showCopertina() {
  $('#index').removeClass('hiddenPage');
  $('#index').addClass('shownPage');
}

/* credits */
function hideCredits() {
  $('#pg-credits').removeClass('shownPage');
  $('#pg-credits').addClass('hiddenPage');
}

function showCredits() {
  $('#pg-credits').removeClass('hiddenPage');
  $('#pg-credits').addClass('shownPage');
}

/* autori */
function hideAuthors() {
  $('#pg-authors').removeClass('shownPage');
  $('#pg-authors').addClass('hiddenPage');
}

function showAuthors() {
  $('#pg-authors').removeClass('hiddenPage');
  $('#pg-authors').addClass('shownPage');
}

/* mappa */
function hideMap() {
  $('#pg-map').removeClass('shownPage');
  $('#pg-map').addClass('hiddenPage');
}

function showMap() {
  $('#pg-map').removeClass('hiddenPage');
  $('#pg-map').addClass('shownPage');
}

/* functions minigioco_1a */

function minigioco_1a_verita() {
  esito_minigioco_1a = 'v';

  destroy_minigioco_1a();
  var current_page = currentStatus;
  var next_page = 'page040';
  showPage(next_page);
}

function minigioco_1a_bugia() {
  esito_minigioco_1a = 'b';

  destroy_minigioco_1a();
  var current_page = currentStatus;
  var next_page = 'page041';
  showPage(next_page);
}

/* functions minigioco_1b */

function minigioco_1b_verita() {
  esito_minigioco_1b = 'v';

  destroy_minigioco_1b();

  if(esito_minigioco_1a == 'v'){
    var current_page = currentStatus;
    var next_page = 'page052';
    showPage(next_page);
  }

  if(esito_minigioco_1a == 'b'){
    var current_page = currentStatus;
    var next_page = 'page060';
    showPage(next_page);
  }
}

function minigioco_1b_bugia() {
  esito_minigioco_1b = 'b';


  destroy_minigioco_1b();

  if(esito_minigioco_1a == 'v'){
    var current_page = currentStatus;
    var next_page = 'page051';
    showPage(next_page);
  }

  if(esito_minigioco_1a == 'b'){
    var current_page = currentStatus;
    var next_page = 'page060';
    showPage(next_page);
  }
}

/* functions minigioco_1c */

function minigioco_1c_verita() {
  esito_minigioco_1c = 'v';

  destroy_minigioco_1c();

  var current_page = currentStatus;
  var next_page = 'page080';
  showPage(next_page);
}

function minigioco_1c_bugia() {
  esito_minigioco_1c = 'b';

  destroy_minigioco_1c();

  var current_page = currentStatus;
  var next_page = 'page090';
  showPage(next_page);
}

/* functions minigioco_2 */

function minigioco_2_vinci() {
  esito_minigioco_2 = true;
  destroy_minigioco_2();

  var current_page = currentStatus;
  var next_page = 'page110';
  showPage(next_page);

  // if( esito_minigioco_1a && esito_minigioco_1b ) {
  //   var current_page = currentStatus;
  //   var next_page = 'page120';
  //   showPage(next_page);
  // }else{
  //   var current_page = currentStatus;
  //   var next_page = 'page121';
  //   showPage(next_page);
  // }


  // var current_page = currentStatus;
  // var next_page = 'page090';
  // showPage(next_page);
}