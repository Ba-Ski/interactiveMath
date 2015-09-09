window.addEventListener('load', animation);

function animation() {
    
    var canvas = document.getElementById('descartesCoordsCanvas');
    var x0 = canvas.width / 2;
    var y0 = canvas.height / 2;
    var step = 35;

    var point = new Point(x0, y0, canvas, step);
    draw(canvas, step, x0, y0);
    point.x = x0 + 3.4 * step;
    point.y = y0 + 4*step;
    point.draw();

    canvas.addEventListener('click', function (e) {

        var rect = canvas.getBoundingClientRect();
        point.x = e.clientX - rect.left;
        point.y = e.clientY - rect.top;
        draw(canvas, step, x0, y0);
        point.draw();

    });
    
    point.draw();

}

function draw(canvas, step, x0, y0)
{
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var axisLength = canvas.width / 2;

    cellBackground(canvas, step);
    axis(ctx, x0, y0, axisLength, step);
}

function axis(ctx, x0, y0, axisLength, step) {

    ctx.save();
    ctx.translate(x0, y0);
    ctx.strokStyle = 'black';
    ctx.lineWidth = 2;
    var segLineLength = 6;

    ctx.beginPath();
    ctx.moveTo(-axisLength, 0);
    ctx.lineTo(axisLength, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -axisLength);
    ctx.lineTo(0, axisLength);
    ctx.stroke();

    ctx.lineWidth = 1;
    var fontSize = 11;
    var magicWidthCoeff = 0.15;
    var magicHeightCoeff = 0.4;
    ctx.font = fontSize + "px Comic Sans";
    var segNum = axisLength / step;
    for (var i = 0, y = axisLength, x = -axisLength; i < 2 * segNum; i++)
    {
        ctx.beginPath();
        ctx.moveTo(-segLineLength, y);
        ctx.lineTo(segLineLength, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, -segLineLength);
        ctx.lineTo(x, segLineLength);
        ctx.stroke();

        var minus = '-';
        var minusWidth = ctx.measureText(minus).width - 2;


        if (-segNum + i !== 0) {
            var str = -segNum + i;
            var strWidth = ctx.measureText(str).width;
            if (Math.abs(x - 3) < axisLength)
                if (str < 0) {
                    ctx.fillText(str, x - strWidth / 2 - minusWidth, segLineLength + fontSize);
                }
                else
                    ctx.fillText(str, x - strWidth / 2, segLineLength + fontSize);
            if (axisLength - (y + 3) > fontSize)
                ctx.fillText(str, -segLineLength - fontSize * magicWidthCoeff - strWidth,
                        y + fontSize * magicHeightCoeff);
        }
        y -= step;
        x += step;
    }

    fontSize = 18;
    ctx.font = "italic " + fontSize + "px serif";
    var str = 'X';
    ctx.fillText(str, axisLength - ctx.measureText(str).width - 5, fontSize + 3);
    str='Y';
    ctx.fillText(str, -ctx.measureText(str).width -10, -axisLength + fontSize + 3);
    str='O';
    ctx.fillText(str, 3 , fontSize+3);
    ctx.restore();
    arrow(ctx, 0, 0, 0, -axisLength, x0, y0);
    arrow(ctx, 0, 0, axisLength, 0, x0, y0);
    ctx.restore();
}

function arrow(ctx, x1, y1, x2, y2, x0, y0, arrowLength, angle)
{

    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    x0 = typeof x0 !== 'undefined' ? x0 : 0;
    y0 = typeof y0 !== 'undefined' ? y0 : 0;
    angle = typeof angle !== 'undefined' ? angle : 0.345;
    arrowLength = typeof arrowLength !== 'undefined' ? arrowLength : 10;

    ctx.translate(x0, y0);

    var n0_x = -5, n0_y = 0;
    var vec_x = x2 - x1;
    var vec_y = y2 - y1;

    var dot = vec_x * n0_x + vec_y * n0_y;
    var det =  vec_y * n0_x-vec_x * n0_y;
    var angleToOX = Math.atan2(det, dot);

    var x, y;

    x = (arrowLength * Math.cos(angle)) * Math.cos(angleToOX) - (arrowLength * Math.sin(angle)) * Math.sin(angleToOX) + x2;

    y = (arrowLength * Math.cos(angle)) * Math.sin(angleToOX) + (arrowLength * Math.sin(angle)) * Math.cos(angleToOX) + y2;

    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x, y);

    ctx.stroke();

    x = (arrowLength * Math.cos(-angle)) * Math.cos(angleToOX) - (arrowLength * Math.sin(-angle)) * Math.sin(angleToOX) + x2;

    y = (arrowLength * Math.cos(-angle)) * Math.sin(angleToOX) + (arrowLength * Math.sin(-angle)) * Math.cos(angleToOX) + y2;

    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.restore();
    
}