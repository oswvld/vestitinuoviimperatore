function initialize_minigioco_1c(){
	restart_params_1c();
	game = new Phaser.Game(1000, 700, Phaser.AUTO, 'minigioco_1c_container', { preload: preload_1c, create: create_1c, update: update_1c });
}

function restart_params_1c() {
	background = null;
	cartoon = null;
	interfaccia = null;
	player = null;
	facing = 'left';
	garbageCollector = null;
	platform = null;
	choices = null;
	lie = 'lie';
	truth = 'truth';
	confusion = 'confusion';
	arrow = null;
	count = 0;
	choiceBaseGrav = 100;
	choiceMaxGrav = 300;
	choiceGravIncrement = 10;
	timer = null;
	maxCounter = 45;
	counter = maxCounter;
	maxNimCounter = 3;
	nimCounter = maxNimCounter;
	inConfusion = false;
	keySpacebar = null;
	pointCap = 20;
}

function destroy_minigioco_1c() {
	restart_params_1c();
	game.destroy();
}

function restart_minigioco_1c() {
	game.destroy();
	initialize_minigioco_1c();
}
	
function preload_1c() {
	game.canvas.style.borderRadius = '30px';
	game.load.image('interfaccia', './minigames/minigioco_1c/Assets/Interface.png');	
	//game.load.spritesheet('player', './minigames/minigioco_1c/Assets/Emperor.png', 141.8, 137, 5);
	//game.load.spritesheet('confused', './minigames/minigioco_1c/Assets/ConfusedEmperor.png', 141.8, 137, 5);
	game.load.spritesheet('player', './minigames/minigioco_1c/Assets/Emperor.png', 141.8, 141.8 , 10);
	game.load.image('background', './minigames/minigioco_1c/Assets/Background.png');
	game.load.image('lie', './minigames/minigioco_1c/Assets/Lie.png');
	game.load.image('truth', './minigames/minigioco_1c/Assets/Truth.png');
	game.load.image('confusion', './minigames/minigioco_1c/Assets/Confusion.png');
	game.load.image('arrow', './minigames/minigioco_1c/Assets/Arrow.png');
	game.load.image('cartoon', './minigames/minigioco_1c/Assets/Cartoon.png');
}

function create_1c() {
	background = game.add.sprite(0, 0, 'background');
	background.height = game.height;
	background.width = game.width;
	background.x = 0;
	background.y = 0;
	
	cartoon = game.add.sprite(50, 50, 'cartoon');
	
	createGarbageCollector_1c();
	createPlatform_1c();

	choices = game.add.group();

	player = game.add.sprite(200, 200, 'player');
	game.physics.arcade.enable(player);

	player.body.collideWorldBounds = true;
	player.body.gravity.y = 500;

	interfaccia = game.add.sprite(1000, 700, 'interfaccia');
	interfaccia.height = game.height;
	interfaccia.width = game.width;
	interfaccia.x = 0;
	interfaccia.y = 0;
	
	arrow = game.add.sprite(500, 675.67, 'arrow');
	arrow.anchor.setTo(0.5, 1);

	cursors = game.input.keyboard.createCursorKeys();
	keySpacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    keySpacebar.onDown.add(togglePause_1c, this);
	
	player.animations.add('right', [0, 1], 15, true);
	player.animations.add('front', [2], 10, true);
	player.animations.add('left', [3, 4], 15, true);
	
	player.animations.add('giggling', [5, 6, 7, 8, 9, 8, 7, 6], 10, true);
	player.animations.add('over', [8], 10, true);
	
	timer = game.add.text(50, 670, counter, { font: "40px Arial black", fill: "#ffffff", align: "center" });
	timer.anchor.setTo(0.5, 0.5);
	game.time.events.loop(Phaser.Timer.SECOND, updateCounter_1c, this);
}

function update_1c () {

	
	if (game.rnd.integerInRange(0, 29) == 0){
		spawnChoices_1c();
	}

    game.physics.arcade.collide(player, platform);
    if (inConfusion==false) {game.physics.arcade.overlap(player, choices, scorePoints_1c)};
    game.physics.arcade.collide(choices, garbageCollector, garbageCollection_1c);

	player.body.velocity.x = 0;

	if (cursors.left.isDown && inConfusion == false){
		player.body.velocity.x = -400;
		if (facing != 'left'){
			player.animations.play('left');
			facing = 'left';
		}
	}
	else if (cursors.right.isDown && inConfusion == false){
		player.body.velocity.x = 400;
		if (facing != 'right'){
			player.animations.play('right');
			facing = 'right';
		}
	}
	else {
		if (facing != 'idle'){
			player.animations.stop();
			player.animations.play('front');
			facing = 'idle';
		}
	}

	gameOver_1c();
}

//functions

function spawnChoices_1c() {
	var positivity = 0;
	var chosenChoice;
	var rand = game.rnd.integerInRange(0, 100);
	if(rand >= 90){
		chosenChoice = confusion;
		positivity = 0;
	}
	else if (rand >= 45){
		chosenChoice = truth;
		positivity = 1;
	} else {
		chosenChoice = lie;
		positivity = -1;
	}

	var x = game.rnd.integerInRange(50, 750);
	var y = -100;

	var choice = game.add.sprite(x, y, chosenChoice);
	choice.positivity = positivity;
	choice.name = chosenChoice;
	choices.add(choice);

	game.physics.arcade.enable(choice);

	choice.body.collideWorldBounds = false;
	if (choice.body.gravity.y < choiceMaxGrav) {
		choice.body.gravity.y = choiceBaseGrav + choiceGravIncrement * Math.floor((maxCounter - counter)/5) * 4;
	} else {
		choice.body.gravity.y = choiceMaxGrav;
	}
}

function createPlatform_1c(){
	platform = game.add.sprite(0, 700, null);
	game.physics.arcade.enable(platform);
	platform.body.setSize(1000, 75, 0, 0);
	platform.body.collideWorldBounds = true;
}

function scorePoints_1c(player, choice){
	count += choice.positivity;
	arrow.angle += choice.positivity*4.5;
	garbageCollection_1c(choice);
	console.log(count);
	if(choice.name == 'confusion'){
		confused_1c();
	}
}

function createGarbageCollector_1c(){
	garbageCollector = game.add.sprite(0, 600, null);
	game.physics.arcade.enable(garbageCollector);
	garbageCollector.body.setSize(1000, 80, 0, 0);
}

function garbageCollection_1c(choice){
	choices.remove(choice, true, true);
	choice.kill();
}

function gameOver_1c() {
	if(count >= pointCap){
		togglePause_1c();
		minigioco_1c_verita();
	}
	else if (count <= -pointCap){
		togglePause_1c();
		minigioco_1c_bugia();
	}
	else if (counter==0){
		player.animations.play('over');
		togglePause_1c();
    	alert("L'imperatore è andato in panico ed è svenuto!");		
	}
}

function updateCounter_1c() {
    counter = counter - 1;
    timer.setText(counter);
	if (inConfusion == true) {
		nimCounter = nimCounter - 1;
		if(nimCounter <= 0){
			inConfusion = false;
			player.animations.stop('giggling');
			player.animations.play('front');
		}
	}
}

function confused_1c(){
	player.animations.play('giggling');
	inConfusion = true;
	nimCounter = maxNimCounter;
}

function togglePause_1c(){
	game.paused = !game.paused;
}