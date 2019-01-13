window.onload = function (){
    mv.app.findAllNum();
    mv.app.changeNum();
    mv.app.positionNan();
    mv.app.qqNumber();
};

var mv = {};

mv.app = {};

var arr = [ '100px', 'abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, null, document, [], true, '200px'-30,'23.45元', 5, Number('abc'), function(){ alert(3); }, 'xyz'-90 ];
var lengthArr = arr.length;

mv.app.findAllNum = function (){
    var oAllNum = document.getElementById('allNum');

    for (var i = 0; i < lengthArr; i++) {
        if ( typeof(arr[i]) === 'number' && (arr[i] || arr[i] == 0) ) {
        oAllNum.innerHTML += arr[i] + '   ';
        }
    }
};

mv.app.changeNum = function (){
    var oChangeNum = document.getElementById('changeNum');
    var oMaxNum = document.getElementById('maxNum');
    var aAllVaule = [];

    for ( var i = 0; i < lengthArr; i++) {
        if ( typeof(parseFloat(arr[i])) === 'number' && (parseFloat(arr[i]) || parseInt(arr[i]) == 0)) {
            oChangeNum.innerHTML += arr[i] + '   ';
            aAllVaule.push(parseFloat(arr[i]));
        }
    }

    var max = aAllVaule[0];
    for (var i = 0; i < aAllVaule.length; i++) {
        if ( max < aAllVaule[i]) {
            max = aAllVaule[i];
        }
    }
    oMaxNum.innerHTML = max;
};

mv.app.positionNan = function (){
    var oPosition = document.getElementById('nanPosition');

    for( var i = 0; i < lengthArr; i++) {
        if ( !arr[i] && arr[i]!=0 && arr[i] != undefined){
            oPosition.innerHTML += i + '  ';
        }
    }
}

mv.app.qqNumber = function (){
    var oText = document.getElementById('text');
    var oBtn = document.getElementById('btn');
    var oResult = document.getElementById('result');

    oBtn.onclick = function (){
        oResult.innerHTML = '';
        if (oText.value == '') {
            oResult.innerHTML = '你还没有输入任何内容 ~ ~ ~';
        } else if ( isNaN(oText.value) ) {
            oResult.innerHTML = '你输入的不是数字 ~ ~ ~'
        } else if ( oText.value.charAt(0) == '0'){
            oResult.innerHTML = '你的QQ号前面不能为0 ~ ~ ~'
        } else if (oText.value.length <= 5 || oText.value.length >10) {
            oResult.innerHTML = '你的QQ号应该在6-10位 ~ ~ ~'
        } else {
            oResult.innerHTML = '你的QQ号正确！'
        }
    }
}