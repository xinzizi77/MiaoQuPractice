
//  匀速运动封装
function doMove(obj, attr, dir, target, endFn) {
	dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;

	clearInterval(obj.timer);

	obj.timer = setInterval(function () {

		var speed = parseInt(getStyle(obj, attr)) + dir;			// 步长

		if (speed > target && dir > 0 || speed < target && dir < 0) {
			speed = target;
		}

		obj.style[attr] = speed + 'px';

		if (speed == target) {
			clearInterval(obj.timer);

			endFn && endFn();

		}

	}, 30);
};

//    变速运动封装
function startMove(obj, attr, iTarget, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var iCur = 0;

		if (attr == 'opacity') {
			iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
		} else {
			iCur = parseInt(getStyle(obj, attr));
		}
		var iSpeed = (iTarget - iCur) / 8;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

		if (iCur == iTarget) {
			clearInterval(obj.timer);

			if (fn) {
				fn();
			}

		} else {
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed) / 100;
			} else {
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
	}, 30);
};

//     完美运动框架封装
function perfectMove(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var bStop = true;   //  先假设所有哦值都到了目标点
		for (var attr in json) {
			var iCur = 0;

			if (attr == 'opacity') {
				iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				iCur = parseInt(getStyle(obj, attr));
			}
			var iSpeed = (json[attr] - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			if (iCur != json[attr]) {
				bStop = false;

			}
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed) / 100;
			} else {
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
		if (bStop) {
			clearInterval(obj.timer);

			if (fn) {
				fn();
			}
		}
	}, 30);
};

//      抖动运动封装
function shake(obj, attr, endFn) {
	console.log(obj);
	var pos = obj.pos;

	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
	var timer = null;

	for (var i = 20; i > 0; i -= 2) {
		arr.push(i, -i);
	}
	arr.push(0);

	clearInterval(obj.shake);
	obj.shake = setInterval(function () {
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if (num === arr.length) {
			clearInterval(obj.shake);
			endFn && endFn();
		}
	}, 50);
}

//   透明度运动封装
function opacityFunction(obj, dir, target, endFn) {

	clearInterval(obj.opacity);
	obj.speed = 100;

	obj.opacity = setInterval(function () {

		obj.speed -= dir;
		obj.style.opacity = obj.speed / 100;
		obj.style.filter = 'alpha(opacity:' + obj.speed + ')';

		if (obj.speed == target) {
			clearInterval(obj.opacity);
			endFn && endFn();
		}
	}, 100);

}

//   获取非行间样式函数封装
function getStyle(obj, attr) { return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; }