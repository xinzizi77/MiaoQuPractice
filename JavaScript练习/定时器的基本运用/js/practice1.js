window.onload = function () {
    mv.app.upDownScroll();
    mv.app.autoActive();
};

var mv = {};

mv.tools = {};

mv.tools.$ = function () {
    if (arguments[0][0] == '#') {
        return document.getElementById(arguments[0].slice(1));
    } else if (arguments[0][0] == '.') {
        return arguments[1].getElementsByClassName(arguments[0].slice(1));
    } else {
        return arguments[1].getElementsByTagName(arguments[0]);
    }
};

mv.tools.getStyle = function (obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj)[attr];
    }
};

mv.app = {};

mv.app.upDownScroll = function () {
    var upDownWrap = mv.tools.$('#upDownScroll');
    var oUp = mv.tools.$('#up');
    var oGoodsList = mv.tools.$('#goodsList');
    var aGoodsLi = mv.tools.$('li', oGoodsList);
    var oDown = mv.tools.$('#down');
    var timer = null;
    var oTop = Number(mv.tools.getStyle(oGoodsList, 'top').slice(0, -2));

    oUp.onmousedown = function () {
        timer = setInterval(function () {
            oTop -= 1;
            oGoodsList.style.top = oTop + 'px';
            if (mv.tools.getStyle(oGoodsList, 'bottom').slice(0, -2) == 30) {
                clearInterval(timer);
            }
        }, 20);
    };

    oUp.onmouseup = function () {
        clearInterval(timer);
    };

    oDown.onmousedown = function () {
        timer = setInterval(function () {
            oTop += 1;
            oGoodsList.style.top = oTop + 'px';
            if (mv.tools.getStyle(oGoodsList, 'top').slice(0, -2) > 60) {
                clearInterval(timer);
            }
        }, 20);
    }

    oDown.onmouseup = function () {
        clearInterval(timer);
    };
};

mv.app.autoActive = function (){
    var oAutoWrap = mv.tools.$('#autoActive');
    var aAutoLi = mv.tools.$('li',oAutoWrap);
    var oImg = mv.tools.$('img',oAutoWrap)[0];
    var aImg = ['good1.png','good2.png','good3.png','good4.png','good5.png','good6.png','good7.png'];
    var timer = null;
    var up = 0,back = aAutoLi.length-1;


    timer = setInterval(function(){
        for (var i = 0; i < aAutoLi.length; i++){
            aAutoLi[i].className = '';
        }
        if(up < aAutoLi.length){
            aAutoLi[up++].className = 'liActive';
            back = aAutoLi.length-1;
            oImg.src = 'img/' + aImg[up%aImg.length];
        } else {
            aAutoLi[--back].className = 'liActive';
            oImg.src = 'img/' + aImg[back%aImg.length];
            if (back == 0){
                up = 1;
            }
        }
        
    },500);
}