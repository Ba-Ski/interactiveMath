var tooltip = {
    tooltipDiv: undefined,
    offsetFromCursorY: 2,
    op: undefined,
    element: undefined,
    tooltip: function (el, txt)
    {
        this.tooltipDiv = document.createElement("div");
        this.op = 0.1;
        this.element = el;
        
        this.tooltipDiv.id = 'tooltipDiv';
        this.tooltipDiv.style.opacity = this.op;
        this.tooltipDiv.style.background = "#E0E0E0";
        this.tooltipDiv.style.position = "absolute";
        this.tooltipDiv.style.fontSize = "20px";
        this.tooltipDiv.style.color = "black";
        el.appendChild(this.tooltipDiv);
        
        this.tooltipDiv.innerHTML = txt;
        
        el.onmousemove = this.getPosition;
        this.appearTooltip();
        
    },
    hideTooltip: function (el)
    {
        var element = document.getElementById("tooltipDiv");
        el.removeChild(element);


    },
    appearTooltip: function ()
    {
        if (this.op < 1) {
            this.op += 0.1;
            this.tooltipDiv.style.opacity = this.op;

            this.tooltipDiv.style.filter = 'alpha(opacity=' + this.op * 100 + ')';
            var t = setTimeout('tooltip.appearTooltip()', 30);
        }
    },
    getPosition: function (event)
    {

//    event = event || window.event;
//
//    var docEl = document.documentElement;
//
//    var scrollLeft = docEl.scrollLeft || document.body.scrollLeft;
//    var scrollTop = docEl.scrollTop || document.body.scrollTop;
//
//    var curX = /*event.clientX;*/ event.pageX || (event.clientX + scrollLeft);
//
//    var curY = /*event.clientY;*/ event.pageY || (event.clientY + scrollTop);

        //alert(curY);


        var huinia = this.hui(element);
        var curX = huinia.x;
        var curY = huinia.y;

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        var toRightEdge = windowWidth - curX;

        var toBottomEdge = windowHeight - curY;

        if (this.tooltipDiv.offsetWidth > toRightEdge)
            this.tooltipDiv.style.left = curX - this.tooltipDiv.offsetWidth + "px";

        else
            this.tooltipDiv.style.left = curX + "px";

        /*if (tooltipDiv.offsetHeight > toBottomEdge)
         tooltipDiv.style.top = curY - tooltipDiv.offsetHeight -offsetFromCursorY+ "px";
         else
         tooltipDiv.style.top = curY + offsetFromCursorY + "px";
         */
        this.tooltipDiv.style.top = curY - this.tooltipDiv.offsetHeight - this.offsetFromCursorY + "px";

    },
    hui: function (element) {

        var xPosition = 0;
        var yPosition = 0;

        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return {x: xPosition, y: yPosition};
    }
};
