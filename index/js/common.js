window.onload = function (){
    mv.app.navLi();
    mv.app.imgTab();
};

var mv = {};

mv.app = {};
mv.app.navLi = function (){
    var oNav = document.getElementById('nav');
    var aNavLi = oNav.getElementsByClassName('nav_item');



    for (var i =0; i < aNavLi.length; i++) {
        aNavLi[i].onmouseover = function (){
            doMove(this,'top',15,-80);
        }
        aNavLi[i].onmouseout = function (){
            doMove(this,'top',15,0);
        }
    }
};

mv.app.imgTab = function (){
    var oHeaderBox = document.getElementById('header_box');
    var oimgLi = document.getElementById('imgLi');
    var aimgLi = oimgLi.getElementsByTagName('li');
    var oPreBtn = document.getElementById('pre');
    var oNextBtn = document.getElementById('next');
    var oTitle1 = document.getElementById('title1');
    var oTitle2 = document.getElementById('title2');
    var timer = null;

    for(var i = 0; i < aimgLi.length; i++) {
        aimgLi[i].style.width = getStyle(oHeaderBox,'width');
    }
    oimgLi.style.width = parseInt(getStyle(oHeaderBox,'width')) * 2 + 'px';
    oPreBtn.onclick = function (){
        moveImg();
    }

    oNextBtn.onclick = function (){
        moveImg();
    }

    setTimeout(function(){
        doMove(oTitle1,'left',80,parseInt(getStyle(oHeaderBox,'width')) / 10);
    },300);

    timer = setInterval(moveImg,4000);

    oimgLi.onmouseover = function(){
        clearInterval(timer);
    };

    oimgLi.onmouseout = function(){
        timer = setInterval(moveImg,5000);
    };

    function moveImg(){
        if (parseInt( getStyle(oimgLi,'left')) < 0) {
            doMove(oimgLi,'left',50,0,function(){
                oTitle2.className = ' ';
                oTitle2.style.transform = 'scale(0.1)';
                setTimeout(function(){
                    doMove(oTitle1,'left',80,parseInt(getStyle(oHeaderBox,'width')) / 10);
                },300);
            }) ;
        };

        if (parseInt( getStyle(oimgLi,'left')) == 0) {
            doMove(oimgLi,'left',50,-parseInt(getStyle(aimgLi[0],'width')),function(){
                oTitle1.style.left = '-970px';
                oTitle2.className = 'scaleDraw';
                oTitle2.style.transform = 'scale(1.5)';
            }) ;
        };

    }
};

