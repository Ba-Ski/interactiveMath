var tools = {
    cellBackground: function (canvas, step)
    {

        var ctx = canvas.getContext('2d');
        ctx.save();
        var xLine, yLine;
        xLine = yLine = 0;
        ctx.strokeStyle = "#D0D0D0";
        ctx.lineWidth = 2;

        do
        {
            ctx.beginPath();
            ctx.moveTo(xLine, 0);
            ctx.lineTo(xLine, canvas.height);
            ctx.stroke();
            xLine += step;
        } while (xLine <= canvas.width);

        do
        {
            ctx.beginPath();
            ctx.moveTo(0, yLine);
            ctx.lineTo(canvas.width, yLine);
            ctx.stroke();
            yLine += step;
        } while (yLine <= canvas.height);
        ctx.restore();
    },
    arrow: function (ctx, x1, y1, x2, y2, x0, y0, arrowLength, angle)
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
        var det = vec_y * n0_x - vec_x * n0_y;
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
};