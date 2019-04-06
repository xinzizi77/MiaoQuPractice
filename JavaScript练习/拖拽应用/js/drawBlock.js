window.onload = function (){
    mv.app.drawnBlock();
};

var mv = {};

mv.app = {};
mv.app.drawnBlock = function (){
    var oDrawWrap = document.getElementById('drawnWrapper');

    oDrawWrap.onmousedown = function(ev){
        var ev = ev || event;
        var oNewCreate = document.createElement('div');
        var oldX = ev.clientX;
        var oldY = ev.clientY;

        if (oDrawWrap.setCapture) {
            oDrawWrap.setCapture();
        }
        oDrawWrap.append(oNewCreate);
        oNewCreate.style.top = oldY - oDrawWrap.offsetTop + 'px';
        oNewCreate.style.left = oldX - oDrawWrap.offsetLeft + 'px';

        oDrawWrap.onmousemove = function (ev){
            var ev = ev || event;
            var disH = ev.clientY - oldY;
            var disW = ev.clientX - oldX;

            
            if (disH < 0 || disW < 0) {
                oNewCreate.style.top = ev.clientY - oDrawWrap.offsetTop + 'px';
                oNewCreate.style.left = ev.clientX - oDrawWrap.offsetLeft + 'px';
            };

            oNewCreate.style.height = Math.abs(disH) + 'px';
            oNewCreate.style.width = Math.abs(disW) + 'px';
        };

        oDrawWrap.onmouseup = function (){
            oDrawWrap.onmousemove = oDrawWrap.onmouseup = null;
            if (oDrawWrap.releaseCapture) {
                oDrawWrap.releaseCapture();
            }
        };
        return false;
    };
};