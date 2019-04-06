window.onload = function (){
    mv.app.replay();
};

var mv = {};

mv.app = {};
mv.app.replay = function (){
    var oReplayBtn = document.getElementById('replay');
    var oDrag = document.getElementById('drag');
    var aPosArray = [];
    var timer = null;

    oDrag.onmousedown = function (ev){
        var ev = ev || event;
        var disX = ev.clientX - oDrag.offsetLeft;
        var disY = ev.clientY - oDrag.offsetTop;

        aPosArray = [];
        document.onmousemove = function (ev){
            var ev = ev || event;
            var disT = ev.clientY - disY;
            var disL = ev.clientX - disX;

            if (disT >= 0 && disL >=0 && disL <= (document.documentElement.clientWidth - oDrag.offsetWidth) && disT <= (document.documentElement.clientHeight - oDrag.offsetHeight)) {
                oDrag.style.top = disT + 'px';
                oDrag.style.left = disL + 'px';
                aPosArray.push({'top':disT,'left':disL});
            };
            
        };
        
        document.onmouseup = function (){
            document.onmousemove = document.onmouseup = null;
        };
        return false;

    };

    oReplayBtn.onclick = function (){
        var i = aPosArray.length - 1;
        timer = setInterval(function(){
            oDrag.style.top = aPosArray[i].top + 'px';
            oDrag.style.left = aPosArray[i].left + 'px';

            if (i == 0) {
                clearInterval(timer);
            };
            i--;
        },15);
    };
};