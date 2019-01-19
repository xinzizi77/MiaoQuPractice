window.onload = function () {
    mv.app.goodsDate();
};

var mv = {};

mv.ui = {};
mv.ui.toTwo = function (n) {
    return n < 10 ? '0' + n : '' + n;
}

mv.app = {};
mv.app.goodsDate = function () {
    var oGoodsList = document.getElementById('goodsList');
    var agoods = oGoodsList.getElementsByClassName('goods');
    var aBtn = oGoodsList.getElementsByTagName('button');
    var oTotal = document.getElementById('total');
    var oPriceList = document.getElementById('priceList');
    var oUl = oPriceList.getElementsByTagName('ul')[0];
    var total = 0;
    
    for (var i = 0; i < agoods.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            autoTimer(agoods[this.index]);
        }
    }

    function autoTimer(goods) {
        var oInput = goods.getElementsByTagName('input')[0];
        var oDay = goods.getElementsByClassName('day')[0];
        var oPrice = goods.getElementsByClassName('price')[0];
        var oTitle = goods.getElementsByClassName('title')[0];
        var oImg = goods.getElementsByTagName('img')[0];
        var timer = null;
        var newDate = new Date(oInput.value);
        var price = Number(oPrice.innerHTML.slice(1));


        clearInterval(goods.timer);
        goods.timer = setInterval(function () {

            var nowDate = new Date();
            var t = Math.floor((newDate - nowDate) / 1000);
            if (t <= 0) {

                goods.pos = parseInt(getStyle(goods, 'left'));

                shake(goods, 'left', function () {

                    doMove(goods, 'top', 10, 200);

                    opacityFunction(goods, 20, 0,function(){

                        oUl.innerHTML += 
                        `<li>
                            <span>${oTitle.innerHTML}</span>
                            <span>${price}</span>
                            <img src="${oImg.src}" />
                        </li> `
                        total += price;
                        oTotal.innerHTML = '总价：' + total;

                    });
                });
                clearInterval(goods.timer);
            }
            var content = '剩余' + mv.ui.toTwo(Math.floor(t / 86400)) + '天' + mv.ui.toTwo(Math.floor(t % 86400 / 3600)) + '小时' + mv.ui.toTwo(Math.floor(t % 86400 % 3600 / 60)) + '分' + mv.ui.toTwo(t % 60) + '秒';
            oDay.innerHTML = content;

        }, 1000);

    }

}