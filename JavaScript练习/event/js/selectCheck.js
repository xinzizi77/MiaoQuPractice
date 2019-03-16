window.onload = function () {
    mv.app.selectCheck();
};

var mv = {};

mv.app = {};
mv.app.selectCheck = function () {
    var oText = document.getElementById('text');
    var oFont = document.getElementById('font');
    var aFontLi = oFont.getElementsByTagName('li');
    var aFont = [];
    var oLast;

    oText.onclick = function (ev) {
        var ev = ev || event;

        oFont.style.display = 'block';
        ev.cancelBubble = true;
    };

    document.onclick = function () {
        oFont.style.display = 'none';
    };

    for (var i = 0; i < aFontLi.length; i++) {
        aFontLi[i].onclick = function (ev) {
            var ev = ev || event;

            if (ev.shiftKey || ev.ctrlKey) {
                ev.cancelBubble = true;
            } else {
                aFont = [];
            }

            for (var j = 0; j < aFont.length; j++) {
                if (this.innerHTML == aFont[j]) {
                    aFont.splice(j, 1);
                    aFontLi[j].style.background = 'none';
                    aFontLi[j].style.color = '#000';
                    oText.innerHTML = aFont.join(',');
                    background();
                    return;
                }
            };

            aFont.push(this.innerHTML);
            oText.innerHTML = aFont.join(',');
            background();
        }
    }

    function background(){
        for (var j = 0; j < aFontLi.length; j++) {
            aFontLi[j].style.background = 'none';
            aFontLi[j].style.color = '#000';
        }

        for (var i = 0; i < aFontLi.length; i++) {
            for (var j = 0; j < aFont.length; j++) {
                if (aFontLi[i].innerHTML == aFont[j]) {
                    aFontLi[i].style.background = 'orange';
                    aFontLi[i].style.color = '#fff';
                }
            }
        }
    }
};