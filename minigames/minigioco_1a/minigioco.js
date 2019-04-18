function initialize_minigioco_1a() {
	game = new Phaser.Game(1000, 700, Phaser.AUTO, 'minigioco_1a_container', { preload: preload_1a, create: create_1a, update: update_1a });
	restart_params_1a();
}

function restart_params_1a() {
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
	arrow = null;
	count = 0;
	choiceBaseGrav = 100;
	choiceMaxGrav = 300;
	choiceGravIncrement = 10;
	timer = null;
	maxCounter = 35;
	counter = maxCounter;
	keySpacebar = null;
	pointCap = 20;
}

function destroy_minigioco_1a() {
	restart_params_1a();
	game.destroy();
}

function restart_minigioco_1a() {
	game.destroy();
	initialize_minigioco_1a();
}
	
function preload_1a() {
	game.canvas.style.borderRadius = '30px';
	game.load.image('interfaccia', './minigames/minigioco_1a/Assets/Interface.png');	
	game.load.spritesheet('player', './minigames/minigioco_1a/Assets/Minister.png', 141.8, 137, 5);
	game.load.image('background', './minigames/minigioco_1a/Assets/Background.png');
	game.load.image('lie', './minigames/minigioco_1a/Assets/Lie.png');
	game.load.image('truth', './minigames/minigioco_1a/Assets/Truth.png');
	game.load.image('arrow', './minigames/minigioco_1a/Assets/Arrow.png');
	game.load.image('cartoon', './minigames/minigioco_1a/Assets/Cartoon.png');
}

function create_1a() {
	background = game.add.sprite(0, 0, 'background');
	background.height = game.height;
	background.width = game.width;
	background.x = 0;
	background.y = 0;
	
	cartoon = game.add.sprite(50, 50, 'cartoon');
	
	createGarbageCollector_1a();
	createPlatform_1a();

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
    keySpacebar.onDown.add(togglePause_1a, this);
	
	player.animations.add('right', [0, 1], 15, true);
	player.animations.add('front', [2], 10, true);
	player.animations.add('left', [3, 4], 15, true);
	
	player.animations.add('giggling', [0, 1, 2, 3, 4, 5], 15, true);
	
	timer = game.add.text(50, 670, counter, { font: "40px Arial black", fill: "#ffffff", align: "center" });
	timer.anchor.setTo(0.5, 0.5);
	game.time.events.loop(Phaser.Timer.SECOND, updateCounter_1a, this);
}

function update_1a () {

	
	if (game.rnd.integerInRange(0, 29) == 0){
		spawnChoices_1a();
	}

    game.physics.arcade.collide(player, platform);
    game.physics.arcade.overlap(player, choices, scorePoints_1a);
    game.physics.arcade.collide(choices, garbageCollector, garbageCollection_1a);

	player.body.velocity.x = 0;

	if (cursors.left.isDown){
		player.body.velocity.x = -400;
		if (facing != 'left'){
			player.animations.play('left');
			facing = 'left';
		}
	}
	else if (cursors.right.isDown){
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

	gameOver_1a();
}

//functions

function spawnChoices_1a() {
	var positivity = 0;
	var chosenChoice;
	var rand = game.rnd.integerInRange(0, 100);
	if (rand >= 50){
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

function createPlatform_1a(){
	platform = game.add.sprite(0, 700, null);
	game.physics.arcade.enable(platform);
	platform.body.setSize(1000, 75, 0, 0);
	platform.body.collideWorldBounds = true;
}

function scorePoints_1a(player, choice){
	count += choice.positivity;
	arrow.angle += choice.positivity*4.5;
	garbageCollection_1a(choice);
	console.log(count);
}

function createGarbageCollector_1a(){
	garbageCollector = game.add.sprite(0, 600, null);
	game.physics.arcade.enable(garbageCollector);
	garbageCollector.body.setSize(1000, 80, 0, 0);
}

function garbageCollection_1a(choice){
	choices.remove(choice, true, true);
	choice.kill();
}

function gameOver_1a() {
	if(count >= pointCap){
		togglePause_1a();
		minigioco_1a_verita();
	}
	else if (count <= -pointCap){
		togglePause_1a();
		minigioco_1a_bugia();
	}
	else if (counter==0){
		togglePause_1a();
		alert("Il ministro è andato in panico ed è svenuto!");
	}
}

function updateCounter_1a() {
    counter = counter - 1;
    timer.setText(counter);
}

function togglePause_1a(){
	game.paused = !game.paused;
}