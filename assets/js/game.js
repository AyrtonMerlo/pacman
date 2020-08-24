var config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0},
          debug: false
      }
  },
  scene: [scene1, scene2, scene3]
};

var game = new Phaser.Game(config);

var player
var cursors