function start_minigioco_2(){
    restart_params_2();
    game = new Phaser.Game(game_width, game_height, Phaser.AUTO, 'minigioco_2_container', { preload: preload_2, create: create_2, update: update_2 });
}

function restart_params_2() {
    // variabili URL assets
    url_assets_ambientazione = './minigames/minigioco_2/assets/ambientazione/';
    url_assets_personaggi = './minigames/minigioco_2/assets/personaggi/';
    url_assets_UI = './minigames/minigioco_2/assets/UI/';

    /* dimensione dell'area di gioco */
    game_width = 1000;
    game_height = 700;
    game = null;

    snake_version = false;

    /* Timer */
    timer = null;
    secondi_timer = 45;

    /* status current player */
    points = 0;
    max_points = 0;
    lives = 3;
    $('.game_ui').css('display','block');
    $('.game_ui #txtVite span').text(lives);
    $('.game_ui #txtPunti span').text(points);

    player = null;
    blinkingCharacter = null;
    coin1 = null;
    coins = null;
    tavoli = null;
    enemies = null;
    enemy_multiplier = 1.0;

    // enemy dx TOP
    enemy_dx_top = null;
    enemy_dx_top_touching_area_pericolo_1 = null;
    enemy_dx_top_touching_pavimento = null;

    // enemy dx BOTTOM
    enemy_dx_bottom = null;
    enemy_dx_bottom_touching_area_pericolo_1 = null;
    enemy_dx_bottom_touching_pavimento = null;


    immunity = null;
    player_touching_pavimento = null;
    player_touching_area_pericolo_1 = null;

    enemy_touching_pavimento = null;
    enemy_touching_area_pericolo_1 = null;

    ui_sfondo = null;
}

function destroy_minigioco_2() {
    game.destroy();
    restart_params_2();
}

function restart_minigioco_2() {
    game.destroy();
    start_minigioco_2();
}



/* =================== FUNZIONI =================== */

function perdiVita() {
    lives--;
    if(lives == 0){
        alert('Game over! Riprova!');
        game.paused = true;
    }
    $('#txtVite > span').text(lives);
}

/*
function addMoneta () {
    var x = null;
    var y = null;

    while( x < 100 || x > 700 )
    {
        //x = Math.round(Math.random() * 700 + 1);
        x = weightedRandom(700, 2);
    }
    
    while( y < 100 || y > 500 )
    {
        //y = Math.round(Math.random() * 600 + 1);
        y = weightedRandom(600, 2);
    }


    coin2 = game.add.sprite(x,y,'coin');
    coin2.scale.setTo(0.1,0.1);
    game.physics.enable(coin2, Phaser.Physics.ARCADE);
    coins.add(coin2);
    console.log(coin2);
}
*/

function prendiMoneta (player, coin) {
    coin.destroy();
    points++;
    $('#txtPunti > span').text(points);

    if(points == 10 && snake_version){
        minigioco_2_vinci();
    }

    if(points == max_points && !snake_version){
        minigioco_2_vinci();
    }

    if( snake_version ){
        generateSnakeMoneta();
    }
}

function blinkingCharacter() {
    if(!blinkingCharacter)
        blinkingCharacter = setInterval(blinkCharacter,100)
}

function blinkCharacter() {
    if(player.alpha == 0.2)
            player.alpha = 1
        else
            player.alpha = 0.2
}


function activate_immunity () {
    if(!blinkingCharacter){
        blinkingCharacter = setInterval(blinkCharacter,100)
    }
    immunity = true;
    var timer_deactivate_immunity = setTimeout(deactivate_immunity, 3000);
    console.log('immunità attivata');
}

function deactivate_immunity () {
    clearInterval(blinkingCharacter)
    blinkingCharacter = null;
    player.alpha = 1
    immunity = false;
    console.log('immunità disattivata');
}


function create_nemico_dx_top() {

    // create ENEMY
    enemy_dx_top = game.add.sprite(900, -50, 'enemy_down');
    enemy_dx_top.scale.setTo(0.12, 0.12);
    enemy_dx_top.animations.add('walking_down');
    game.physics.enable(enemy_dx_top, Phaser.Physics.ARCADE);
}

