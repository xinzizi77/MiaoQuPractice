window.onload = function (){
    mv.app.sentMessage();
};
var mv = {};

mv.ui = [];
mv.ui.pushMessage = function (imgUrl,message,direction){
    var oContent = document.querySelector('#content_top');
    var newInfor;
    if (direction == 'left') {
        newInfor = '<img src=img/' + imgUrl +'>' + '<p>' + message + '</p>';
    } else {
        newInfor = '<p>' + message + '</p>' + '<img src=img/' + imgUrl +'>';
    }
    oContent.innerHTML = newInfor + oContent.innerHTML;
    var oImg = oContent.querySelector('img');
    console.log(oContent)
    oImg.className = direction;       

};

mv.app = {};
mv.app.sentMessage = function (){
    var oMessage = document.querySelector('#message');
    var oImgBtn = document.querySelector('#img');
    var oBtn = document.querySelector('#btn');
    var arrImg = ['user1.jpeg','user2.jpeg'];
    var oSwitch = 1;

    oImgBtn.onclick = function (){
        oImgBtn.src = 'img/'+arrImg[oSwitch%2];
        oSwitch++;
    }

    oBtn.onclick = function (){
        if(oSwitch%2) {
            mv.ui.pushMessage(arrImg[0],oMessage.value,'right');
            console.log('女')
        }else {
            mv.ui.pushMessage(arrImg[1],oMessage.value,'left');
            console.log('男')
        }
        oMessage.value = '';
    }
}