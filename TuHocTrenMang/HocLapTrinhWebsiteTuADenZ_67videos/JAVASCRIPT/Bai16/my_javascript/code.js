// cài đặt event cho thẻ div1 và div2
// hàm này được gọi khi html tải xong
function SetupEventForDiv(){
	var obj1 = document.getElementById('div1');
	obj1.onclick = Div1_Clicked;
	obj1.onmouseover = Div1_MouseOver;
	// hàm này được gọi khi rê chuột ra khỏi div1
	obj1.onmouseout = function(){
		var obj = document.getElementById('div1');
		obj.innerHTML = "OUT";
		obj.setAttribute('style','background-color:yellow');
	}
}

// hàm này được gọi khi click lên thẻ div1
function Div1_Clicked(){
	var obj = document.getElementById('div1');
	obj.innerHTML = (new Date()).getSeconds();
	obj.setAttribute('style','background-color:green');
}

// hàm này được gọi khi rê chuột lên div1
function Div1_MouseOver(){
	var obj = document.getElementById('div1');
	obj.innerHTML = "OVER";
	obj.setAttribute('style','background-color:blue');
}