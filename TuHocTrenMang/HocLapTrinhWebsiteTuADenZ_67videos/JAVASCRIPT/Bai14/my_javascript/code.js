// NO1 --> NO2.1
/*
var obj= document.getElementById("div1");  // Dùng ID để lấy đối tượng thao tác
var content = obj.innerHTML; // Lấy nội dung của obj
alert(content);  */

/*
// Dùng số nhiều
var objS = document.getElementsByTagName("b");
var content = objS[0].innerHTML;
alert(content);  */

/*
var obj = document.querySelector("#p2.para");
var content = obj.innerHTML;
alert(content);  */

// NO2.2
/*
var obj = document.querySelector("#p2.para");
obj.innerHTML = " ĐÂY LÀ NỘI DUNG MỚI ";   */

// NO3.1 --> NO3.2
/*
var obj = document.getElementById("div1");
obj.setAttribute('class','NewCss');
obj.setAttribute('data-x','12'); // thuộc tính lưu giá trị không có ý nghĩa tác dụng gì hết   */

// NO4.1 --> NO4.3
/*
var obj = document.getElementById("div1");
obj.style.backgroundColor = "red";   */

function BatDauTinh(){
	//	var a = parseInt(document.getElementById("txtA").value); 	// viết tắt
	var objA = document.getElementById("txtA");
	var aStr = objA.value;
	
	var bStr = document.getElementById("txtB").value;
	var cStr = document.getElementById("txtC").value;
	
	// kiểm tra điều kiện
	if (aStr == "" || bStr == "" || cStr == ""){
		alert("Các ô giá trị không được rỗng");
		return;
	} else{
		var a = parseInt(aStr);
		var b = parseInt(bStr);
		var c = parseInt(cStr);	
	
	
		// Tính toán và in kết quả
		var delta = Math.pow(b,2) - 4 * a * c;
		if (a == 0){
			alert("Mời bạn nhập lại giá trị a, a phải khác 0");
			return;
		}
		if (delta < 0){
			alert("Phương trình vô nghiệm");
		}else if (delta == 0){
			var x = -b/(2*a);
			alert("Phương trình có nghiệm kép: x = " + x);
		}else{
			var x1 = (-b-Math.sqrt(delta))/(2*a);
			var x2 = (-b+Math.sqrt(delta))/(2*a);
			alert("Phương trình có 2 nghiệm phân biệt: \nx1 = " + x1 + "\nx2 = " + x2);
		}
	}
}