let physicsManager = cc.director.getPhysicsManager()
physicsManager.enabled = true

physicsManager.debugDrawFlags =
    cc.PhysicsManager.DrawBits.e_jointBit |
    cc.PhysicsManager.DrawBits.e_shapeBit
cc.info('init PhysicsManager end')
