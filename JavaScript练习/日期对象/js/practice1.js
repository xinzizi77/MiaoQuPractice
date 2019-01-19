window.onload = function () {

    mv.app.dateTimer();
};

var mv = {};
mv.app = {};
mv.app.dateTimer = function () {
    var aLi = document.getElementsByName('li');
    var aImg = document.getElementsByClassName('img');
    var aCol = document.getElementsByClassName('col');
    var timer = null;
    var col = 0;

    timer = setInterval( function (){
        for (var i = 0; i < aImg.length; i++) {
            imgTab(aImg[i],i);
        }
        col++;
    }, 1000);

    function imgTab(li,index) {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var src = toTwo(hours) + toTwo(minutes) + toTwo(seconds);
        var oDiv = li.getElementsByTagName('div')[0];
        var aImgLi = li.getElementsByTagName('img');

        aImgLi[1].src = 'img/' + src.charAt(index) + '.jpg';
        if (aImgLi[1].src != aImgLi[0].src) {
            doMove(oDiv, 'top', 20, -100,function (){
                aImgLi[0].src = aImgLi[1].src;
                oDiv.style.top = 0;
            });
            
        }

        for (var i = 0; i < aCol.length; i++) {
            aCol[i].src = 'img/colon' + col%2 + '.jpg';
        }
    }

    function toTwo(n) {
        return n < 10 ? '0' + n : '' + n;
    }
};

