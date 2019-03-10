window.onload = function (){
    mv.app.sendMessage();
    mv.app.delMessage();
    mv.app.findMessage();
};

var mv = {};

mv.app = {};
mv.app.sendMessage = function (){
    var oPractice1 = document.getElementById('practice1')
    var oInput = oPractice1.getElementsByClassName('inputWrap')[0];
    var oSubmitBtn = oPractice1.getElementsByClassName('sendMessage')[0];
    var oContent = oPractice1.getElementsByClassName('contentWrap')[0];
    var count = 0;

    oSubmitBtn.onclick = function (){
        mv.ui.insertMessage(oContent,oInput);

        if (count >= 5) {
            oContent.removeChild(oContent.lastChild||oContent.lastElementChild);
        } ;

        count++;

    }
};

mv.app.delMessage = function (){
    var oPractice2 = document.getElementById('practice2');
    var oInput = oPractice2.getElementsByClassName('inputWrap')[0];
    var oSubmitBtn = oPractice2.getElementsByClassName('sendMessage')[0];
    var oDelbtn = document.getElementById('del');
    var oContent = oPractice2.getElementsByClassName('contentWrap')[0];

    oSubmitBtn.onclick = function (){
        mv.ui.insertMessage(oContent,oInput);
        getMessage();
    };

    oDelbtn.onclick = function (){
        var aLi=oContent.getElementsByTagName('li');

        for (var i = 0; i < aLi.length; i++) {
            if (aLi[i].style.background == 'yellow') {
                oContent.removeChild(aLi[i])
            }
        }
    };

    function getMessage() {
        var aLi = oContent.getElementsByTagName('li');
        for(var i = 0; i < aLi.length; i++) {
            aLi[i].onclick = function (){
                if(this.style.background == 'yellow') {
                this.style.background = 'none';
                } else {
                    this.style.background = 'yellow';
                }
            }
        }
    }
    
};

mv.app.findMessage = function (){
    var aFindMessage = [];

    aFindMessage = mv.tool.getElementsByTagName(document, '*', 'box,box1');
    for (var i = 0; i < aFindMessage.length; i++) {
        aFindMessage[i].style.background = 'orange';
    }

};

mv.ui = {};
mv.ui.insertMessage = function (oContent,oInput){
    var oLi = document.createElement('li');

    oLi.innerHTML = oInput.value;

    if (oContent.children[0]) {
        oContent.insertBefore(oLi,oContent.children[0]);
    } else {
        oContent.appendChild(oLi);
    };

    oInput.value = '';
};

mv.tool = {};
mv.tool.getElementsByTagName = function(obj, tagname, className){
    var aClassArray = className.split(',');
    var aTagname = obj.getElementsByTagName(tagname);
    var aFindMessage = [];

    for (var i = 0; i < aClassArray.length; i++) {
        for(var j = 0; j < aTagname.length; j++) {
            var aTagClass = aTagname[j].className.split(' ');
            for (var k = 0; k < aTagClass.length; k++) {
                if (aTagClass[k] == aClassArray[i]) {
                    aFindMessage.push(aTagname[j]);
                    break; // 只要找到一个相符的就可以结束当前循环
                }
            }
        }

    }

    return aFindMessage;
};