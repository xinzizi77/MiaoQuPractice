window.onload = function (){
    mv.app.videoList();
    mv.app.menuTab();
    mv.app.inputValue();
};

var mv = {};
mv.ui = {};
mv.ui.videoShow = function (li){
    var oH3 = li.getElementsByTagName('h4')[0];
    var oShow = li.getElementsByClassName('show')[0];

    li.onmouseover = function (){
        oH3.style.display = 'none';
        oShow.style.display = 'block';
    }

    li.onmouseout = function (){
        oH3.style.display = 'inline-block';
        oShow.style.display = 'none';
    }
};

mv.ui.reviseValue = function (li){
    var oShowWrap = li.getElementsByClassName('showWrap')[0];
    var oRevise = li.getElementsByClassName('reviseWrap')[0];
    var oH4 = li.getElementsByTagName('h4')[0];
    var oImgBtn = li.getElementsByTagName('img')[0];
    var oInput = li.getElementsByTagName('input')[0];
    var aBtn = li.getElementsByTagName('button');
    
    oImgBtn.onclick = function (){
        oShowWrap.style.display = 'none';
        oRevise.style.display = "block";
        oInput.value = oH4.innerHTML;
    }

    aBtn[0].onclick = function (){
        oShowWrap.style.display = 'block';
        oRevise.style.display = "none";
        oH4.innerHTML = oInput.value ;
    }

    aBtn[1].onclick = function (){
        oShowWrap.style.display = 'block';
        oRevise.style.display = "none";
    }

}

mv.app = {};
mv.app.videoList = function (){
    var oRecord = document.getElementById('recordList');
    var oContentList = oRecord.getElementsByClassName('contentList');

    for (var i = 0; i < oContentList.length; i++) {
        var aContentLi = oContentList[i].getElementsByTagName('li');
        
        for( var j = 0; j < aContentLi.length; j++) {
                mv.ui.videoShow(aContentLi[j]);
        }
    }
};

mv.app.menuTab = function (){
    var oHeadText = document.getElementsByClassName('headText')[0];
    var aTextLi = oHeadText.getElementsByTagName('li');
    var aContentList = document.getElementsByClassName('contentList');    
    for (var i = 1; i < aTextLi.length; i++) {
        aTextLi[i].index = i;
        aTextLi[i].onclick = function (){
            for(var i = 1; i< aTextLi.length; i++) {
                aTextLi[i].className = '';
                aContentList[i - 1].className = 'contentList';
            }
            this.className = 'liActive';
            aContentList[this.index - 1].className  += ' contentActive';
        }
    }
};

mv.app.inputValue = function (){
    var oInputWrap = document.getElementById('inputVaule');
    var aInputLi = oInputWrap.getElementsByTagName('li');

    for (var i = 0; i < aInputLi.length; i++) {
        mv.ui.reviseValue(aInputLi[i]);
    }
}