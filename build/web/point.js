var Point = function (y0, x0, canvas, step) {
    this.x0 = x0;
    this.y0 = y0;
    this.x = '';
    this.y = '';
    this.step = step;
    this.radius = 3.5;
    this.color = '#FF3344';
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
}
;
Point.prototype.draw = function ()
{
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    if (this.step !== undefined)
        this.drawPointInfo();
    this.ctx.restore();
};
Point.prototype.drawPointInfo = function ()
{
    this.ctx.setLineDash([6, 10]);
    this.ctx.lineWidth = 1.5;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x0, this.y);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y0);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();

    var fontSize = 18;
    this.ctx.font = "italic " + fontSize + "px Arial";
    this.ctx.fillStyle = 'black';

    var resX = Number((this.x - this.x0) / this.step).toFixed(1);
    var resY = Number((this.y0 - this.y) / this.step).toFixed(1);
    resX = resX == 0 ? Math.abs(resX) : resX;
    resY = resY == 0 ? Math.abs(resY) : resY;
    var str = 'M(' + resX + ',' + resY + ')';
    var textLength = this.ctx.measureText(str).width;
    var textX = this.x + 5;
    var textY = this.y - 5;
    if (textLength > this.canvas.width - this.x - 5)
        textX = this.canvas.width - textLength - 3;
    if (fontSize > this.y - 5)
        textY = fontSize + 3;
    this.ctx.fillText(str, textX, textY);
};

