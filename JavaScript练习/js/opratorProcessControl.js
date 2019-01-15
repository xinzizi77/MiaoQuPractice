window.onload = function (){
    mv.app.starWrap();
    mv.app.musicCheck();
};

var mv = {};

mv.ui =  {};

mv.app = {};

mv.app.starWrap = function (){
    var oStartWrap = document.getElementById('starWrap');
    var aImgLi = oStartWrap.getElementsByClassName('img');
    var oSpan = document.getElementById('orange');
    var oStartGrop = document.getElementById('starGrop');
    var aImg = oStartWrap.getElementsByTagName('img');
    var aGrade = ['很差','较差','还行','推荐','力荐'];
    var aImgSrc = ['star_dark.png','star_dark.png','star_bright.png','star_bright.png','star_bright.png']
    var now = 0;
    for(var i = 0; i < aImgLi.length; i++) {
        aImgLi[i].index = i;

        aImgLi[i].onmouseover = function (){
            oStartGrop.style.display = 'none';
            oSpan.style.display = 'block';
            for (var i = 0; i < aImgLi.length; i++) {
                aImg[i].src = 'img/star_gray.png';
            }
            for (var i = 0; i <= this.index; i++){
                aImg[i].src = 'img/' + aImgSrc[i];
            }

            oSpan.innerHTML = aGrade[this.index];
        }

        aImgLi[i].onmouseout =function (){
            for (var i = 0; i < now; i++){
                aImg[i].src = 'img/' + aImgSrc[i];
            }
            oSpan.innerHTML = aGrade[now-1];
            for (var i = now; i < aImgLi.length; i++) {
                aImg[i].src = 'img/star_gray.png';
            }
            if (now) {
                oSpan.style.display = 'block';
                oStartGrop.style.display = 'none'; 
            } else {
                oSpan.style.display = 'none';
                oStartGrop.style.display = 'block';
            }
        }

        aImgLi[i].onclick = function (){
            now = this.index+1;
        }
    }
}

mv.app.musicCheck = function (){
    var oSongList = document.getElementById('songList');
    var aSongCheck = oSongList.getElementsByTagName('input');
    var aSongLi = oSongList.getElementsByTagName('li');
    var aColor = ['#fff','rgba(193, 240, 241,0.2)'];
    var oBtnList = document.getElementById('btnList');
    var oAllBtn = oBtnList.getElementsByTagName('input')[0];
    var aBtn = oBtnList.getElementsByTagName('button');

    for (var i = 0; i < aSongLi.length; i++) {
        aSongLi[i].style.background = aColor[i%2];

        aSongLi[i].onmouseover = function (){
            for(var i = 0; i < aSongLi.length; i++){
                if (!aSongCheck[i].checked){
                    aSongLi[i].style.background = aColor[i%2];
                }
            }
            this.style.background = '#eee';
        }

        aSongCheck[i].onclick = function (){
            var onOff = 0;
            for (var i = 0; i < aSongCheck.length; i++) {
                if(aSongCheck[i].checked) {
                    aSongLi[i].style.background = '#eee';
                    onOff ++;
                }
                if (onOff == aSongCheck.length){
                    oAllBtn.checked = true;
                } else {
                    oAllBtn.checked = false;
                }
            }
            for (var i = 0; i<aBtn.length; i++) {
                aBtn[i].style.color = '#000';
                aBtn[i].style.borde = '1px sold #000';
            }
        }
        oAllBtn.onclick = function (){
            if (this.checked){
                checkBtn(true,'#eee','#000','1px sold #000')
            } else {
                checkBtn(false,aColor[i%2],'rgb(189, 185, 185)','1px solid rgb(189,185,185)')
            } 
        }

        function checkBtn (check, background,color,border){
            for(var i = 0; i < aSongCheck.length; i++) {
                aSongCheck[i].checked = check;
                aSongLi[i].style.background = background;
            }
            for (var i = 0; i<aBtn.length; i++) {
                aBtn[i].style.color = color;
                aBtn[i].style.border = border;
            }
        }
    }
}