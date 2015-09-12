var PolarPoint = function (x0, y0, canvas, step) {
    Point.call(this, x0, y0, canvas, step);
};
    
PolarPoint.prototype = Object.create(Point.prototype);

PolarPoint.prototype.constructor = PolarPoint;

PolarPoint.prototype.drawArc = function (length, angle) {

    this.ctx.beginPath();

    this.ctx.arc(this.x0, this.x0, length * 0.3 * this.step, 0, angle, true);
    this.ctx.stroke();

    var newAngle = angle > 0 ? angle - 0.4 : angle + 0.4;

    tools.arrow(this.ctx, length * 0.3 * this.step * Math.cos(newAngle),
            length * this.step * 0.3 * Math.sin(newAngle),
            length * this.step * 0.3 * Math.cos(angle),
            length * this.step * 0.3 * Math.sin(angle),
            this.x0, this.y0);
};

PolarPoint.prototype.drawPointInfo = function ()
{
    this.ctx.save();
    var fontSize = 18;
    this.ctx.font = "italic " + fontSize + "px Arial";
    this.ctx.fillStyle = 'black';
    this.ctx.lineWidth = 1;

    var resX = (this.x - this.x0) / this.step;
    var resY = (this.y - this.y0) / this.step;

    var length = Math.sqrt(resX * resX + resY * resY);
    var angle = Math.atan2(resY, resX);
    
    if (angle > 0)
        angle -= Math.PI * 2;
    
    this.drawArc(length, angle);

    length = Number(length).toFixed(1);
    angle = Number(57.2957795 * angle).toFixed(1);

    var str = 'M(' + length + ',' + (-angle) + ')';
    var textLength = this.ctx.measureText(str).width;
    var textX = this.x + 5;
    var textY = this.y - 5;
    if (textLength > this.canvas.width - this.x - 5)
        textX = this.canvas.width - textLength - 3;
    if (fontSize > this.y - 5)
        textY = fontSize + 3;
    this.ctx.fillText(str, textX, textY);

    this.ctx.restore();
};

