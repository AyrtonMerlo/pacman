class scene1 extends Phaser.Scene {
  constructor() {
      super('main');
  }
preload(){
  this.load.image('background', 'assets/images/fondo.jpg')
  this.load.image('fan', 'assets/images/fanro.png');
  this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/Tilemap1.json');
  this.load.tilemapTiledJSON('map1', 'assets/tilemaps/maps/Tilemap2.json');
  this.load.image('tile', 'assets/tilemaps/tiles/spr_all5_4A2.png');
  
  this.load.image('b1', 'assets/images/b1.png' )
  this.load.image('b2', 'assets/images/b2.png' )
  
}
create(){
 
 var b1= this.add.image(300, 100, 'b1') 
 b1.setInteractive()
 b1.on('pointerdown', ()=> this.scene.start('s2') )
 var b2= this.add.image(300, 500, 'b2') 
 b2.setInteractive()
 b2.on('pointerdown', ()=> this.scene.start('s3') )
}
  
}