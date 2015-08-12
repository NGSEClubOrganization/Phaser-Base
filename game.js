var game = new Phaser.Game(500, 500, Phaser.AUTO, 'game');

// main state (you can have multiple of these for more levels/pause screens/etc.)
var main_state = {

	// load assets with game.load...
	preload: function() {
		game.load.image('player', 'assets/sprites/player.png');
	},

	// set up the game (physics, initializing vars, etc.)
	create: function() {
		// start physics and set gravity
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 0;

		// init background
		this.game.stage.backgroundColor = '#FF6633'

		// init player
		this.player = this.game.add.sprite(game.width/2, game.height/2, 'player');
		this.player.anchor.set(0.5,0.5);
		game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.playerAccel = 10;
		

		// input
		this.cursors = game.input.keyboard.createCursorKeys();
		this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},

	// runs the game every frame
	update: function() {
		this.movePlayer();
	},

	movePlayer: function() {
		if(this.cursors.left.isDown) {
			this.player.body.velocity.x -= this.playerAccel;
		} else if(this.cursors.right.isDown) {
			this.player.body.velocity.x += this.playerAccel;
		}
		if(this.cursors.up.isDown) {
			this.player.body.velocity.y -= this.playerAccel;
		} else if(this.cursors.down.isDown) {
			this.player.body.velocity.y += this.playerAccel;
		}
	}

}


// add states
game.state.add('main', main_state);

// start first state
game.state.start('main');