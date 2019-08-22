import { init, Sprite, GameLoop, initKeys, keyPressed } from 'kontra'

let { canvas } = init()

let constants = {
	gravity   : 2,
	jumpSpeed : 30
}

let sprite = Sprite({
	x      : 0,
	y      : 360,
	color  : 'red',
	width  : 20,
	height : 40,
	dx     : 7,
	dy     : 0
})

initKeys()

let loop = GameLoop({
	// create the main game loop
	update : function () {
		// update the game state
		sprite.update()

		// wrap the sprites position when it reaches
		// the edge of the screen
		if (sprite.x + sprite.width + sprite.dx > canvas.width || sprite.x < 0) {
			sprite.dx *= -1
		}

		if (sprite.y < 360) {
			sprite.dy += constants.gravity
		} else {
			sprite.dy = 0
		}

		if (keyPressed('space') && sprite.y === 360) {
			sprite.dy = -constants.jumpSpeed
		}
	},
	render : function () {
		// render the game state
		sprite.render()
	}
})

loop.start() // start the game
