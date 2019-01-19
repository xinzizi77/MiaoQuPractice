
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
            clearInterval( obj.timer );
            
			endFn && endFn();
			
		}
		
	}, 30);
}

function shake ( obj, attr, endFn ) {
	console.log(obj);
	var pos = obj.pos;		
	
	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
	var timer = null;
		
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
			endFn && endFn();
		}
	}, 50);
}

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

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }