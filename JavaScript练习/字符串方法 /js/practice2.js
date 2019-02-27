window.onload = function (){
    mv.app.moveText();
};

var mv = {};

mv.app = {};
mv.app.moveText = function (){
    var oContent = document.getElementById('input_text');
    var oBtn = document.getElementById('btn');
    var oPre = document.getElementById('pre_number');
    var oNext = document.getElementById('all_number');
    var oBar = document.getElementsByClassName('bar_list')[0];
    var aBarList = oBar.getElementsByTagName('li');
    var oShowWrap = document.getElementById('right_wrapper');
    var timer = null;

    oBtn.onclick = function (){
        var content = oContent.value;
        var oPreLi = aBarList[0];
        timer = null;
        oNext.innerHTML = content.length;
        oShowWrap.innerHTML = '';

        if(oContent.value){
            opacityFunction(oBar,-10,100);
        }

        timer = setInterval(function(){
            var length =parseInt(oShowWrap.innerHTML.length);
            oPre.innerHTML = length;
            if (!oContent.value) {
                clearInterval(timer);
                oPreLi.style.background = 'rgb(228, 165, 28)';
                
            } else {
                oShowWrap.innerHTML += content[0];
                content = content.substr(1);
                oContent.value = content;

                oPreLi.style.background = 'rgb(228, 165, 28)';
                aBarList[length%8].style.background = 'red';
                oPreLi = aBarList[length%8];

                oBar.style.opacity = 1;
                opacityFunction(oBar,10,0);
            }

           
        },100);

    };

    function opacityFunction(obj, dir, target, endFn) {

        clearInterval(obj.opacity);
        obj.speed = parseInt(getStyle(obj,'opacity'))*100;
        obj.opacity = setInterval(function () {

            obj.speed -= dir;
            obj.style.opacity = obj.speed / 100;
            obj.style.filter = 'alpha(opacity:' + obj.speed + ')';
        console.log(obj);
            if (obj.speed == target) {
                clearInterval(obj.opacity);
                endFn && endFn();
            }
        }, 100);

    };

    function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }


};