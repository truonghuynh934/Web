
// Hàm có tham số trả về
function Chia(a,b){
	if (b==0){
		throw "Không thể có phép chia cho 0";
	}
	var t = a / b;
	return t;
}

// đây là chỗ chạy đầu tiên
try{
	var kq = Chia(2,0);
	alert("Kết quả: " + kq);
}catch(e){
	alert(e);
}
	alert('A');