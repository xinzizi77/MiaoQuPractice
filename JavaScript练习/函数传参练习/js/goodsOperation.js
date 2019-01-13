window.onload = function () {
    mv.app.calu();
};
var mv = {};

mv.ui = {};

var totalNum = 0;
var totalPrice = 0
mv.ui.caluPrice = function (li) {
    var aInput = li.getElementsByTagName('input');
    var oStrong = li.getElementsByTagName('strong')[0];
    var aSpan = li.getElementsByTagName('span');
    var number = Number(oStrong.innerHTML);
    var unit = Number(aSpan[0].innerHTML);
    var oStatis = document.getElementById('statis');
    var aTotal = oStatis.getElementsByTagName('span');

    aInput[1].onclick = function () {
        changeValue('+');
    }

    aInput[0].onclick = function () {
        if (number > 0) {
            changeValue('-');
        }
    }

    function changeValue(symbol) {
        if (symbol == '-') {
            number--;
            totalNum--;
            totalPrice -= unit;
        } else {
            number++;
            totalNum++;
            totalPrice += unit;
        }
        oStrong.innerHTML = number;
        aSpan[1].innerHTML = number * unit;
        aTotal[0].innerHTML = totalNum;
        aTotal[1].innerHTML = totalPrice;
        aTotal[2].innerHTML = maxValue();
    }

    function maxValue (){
        var aStrong = document.getElementsByTagName('strong');
        var aUnit = document.getElementsByClassName('unit');
        var aCheck = [];
        var max = 0;
        for(var i = 0; i < aStrong.length; i++) {
            if( Number(aStrong[i].innerHTML) > 0) {
                aCheck.push(Number(aUnit[i].innerHTML));
            }
        }
        for(var i = 0; i < aCheck.length; i++) {
            if (max < aCheck[i]) {
                max = aCheck[i];
            }
        }
    return max;
    }
};

mv.app = {};
mv.app.calu = function () {
    var oGoods = document.getElementById('goodsList');
    var aGoodsLi = oGoods.getElementsByTagName('li');
    var a = '';
    for (let i = 0; i < aGoodsLi.length; i++) {
        mv.ui.caluPrice(aGoodsLi[i]);
    }
}