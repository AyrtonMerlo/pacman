class scene3 extends Phaser.Scene {
  constructor() {
      super('s3');
  }


  create(){
    
    
    
    cursors = this.input.keyboard.createCursorKeys();

    var map = this.make.tilemap({key:'map1'});

    var tileset = map.addTilesetImage('spr_all5_4A2', 'tile');

    var layer = map.createStaticLayer('map2', tileset, 0, 0);

    layer.setCollisionByExclusion(-1, true);

    player = this.physics.add.image(30, 30, 'fan');

    this.physics.add.collider(player, layer);

    this.cameras.main.startFollow(player);

    this.cameras.main.setZoom(2);
  }

  update(){

    player.setVelocity(0);

    if(cursors.left.isDown){
        player.setVelocityX(-100)
    }
    else if(cursors.right.isDown){
        player.setVelocityX(100)
    }

    if(cursors.up.isDown){
        player.setVelocityY(-100)
    }
    else if(cursors.down.isDown){
        player.setVelocityY(100)
    }
}
}