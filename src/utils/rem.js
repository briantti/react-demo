(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
            var clientWidth = (win.orientation == 180 || win.orientation == 0) ? docEl.clientWidth : docEl.clientHeight;
            if (!clientWidth) return;
            if (clientWidth < 667) {
                // console.log(12 * (clientWidth / 375) + "px");
                docEl.style.fontSize = 20 * (clientWidth / 375) + "px";
            } else {
                docEl.style.fontSize = 20 * (667 / 375) + "px";
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
