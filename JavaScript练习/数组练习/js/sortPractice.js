window.onload = function () {
    mv.app.sortImg();
};

var mv = {};

mv.app = {};
mv.app.sortImg = function () {
    var oOrderBtn = document.getElementById('order');
    var oRandomBtn = document.getElementById('random');
    var oImgList = document.getElementById('imgList');
    var aImg = oImgList.getElementsByTagName('img');
    var aH2 = oImgList.getElementsByTagName('h2');
    var aImgName = ['tv1.jpg', 'tv2.jpg', 'tv3.jpg', 'tv4.jpg', 'tv5.jpg', 'tv6.jpg', 'tv7.jpg', 'tv8.jpg'];
    var aTitle = ['1-大漠谣', '2-天战之白蛇传说', '3-风中奇缘', '4-择天记', '5-锦绣未央', '6-陆贞传奇', '7-孤芳不自赏', '8-招摇'];
    var array = [0, 1, 2, 3, 4, 5, 6, 7];
    var flag = true;

    oOrderBtn.onclick = function () {
        if (flag) {
            array = [0, 1, 2, 3, 4, 5, 6, 7];
            oOrderBtn.innerHTML = '从小到大';
            flag = false;
        }
        else {
            array = [7,6,5,4,3,2,1,0];            
            oOrderBtn.innerHTML = '从大到小';
            flag = true;
        }
        array.reverse();
        changeValue();
    }

    oRandomBtn.onclick = function () {
        array.sort(function ( a, b ) {
            return Math.random() - 0.5;
        });
        changeValue();
    }

    function changeValue(){
        for (var i = 0; i < aImg.length; i++) {
            aImg[i].src = 'img/' + aImgName[array[i]];
            aH2[i].innerHTML = aTitle[array[i]];
        }
    }
};