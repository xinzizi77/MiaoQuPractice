window.onload = function (){
    mv.app.multigroupTab();
};

var mv = {};
mv.app = {};
mv.app.multigroupTab = function (){
    var oPre = document.getElementById('pre');
    var oNext = document.getElementById('next');
    var oLeft = document.getElementById('leftImg');
    var oRight = document.getElementById('rightImg');
    var aDesc = document.getElementsByTagName('h3');
    var aTotal = document.getElementsByClassName('total');
    var aLeftImg = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
    var aRightImg = ['img5.jpg','img6.jpg','img7.jpg'];
    var left = 0, right = 0;
    
    function nowImg (){
        oLeft.src = 'img/' + aLeftImg[left];
        oRight.src = 'img/' + aRightImg[right];
        aDesc[0].innerHTML = '第一组第 ' + (left + 1 )+ ' 张图片';
        aDesc[1].innerHTML = '第二组第 ' + (right + 1) + ' 张图片';
        aTotal[0].innerHTML = left + 1 + ' / ' + aLeftImg.length;
        aTotal[1].innerHTML = right + 1 + ' / '  + aRightImg.length;
    }
    nowImg();

    oNext.onclick = function (){
        left++;
        right++;
        if ( left == aLeftImg.length){
            left = 0;
        }
        if ( right == aRightImg.length){
            right = 0;
        }
        nowImg();
    }
    oPre.onclick = function (){
        left--;
        right--;
        if ( left < 0) {
            left = aLeftImg.length - 1;
        }
        if ( right < 0) {
            right = aRightImg.length - 1;
        }
        nowImg();
    }
    oLeft.onclick = function (){
        left++;
        if ( left == aLeftImg.length){
            left = 0;
        }
        nowImg();
    }
    oRight.onclick = function (){
        right++;
        if ( right == aRightImg.length){
            right = 0;
        }
        nowImg();
    }
}