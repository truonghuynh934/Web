// JavaScript Document

// chờ tài liệu tạo xong
$(document).ready(function() {
    
	// Lệnh trong đây chỉ chạy khi tài liệu đã tạo xong
	var btb = document.getElementById('btbChangeImage');
	btb.onclick = ChangeImage;
});

var CurrentImage = 1;
/*
function ChangeImage(){
	if (CurrentImage==1){
		$('#hinh').attr("src","./my-css/he-mat-troi.jpg");
		CurrentImage = 2;
	}else{
		$('#hinh').attr("src","./my-css/xu-ly-mau.jpg");
		CurrentImage = 1;
	}
} */
function ChangeImage(){
	if (CurrentImage==1){
		$('#hinh').addClass('w2');
		CurrentImage = 2;
	}else if (CurrentImage==2){
		$('#hinh').addClass('w3');
		CurrentImage = 3;
	}else{
		$('#hinh').removeClass('w2').removeClass('w3');
		CurrentImage = 1;
	}
	var current_css_width_value = $('#hinh').css('width');
	alert(current_css_width_value);
} 