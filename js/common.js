function addApperanceCSS(name, startTime, duration, fillMode, animation) {
    var item = document.getElementById(name);
    item.style.animationDelay = startTime;
    item.style.animationDuration = duration;
    item.style.animationName = animation;
    item.style.animationFillMode = fillMode;
}
