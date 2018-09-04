// https://www.emanueleferonato.com/2012/12/10/flying-arrows-simulation-with-box2d/
// http://www.iforce2d.net/b2dtut/sticky-projectiles
// http://www.emanueleferonato.com/2012/12/14/box2d-flying-arrow-engine-first-attempt/
cc.Class({
  extends: cc.Component,

  properties: {
    arrowPrefab: cc.Prefab,
    spawnPoint: cc.Node,
  },

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
    this.arrowPool = new cc.NodePool()
    this.arrowBodies = []
  },

  onTouchStart(event) {
    const touchLoc = event.touch.getLocation()
    const node = cc.instantiate(this.arrowPrefab)
    node.position = this.spawnPoint.position
    const vec = cc.v2(touchLoc).sub(node.position)
    node.rotation = -Math.atan2(vec.y, vec.x) * 180 / Math.PI
    // node.parent = this.node
    cc.director.getScene().addChild(node)
    const velocity =  vec.normalize().mulSelf(800)
    let arrowBody = node.getComponent(cc.RigidBody)
    arrowBody.linearVelocity = velocity
    this.arrowBodies.push(arrowBody)
  },

  update(dt) {
    let dragConstant = 0.1
    let arrowBodies = this.arrowBodies
    for (let i = 0; i < arrowBodies.length; i++) {
        let arrowBody = arrowBodies[i]
        let velocity = arrowBody.linearVelocity
        let speed = velocity.mag()
        if (speed === 0) continue

        let pointingDirection = arrowBody.getWorldVector(cc.v2( 1, 0 ))
        let flightDirection = arrowBody.linearVelocity
        let flightSpeed = flightDirection.mag()
        flightDirection.normalizeSelf()

        let dot = cc.pDot( flightDirection, pointingDirection )
        let dragForceMagnitude = (1 - Math.abs(dot)) * flightSpeed * flightSpeed * dragConstant * arrowBody.getMass()

        let arrowTailPosition = arrowBody.getWorldPoint(cc.v2( -80, 0))
        arrowBody.applyForce( flightDirection.mul(-dragForceMagnitude), arrowTailPosition, false)
    }
  }
})
