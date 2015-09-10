var PolarCoords = function ()
{
    this.play = document.getElementById('play');
    this.canvas = document.getElementById('polarCoordsCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.step = this.canvas.width / 10;
    this.x0 = this.canvas.width / 2;
    this.y0 = this.canvas.width / 2;
    this.axisLength = this.canvas.width / 2;
    this.arrowImg = new Image();
    this.arrowImg.src = "resources/arrow.png";
    this.raf = 0;
    this.point = new PolarPoint(this.x0, this.y0, this.canvas, this.step);

    this.point.color = '#FF3344';
    this.point.x = this.x0 + 55;
    this.point.y = this.y0 - 110;

    this.axis();
    this.point.draw();

    this.clickEvent(this);
    this.animateEvente(this);
    this.animObjs = new Object();
    var x = 55;
    var y = -110;
    this.animObjs.length = Math.sqrt(x * x + y * y);
    this.animObjs.angle = Math.atan2(y, x);
    this.animObjs.angles = [
        {angle: Number(-2 / 3 * Math.PI).toFixed(1),
            color: 'pink'},
        {angle: Number(-26 / 18 * Math.PI).toFixed(1),
            color: 'yellow'},
        {angle: Number(-15 / 8 * Math.PI).toFixed(1),
            color: 'brown'}
    ];
    this.animObjs.j = 0;
    this.animObjs.max = -2 * Math.PI;
};

//PolarCoords.prototype.animate = function ()
//{
//    var x = 55;
//    var y = -110;
//    this.point.x = this.x0 + x;
//    this.point.y = this.y0 + y;
//
//    var length = Math.sqrt(x * x + y * y);
//    this.axis();
//    this.point.draw();
//
//    var angles = [
//        {angle: -2 / 3 * Math.PI,
//            color: 'pink'},
//        {angle: -26 / 18 * Math.PI,
//            color: 'yellow'},
//        {angle: -7 / 8 * Math.PI,
//            color: 'brown'}
//    ];
//
//    var angle = Math.atan2(y, x);
//
//    if (angle > 0)
//        angle -= Math.PI * 2;
//    var lastX = this.point.x, lastY = this.point.y;
//    var isLastColored = false;
//
//    for (var max = 2 * Math.PI, j = 0; angle < max; angle -= 0.01) {
//
//        this.point.x = length * Math.cos(angle) + this.x0;
//        this.point.y = length * Math.sin(angle) + this.y0;
//
//        /*if (!isLastColored) {
//         this.ctx.strokeStyle = 'white';
//         this.ctx.beginPath();
//         this.ctx.moveTo(this.x0, this.y0);
//         this.ctx.lineTo(lastX, lastY);
//         this.ctx.stroke();
//         
//         this.ctx.globalCompositeOperation = 'destination-over';
//         cellBackground(this.canvas, this.step);
//         this.ctx.globalCompositeOperation = 'source-over';
//         }*/
//        this.axis(true);
//        if (angles[j].angle === angle)
//        {
//            this.ctx.strokStyle = angles[j].color;
//            this.point.draw();
//            isLastColored = true;
//            j++;
//
//        }
//        this.ctx.save();
//        this.ctx.rotate(angle);
//        this.ctx.drawImage(this.arrowImg, this.x0, this.y0 - this.arrowImg.height / 2);
//        this.ctx.restore();
//        /*this.ctx.beginPath();
//         this.ctx.moveTo(0, 0);
//         this.ctx.lineTo(this.point.x, this.point.y);
//         this.ctx.stroke();
//         x = this.point.x - this.x0;
//         y = this.point.y - this.y0;
//         arrow(this.ctx, 0, 0, x, y, this.x0, this.y0);
//         */
//
//    }
//};

/*PolarCoords.prototype.anim = function ()
 {
 //    var now = new Date();
 //    this.animObjs.angle = now.getSeconds()*Math.PI/30;
 //    this.point.x = this.animObjs.length * Math.cos(this.animObjs.angle) + this.x0;
 //    this.point.y = this.animObjs.length * Math.sin(this.animObjs.angle) + this.y0;
 //
 polar.axis(true);
 if ((polar.animObjs.angles[polar.animObjs.j].angle) === Number(polar.animObjs.angle).toFixed(1))
 {
 polar.ctx.strokStyle = polar.animObjs.angles[polar.animObjs.j].color;
 
 polar.point.y = polar.animObjs.length * Math.sin(polar.animObjs.angle)+polar.y0;
 polar.point.x = polar.animObjs.length * Math.cos(polar.animObjs.angle)+polar.x0;
 
 polar.point.draw();
 polar.animObjs.j++;
 }
 //polar.ctx.clearRect(0, 0, 350, 350);
 polar.ctx.save();
 polar.ctx.translate(polar.x0, polar.y0);
 polar.ctx.rotate(polar.animObjs.angle);
 polar.ctx.drawImage(polar.arrowImg, 0, -polar.arrowImg.height / 2);
 
 polar.ctx.restore();
 polar.animObjs.angle -= 0.1;
 if (polar.animObjs.angle < polar.animObjs.max)
 clearInterval(polar.animObjs.nIntervId);
 //this.raf = window.requestAnimationFrame(polar.anim());
 
 };*/

PolarCoords.prototype.animateEvente = function (obj)
{
    this.play.addEventListener('click', function (e)
    {
        var gifka;
        if ((gifka = document.getElementById('gifka'))!=undefined)
        {
            gifka.src = "resources/gifka.gif";
        }
        else {
            gifka = document.createElement("img");
            gifka.className = "animation";
            gifka.id = "gifka";
            gifka.alt = "simple gif";
            gifka.src = "resources/gifka.gif";
            gifka.style.height = '350px';
            gifka.style.width = '350px';
            gifka.style.visibility = 'visible';
            var parentDiv = obj.canvas.parentNode;
            parentDiv.insertBefore(gifka, parentDiv.firstChild);
            gifka.addEventListener('click', function (e)
            {
                var parentDiv = gifka.parentNode;
                parentDiv.removeChild(gifka);

                var rect = obj.canvas.getBoundingClientRect();

                obj.point.x = e.clientX - rect.left;
                obj.point.y = e.clientY - rect.top;

                obj.axis();
                obj.point.draw();
            });
            //polar.animObjs.nIntervId = window.setInterval(polar.anim, 100);
        }
    });
};

PolarCoords.prototype.clickEvent = function (obj)
{

    this.canvas.addEventListener('click', function (e)
    {

        var rect = this.getBoundingClientRect();

        obj.point.x = e.clientX - rect.left;
        obj.point.y = e.clientY - rect.top;

        obj.axis();
        obj.point.draw();

    });
};
PolarCoords.prototype.axis = function ()
{
    var fontSize = 18;
    var str;
    this.ctx.font = "italic " + fontSize + "px serif";
    this.ctx.save();
    var x = this.point.x - this.x0;
    var y = this.point.y - this.y0;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    cellBackground(this.canvas, this.step);
    //Ox
    this.ctx.translate(this.x0, this.y0);
    this.ctx.strokStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.axisLength, 0);
    this.ctx.stroke();
    //R
//    if (!fuck) {
//        this.ctx.save();
//        //    this.ctx.beginPath();
//        this.ctx.rotate(Math.atan2(y, x));
//        this.ctx.drawImage(this.arrowImg, 0, -this.arrowImg.height / 2);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
//    this.ctx.restore();
    str = 'ϱ = |OM|';
    var textX = x;
    var textY = y / 2;
    var textLength = this.ctx.measureText(str).width;
    if (textLength > this.canvas.width - this.point.x - 5)
        textX = this.canvas.width - textLength - 3 - this.x0;
    this.ctx.fillText(str, textX, textY);
//    }

    str = 'X';
    this.ctx.fillText(str, this.axisLength - this.ctx.measureText(str).width - 5, fontSize + 3);
    str = 'O';
    this.ctx.fillText(str, -this.ctx.measureText(str).width / 2, fontSize + 3);
    this.ctx.restore();
    arrow(this.ctx, 0, 0, this.axisLength, 0, this.x0, this.y0);

    arrow(this.ctx, 0, 0, x, y, this.x0, this.y0);
};

//var arrowImg = new Image();
//arrowImg.src = "http://localhost:8080/math/arrow.png";
//
//function drawIt() {
//    var now = new Date();
//
//    var ctx = document.getElementById('polarCoordsCanvas').getContext('2d');
//
//    ctx.clearRect(0, 0, 350, 350);
//    ctx.save();
//    ctx.translate(175, 175);
//    ctx.rotate(now.getSeconds() * Math.PI / 30);
//    ctx.drawImage(arrowImg, 0, -arrowImg.height / 2);
//
//    ctx.restore();
//    window.requestAnimationFrame(drawIt);
//}


//window.requestAnimationFrame(drawIt);

window.addEventListener('load', function () {

    polar = new PolarCoords();
});