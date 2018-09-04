cc.Class({
    extends: cc.Component,

    properties: {
      ghost: cc.Node,
      point1: cc.Node,
      point2: cc.Node,
      point3: cc.Node,
    },

    jump1() {
      const jump = cc.jumpTo(1, this.point1.position, 50, 1)
      this.ghost.runAction(jump)
    },

    jump2() {
      const jump = cc.jumpTo(1, this.point2.position, 50, 2)
      this.ghost.runAction(jump)
    },

    jump3() {
      const jump = cc.jumpTo(1, this.point3.position, 50, 3)
      this.ghost.runAction(jump)
    },

    reverse() {
      // const act = cc.reverseTime(this.ghost)
      // this.ghost.runAction(act)
    },
});
