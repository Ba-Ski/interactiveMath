$(document).ready(function () {
    $("#flip1").click(function () {
        $("#panel1").slideToggle("slow");
    });

});

$(function () {
    $('#btn1').click(function () {


        /*document.getElementById("paths11").classList.remove("firstDrow");
         document.getElementById("paths12").classList.remove("secondDrow");
         document.getElementById("paths21").classList.remove("secondDrow");
         document.getElementById("paths22").classList.remove("firstDrow");*/


        $("#11_22").removeClass("firstAppear");
        $("#minus").removeClass("middleAppear");
        $("#21_12").removeClass("secondAppear");

        setTimeout(function () {
            /*document.getElementById("paths11").classList.add("firstDrow");
             document.getElementById("paths12").classList.add("secondDrow");
             document.getElementById("paths21").classList.add("secondDrow");
             document.getElementById("paths22").classList.add("firstDrow");*/

            $('#matrix_2x2_1').lazylinepainter(
                {
                    "svgData": matrix_2x2_1,
                    "drawSequential": false,
                    "strokeWidth": 3,
                    "strokeColor": "#e09b99",
                    "onComplete":  function(){ $("#matrix_2x2_1").addClass("Disappear"); }
                }).lazylinepainter('paint');


            $('#matrix_2x2_2').lazylinepainter(
                {
                    "svgData": matrix_2x2_2,
                    "drawSequential": false,
                    "strokeWidth": 3,
                    "strokeColor": "#e09b99",
                    "delay": 2000,
                    "onComplete":  function(){$("#matrix_2x2_2").addClass("Disappear");}
                }).lazylinepainter('paint');


            $("#11_22").addClass("firstAppear");
            $("#minus").addClass("middleAppear");
            $("#21_12").addClass("secondAppear");

        }, 100);
    });
});

