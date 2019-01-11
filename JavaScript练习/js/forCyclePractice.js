window.onload = function (){
    mv.app.hoverBlock();
    mv.app.autoLi();
    mv.app.autoV();
};

var mv = {};
mv.app = {};
mv.app.hoverBlock = function (){
    var oTypeList = document.getElementById('typeList');
    var aTypeLi = oTypeList.getElementsByTagName('li');
    var aHoverBox =oTypeList.getElementsByClassName('hoverTop');
    var liLength = aTypeLi.length;
    for (let i = 0; i < liLength; i++) {
        aTypeLi[i].onmouseover = function (){
            aHoverBox[i].style.display = 'block';
        }
        aTypeLi[i].onmouseout = function (){
            aHoverBox[i].style.display = 'none';
        }
    }
};

mv.app.autoLi = function (){
    var oAutoLi = document.getElementById('autoLi')
    var oBtn = oAutoLi.querySelector('.btn');
    var oMainBox = oAutoLi.querySelector('.mainbox');
    var aBox = oMainBox.getElementsByTagName('li');
    var content = '';

    oBtn.onclick = function (){
        oMainBox.innerHTML = '';
        content = '';
        for (var i = 0; i < 100; i++) {
            content += '<li>' + i + '</li>' 
        }
        // console.log(aBox)
        oMainBox.innerHTML = content;
        var boxLength = 10;
        var aColor = ['red','yellow','blue','green'];
        for(var i = 0; i < boxLength; i++) {
           for(var j = 0; j < 100/boxLength; j++) {
               console.log(aBox[i*boxLength+j]);
                aBox[i*boxLength+j].style.top = i * 50 + 'px';
                aBox[i*boxLength+j].style.left = j * 50 + 'px';   
                aBox[i*boxLength+j].style.background = aColor[(i*boxLength+j)%4];        
           }
        }
        
    }
};

mv.app.autoV = function (){
    var oAutoV = document.getElementById('autoV');
    var oBtn = oAutoV.querySelector('.btn');
    var oMainBox = oAutoV.querySelector('.mainbox');
    var aBox = oMainBox.getElementsByTagName('li');
    var num = 0;
    oBtn.onclick = function (){
        oMainBox.innerHTML = '';
        for(var i = 0; i < 5; i++) {
            oMainBox.innerHTML += '<li>' + i +'</li>';
        }

        if (num == 0) {
        diractV('left','top',true);
        } else if (num == 1) {
        diractV('top','left',true);
        } else if (num == 2) {
        diractV('left','top',false);
        } else if (num == 3) {
        diractV('top','left',false);
        }
        if (num == 3) {
            num = 0;
        }else{
            num++;
        }
    }

    function diractV (pre,nex,flag){
        for(i=0; i<5; i++) {
            aBox[i].style[pre] = i * 40 + 'px';
            if(flag) {
                if(i < 3) {
                    aBox[i].style[nex] = (2-i) * 40 +'px';
                } else {
                    aBox[i].style[nex] = (i-2) * 40 +'px';
                }
            } else {
                if (i<3) {
                    aBox[i].style[nex] = i*40 + 'px';
                } else {
                    aBox[i].style[nex] = (4-i) * 40 + 'px';
                }
            }
        }
    } 

    

}
