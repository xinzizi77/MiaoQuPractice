window.onload = function (){
    mv.app.keyMove();
};

var mv = {};

mv.app = {};
mv.app.keyMove = function (){
    var oBox = document.getElementById('box');
    var left = right = up = down = false;

    setInterval(function () {
        if ( left) {

            if (parseInt(getStyle(oBox,'left')) >= 10) {
                oBox.style.left = parseInt(getStyle(oBox,'left')) - 10 +'px';
            } else {
                oBox.style.left = 0 +'px';
            }
        }

        if ( up) {

            if (parseInt(getStyle(oBox,'top')) >= 10) {
                oBox.style.top = parseInt(getStyle(oBox,'top')) - 10 +'px';
            } else {
                oBox.style.top = 0 +'px';
            }
        }

        if (right) {

            if (parseInt(getStyle(oBox,'left')) <= document.documentElement.clientWidth - parseInt(getStyle(oBox,'width')) - 10) {

                oBox.style.left = parseInt(getStyle(oBox,'left')) + 10 +'px';
            }
        }

        if ( down) {

            if (parseInt(getStyle(oBox,'top')) <= document.documentElement.clientHeight - parseInt(getStyle(oBox,'height')) - 10) {
                oBox.style.top = parseInt(getStyle(oBox,'top')) + 10 +'px';
            }
        }
    }, 50);

    document.onkeydown = function (ev){
        var ev = ev || event;

        switch(ev.keyCode) {
            case 37 : left = true; break;
            case 38 : up = true; break;
            case 39 : right = true; break;
            case 40 : down = true;break;
        }
    };

    document.onkeyup = function (ev){
        var ev = ev || event;

        switch(ev.keyCode) {
            case 37 : left = false; break;
            case 38 : up = false; break;
            case 39 : right = false; break;
            case 40 : down = false;break;
        } 
    }
};