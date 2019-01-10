window.onload = function (){
    mv.app.picSwitch();
};

var mv = {};
mv.app = {};
mv.app.picSwitch = function (){
    var oCycBtn = document.querySelector('#cycle');
    var oOrdBtn = document.querySelector('#order');
    var oText = document.querySelector('h3');
    var oPre = document.querySelector('#pre');
    var oNext = document.querySelector('#next');
    var oTotal = document.querySelector('#total');
    var arrImg = ['img_switch1.jpg','img_switch2.jpg','img_switch3.jpg','img_switch4.jpg'];
    var arrDescr = ['蜀山战记','青云志','追鱼传奇','楚乔传'];
    var oNowImg = document.querySelector('#img');
    var oDescr = document.querySelector('#descr');
    var num = 0;
    var model = true;

    function change(num){
        oTotal.innerHTML = num + 1 + ' / ' + arrImg.length;
        oNowImg.src = 'img/' + arrImg[num];
        oDescr.innerHTML = arrDescr[num];
    }
    change(num);

    oCycBtn.onclick = function (){
        model = true;
        oText.innerHTML = '图片可从第一张跳转到最后循环切换';
    }
    oOrdBtn.onclick = function (){
        model = false;
        oText.innerHTML = '图片只能到第一张或最后一张切换';
    }
    oPre.onclick = function (){
        console.log(model)
        num--
        if (model) {
            console.log(num)
            if (num < 0) {
                num = arrImg.length - 1;
            }
            change(num);
        } else {
            if (num < 0) {
                alert('这已经是第一张，不能往前了~~');
            } else {
            change(num);
            }
        }
    }
    oNext.onclick = function (){
        num++;
        if (model) {
            if (num == arrImg.length) {
                num = 0;
                console.log(num)
            }
            change(num);
        } else {
            if (num == arrImg.length) {
                alert('这已经是最后一张，不能往后了~~');
            } else {
                change(num);
            }
        }
    }
}