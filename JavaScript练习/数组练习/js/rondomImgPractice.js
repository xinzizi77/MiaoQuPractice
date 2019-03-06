window.onload = function () {
    mv.app.mainFunction();
};

var mv = {};

mv.ui = {};
mv.ui.moveImg = function (aImg){
    var time = Math.round(Math.random()*7);
    if (getStyle(aImg[time],'top') == '0px') {
        doMove(aImg[time],'top',10,-110);
    } else {
        doMove(aImg[time],'top',10,0);
    }
}

mv.app = {};
mv.app.mainFunction = function (){
    var aImg = document.getElementsByClassName('imgWrap');
    var timer1 = timer2 = null;

    timer1 = setInterval(() => {
        mv.ui.moveImg(aImg);
    }, 900);

    timer2 = setInterval(() => {
        mv.ui.moveImg(aImg);
    },400);
};