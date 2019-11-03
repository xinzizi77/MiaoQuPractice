(function () {
    var oAbout = document.getElementById('aboutContent');
    var oLeft = oAbout.getElementsByClassName('left')[0];
    var oIntro = document.getElementById('intro');
    var oItemList = document.getElementById('itemList');
    var aLi = oItemList.getElementsByTagName('li');

    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 350) {
            doMove(oLeft, 'left', 50, 0);
            doMove(oIntro, 'right', 50, 0);
        }

        if (scrollTop >= 600) {
            aLi[0].className = 'scaleItem';
            aLi[0].style.transform = 'scale(1)';
            setTimeout(function () {
                aLi[1].className = 'scaleItem';
                aLi[1].style.transform = 'scale(1)';
                setTimeout(function () {
                    aLi[2].className = 'scaleItem';
                    aLi[2].style.transform = 'scale(1)';
                    setTimeout(function () {
                        aLi[3].className = 'scaleItem';
                        aLi[3].style.transform = 'scale(1)';
                    }, 250);
                }, 250);
            }, 250);
        }
    }
})();

