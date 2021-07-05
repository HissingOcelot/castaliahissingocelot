controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(6, 500)
    Sprite1.say("RRRROOOOOAAARRR", 1000)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    music.baDing.play()
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    music.baDing.play()
})
let Sprite1: Sprite = null
music.powerUp.play()
info.setScore(0)
game.setDialogTextColor(8)
scene.setBackgroundImage(assets.image`level 1`)
Sprite1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 5 5 5 . . . 
    . . . . 6 9 f 1 9 9 6 . 5 5 5 . 
    . . . 6 f 9 f 1 9 9 6 . . . . . 
    . . . 6 9 9 9 9 9 9 6 . . . 8 8 
    . . . 6 6 6 6 6 9 d d 6 6 8 a 8 
    6 . . . . . . 6 9 d b d d 6 a 8 
    9 6 6 . 8 8 8 8 9 9 d d b 6 a 8 
    9 9 8 8 8 a 8 a 9 9 b b d 6 . . 
    6 9 a a 8 a 8 6 9 d d d d 6 . . 
    . 6 9 a 8 a 6 9 9 b d d d 6 . . 
    . . 6 6 6 9 9 9 d d b b b 6 6 6 
    . . . . 6 9 9 6 b d d 6 9 9 9 9 
    . . 6 6 6 9 9 6 d b b 6 9 9 9 9 
    . . 6 9 9 9 9 6 . . . 6 9 9 9 9 
    `, SpriteKind.Player)
Sprite1.setStayInScreen(true)
controller.moveSprite(Sprite1, 100, 100)
forever(function () {
    music.playMelody("C5 G A B A F D C ", 120)
    music.playMelody("E E G G B B C5 C5 ", 120)
    music.playMelody("C5 B G E F G B C5 ", 120)
    music.playMelody("E F G G A B B C5 ", 120)
    music.playMelody("D E E G A A B E ", 120)
})
