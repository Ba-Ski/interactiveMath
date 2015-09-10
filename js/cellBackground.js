function cellBackground(canvas,step)
{
    
    var ctx = canvas.getContext('2d');
    ctx.save();
    var xLine,yLine;
    xLine=yLine=0;
    ctx.strokeStyle="#D0D0D0";
    ctx.lineWidth=2;
        
    do
    {
        ctx.beginPath();
        ctx.moveTo(xLine,0);
        ctx.lineTo(xLine,canvas.height);
        ctx.stroke();
        xLine+=step;
    }while(xLine<=canvas.width);
    
    do
    {
        ctx.beginPath();
        ctx.moveTo(0,yLine);
        ctx.lineTo(canvas.width,yLine);
        ctx.stroke();
        yLine+=step;
    }while(yLine<=canvas.height);
    ctx.restore();
}