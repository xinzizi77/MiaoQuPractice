window.onload = function (){
    mv.app.showBg();
    mv.app.changeStyleColor();
    mv.app.changeStyleWidth();
    mv.app.changeStyleHeight();
    mv.app.resetBtn();
    mv.app.sureBtn();
};
var mv = {};
mv.app = {};

let oBg = document.querySelector('#bg');
mv.app.showBg = function (){
    var oBtn = document.querySelector('#set');
    oBtn.onclick = function (){
        oBg.style.display = 'block';
    }
};

let oBox = document.querySelector('#box');
mv.app.changeStyleColor = function (){
    var oClocr = document.querySelector('.color');
    var colorList = oClocr.querySelectorAll('li');
    for (let i = 0; i < colorList.length; i++) {
        colorList[i].onclick = function (){
            if (colorList[i].innerText == '红') {
                oBox.style.background = 'rgb(251,0,7)';
            } else if (colorList[i].innerText == '黄') {
                oBox.style.background = 'rgb(255,255,11)';
            }else if (colorList[i].innerText == '蓝') {
                oBox.style.background = 'rgb(0,0,255)';
            }
        }
    }
};

let oNumberList = document.querySelectorAll('.number');
mv.app.changeStyleWidth = function (){
    var oWidth = oNumberList[0].querySelectorAll('li');
    for (let i = 0; i < oWidth.length; i++) {
        oWidth[i].onclick = function (){
            if (oWidth[i].innerText == 200) {
                oBox.style.width = '200px';
            } else if (oWidth[i].innerText == 300) {
                oBox.style.width = '300px';
            }else if (oWidth[i].innerText == 400) {
                oBox.style.width = '400px';
            }
        }
    }
};

mv.app.changeStyleHeight = function (){
    var oHeight = oNumberList[1].querySelectorAll('li');
    for (let i = 0; i < oHeight.length; i++) {
        oHeight[i].onclick = function (){
            if (oHeight[i].innerText == 200) {
                oBox.style.height = '200px';
            } else if (oHeight[i].innerText == 300) {
                oBox.style.height = '300px';
            }else if (oHeight[i].innerText == 400) {
                oBox.style.height = '400px';
            }
        }
    }
};

mv.app.resetBtn = function (){
    var oResetBtn = document.querySelector('#reset');
    oResetBtn.onclick = function (){
        oBox.style.width = '100px';
        oBox.style.height = '100px';
        oBox.style.background = '#fff';
    }
};

mv.app.sureBtn = function (){
    var oSureBtn = document.querySelector('#sure');
    oSureBtn.onclick = function (){
        oBg.style.display = 'none';
    }
};