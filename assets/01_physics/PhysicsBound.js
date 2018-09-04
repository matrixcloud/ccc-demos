cc.Class({
  extends: cc.Component,

  properties: {
    size: cc.Size,
    mouseJoint: false
  },

  onLoad () {
    const w = this.size.width || this.node.width
    const h = this.size.height || this.node.height
    const node = new cc.Node()
    const body = node.addComponent(cc.RigidBody)
    body.type = cc.RigidBodyType.Static

    if (this.mouseJoint) {
      const joint = node.addComponent(cc.MouseJoint)
      joint.mouseRegion = this.node
    }

    this._addBound(node, 0, h/2, w, 20)
    this._addBound(node, 0, -h/2, w, 20)
    this._addBound(node, w/2, 0, 20, h)
    this._addBound(node, -w/2, 0, 20, h)

    node.parent = this.node
  },

  _addBound(node, x, y, width, height) {
    const collider = node.addComponent(cc.PhysicsBoxCollider)
    collider.offset.x = x
    collider.offset.y = y
    collider.size.width = width
    collider.size.height = height
  },
});
