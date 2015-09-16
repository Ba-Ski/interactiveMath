
var descItems;
var toDescItems;
var DescTransparency = 0;
var dashedItems = [];
var items = [];
var cellStepH = view.size.width / 10;
var cellStepV = view.size.height / 10;
var endPoint = view.center;
var startPoint = new Point([cellStepH, view.size.height - cellStepV]);
var vector = endPoint - startPoint;


(function () {
    var lineH = new Path.Line({
        from: [cellStepH, 0],
        to: [cellStepH, view.size.height],
        strokeColor: "#D0D0D0"
    });
    var lineV = new Path.Line({
        from: [0, cellStepV],
        to: [view.size.width, cellStepV],
        strokeColor: "#D0D0D0"
    });

    for (var i = 1, max = 10; i < max; i++) {
        var clonedLineH = lineH.clone();
        var clonedLineV = lineV.clone();
        clonedLineH.position.x += cellStepH * i;
        clonedLineV.position.y += cellStepV * i;
    }
})();
function drawDescartesAxis() {
    var axisOffset = 20;

    var end = new Point([cellStepH, cellStepV]);
    var begin = startPoint + [0, axisOffset];

    var arrowVector = end - begin;
    arrowVector = arrowVector.normalize(10);

    descartesAxis = new Group([
        new Path([begin, end]),
        new Path([
            end + arrowVector.rotate(135),
            end,
            end + arrowVector.rotate(-135)
        ])
    ]);
    var end = new Point([view.size.width - cellStepH, view.size.height - cellStepV]);
    var begin = startPoint - [axisOffset, 0];

    arrowVector = (end - begin).normalize(10);
    descartesAxis.addChild(new Path([begin, end]));
    descartesAxis.addChild(new Path([end + arrowVector.rotate(135),
        end,
        end + arrowVector.rotate(-135)]));

    descartesAxis.style = {
        strokeColor: 'black',
        strokeWidth: 1,
    };
    for (var i = 0; i < descartesAxis.children.length; i++)
    {
        descartesAxis.children[i].strokeColor.alpha = 0;
    }
    descItems = descartesAxis;
}


function drawPolarAxis() {
    var begin = startPoint;
    var end = new Point([view.size.width - cellStepH, view.size.height - cellStepV]);
    var point = endPoint;
    var arrowVector = (point - begin);
    arrowVector = arrowVector.normalize(10);
    point = vector + begin;
    var polarAxis = new Group([new Path([begin, end]),
        new Path([begin, point]),
        new Path([point + arrowVector.rotate(135),
            point,
            point + arrowVector.rotate(-135)]),
    ]);

    arrowVector = (end - begin).normalize(10);

    polarAxis.addChild(new Path([
        end + arrowVector.rotate(135),
        end,
        end + arrowVector.rotate(-135),
    ]));

    polarAxis.strokeColor = 'black';
    polarAxis.strokeWidth = 1;
    items.push(polarAxis);
}

function drawAngle(center, vector, label, prefix) {
    var radius = vector.length/2-30, threshold = 10;
    if (vector.length < radius + threshold || Math.abs(vector.angle) < 15)
        return;

    var from = new Point(radius, 0);
    var through = from.rotate(vector.angle / 2);
    var to = from.rotate(vector.angle);
    var end = center + to;

    dashedItems.push(new Path.Arc(center + from, center + through, end));
    var arrowVector = to.normalize(7.5).rotate(vector.angle < 0 ? -90 : 90);
    dashedItems.push(new Path([
        end + arrowVector.rotate(135),
        end,
        end + arrowVector.rotate(-135)
    ]));
    if (label) {
        // Angle Label
        var text = new PointText(center
                + through.normalize(radius + 10) + new Point(0, 3));
        text.content = (prefix || '') + (-Number(vector.angle).toFixed(1)) + '°';
        text.fillColor = 'black';
        items.push(text);
    }
}

