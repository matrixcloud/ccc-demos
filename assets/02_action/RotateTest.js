cc.Class({
    extends: cc.Component,

    properties: {
    },

    start() {
      this.rotationX = this.node.rotationX
      this.rotationY = this.node.rotationY
      console.log('rotationX: ' + this.rotationX)
      console.log('rotationY: ' + this.rotationY)
    },

    onSlider(sender, eventType) {
      const rotate = cc.rotateTo(1, sender.progress * 180)
      this.node.runAction(rotate)
    },

    onSliderX(sender, eventType) {
      const rotate = cc.rotateTo(1, sender.progress * 180, this.rotationY)
      this.node.runAction(rotate)
    },

    onSliderY(sender, eventType) {
      const rotate = cc.rotateTo(1, this.rotationX, sender.progress * 180)
      this.node.runAction(rotate)
    },
});
