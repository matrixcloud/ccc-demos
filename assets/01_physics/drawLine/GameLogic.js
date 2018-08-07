cc.Class({
    extends: cc.Component,

    properties: {
        physicsNodePrefab: cc.Prefab,
        physicsNodeArray: [cc.Node]
    },

    onLoad() {
        cc.director.getPhysicsManager().enabled = true
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        cc.PhysicsManager.DrawBits.e_pairBit |
        cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        cc.PhysicsManager.DrawBits.e_jointBit |
        cc.PhysicsManager.DrawBits.e_shapeBit

        cc.director.getPhysicsManager().gravity = cc.v2(0, -300)

        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
    },

    touchStart(event) {
        cc.log('touchStart...')
        let physicsNode = cc.instantiate(this.physicsNodePrefab)
        this.node.addChild(physicsNode)
        this.physicsNodeArray.push(physicsNode)
    },

    touchMove(event) {
        
    },

    touchEnd(event) {
        
    },

    touchCancel(event) {
        
    },
});
