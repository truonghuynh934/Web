var bien_a = 5; // đây là biến global
function HamABC(thamso1, thamso2){
	var tong = thamso1 + thamso2 + bien_a;
	return tong;
}

var ketqua = HamABC(5,6);
alert(ketqua);