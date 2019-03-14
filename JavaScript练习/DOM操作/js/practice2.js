window.onload = function (){
    mv.app.mainFunc();
};

var mv = {};

mv.app = {};
mv.app.mainFunc = function (){
    var oTab = document.getElementById('tab');
    var aTabLi = oTab.getElementsByTagName('li');
    var oContent = document.getElementById('content');
    var aContentLi = oContent.getElementsByTagName('ul');
    var oWrap = document.getElementById('wrap');
    var oSign = document.getElementById('sign');

    _init();

    aTabLi[0].onclick = function (){
        this.className = 'tabActive';
        aTabLi[1].className = ' ';
        aContentLi[0].style.display = 'block';
        aContentLi[1].style.display = 'none';

    };

    aTabLi[1].onclick = function (){
        this.className = 'tabActive';
        aTabLi[0].className = ' ';
        aContentLi[0].style.display = 'none';
        aContentLi[1].style.display = 'block';
    }

    function _init(){
        for (var i = 0; i < aContentLi.length; i++) {
            for ( var j = 0 ; j < data[i].list.length; j++) {
                var oLi = document.createElement('li');
                oLi.row = i;
                oLi.index = j;
                oLi.innerHTML = '<a href = "#">' + data[i].list[j].title + '</a>';
                aContentLi[i].appendChild(oLi);

                oLi.firstChild.onmouseover = function (){
                    var oContent = data[this.parentNode.row].list[this.parentNode.index];
                    fillContent(oContent);
                    creatSign(this);

                };

                oLi.firstChild.onmouseout = function (){
                    oWrap.style.display = 'none';
                }
            }
        }
    };

    function creatSign(oA) {

        oWrap.style.top = oA.offsetTop + oA.scrollHeight / 2 - 110 +'px';
        oWrap.style.left = oA.offsetLeft + oA.scrollWidth + 14 + 'px';
        oWrap.style.display = 'block';
    };

    function fillContent(oContent) {
        
        oSign.innerHTML = '<h2>' + oContent.company +'</h2><ul><li>职位：'+oContent.position +'</li><li>招聘人数：' + oContent.recruitingNumbers+'</li><li>工作地点：'+oContent.workingLocation+'</li><li>工作经历：'+oContent.workExperience+'</li><li>学历：'+oContent.education+'</li><li>薪资：'+oContent.wage+'</li></ul>';
    }
    
};