var matrix_2x2_1 = {
    "matrix_2x2_1": {
        "strokepath": [
            {
                "path": "m75.428 89.703c-8.641-5.198-16.122-17.991-13.394-28.902 11.167-44.668 111.52 18.501 16.918 38.771",
                "duration": 600
            },
            {
                "path": "m171.3 149.27c-12.819-3.2929-12.689-11.337-12.689-23.263 0-47.618 121.96-2.5886 25.378 29.607",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 324,
            "height": 175
        }
    }
};
var matrix_2x2_2 = {
    "matrix_2x2_2": {
        "strokepath": [
            {
                "path": "m67.673 147.86c-10.419-0.53624-11.279-9.497-11.279-18.328 0-47.632 104.34-8.6419 41.238 22.91-7.4312 3.7156-17.186 4.5538-24.673 7.0493",
                "duration": 600
            },
            {
                "path": "m169.18 90.056c-8.1629-0.47641-10.222-8.5487-10.222-15.861 0-50.543 88.815-21.494 57.099 10.222-9.5713 9.5713-21.412 16.809-35.247 17.623",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 324,
            "height": 175
        }
    }
};


var pathObj1 = {
    "tarrow": {
        "strokepath": [
            {
                "path": "m17.501 69.948c32.321-15.396 78.98-24.876 113.85-12.198",
                "duration": 200
            },
            {
                "path": "m131.35 58.634c-6.3415 2.7762-13.427 3.8416-20.683 3.182",
                "duration": 200
            },
            {
                "path": "m131.88 58.457c-4.9381-9.3168-16.421-12.427-25.809-15.556",
                "duration": 200
            },
            {
                "path": "m70.004 29.289c-0.991 5.147-2.153 20.119-10.43 16.441",
                "duration": 200
            },
            {
                "path": "m60.458 29.996c6.1922-2.8916 13.259-2.8286 19.622-4.9497",
                "duration": 200
            }
        ],
        "dimensions": {
            "width": 150,
            "height": 100
        }
    }
};
/* 
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj2 = {
    "arrows": {
        "strokepath": [
            {
                "path": "m92.149 122.18c6.8102-20.462 38.304 1.499 50.456-16.73 8.6603 18.057 50.416-6.297 55.237 16.199",
                "duration": 600
            },
            {
                "path": "m305.93 71.722c-25.73 36.258-133.35-16.639-148.72 29.478",
                "duration": 600
            },
            {
                "path": "m161.99 83.672c-4.085 5.6086-4.7801 10.765-4.7801 17.793",
                "duration": 600
            },
            {
                "path": "m158.01 100.4c6.3982-1.1921 13.121-5.5854 18.058-7.7012",
                "duration": 300
            },
            {
                "path": "m91.884 172.1c7.246 14.566 27.657 1.7742 36.382 16.73 6.6976-12.003 31.663 5.6277 35.851-9.029",
                "duration": 600
            },
            {
                "path": "m127.2 193.61c25.668 19.728 96.859 21.41 111.27-12.216-0.002 6.8614 0.88704 10.752-2.39 15.668",
                "duration": 600
            },
            {
                "path": "m237.41 181.93c-5.7492 1.6721-12.13 6.2593-16.199 8.7635",
                "duration": 400
            }
        ],
        "dimensions": {
            "width": 384,
            "height": 213
        }
    }
};

/* 
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var leftLines = {
    "leftLines": {
        "strokepath": [
            {
                "path": "m11.076 9.9958c59.821 20.662 115.07 61.483 169.47 95.474",
                "duration": 600
            },
            {
                "path": "m69.56 10.439c45.212 16.522 84.386 46.402 127.6 68.009 11.298 5.6488 30.629 13.208 38.103 22.817",
                "duration": 600
            },
            {
                "path": "m124.28 8.4451c43.535 6.1087 79.736 36.81 115.86 58.483 18.448 11.069 43.816 18.119 58.926 33.229",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 319,
            "height": 115
        }
    }
};
/* 
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var rightLines = {
    "rightLines": {
        "strokepath": [
            {
                "path": "m180.55 8.5642c-59.83 20.662-115.08 61.483-169.47 95.476",
                "duration": 600
            },
            {
                "path": "m235.26 12.773c-45.21 16.522-84.38 46.402-127.6 68.009-11.295 5.649-30.626 13.208-38.1 22.818",
                "duration": 600
            },
            {
                "path": "m299.06 13.881c-43.535 6.1087-79.736 36.81-115.86 58.483-18.448 11.069-43.816 18.119-58.926 33.229",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 319,
            "height": 115
        }
    }
};

$(function () {
    $('#btn2').click(function () {
        addApperanceCSS("list1", "0s", "0.5s", "forwards", "apperance");
        addApperanceCSS("matrixx", "1s", "0.5s", "forwards", "apperance");
        addApperanceCSS("tmatrix", "1.5s", "0.5s", "forwards", "apperance");
        addApperanceCSS("list2", "2s", ".5s", "forwards", "apperance");
        addApperanceCSS("widematrix", "2.5s", ".5s", "forwards", "apperance");
        addApperanceCSS("blank", "5.7s", ".5s", "forwards", "disapperance");
        addApperanceCSS("list3", "6s", ".5s", "forwards", "apperance");
        addApperanceCSS("leftwmatrix", "6.5s", ".5s", "forwards", "apperance");
        addApperanceCSS("list4", "7.5s", ".5s", "forwards", "apperance");
        addApperanceCSS("rightwmatrix", "8s", ".5s", "forwards", "apperance");
        addApperanceCSS("list5", "9s", ".5s", "forwards", "apperance");
        addApperanceCSS("result", "9s", ".5s", "forwards", "apperance");

        $('#tarrow').lazylinepainter(
            {
                "svgData": pathObj1,
                "strokeWidth": 7,
                "strokeColor": "#e09b99",
                "delay": 1100
            }).lazylinepainter('paint');

        $('#arrows').lazylinepainter(
            {
                "svgData": pathObj2,
                "strokeWidth": 5,
                "strokeColor": "#e09b99",
                "delay": 2100
            }).lazylinepainter('paint');

        $('#leftLines').lazylinepainter(
            {
                "svgData": leftLines,
                "strokeWidth": 7,
                "strokeColor": "#e09b99",
                "delay": 7000,
                "drawSequential": false
            }).lazylinepainter('paint');

        $('#rightLines').lazylinepainter(
            {
                "svgData": rightLines,
                "strokeWidth": 7,
                "strokeColor": "#e09b99",
                "delay": 8500,
                "drawSequential": false
            }).lazylinepainter('paint');

    });
});