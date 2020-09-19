import pacman from './pacman.js'

import fantasma from './fantasma.js'

class scene2 extends Phaser.Scene {
  constructor() {
      super('s2');
  }


  create(){
    
    cursors = this.input.keyboard.createCursorKeys();

    var map = this.make.tilemap({key:'map'});

    var tileset = map.addTilesetImage('Pac_Tile', 'tile');

    var layer = map.createStaticLayer('map1', tileset, 0, 0);

    moneda = map.createDynamicLayer('Coins', tileset, 0, 0);

    cereza = map.createDynamicLayer('Cereza', tileset, 0, 0);

    layer.setCollisionByExclusion(-1, true);

    player =new fantasma ({scene: this, x: 30, y: 30, }); 

    this.physics.add.collider(player, layer);

    moneda.setTileIndexCallback(1, this.collectM, this);
   
    cereza.setTileIndexCallback(47, this.collectC, this); 
   
    this.physics.add.overlap(player, cereza)

    this.physics.add.overlap(player, moneda)

    score = 0
    
    scoreText = this.add.text(350, 20, 'score: ' + score)

    enemy1 = new pacman ({scene: this, x: 130, y: 40, texture: 'malo'})
    enemy2 = new pacman ({scene: this, x: 210, y: 40, texture: 'malo'})

    this.physics.add.overlap(player, enemy1, this.lose, null, this)
    this.physics.add.overlap(player, enemy2, this.lose, null, this)

    this.tweenEnemy1 = this.tweens.add({
      targets: enemy1,
      duration: 3000,
      y: 360,
      repeat: -1,
      yoyo: true,
      ease: 'linear',
  })
  this.tweenEnemy2 = this.tweens.add({
      targets: enemy2,
      duration: 3000,
      y: 360,
      repeat: -1,
      yoyo: true,
      ease: 'linear',
  })
  }
  collectC(sprite, tile){
    cereza.removeTileAt(tile.x, tile.y);
    score += 10
    scoreText.setText('score: ' + score)
  }
  collectM(sprite, tile){
    moneda.removeTileAt(tile.x, tile.y);
    score += 5
    scoreText.setText('score: ' + score)
  }
  lose(){
    this.scene.restart()
  }

}
export default scene2