window.onload = function (){
    mv.app.listExpand();
};

var mv = {};
mv.app = {};
mv.app.listExpand = function (){
    var aH3 = document.querySelectorAll('h3');
    var aFriendList = document.querySelectorAll('.friend');
    var friendLi = [];
    var nowLi;

    //   列表展开
    for (var i = 0; i<aH3.length; i++) {
        aH3[i].index = i;

        aH3[i].onclick = function (){
            for(var i = 0; i<aH3.length; i++) {
                aFriendList[i].style.display = 'none';
                aH3[i].className = '';
            }
            if (nowLi == this) {
                aFriendList[this.index].style.display = 'none';
                this.className = '';
                nowLi = '';
            }else {
                this.className = 'h3Active';
                aFriendList[this.index].style.display = 'block';
                nowLi = this;
            }
        }
    }

    //    获取所有的li
    for (var i = 0; i<aFriendList.length; i++) {
        var aFriendLi = aFriendList[i].getElementsByTagName('li');
        for (var j=0; j<aFriendLi.length; j++) {
            friendLi.push(aFriendLi[j]);
        }
    }

    //    li选中效果
    for(var i=0; i<friendLi.length; i++) {
        friendLi.index = i;
        friendLi[i].onclick = function (){
            for (var i=0; i<friendLi.length; i++) {
            friendLi[i].className = '';
            }
            if (nowLi == this) {
                this.className = '';
                nowLi = '';
            } else {
                this.className = 'liActive';
                 nowLi = this;
            }
        }
    }
};