function create_nemico_dx_bottom() {

    // create ENEMY
    enemy_dx_bottom = game.add.sprite(950, 800, 'enemy_up');
    enemy_dx_bottom.scale.setTo(0.12, 0.12);
    enemy_dx_bottom.animations.add('walking_up');
    game.physics.enable(enemy_dx_bottom, Phaser.Physics.ARCADE);
}

function weightedRandom(max, numDice) {
    var num = 0;
    for (var i = 0; i < numDice; i++) {
        num += Math.random() * (max/numDice);
    }    
    return num;
}

function startTimer() {
    //console.log('start')
    //timer = setTimeout(ogniSecondo, 1000)

    timer = game.time.create(false);
    timer.loop(1000, ogniSecondo, this);
    timer.start();
}

function ogniSecondo() {
    stampaSecondi(secondi_timer)
    secondi_timer -= 1

    if( secondi_timer >= 0 ) {
    }
    else{
        alert('Tempo scaduto! Riprova cliccando il tasto Riprova!')
        timer.stop();
    }
}

function stampaSecondi(secondi) {
    $('#txtTimer').text(secondi)
}

/* ================= PRELOAD ================= */

function preload_2() {

    game.canvas.style.borderRadius = '30px';

    // frame character
	var frameWidth = 289/3;
	var frameHeight = 385/4;

    //var url_AREAPERICOLO = './assets/ambientazione_prova/1x/area_pericolo.png';
    //var url_ENEMYDOWN = './assets/square_enemy.png';
    //var url_ENEMYUP = './assets/square_enemy_up.png';
    var url_COIN = url_assets_ambientazione+'moneta.png';
    var url_PAVIMENTO = url_assets_ambientazione+'pavimento.png';
    var url_AREANEMICITOP = url_assets_ambientazione+'area_nemico_top.png';
    var url_AREANEMICIBOTTOM = url_assets_ambientazione+'area_nemico_bottom.png';
    var url_MUROTOP = url_assets_ambientazione+'muro_top.png';
    var url_MUROBOTTOM = url_assets_ambientazione+'muro_bottom.png';
    var url_TAVOLO = url_assets_ambientazione+'tavolo.png';
    var url_TAVOLO_VERTICALE = url_assets_ambientazione+'tavolo_verticale.png';

    // var url_CHARACTER = url_assets_personaggi+'player_spritesheet.png';
    var url_CHARACTER = url_assets_personaggi+'player_spritesheet_v2.png';
    // var url_ENEMY = url_assets_personaggi+'enemy_leftright.png';
    var url_ENEMY = url_assets_personaggi+'enemy_leftright_v2.png';

    var url_SFONDO_UI = url_assets_UI+'sfondo.png';
    var url_INGRANAGGIO_1 = url_assets_UI+'ingranaggio_1.png';
    var url_FOGLIO_TIMER = url_assets_UI+'foglio_timer.png';
    var url_FOGLIO_PICCOLO = url_assets_UI+'foglio_piccolo.png';

    // Finestra 1
    var url_FINESTRA1_as = url_assets_ambientazione+'aree_sensibili/finestra_1.png';
    var url_FINESTRA1_spot = url_assets_ambientazione+'spot/finestra_1.png';
    game.load.spritesheet('finestra_1_as', url_FINESTRA1_as);
    game.load.spritesheet('finestra_1_spot', url_FINESTRA1_spot);

    // Finestra 2
    var url_FINESTRA2_as = url_assets_ambientazione+'aree_sensibili/finestra_2.png';
    var url_FINESTRA2_spot = url_assets_ambientazione+'spot/finestra_2.png';
    game.load.spritesheet('finestra_2_as', url_FINESTRA2_as);
    game.load.spritesheet('finestra_2_spot', url_FINESTRA2_spot);

    // Finestra 3
    var url_FINESTRA3_as = url_assets_ambientazione+'aree_sensibili/finestra_3.png';
    var url_FINESTRA3_spot = url_assets_ambientazione+'spot/finestra_3.png';
    game.load.spritesheet('finestra_3_as', url_FINESTRA3_as);
    game.load.spritesheet('finestra_3_spot', url_FINESTRA3_spot);

    // Finestra 4
    var url_FINESTRA4_as = url_assets_ambientazione+'aree_sensibili/finestra_4.png';
    var url_FINESTRA4_spot = url_assets_ambientazione+'spot/finestra_4.png';
    game.load.spritesheet('finestra_4_as', url_FINESTRA4_as);
    game.load.spritesheet('finestra_4_spot', url_FINESTRA4_spot);

    // Finestra 5
    var url_FINESTRA5_as = url_assets_ambientazione+'aree_sensibili/finestra_5.png';
    var url_FINESTRA5_spot = url_assets_ambientazione+'spot/finestra_5.png';
    game.load.spritesheet('finestra_5_as', url_FINESTRA5_as);
    game.load.spritesheet('finestra_5_spot', url_FINESTRA5_spot);

    //game.load.image('area_pericolo', url_AREAPERICOLO);
    //game.load.spritesheet('character_movements', url_CHARACTER, frameWidth, frameHeight);
    //game.load.spritesheet('enemy_down', url_ENEMYDOWN, 1201/3, 410);
    //game.load.spritesheet('enemy_up', url_ENEMYUP, 1205/3, 393);
    game.load.image('coin', url_COIN);
    game.load.image('plane', url_PAVIMENTO);
    game.load.image('area_nemici_top', url_AREANEMICITOP);
    game.load.image('area_nemici_bottom', url_AREANEMICIBOTTOM);
    game.load.image('muro_top', url_MUROTOP);
    game.load.image('muro_bottom', url_MUROBOTTOM);
    // game.load.spritesheet('character_movements', url_CHARACTER, 141, 242);
    game.load.spritesheet('character_movements', url_CHARACTER, 438, 806);
    // game.load.spritesheet('enemy_movements', url_ENEMY, 141, 188);
    game.load.spritesheet('enemy_movements', url_ENEMY, 416, 664);
    game.load.image('ui_sfondo', url_SFONDO_UI);
    game.load.image('ingranaggio_1', url_INGRANAGGIO_1)
    game.load.image('foglio_timer', url_FOGLIO_TIMER)
    game.load.image('foglio_piccolo', url_FOGLIO_PICCOLO)
    game.load.image('tavolo', url_TAVOLO);
    game.load.image('tavolo_verticale', url_TAVOLO_VERTICALE);

    game.load.crossOrigin = 'anonymous';
}

