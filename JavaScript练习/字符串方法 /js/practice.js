window.onload = function () {
    mv.app.showWrap();
};

var mv = {};

mv.app = {};
mv.app.showWrap = function () {
    var oBtn = document.getElementById('btnWrap');
    var oShowBtn = oBtn.getElementsByTagName('button')[0];
    var aBtn = oBtn.getElementsByTagName('li');
    var oShowWrap = document.getElementById('showWrap');
    var oCloseBtn = document.getElementById('close');
    var oFind = oShowWrap.getElementsByClassName('find')[0];
    var oReplace = oShowWrap.getElementsByClassName('replace')[0];
    var aLiTab = oShowWrap.getElementsByTagName('li');
    var oFindText = oFind.getElementsByTagName('input')[0];
    var oFindBtn = document.getElementById('find');
    var aReplaceText = oReplace.getElementsByTagName('input');
    var oReplaceBtn = document.getElementById('replace');
    var oContent = document.getElementById('content');
    var onOff = true;
    var str = oContent.innerHTML;

    oShowBtn.onclick = function () {

        onOff ? showHidden(false) : showHidden(true);

    }

    aBtn[0].onclick = function () {
        showHidden(true);
        typeTab(false);
    }

    aBtn[1].onclick = function () {
        showHidden(true);
        typeTab(true);
    }

    oCloseBtn.onclick = function () {
        oShowWrap.hidden = true;
    }

    aLiTab[0].onclick = function (){
        typeTab(false);
    }

    aLiTab[1].onclick = function (){
        typeTab(true);
    }

    oFindBtn.onclick = function (){
        var text = oFindText.value;
        oContent.innerHTML = str;
        if ( !text ) {
            alert('请输入要查找的内容');
        } else if(oContent.innerHTML.indexOf(text) == -1) {
            alert('对不起，没有找到你输入的' + text);
        } else {
            oContent.innerHTML = oContent.innerHTML.split(text).join('<span>'+text+'</span>');
        }
        oFindText.value = '';
    }

    oReplaceBtn.onclick = function (){
        var nowText = aReplaceText[0].value;
        var newText = aReplaceText[1].value;
        oContent.innerHTML = str;
        if (!nowText) {
            alert("请输入你要替换的内容");
        } else if(oContent.innerHTML.indexOf(nowText) == -1) {
            alert('对不起，没有找到你输入的' + nowText);
        } else {
            oContent.innerHTML = oContent.innerHTML.split(nowText).join('<span>'+newText+'</span>');
        }
        aReplaceText[0].value = '';
        aReplaceText[1].value = '';
    }

    function showHidden(flag) {
        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].hidden = flag;
        }
        onOff = flag;
    }

    function typeTab(flag) {
        oShowWrap.hidden = false;
        oFind.hidden = flag;
        oReplace.hidden = !flag;
        if (flag) {
            aLiTab[1].className = 'active';
            aLiTab[0].className = '';
        } else {
            aLiTab[0].className = 'active';
            aLiTab[1].className = '';
        }
    }
};