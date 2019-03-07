window.onload = function (){
    mv.app.mainFunction();
};

var mv = {};

mv.app = {};
mv.app.mainFunction = function () {
    var oStartBtn = document.getElementById('start');
    var oGet = document.getElementById('getScore');
    var oPut = document.getElementById('putScore');
    var oShow = document.getElementById('contentWrap');
    var aImg = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png'];
    var speed = 1;
    var get = put = 0;

    oStartBtn.onclick = function (){
        oStartBtn.innerHTML = '游戏进行中...';
        oStartBtn.disabled = 'disabled';

         circulation();

        function circulation (){
            createImg();
            moveImg(circulation);
        };

        function createImg() {
            oShow.innerHTML += '<img src = "img/'+aImg[Math.round(Math.random()*10)]+ '" style = "position:absolute;top:0;left:' +Math.round(Math.random()*775)+'px" />'
        };

        function moveImg(fn){
            var oShowImg = oShow.getElementsByTagName('img')[0];
            speed += 0.8;
            doMove(oShowImg ,'top',speed, 450,function(){
                put++;
                oPut.innerHTML = '失分：' + put + '分';
                oShow.pos = 0;
                shake(oShow, 'top',function(){
                    oShow.innerHTML = '';
                    if (checkSorce()) {
                        return;
                    }
                    fn && fn();
                })
            });

            oShowImg.onclick = function (){
                clearInterval(oShowImg.timer);
                oShowImg.src = 'img/qq.png';
                get++;
                oGet.innerHTML = '得分：' + get + '分';
                oShowImg.pos = parseInt(getStyle(oShowImg,'top'));
                shake(oShowImg,'top',function(){
                    oShow.innerHTML = '';
                    if (checkSorce()) {
                        return;
                    }
                    fn && fn();

                })
            };

            function checkSorce (){
                if (get == 20) {
                    alert('恭喜过关！');
                    inita();
                    return true;
                } else if (put == 5) {
                    alert('闯关失败，再来一次吧！');
                    inita();
                    return true;
                }
            };

            function inita() {
                get = put = 0;
                oGet.innerHTML = '得分：0分';
                oPut.innerHTML = '失分：0分';
                oStartBtn.innerHTML = '开始游戏';
                oStartBtn.disabled = '';
                speed = 1;
            }
        }
    };
};