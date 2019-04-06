window.onload = function (){
    mv.app.srcoll();
};

var mv = {};

mv.app = {};
mv.app.srcoll = function (){
    var oContentWrap = document.getElementById('contentWrap');
    var oContent = document.getElementById('content');
    var oScrollWrap = document.getElementById('scrollWrap');
    var oScroll = document.getElementById('scroll');
    var scaleL = oContentWrap.offsetHeight / Math.max(oContent.offsetHeight,oContentWrap.offsetHeight);

    if (scaleL >= 1) {
        oScroll.style.height = '0';
    } else {
        oScroll.style.height = scaleL * 100 + '%';
    }

    oScroll.onmousedown = function (ev){
        var ev = ev || event;
        var disY = ev.clientY - this.offsetTop;

        if (this.setCapture) {
            oScroll.setCapture();
        };

        document.onmousemove = function (ev){
            var ev = ev || event;
            var disT = ev.clientY - disY;
            var disMax = oScrollWrap.offsetHeight - oScroll.offsetHeight;

            if ( disT >= 0 && disT <= disMax ) {

                oScroll.style.top = ev.clientY - disY + 'px';

                var scale = (ev.clientY - disY) / disMax;
    
                oContent.style.top = (oContentWrap.offsetHeight - oContent.offsetHeight) * scale +'px';
            };
        };

        document.onmouseup = function (){
            document.onmousemove = document.onmouseup = null;
            if (oScroll.releaseCapture) {
                oScroll.releaseCapture();
            };
        };

        return false;
    };
};