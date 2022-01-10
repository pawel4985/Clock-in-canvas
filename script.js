function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0, 0, 400, 400)
    ctx.fillStyle = "lightblue"
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 180, 0, (2 * Math.PI));
    ctx.fill()

    ctx.fillStyle = "black";
    ctx.font = '50px tahoma';
    ctx.fillText("12", 173, 60);
    ctx.fillText("6", 186, 378);
    ctx.fillText("9", 25, 215);
    ctx.fillText("3", 350, 215);


    czas = new Date()
    sekundy = czas.getSeconds()
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 100, (2 * Math.PI * sekundy / 60) - 0.5 * Math.PI, (2 * Math.PI * sekundy / 60) - 0.5 * Math.PI)
    ctx.stroke();

    minuty = czas.getMinutes()
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 100, (2 * Math.PI * minuty / 60) - 0.5 * Math.PI, (2 * Math.PI * minuty / 60) - 0.5 * Math.PI)
    ctx.stroke()

    godziny = czas.getHours()
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 100, (2 * Math.PI * godziny / 12) - 0.5 * Math.PI, (2 * Math.PI * godziny / 12) - 0.5 * Math.PI)
    ctx.stroke()

    if (godziny < 10) godziny = "0" + godziny
    if (minuty < 10) minuty = "0" + minuty
    if (sekundy < 10) sekundy = "0" + sekundy
    document.getElementById("czas").innerHTML = godziny + ":" + minuty + ":" + sekundy

    ctx.fillStyle = "black"
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 10, 0, (2 * Math.PI));
    ctx.fill()

    ctx.fillStyle = "lightblue"
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 5, 0, (2 * Math.PI));
    ctx.fill()

    ctx.fillStyle = "black"
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 2, 0, (2 * Math.PI));
    ctx.fill()

    setTimeout(draw, 500)
}