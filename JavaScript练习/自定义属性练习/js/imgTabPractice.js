window.onload = function (){
    mv.app.imgTab();
};

var mv = {};
mv.app = {};
mv.app.imgTab = function (){
    var oImg = document.getElementById('bgImg');
    var oPre = document.getElementById('pre');
    var oNext = document.getElementById('next');
    var oDotList = document.getElementById('dotList');
    var aImgWrap = oDotList.getElementsByClassName('imgWrap');
    var aDot = oDotList.getElementsByTagName('span');
    var aImg = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
    var num = 0;
    var nowDot = aDot[0];
    function now (){
        nowDot.className = '';
        oImg.src = 'img/' + aImg[num];
        aDot[num].className = 'dotActive';
        nowDot = aDot[num];
    } 
    now();

    oPre.onclick = function (){
        num--;
        if (num < 0) {
            num = aImg.length - 1;
        }
        now();
    }

    oNext.onclick = function (){
        num++;
        if(num == aImg.length) {
            num = 0;
        }
        now();
    }

    for (var i= 0; i<aDot.length; i++) {
        aDot[i].index = i;
        aDot[i].onmouseover = function (){
            for(var i = 0; i<aDot.length; i++){
            aImgWrap[i].style.display = 'none';                
            }
            aImgWrap[this.index].style.display = 'block';
        }
        aDot[i].onmouseout = function (){
            aImgWrap[this.index].style.display = 'none';                            
        }
        aDot[i].onclick = function (){
            num = this.index;
            now()
        }
    }

}