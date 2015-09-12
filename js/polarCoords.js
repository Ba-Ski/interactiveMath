function PolarCoords()
{
    this.play = document.getElementById('play');
    this.canvas = document.getElementById('polarCoordsCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.step = this.canvas.width / 10;
    this.x0 = this.canvas.width / 2;
    this.y0 = this.canvas.width / 2;
    this.axisLength = this.canvas.width / 2;
    this.point = new PolarPoint(this.x0, this.y0, this.canvas, this.step);

    this.point.color = '#FF3344';
    this.point.x = this.x0 + 55;
    this.point.y = this.y0 - 110;

    this.axis();
    this.point.draw();

    this.clickEvent(this);
    this.animateEvente(this);
    
}
;

PolarCoords.prototype = {
    constructor: PolarCoords,
    animateEvente: function (obj)
    {
        this.play.addEventListener('click', function (e)
        {
            var gifka;
            if ((gifka = document.getElementById('gifka')) != undefined)
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
                
            }
        });
    },
    clickEvent: function (obj)
    {

        this.canvas.addEventListener('click', function (e)
        {

            var rect = this.getBoundingClientRect();

            obj.point.x = e.clientX - rect.left;
            obj.point.y = e.clientY - rect.top;

            obj.axis();
            obj.point.draw();

        });
    },
    axis: function ()
    {
        var fontSize = 18;
        var str;
        this.ctx.font = "italic " + fontSize + "px serif";
        this.ctx.save();
        var x = this.point.x - this.x0;
        var y = this.point.y - this.y0;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        tools.cellBackground(this.canvas, this.step);
        //Ox
        this.ctx.translate(this.x0, this.y0);
        this.ctx.strokStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.axisLength, 0);
        this.ctx.stroke();

        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        str = 'ϱ = |OM|';
        var textX = x;
        var textY = y / 2;
        var textLength = this.ctx.measureText(str).width;
        if (textLength > this.canvas.width - this.point.x - 5)
            textX = this.canvas.width - textLength - 3 - this.x0;
        this.ctx.fillText(str, textX, textY);

        str = 'X';
        this.ctx.fillText(str, this.axisLength - this.ctx.measureText(str).width - 5, fontSize + 3);
        str = 'O';
        this.ctx.fillText(str, -this.ctx.measureText(str).width / 2, fontSize + 3);
        this.ctx.restore();
        tools.arrow(this.ctx, 0, 0, this.axisLength, 0, this.x0, this.y0);

        tools.arrow(this.ctx, 0, 0, x, y, this.x0, this.y0);
    }
};


window.addEventListener('load', function () {

    polar = new PolarCoords();
});