class fantasma extends Phaser.Physics.Arcade.Sprite{
  constructor(config) {
      super(config.scene, config.x, config.y, 'fan', 'assets/images/fanro.png');
      config.scene.add.existing(this);
      config.scene.physics.add.existing(this);
      this.scene.events.on("update", this.update, this);
      this.setCollideWorldBounds(true);
  }

  update() {
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
export default fantasma