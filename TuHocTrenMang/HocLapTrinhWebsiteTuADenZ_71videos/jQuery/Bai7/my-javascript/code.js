// JavaScript Document
function LoadImage(){
	// đảm bảo không có fail nên viết done luôn
	$.ajax("./anhGirl.html")
	.done(function(rs){
		/*
		Chú ý: cái biến rs chứa nội dung của đường link bên trên (./anhGirl.html),
		url có gì thi nó nhận về cái nấy, nguyên cả đống nó nhận về dưới dạng 1 cái biến,
		một cái biến như thế này (rs) và sau đó chén biến vào chỗ GIÁ TRỊ BAN ĐẦU (thẻ
		div có id là #msg và text bên trong là GIÁ TRỊ BAN ĐẦU)
		*/
		// truy cập tới thẻ div có id là msg, đổi html của nó thành html mà do ajax gọi về 
		// nội dung ajax nhận về ở đây là tấm hình
		$("#msg").html(rs);
		// lần đầu chạy bị lỗi do cache, ctrl + F5 mới hết
	});
}