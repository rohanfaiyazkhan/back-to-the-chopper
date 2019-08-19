import { init, Sprite, GameLoop } from "kontra";

let { canvas } = init();

let sprite = Sprite({
  x: 0, // starting x,y position of the sprite
  y: 360,
  color: "red", // fill color of the sprite rectangle
  width: 20, // width and height of the sprite rectangle
  height: 40,
  dx: 5 // move the sprite 2px to the right every frame
});

let loop = GameLoop({
  // create the main game loop
  update: function() {
    // update the game state
    sprite.update();

    // wrap the sprites position when it reaches
    // the edge of the screen
    if (sprite.x > canvas.width) {
      sprite.dx = -5;
    } else if (sprite.x < 0) {
      sprite.dx = 5;
    }
  },
  render: function() {
    // render the game state
    sprite.render();
  }
});

loop.start(); // start the game