/* ================= CREATE ================= */

var array_coins_positions = null;

function create_2() {


    console.log('creating...');

    // create CONTROLS
    cursors = game.input.keyboard.createCursorKeys();

    createPavimento();
    createPlayerAndAnimations();
    createSnakeMonete()

    createAreeNemici();
    createEnemy_bottomDX();
    createEnemy_bottomSX();
    createEnemy_topDX();
    createEnemy_topSX()
    createMuri();
    createSpots();

    startTimer()
    createUI()
}

function createUI(){
    ui_sfondo = game.add.sprite(0, 0, 'ui_sfondo');
    game.add.sprite(0,0,'ingranaggio_1')
    game.add.sprite(0,180,'foglio_timer')
    game.add.sprite(0,245,'foglio_piccolo')
    game.add.sprite(0,295,'foglio_piccolo')
}

function createPavimento(){
    // create PAVIMENTO
    plane = game.add.sprite(0, 170, 'plane');
    game.physics.enable(plane, Phaser.Physics.ARCADE);
}

function createPlayerAndAnimations() {
    // create PLAYER + animations
    player = game.add.sprite(100, 200, 'character_movements');
    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.animations.add('walk_down',[13,14,15], 10);
    player.animations.add('walk_up',[10,11,12], 10);
    player.animations.add('walk_right',[6,7,8,9], 25);
    player.animations.add('walk_left',[0,1,2,3,4,3,2,1,0], 25);
    player.scale.setTo(0.1, 0.1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

}


function createAreeNemici() {
    // create AREE NEMICI
    area_nemici_top = game.add.sprite(0,0, 'area_nemici_top');
    game.physics.enable(area_nemici_top, Phaser.Physics.ARCADE);
    area_nemici_top.body.immovable = true;

    area_nemici_bottom = game.add.sprite(0,600, 'area_nemici_bottom');
    game.physics.enable(area_nemici_bottom, Phaser.Physics.ARCADE);
    area_nemici_bottom.body.immovable = true;
}

function createMuri() {
    muro_top = game.add.sprite(0,98.2, 'muro_top');
    game.physics.enable(muro_top, Phaser.Physics.ARCADE);
    muro_top.body.immovable = true;

    muro_bottom = game.add.sprite(0,530, 'muro_bottom');
    game.physics.enable(muro_bottom, Phaser.Physics.ARCADE);
    muro_bottom.body.immovable = true;
}

function createEnemy_bottomDX() {
    // create ENEMY
    enemy_bottomDX = game.add.sprite(1200, 630, 'enemy_movements');
    enemy_bottomDX.animations.add('walk_left',[0,1,2,3,4], 10);
    enemy_bottomDX.animations.add('walk_right',[6,7,8,9,10,11], 10);
    enemy_bottomDX.scale.setTo(0.1, 0.1);
        game.physics.enable(enemy_bottomDX, Phaser.Physics.ARCADE);
}

function createEnemy_bottomSX() {
    // create ENEMY
    enemy_bottomSX = game.add.sprite(-100, 600, 'enemy_movements');
    enemy_bottomSX.animations.add('walk_left',[0,1,2,3,4], 10);
    enemy_bottomSX.animations.add('walk_right',[6,7,8,9,10,11], 10);
    enemy_bottomSX.scale.setTo(0.1, 0.1);
        game.physics.enable(enemy_bottomSX, Phaser.Physics.ARCADE);
}

function createEnemy_topDX() {
    // create ENEMY
    enemy_topDX = game.add.sprite(1200, 8, 'enemy_movements');
    enemy_topDX.animations.add('walk_left',[0,1,2,3,4,3,2,1,0]);
    enemy_topDX.animations.add('walk_right',[6,7,8,9,10,11]);
    enemy_topDX.scale.setTo(0.1, 0.1);
    game.physics.enable(enemy_topDX, Phaser.Physics.ARCADE);
}

function createEnemy_topSX() {
    // create ENEMY
    enemy_topSX = game.add.sprite(-60, 40, 'enemy_movements');
    enemy_topSX.animations.add('walk_right',[6,7,8,9,10,11,10,9,8,7,6]);
    enemy_topSX.scale.setTo(0.1, 0.1);
    game.physics.enable(enemy_topSX, Phaser.Physics.ARCADE);
}
/*
function createInitialMonete() {
    coins = game.add.group();

    for(var i = 0; i < 100; i++){
        addMoneta();
    }
}
*/

function createSnakeMonete() {
    var plane_width = plane.width
    var plane_height = plane.height

    coins = game.add.group();

    if( !snake_version ){
        for(var i = 1; i <= 11; i++) {
            for(var j = 1; j <= 4; j++) {

                if(j==2 && (i==7 || i == 8 || i== 9)) // per spazio tavolo 
                    continue;

                if(i==4 && (j==3 || j==4)) // per spazio tavolo verticale
                    continue;

                if(i==1 && (j==1 || j==2))
                    continue;

                var newCoin = game.add.sprite(plane_width/12*i,plane_height/5*j+100,'coin')
                game.physics.enable(newCoin, Phaser.Physics.ARCADE);
                coins.add(newCoin);
                max_points++;
            }
        }

        tavoli = game.add.group();

        var tavolo = game.add.sprite(plane_width/12*8-30,plane_height/5*2+80,'tavolo')
        game.physics.enable(tavolo, Phaser.Physics.ARCADE);
        tavolo.body.immovable = true;
        var tavolo_verticale = game.add.sprite(plane_width/12*4,plane_height/5*4,'tavolo_verticale');
        game.physics.enable(tavolo_verticale, Phaser.Physics.ARCADE);
        tavolo_verticale.body.immovable = true;
        tavoli.add(tavolo);
        tavoli.add(tavolo_verticale);
    }
    else{
        generateSnakeMoneta();
    }
}

function generateSnakeMoneta() {

    var plane_width = plane.width
    var plane_height = plane.height

    if( snake_version ){
        var i = null;
        var j = null;

        while( !(i >= 1 && i <= 11) ){
            i = Math.floor( ( Math.random() * Math.floor( Math.random()*100+1 ) ) + 1 );
        }

        while( !(j >= 1 && j <= 4) ){
            j = Math.floor( ( Math.random() * Math.floor( Math.random()*30+1 ) ) + 1 );
        }

        var newCoin = game.add.sprite(plane_width/12*i,plane_height/5*j+100,'coin')
        game.physics.enable(newCoin, Phaser.Physics.ARCADE);
        coins.add(newCoin);
    }
}

function createSpots() {

        // finestra 1
    finestra_1_as = game.add.sprite(274, 0, 'finestra_1_as');
    finestra_1_spot = game.add.sprite(262, 180, 'finestra_1_spot');
    game.physics.enable(finestra_1_as, Phaser.Physics.ARCADE);
    game.physics.enable(finestra_1_spot, Phaser.Physics.ARCADE);
    finestra_1_spot.visible = false;

        // finestra 2
    finestra_2_as = game.add.sprite(607, 0, 'finestra_2_as');
    finestra_2_spot = game.add.sprite(580, 180, 'finestra_2_spot');
    game.physics.enable(finestra_2_as, Phaser.Physics.ARCADE);
    game.physics.enable(finestra_2_spot, Phaser.Physics.ARCADE);
    finestra_2_spot.visible = false;

        // finestra 3
    finestra_3_as = game.add.sprite(58, 525, 'finestra_3_as');
    finestra_3_spot = game.add.sprite(30, 370, 'finestra_3_spot');
    game.physics.enable(finestra_3_as, Phaser.Physics.ARCADE);
    game.physics.enable(finestra_3_spot, Phaser.Physics.ARCADE);
    finestra_3_spot.visible = false;

        // finestra 4
    finestra_4_as = game.add.sprite(465, 525, 'finestra_4_as');
    finestra_4_spot = game.add.sprite(453, 370, 'finestra_4_spot');
    game.physics.enable(finestra_4_as, Phaser.Physics.ARCADE);
    game.physics.enable(finestra_4_spot, Phaser.Physics.ARCADE);
    finestra_4_spot.visible = false;

        // finestra 5
    finestra_5_as = game.add.sprite(835, 525, 'finestra_5_as');
    finestra_5_spot = game.add.sprite(810, 370, 'finestra_5_spot');
    game.physics.enable(finestra_5_as, Phaser.Physics.ARCADE);
    game.physics.enable(finestra_5_spot, Phaser.Physics.ARCADE);
    finestra_5_spot.visible = false;


}

var enemy_multiplier_top = null;
var enemy_multiplier_bottom = null;

function update_2() {


    /* movimenti player */
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        console.log(player.animations)
        player.animations.play('walk_left', 20, false);
        player.body.velocity.x = -250;
    }
    else if (cursors.right.isDown)
    {
        player.animations.play('walk_right', 20, false);
        player.body.velocity.x = 250;
    }
    else if (cursors.up.isDown)
    {
        player.animations.play('walk_up', 20, false);
        player.body.velocity.y = -250;
    }
    else if (cursors.down.isDown)
    {
        player.animations.play('walk_down', 20, false);
        player.body.velocity.y = 250;
    }

    /* player prende moneta */
    game.physics.arcade.overlap(player, coins, prendiMoneta, null, this);

    /* player tocca muro inferiore o muro superiore (per mettere i limiti di gioco) */
    game.physics.arcade.collide(player, [area_nemici_top,muro_bottom,tavoli], null, null, this);

    /* enemy tocca spot finestra 1 */
    finestra_1_spot.visible = false;
    game.physics.arcade.overlap([enemy_topSX, enemy_topDX], [finestra_1_as], function(){
        finestra_1_spot.visible = true;
    }, null, this);

        /* enemy tocca spot finestra 2 */
    finestra_2_spot.visible = false;
    game.physics.arcade.overlap([enemy_topSX, enemy_topDX], [finestra_2_as], function(){
        finestra_2_spot.visible = true;
    }, null, this);

        /* enemy tocca spot finestra 3 */
    finestra_3_spot.visible = false;
    game.physics.arcade.overlap([enemy_bottomSX, enemy_bottomDX], [finestra_3_as], function(){
        finestra_3_spot.visible = true;
    }, null, this);

        /* enemy tocca spot finestra 4 */
    finestra_4_spot.visible = false;
    game.physics.arcade.overlap([enemy_bottomSX, enemy_bottomDX], [finestra_4_as], function(){
        finestra_4_spot.visible = true;
    }, null, this);

        /* enemy tocca spot finestra 5 */
    finestra_5_spot.visible = false;
    game.physics.arcade.overlap([enemy_bottomSX, enemy_bottomDX], [finestra_5_as], function(){
        finestra_5_spot.visible = true;
    }, null, this);

    /* player tocca spot finestra */
    /*
    game.physics.arcade.overlap(player, [finestra_1_spot,finestra_2_spot,finestra_3_spot,finestra_4_spot,finestra_5_spot], function(){
        if( finestra_1_spot.visible || finestra_2_spot.visible || finestra_3_spot.visible || finestra_4_spot.visible || finestra_5_spot.visible ) {
            // beccato!
                        if(!immunity){
                console.log('beccatto');
                perdiVita();
                activate_immunity();
                }
        }
    }, null, this);
    */

    /* player tocca spot finestra 1 */
    game.physics.arcade.overlap(player, finestra_1_spot, function(){
        if( finestra_1_spot.visible) {
            // beccato!
                        if(!immunity){
                console.log('beccatto');
                perdiVita();
                activate_immunity();
                }
        }
    }, null, this);

    /* player tocca spot finestra 2 */
    game.physics.arcade.overlap(player, finestra_2_spot, function(){
        if( finestra_2_spot.visible) {
            // beccato!
                        if(!immunity){
                console.log('beccatto');
                perdiVita();
                activate_immunity();
                }
        }
    }, null, this);

    /* player tocca spot finestra 3 */
    game.physics.arcade.overlap(player, finestra_3_spot, function(){
        if( finestra_3_spot.visible) {
            // beccato!
                        if(!immunity){
                console.log('beccatto');
                perdiVita();
                activate_immunity();
                }
        }
    }, null, this);

    /* player tocca spot finestra 4 */
    game.physics.arcade.overlap(player, finestra_4_spot, function(){
        if( finestra_4_spot.visible) {
            // beccato!
                        if(!immunity){
                console.log('beccatto');
                perdiVita();
                activate_immunity();
                }
        }
    }, null, this);

    /* player tocca spot finestra 5 */
    game.physics.arcade.overlap(player, finestra_5_spot, function(){
        if( finestra_5_spot.visible) {
            // beccato!
                        if(!immunity){
                console.log('beccatto');
                perdiVita();
                activate_immunity();
                }
        }
    }, null, this);


    /* animate enemy_topDX */

    if(enemy_topDX){
        if(enemy_topDX.body){
            enemy_topDX.body.velocity.x = 0;
            enemy_topDX.body.velocity.x -= 100 * Math.floor( Math.random() * 3 + 1 );
            enemy_topDX.animations.play('walk_left',15);

                        if(enemy_topDX.body.x <= -30) {
                            enemy_topDX.body.x = 1200;
                        }
        }
    }

    /* animate enemy_topDX */
    if(enemy_topSX){
        if(enemy_topSX.body){
            enemy_topSX.body.velocity.x = 0;
            enemy_topSX.body.velocity.x += 100 * Math.floor( Math.random() * 3 + 1 );
            enemy_topSX.animations.play('walk_right',15);

                        if(enemy_topSX.body.x >= 1000) {
                            enemy_topSX.body.x = -60;
                        }
        }
    }

        /* animate enemy_bottomSX */
    if(enemy_bottomSX){
        if(enemy_bottomSX.body){
            enemy_bottomSX.body.velocity.x = 0;
            enemy_bottomSX.body.velocity.x += 100 * Math.floor( Math.random() * 3 + 1 );
            enemy_bottomSX.animations.play('walk_right',15);

                        if(enemy_bottomSX.body.x >= 1000) {
                            enemy_bottomSX.body.x = -60;
                        }
        }
    }

        /* animate enemy_bottomDX */
    if(enemy_bottomDX){
        if(enemy_bottomDX.body){
            enemy_bottomDX.body.velocity.x = 0;
            enemy_bottomDX.body.velocity.x -= 100 * Math.floor( Math.random() * 3 + 1 );
            enemy_bottomDX.animations.play('walk_left',15);

                        if(enemy_bottomDX.body.x <= -30) {
                            enemy_bottomDX.body.x = 1200;
                        }
        }
    }


}

function render(){
}