function drawLength(from, to, sign, label, prefix, value) {
    var lengthSize = 5;
    if ((to - from).length < lengthSize * 4)
        return;
    var vector = to - from;
    var awayVector = vector.normalize(lengthSize).rotate(90 * sign);
    var upVector = vector.normalize(lengthSize).rotate(45 * sign);
    var downVector = upVector.rotate(-90 * sign);
    var lengthVector = vector.normalize(
            vector.length / 2 - lengthSize * Math.sqrt(2));
    var line = new Path();
    line.add(from + awayVector);
    line.lineBy(upVector);
    line.lineBy(lengthVector);
    line.lineBy(upVector);
    var middle = line.lastSegment.point;
    line.lineBy(downVector);
    line.lineBy(lengthVector);
    line.lineBy(downVector);
    dashedItems.push(line);
    if (label) {
        // Length Label
        var textAngle = Math.abs(vector.angle) > 90
                ? textAngle = 180 + vector.angle : vector.angle;
        // Label needs to move away by different amounts based on the
        // vector's quadrant:
        var away = (sign >= 0 ? [1, 4] : [2, 3]).indexOf(vector.quadrant) != -1
                ? 8 : 0;
        value = value || vector.length;

        var text = new PointText({
            point: middle + awayVector.normalize(away + lengthSize),
            content: (prefix || '') + Number(value / cellStepH).toFixed(1) ,
            fillColor: 'black',
            justification: 'center'
        });
        text.rotate(textAngle);
        items.push(text);
    }
}
;

function toDesc()
{
    var aX = new Point({x: view.center.x, y: view.size.height - cellStepV});
    var bY = new Point({x: cellStepH, y: view.center.y});

    var xDashedLine = new Path.Line({
        from: view.center + [0, 5],
        to: aX,
        strokeColor: 'black',
        strokeWidth: 1,
        dashArray: [5, 8],
        name: 'aX'
    });
    
    var yDashedLine = new Path.Line({
        from: view.center - [5, 0],
        to: bY,
        strokeColor: 'black',
        strokeWidth: 1,
        dashArray: [5, 8],
        name:'bY'
    });
    var aLabel = new PointText({
        point: aX + (aX - view.center).normalize(20),
        content: 'A',
        fillColor: 'black',
        fontWeight: 'italic',
        justification: 'center'
    });
    var bLabel = new PointText({
        point: bY + (bY - view.center).normalize(15),
        content: 'B',
        fillColor: 'black',
        fontWeight: 'italic',
        justification: 'center'
    });

    toDescItems = new Group([xDashedLine, yDashedLine, bLabel, aLabel]);

    for (var i = 0; i < toDescItems.children.length; i++) {
        if (toDescItems.children[i].fillColor) {
            toDescItems.children[i].fillColor.alpha = 0;
        }
        else {
            toDescItems.children[i].strokeColor.alpha = 0;
        }
    }


}

function onFrame(event)
{
    
    if (!descItems || !toDescItems || !clicked)
        return;

    for (var i = 0; i < descItems.children.length; i++)
    {
        descItems.children[i].strokeColor.alpha += 0.01;
    }
    if (descItems.strokeColor.alpha >= 1 &&
            toDescItems.children[0].strokeColor.alpha != 1)
    {
        for (var i = 0; i < toDescItems.children.length; i++) {
            if (toDescItems.children[i].fillColor) {
                toDescItems.children[i].fillColor.alpha += 0.02;
            }
            else {
                toDescItems.children[i].strokeColor.alpha += 0.02;
            }
        }
    }
    
    if(toDescItems.children[0].strokeColor.alpha == 1)
    {
        for(var i =0 ; i<labels.length;i++)
        labels[i].fillColor.alpha += 0.02;
    }

}

var point = new Path.Circle(endPoint, 5);
point.style = {
    strokeColor: 'black',
    fillColor: 'red',
    strokeWidth: 1
};

var mLabel = new PointText({
        point: endPoint + vector.normalize(15),
        content: 'M',
        fillColor: 'black',
        fontWeight: 'italic',
        justification: 'center'
});

vector.length -= 5;
drawPolarAxis();
drawAngle(startPoint, vector, true, 'φ = ');
drawLength(startPoint, endPoint, vector.angle < 0 ? -1 : 1, true, 'ϱ = ');
for (var i = 0, l = dashedItems.length; i < l; i++) {
    var item = dashedItems[i];
    item.strokeColor = 'black';
    item.dashArray = [1, 2];
    items.push(item);
}
drawDescartesAxis();
toDesc();

var xLabel = new PointText({
        point: endPoint - [toDescItems.children['bY'].length/2,20],
        content: 'x = ϱcosφ = ' + Math.round((vector.length/cellStepH)*Math.cos(-vector.angle*Math.PI/180)),
        fillColor: 'black',
        fontWeight: 'italic',
        justification: 'center'
});

var yLabel = new PointText({
        point: endPoint + [60,toDescItems.children['aX'].length/2],
        content: 'y = ϱsinφ = ' + Math.round((vector.length/cellStepH)*Math.sin(-vector.angle*Math.PI/180)),
        fillColor: 'black',
        fontWeight: 'italic',
        justification: 'center'
});    

var labels = [yLabel,xLabel];
labels[0].fillColor.alpha=0;
labels[1].fillColor.alpha=0;