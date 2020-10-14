let x, y, ang = 1;
let startx = window.innerHeight - 100;
let starty = window.innerWidth - 100;
startx = startx / 2
starty = starty / 2

function spiral(arg, color) {
    ang = ang + arg
    x = Math.cos(ang) + ang * Math.sin(ang);
    y = Math.sin(ang) - ang * Math.cos(ang);
    $('body').append(`<div style='position: absolute; top:${startx + x}px; left:${starty + y}px; height: 50px; width: 50px; background-color: black; border: 5px solid ${color}; z-index: -1; transform: rotate(${ang * 2.8}deg)'></div>`);
}

$('#reload').on('click', function () {
    location.reload()
})
$('#single').on('click', function () {
    setInterval(spiral, 50, 6, 'blue')
})
$('#double').on('click', function () {
    setInterval(spiral, 30, 3, 'lawngreen')
})
$('#triple').on('click', function () {
    setInterval(spiral, 30, 2, 'red')
})
$('#crazy').on('click', function () {
    setInterval(spiral, 1, .9, 'fuchsia')
})
$('#random').on('click', function () {
    let ran
    let rand = function() {
        ran = Math.random()
        if (ran < .2) {
            ran = ran + .2
        }else {
            return ran
        }
    }
    rand()
    console.log(ran)
    setInterval(spiral, .01, ran, 'gold')
})










