window.addEventListener('load', function ()
{
    var canvas1;
    var canvas2;
    var ctx1;
    var ctx2;


    canvas1 = document.getElementById("testCanvas");
    canvas2 = document.getElementById("testCanvas2");
    if (canvas1 == null || canvas2 == null) {
        alert("oops, canvas has not been found");
        return;
    }

    ctx1 = canvas1.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    if (ctx1 == null || ctx2 == null)
    {
        alert("ooops, something wrong happens with canvas");
        return;
    }
    ctx2.font = "12px Comic Sans";

    DrawLine(ctx1, 100, canvas1.height / 2, 400, canvas1.height / 2);
    DrawLine(ctx2, 100, canvas1.height / 2, 400, canvas1.height / 2);
    var pointX = 200;
    DrawPoint(ctx2, pointX, canvas2.height / 2);
    ctx2.fillText("O", pointX - 5, canvas2.height / 2 + 15);
    pointX = 300;
    DrawPoint(ctx2, pointX, canvas2.height / 2);
    ctx2.fillText("E", pointX - 5, canvas2.height / 2 + 15);
    DrawLine(ctx2, 200, canvas2.height / 2 - 20, 245, canvas2.height / 2 - 20);
    ctx2.fillText("1", 247, canvas2.height / 2 - 16);
    DrawLine(ctx2, 255, canvas2.height / 2 - 20, 300, canvas2.height / 2 - 20);
    DrawArrow(ctx2, 200, canvas2.height / 2 - 20, 204, canvas2.height / 2 - 22, 204, canvas2.height / 2 - 18);
    DrawArrow(ctx2, 300, canvas2.height / 2 - 20, 296, canvas2.height / 2 - 22, 296, canvas2.height / 2 - 18);

});
function DrawLine(context, fromX, fromY, toX, toY)
{
    context.strokeStyle = "black";
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
}

function DrawPoint(context, x, y)
{
    context.fillStyle = "black";
    context.arc(x, y, 2.5, 0, Math.PI * 2);
    context.fill();

}
function DrawArrow(context, endX, endY, beginX, beginY, begin2X, begin2Y)
{

    context.strokeStyle = "black";

    //LEFT ARROWS
    context.moveTo(endX, endY);
    context.lineTo(beginX, beginY);

    //context.stroke();

    context.moveTo(endX, endY);
    context.lineTo(begin2X, begin2Y);
    //context.stroke();      

    context.stroke();
}
