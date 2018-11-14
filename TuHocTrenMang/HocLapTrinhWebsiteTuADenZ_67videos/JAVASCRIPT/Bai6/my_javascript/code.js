
/* Hàm không tham số
function hamDauTien(){
	alert("Hello");
}

hamDauTien();
*/

/* Hàm có tham số
function tong(a,b){
	var tong = a + b;
	alert(tong);
}
tong(1,'2');
*/

// Hàm có tham số trả về
function tong(a,b){
	return a+b;
}

var tong = tong(2,4);
alert(tong);