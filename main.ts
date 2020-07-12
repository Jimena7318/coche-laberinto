namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
. . . . . . 8 8 c c 8 8 . . . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
. . . . 6 c 6 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 6 9 6 6 6 6 6 c 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 c 6 9 9 6 6 6 c 6 f . 
. . . 8 6 c 8 c c c c 8 c 6 8 . 
. . . 8 6 8 c b b b b c 8 6 8 . 
. . . 8 6 8 b b b b b b 8 6 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . f 8 d 8 8 8 8 8 8 d 8 f . 
. . . f 8 6 d 8 8 8 8 d 6 8 f . 
. . . f f 8 8 8 8 8 8 8 8 f f . 
. . . . f f . . . . . . f f . . 
`)
})
scene.onHitWall(SpriteKind.Player, function (sprite) {
    coche.startEffect(effects.bubbles, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(princesa, myTiles.tile0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 . . . . 
. . . . . 6 6 9 9 6 6 6 6 . . . 
. . . . . c 9 6 6 6 6 6 c . . . 
. . . . 6 c 9 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 c 9 6 6 6 6 6 c 6 f . 
. . . f 8 c 6 6 6 6 6 6 c 8 f . 
. . . f 6 c 6 b b b b 6 c 6 f . 
. . . 8 6 6 b c c c c b 6 6 8 . 
. . . 8 8 b c c c c c c b 8 8 . 
. . . f 8 9 9 9 9 9 9 9 9 8 f . 
. . . f 8 d 6 6 6 6 6 6 d 8 f . 
. . . . 6 d d 6 6 6 6 d d 6 f . 
. . . . f 6 d 6 6 6 6 d 6 f . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
`)
})
let princesa: Sprite = null
let coche: Sprite = null
coche = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
princesa = sprites.create(img`
. . . . . f f f f . . . . . 
. . . f f 5 5 5 5 f f . . . 
. . f 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 5 d b b d 5 5 5 f . 
f 5 5 5 b 4 4 4 4 b 5 5 5 f 
f 5 5 c c 4 4 4 4 c c 5 5 f 
f b b f b f 4 4 f b f b b f 
f b b 4 1 f d d f 1 4 b b f 
. f b f d d d d d d f b f . 
. f e f e 4 4 4 4 e f e f . 
. e 4 f 6 9 9 9 9 6 f 4 e . 
. 4 d c 9 9 9 9 9 9 c d 4 . 
. 4 f b 3 b 3 b 3 b b f 4 . 
. . f f 3 b 3 b 3 3 f f . . 
. . . . f f b b f f . . . . 
`, SpriteKind.Food)
scene.setBackgroundColor(4)
controller.moveSprite(coche)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101000000000000000000010100000000010000000000000000000101000000000100000000000101010101010000000001010101000001000000010000000000000000010000010000000100000000000000000100000100000001000000000101010101000001000000010000000101000001010000010000000100000000000000000000000100000001000000000000000000000101000000010100000101010101010101000000000101000000000000000000000000000001010100000000000000010000000000010101000000000000000101010101010101010000000000000000010101010101010100000000000000000000000000`,
            img`
2 2 2 2 2 2 2 . . . . . . . . . 
2 2 . . . . 2 . . . . . . . . . 
2 2 . . . . 2 . . . . . 2 2 2 2 
2 2 . . . . 2 2 2 2 . . 2 . . . 
2 . . . . . . . . 2 . . 2 . . . 
2 . . . . . . . . 2 . . 2 . . . 
2 . . . . 2 2 2 2 2 . . 2 . . . 
2 . . . 2 2 . . 2 2 . . 2 . . . 
2 . . . . . . . . . . . 2 . . . 
2 . . . . . . . . . . 2 2 . . . 
2 2 . . 2 2 2 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 2 2 . . . . . . . 2 2 2 2 2 2 
2 2 2 . . . . . . . . 2 2 2 2 2 
2 2 2 . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(coche)
tiles.placeOnRandomTile(coche, myTiles.tile0)
info.startCountdown(20)
info.setScore(0)
