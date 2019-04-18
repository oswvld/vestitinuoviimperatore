pages = {
  "index": {
    header: "index",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "page000",
    content: "index"
  },
  "page000": {
    header: "Page 000",
    left: "Go left",
    right: "Go right",
    goLeft: "index",
    goRight: "page010",
    content: 'Molti anni fa viveva un <span class="strong">imperatore</span> che amava tanto avere sempre <span class="strong">bellissimi vestiti nuovi</span> da usare tutti i suoi soldi per vestirsi elegantemente. Non si curava dei suoi soldati né di andare a teatro o di passeggiare nel bosco, se non per sfoggiare i vestiti nuovi.<br/>'+
              'Una volta nella grande città <span class="strong">arrivarono due impostori</span>: si fecero passare per tessitori e sostennero di <span class="strong">saper tessere la stoffa più bella</span> che mai si potesse immaginare. '+
              'Non solo i colori e il disegno erano straordinariamente belli, ma i vestiti di quella stoffa diventavano <span class="strong">invisibili</span> agli uomini che <span class="strong">non erano all\'altezza della loro carica</span> e a quelli <span class="strong">molto stupidi</span>.'
  },
  "page010": {
    header: "page010",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "page020",
    content: 'L\'imperatore non poteva farsi scappare un\'<span class="strong">occasione</span> simile. Con quei vestiti avrebbe potuto scoprire chi nel regno non era all\'altezza dell\'incarico e riconoscere gli stupidi dagli intelligenti.<br/>'+
              'Diede così ai due truffatori <span class="strong">molti soldi</span>, affinché potessero <span class="strong">cominciare a lavorare</span>.'
  },
  "page020": {
    header: "page020",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "page030",
    content: '"Mi piacerebbe sapere <span class="strong">come proseguono i lavori</span> per la stoffa" pensò l\'imperatore, ma in verità si sentiva un po\' <span class="strong">agitato</span>. Naturalmente non temeva per sé stesso. Avrebbe di certo potuto vedere la stoffa. Tuttavia preferì <span class="strong">mandare prima un altro</span> a vedere come le cose proseguivano.<br/>'+
              '"Manderò il mio vecchio bravo <span class="strong">ministro dai tessitori</span>" pensò l\'imperatore "lui potrà certo vedere meglio degli altri come sta venendo la stoffa, dato che <span class="strong">ha buon senso</span> e non c\'è nessuno migliore di lui nel <span class="strong">fare il suo lavoro</span>."'
  },
  "page030": {
    header: "page030",
    left: "Go left",
    right: "Go left",
    goLeft: null,
    goRight: "minigioco_1a",
    content: 'Il vecchio ministro entrò nel salone dove i due truffatori stavano lavorando con i due telai vuoti. "Dio mi protegga!" pensò, e spalancò gli occhi "<span class="strong">non riesco a vedere niente!</span>".<br/>'+
              'Entrambi i truffatori lo pregarono di avvicinarsi di più e chiesero se i colori e il disegno non erano belli. Intanto indicavano i telai vuoti e il povero ministro continuò a sgranare gli occhi, ma non potè dir nulla, perché non c\'era nulla.<br/>'+
              'Se avesse deciso di <span class="strong">dire la verità</span>, avrebbero pensato fosse stupido e lo avrebbero allontanato. Ma avrebbe potuto <span class="strong">mentire</span> al suo Signore, dopo tutti quegli anni di fedele servizio?'
  },
  // Cosa dire all'imperatore?
  "minigioco_1a": {
    header: "minigioco_1a",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'page040', // dinamico
    content: null,
    /*game: "#"*/
  },
  // IMP infuriato, decide di vendicarsi. Invia 2° MIN per confermare
  "page040": {
    header: "page040",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "page050",
    content: 'Tornato dall\'imperatore, il <span class="strong">vecchio ministro ammise</span> di non poter vedere la stoffa e provò a far capire all\'imperatore che i due tessitori erano solo degli imbroglioni.<br/>'+
              'L\'imperatore <span class="strong">si arrabbiò</span>, ma preferì essere sicuro prima di mandare via il suo fedele primo ministro.<br/>'+
              'Così <span class="strong">inviò poco dopo un altro</span> onesto funzionario per vedere come proseguivano i lavori, e quanto mancava prima che il tessuto fosse pronto.'
  },
  // IMP invia 2°MIN per confermare
  "page041": {
    header: "page041",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "page050",
    content: 'Tornato dall\'imperatore, il <span class="strong">vecchio ministro lodò il lavoro</span> dei tessitori: «È splendida! Bellissima! Che disegni e che colori! Sì, sì, mi piacciono moltissimo!», e cominciò a nominare i vari colori e lo splendido disegno, ricordandosi le parole dei tessitori.<br/>'+
              'L\'imperatore <span class="strong">ne fu felice</span>, ma preferì esserne sicuro. Così <span class="strong">inviò poco dopo un altro</span> onesto funzionario per vedere come proseguivano i lavori, e quanto mancava prima che il tessuto fosse pronto.'
  },
  // 2°MIN si accorge dell'inganno
  "page050": {
    header: "page050",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "minigioco_1b",
    content: 'A lui successe quello che era capitato al ministro; guardò con attenzione, ma non c\'era nulla da vedere se non i telai vuoti, e difatti non vide nulla.'+
              '«Non è una bella stoffa?» chiesero i due truffatori, spiegando e mostrando il bel disegno che non c\'era affatto.<br/>'+
              '"<span class="strong">Stupido non sono</span>" pensò il funzionario "è dunque la carica che ho che non è adatta a me? <span class="strong">Mi sembra strano!</span>"<br/>'+
              'Continuando a cercare con gli occhi la stoffa, <span class="strong">rimuginò</span> sul da farsi, se fosse meglio mentire o ammettere di non vedere nulla.'
  },
  "minigioco_1b": {
    header: "minigioco_1b",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: null,
    content: "minigioco_1b",
    game: "#"
  },
  // IMP manda via 1°MIN
  "page051": {
    header: "page051",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "page060",
    content: '"<span class="strong">Nessuno deve accorgersi</span> che non vedo niente!", pensò il funzionario.<br/>'+
              'Andò dall\imperatore e riferì quanto fosse <span class="strong">incredibile la stoffa.</span><br/>'+
              'A seguito di queste parole, l\'imperatore dovette <span class="strong">mandare via il primo ministro</span> che evidentemente non era all\'altezza della propria carica o era molto stupido.'
  },
  // IMP è convinto. Decide di vendicarsi
  "page052": {
    header: "page052",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "page070",
    content: '"<span class="strong">Non posso mentire</span> al mio Signore, ho fatto voto di dire sempre la <span class="strong">verità!</span>", pensò il funzionario.<br/>'+
              'Andò dall\'imperatore e riferì di non poter vedere nulla, perché <span class="strong">nulla era sui telai</span>.<br/>'+
              'A seguito di queste parole, l\'imperatore <span class="strong">si convinse</span> che i due tessitori stessero cercando di <span class="strong">ingannarlo</span>.<br/>'+
              '"Non è possibile che i due funzionari migliori del regno non riescano a vedere la stoffa. Quegli imbroglioni vedranno la mia <span class="strong">ira</span>."'
  },
  // IMP va a vedere i vestiti nuovi
  "page060": {
    header: "page060",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'minigioco_1c',
    content: 'Le parole del funzionario convinsero l\'imperatore che fosse <span class="strong">arrivato il momento di andare</span> a vedere la stoffa personalmente.<br/>'+
              'Con un gruppo di uomini scelti, tra cui anche i due funzionari che già erano stati a vederla <i>[tra cui il funzionario che era riuscito a vederla]</i>, <span class="strong">si recò dai furbi truffatori</span>.<br/>'+
              '«Non è magnifique?» esclamarono i due bravi funzionari.<br/>'+
              '"Come sarebbe!" pensò l\'imperatore. "Io <span class="strong">non vedo nulla</span>! È terribile! sono forse stupido? o non sono degno di essere imperatore?"<br/>'+
              '<span class="strong">Che fare</span>, si chiedeva.'
  },
  // MINIGIOCO con imperatore
  "minigioco_1c": {
    header: "minigioco_1c",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: null,
    content: "minigioco_1c",
    game: "#"
  },
  // IMP chiede 2 vestiti (perché vuole vendicarsi)
  "page070": {
    header: "page070",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: "minigioco_2",
    content: 'Con un gruppo di uomini scelti, tra cui anche i due funzionari che già erano stati a vederla, <span class="strong">si recò dai furbi truffatori</span>.<br/>'+
              '«Oh, è bellissima!» esclamò «<span class="strong">ha la mia piena approvazione!</span>» e ammirava, facendo finta di essere cascato nella trappola.<br/>'+
              'Tutto il suo seguito guardò con attenzione; tutti dissero ugualmente all\'imperatore: «È bellissima» e gli consigliarono di farsi fare un <span class="strong">vestito e di indossarlo al corteo</span> che doveva avvenire tra breve.<br/>'+
              '«Oh, sarebbe uno spreco farne solo un vestito!», esclamò l\'imperatore «<span class="strong">Ne chiedo due</span>! Così potrò indossare questa meravigliosa stoffa più spesso.»'
  },
  // minigioco_2
  "minigioco_2": {
    header: "minigioco_2",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'page110',
    content: "minigioco_1b",
    game: "#"
  },
  // IMP dice di non vedere niente  
  "page080": {
    header: "page080",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'page100',
    content: '«<span class="strong">Non c\'è nulla</span> sui telai!» esclamò «State cercando di imbrogliarmi!» e si guardava intorno sconcertato, cercando di capire se fosse l\'unico a non vederla.<br/>'+
              'Tutto il seguito fissò incerto l\'imperatore.'
  },
  // IMP consegna ai 2 truffatori la Croce del Cavaliere
  "page090": {
    header: "page090",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'minigioco_2',
    content: '«Oh, è bellissima!» esclamò «<span class="strong">ha la mia piena approvazione!</span>» e ammirava, osservandolo soddisfatto, il telaio vuoto; <span class="strong">non voleva dire che non ci vedeva niente</span>.<br/>'+
              'Tutto il suo seguito guardò con attenzione, e non scoprì nulla di più; tutti dissero ugualmente all\'imperatore: «È bellissima» e gli consigliarono di farsi fare un <span class="strong">vestito e di indossarlo al corteo</span> che doveva avvenire tra breve.<br/>'+
              'L\'imperatore consegnò ai truffatori la <span class="strong">Croce di Cavaliere</span> da appendere all\'occhiello, e il titolo di <span class="strong">Nobili Tessitori</span>.'
  },
  // IMP viene mandato via perché non vede i vestiti
  "page100": {
    header: "page100",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'pageFA2',
    content: '<span class="strong">Il principe colse l\'occasione</span>: «Ma come papà, non vedi nulla? Non sarai mica inadatto alla carica?»<br/>'+
              'Indicando l\'imperatore esterrefatto, <span class="strong">gridò alle guardie</span>: «Non solo non vede la stoffa, ma ha anche cercato di dare la colpa ai tessitori, pur di continuare a comandare! Per il bene del regno, <span class="strong">arrestatelo</span>!»'
  },
  // 2TRUF completano la tessitura del vestito tutta la notte
  "page110": {
    header: "page110",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: null,
    content: 'Tutta la notte che precedette il corteo i truffatori <span class="strong">restarono alzati</span> con sedici candele accese.<br/>'+
              'Così la gente poteva vedere che avevano da fare per preparare il nuovo vestito dell\'imperatore.<br/>'+
              'Finsero di togliere la stoffa dal telaio, tagliarono l\'aria con grosse forbici e cucirono con ago senza filo, infine annunciarono: «<span class="strong">Ora il vestito è pronto</span>.»'
  },
  // IMP fa vestire i 2TRUFF
  "page120": {
    header: "page120",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'page130',
    content: 'Giunse l\'imperatore in <span class="strong">casa dei tessitori</span> che sollevarono un braccio come se tenessero qualcosa e dissero: «Questi sono i calzoni; e poi la giacca - e infine il mantello!» e così via.<br/>'+
              '«Vuole Sua Maestà Imperiale degnarsi ora di spogliarsi?» dissero i truffatori «così <span class="strong">le metteremo i nuovi abiti</span> proprio qui davanti allo specchio.»<br/>'+
              '«In realtà, ci ho pensato e credo dobbiate indossare voi il vostro lavoro» disse ai truffatori «così potrete mostrate a tutta la città il vostro talento!»<br/>'+
              'Le guardie fecero un passo avanti minacciose, e, loro malgrado, i truffatori si svestirono.'
  },
  // IMP indossa i nuovi vestiti
  "page121": {
    header: "page121",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'page131',
    content: ''
  },
  // 2TRUFF vengono fatti marciare per la città
  "page130": {
    header: "page130",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'pageFA1',
    content: 'Arrivò il baldacchino e l\'imperatore <span class="strong">fece salire i due truffatori</span>.<br/>'+
              'La gente che era per strada o alla finestra guardava i due tessitori nudi in strada. Qualcuno, meno timido, elogiò i vestiti meravigliosi per paura di sembrare stupido.'
  },
  // IMP marcia per la città
  "page131": {
    header: "page131",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'page140',
    content: 'Arrivò il baldacchino e l\'imperatore <span class="strong">aprì il corteo</span>.<br/>'+
              'La gente che era per strada o alla finestra diceva: «Che meraviglia i nuovi vestiti dell\'imperatore! Che splendido strascico porta! Come gli stanno bene!». <span class="strong">Nessuno voleva far capire che non vedeva niente</span>, perché altrimenti avrebbe dimostrato di essere stupido o di non essere all\'altezza del suo incarico.<br/>'+
              'Nessuno dei vestiti dell\'imperatore aveva mai avuto un <span class="strong">tale successo</span>.'
  },
  // interviene il bambino
  "page140": {
    header: "page140",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'pageFO',
    content: 'Tuttavia ad un certo punto, un <span class="strong">bambino</span> dalla folla esclamò «Ma <span class="strong">non ha niente addosso</span>!»<br/>'+
              '«Signore sentite la voce dell\'innocenza!» replicò il padre, e ognuno sussurrava all\'altro quel che il bambino aveva detto.<br/>'+
              '«Non ha niente addosso! C\'è un bambino che dice che non ha niente addosso!»<br/>'+
              '«Non ha proprio niente addosso!» gridava alla fine tutta la gente.'
  },
  // finale originale
  "pageFO": {
    header: "pageFO",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'index',
    content: 'L\'imperatore rabbrividì perché sapeva che avevano ragione, ma pensò: "Ormai devo restare fino alla fine."<br/>'+
              'E così si raddrizzò ancora più fiero e i ciambellani lo seguirono reggendo lo strascico che non c\'era.'
  },
  // IMP ride mentre guarda la sua vendetta
  "pageFA1": {
    header: "pageFA1",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'index',
    content: '«Signori, <span class="strong">non hanno nulla addosso</span>!» gridò l\'imperatore che si mise a <span class="strong">ridere compiaciuto</span>.<br/>'+
              '«Non ha proprio niente addosso!» gridava alla fine tutta la gente, <span class="strong">convintasi dell\'inganno</span>.<br/>'+
              'Tra risate fragorose, i due imbroglioni finirono <span class="strong">l\'umiliante corteo</span>.'
  },
  // IMP scappa, FIGLIO-IMP prende il suo posto
  "pageFA2": {
    header: "pageFA2",
    left: "Go left",
    right: "Go right",
    goLeft: null,
    goRight: 'index',
    content: 'Il principe <span class="strong">prese il posto del padre</span> che venne imprigionato/che scappò dal regno.'
  },
}