window.addEventListener('load', function(){
    DC = new DescartesCoords();
});

function DescartesCoords() {

    this.canvas = document.getElementById('descartesCoordsCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.x0 = this.canvas.width / 2;
    this.y0 = this.canvas.height / 2;
    this.step = 35;

    this.point = new Point(this.x0, this.y0, this.canvas, this.step);
    this.draw(this.canvas, this.step, this.x0, this.y0);
    this.point.x = this.x0 + 3.4 * this.step;
    this.point.y = this.y0 + 4 * this.step;
    this.point.draw();

    this.clickListner(this);
}
;

DescartesCoords.prototype = {
    constructor: DescartesCoords,
    clickListner: function (obj)
    {
        obj.canvas.addEventListener('click', function (e) {

            var rect = obj.canvas.getBoundingClientRect();
            obj.point.x = e.clientX - rect.left;
            obj.point.y = e.clientY - rect.top;
            obj.draw(obj.canvas, this.step, this.x0, this.y0);
            obj.point.draw();

        });
    },
    draw: function ()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        var axisLength = this.canvas.width / 2;

        tools.cellBackground(this.canvas, this.step);
        this.axis(axisLength);
    },
    axis: function (axisLength) {

        this.ctx.save();
        this.ctx.translate(this.x0, this.y0);
        this.ctx.strokStyle = 'black';
        this.ctx.lineWidth = 2;
        var segLineLength = 6;

        this.ctx.beginPath();
        this.ctx.moveTo(-axisLength, 0);
        this.ctx.lineTo(axisLength, 0);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, -axisLength);
        this.ctx.lineTo(0, axisLength);
        this.ctx.stroke();

        this.ctx.lineWidth = 1;
        var fontSize = 11;
        var magicWidthCoeff = 0.15;
        var magicHeightCoeff = 0.4;
        this.ctx.font = fontSize + "px Comic Sans";
        var segNum = axisLength / this.step;
        for (var i = 0, y = axisLength, x = -axisLength; i < 2 * segNum; i++)
        {
            this.ctx.beginPath();
            this.ctx.moveTo(-segLineLength, y);
            this.ctx.lineTo(segLineLength, y);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x, -segLineLength);
            this.ctx.lineTo(x, segLineLength);
            this.ctx.stroke();

            var minus = '-';
            var minusWidth = this.ctx.measureText(minus).width - 2;


            if (-segNum + i !== 0) {
                var str = -segNum + i;
                var strWidth = this.ctx.measureText(str).width;
                if (Math.abs(x - 3) < axisLength)
                    if (str < 0) {
                        this.ctx.fillText(str, x - strWidth / 2 - minusWidth, segLineLength + fontSize);
                    }
                    else
                        this.ctx.fillText(str, x - strWidth / 2, segLineLength + fontSize);
                if (axisLength - (y + 3) > fontSize)
                    this.ctx.fillText(str, -segLineLength - fontSize * magicWidthCoeff - strWidth,
                            y + fontSize * magicHeightCoeff);
            }
            y -= this.step;
            x += this.step;
        }

        fontSize = 18;
        this.ctx.font = "italic " + fontSize + "px serif";
        var str = 'X';
        this.ctx.fillText(str, axisLength - this.ctx.measureText(str).width - 5, fontSize + 3);
        str = 'Y';
        this.ctx.fillText(str, -this.ctx.measureText(str).width - 10, -axisLength + fontSize + 3);
        str = 'O';
        this.ctx.fillText(str, 3, fontSize + 3);
        this.ctx.restore();
        tools.arrow(this.ctx, 0, 0, 0, -axisLength, this.x0, this.y0);
        tools.arrow(this.ctx, 0, 0, axisLength, 0, this.x0, this.y0);
        this.ctx.restore();
    }
};