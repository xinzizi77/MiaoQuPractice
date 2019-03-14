window.onload = function (){
    mv.app.slide();
    mv.app.keyTittle();
    mv.app.skipTop();
};

var mv = {};

mv.app = {};
mv.app.slide = function (){
    var oSlide = document.getElementById('slideCenter');
    var oLeft = oSlide.getElementsByClassName('left')[0];
    var oRight = oSlide.getElementsByClassName('right')[0];
    var height = parseInt(getStyle(oLeft, 'height'));

    change();
    window.onscroll = function (){
        change();
    }
    
    function change( ) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clintHeight = document.documentElement.clientHeight;

        oLeft.style.top = scrollTop + ((clintHeight - height) / 2) + 'px';
        oRight.style.top = scrollTop + ((clintHeight - height) / 2) + 'px';

    }

};

mv.app.keyTittle = function (){
    var oKeyTitle = document.getElementById('keyTitle');
    var aSpan = oKeyTitle.getElementsByTagName('span');
    var aTitle = [];

    for (var i = 0; i < aSpan.length; i++) {
        if (aSpan[i].title) {
            var aNew = document.createElement('span');
            aNew.innerHTML = aSpan[i].title;
            aNew.className = 'spanHover';
            aSpan[i].appendChild(aNew);

            aSpan[i].onmousemove = function (){
                this.lastChild.style.display = 'block';
            }

            aSpan[i].onmouseout = function (){
                this.lastChild.style.display = 'none';
            }
        }
    }
};

mv.app.skipTop = function (){
    var oSkipTop = document.getElementById('skipTop');

     oSkipTop.onclick = function (){
        document.documentElement.scrollTop = '0';
        document.body.scrollTop = '0';
     }
};