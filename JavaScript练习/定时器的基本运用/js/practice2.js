window.onload = function (){
    mv.app.menuTime();
};

var mv = {};
mv.app = {};
mv.app.menuTime = function (){
    var oMainList = document.getElementById('mainList');
    var aH4 = oMainList.getElementsByTagName('h4');
    var aSubMenu = oMainList.getElementsByClassName('subMenu');
    var timer = null;

    for (var i = 0; i < aH4.length; i++) {
        aH4[i].index = i;
        aSubMenu[i].index = i;
        aH4[i].onmouseover = function (){
            for (var i = 0; i < aH4.length; i++) {
                aH4[i].className = '';
                aSubMenu[i].style.display = 'none';
            }
            this.className = 'active';
            aSubMenu[this.index].style.display = 'block';
        }

        aSubMenu[i].onmouseleave = function (){
            var index = this.index;
            timer = setTimeout(function(){
                aH4[index].className = '';
                aSubMenu[index].style.display = 'none'; 
            },1000)
        }
    }
}