// JavaScript Document

// chờ toàn bộ tài liệu đã tải xong và sẵn sàng
$(document).ready(function(e) {
	// code trong khu vực này chỉ chạy khi tài liệu đã sẵn sàng
	$("#image_id").click(function (){
		ChangeImage();
	});
});

var status = 1;

function ChangeImage(){
	$("#image_id").stop(true);
	if (status == 1){
		status = 2;
		SizeDown();
	}else{
		status = 1;
		SizeUp();
	}
}

// thu nhỏ
function SizeDown(){
	$("#image_id").animate(
		{
			width:"100px",
			opacity: 0.2
		}
		, 3000
		,'swing'
		,ChangeImage
	);
}

// phóng lớn
function SizeUp(){
	$("#image_id").animate(
		{
			width:"500px",
			opacity: 1
		}
		, 3000
		,'swing'
		,ChangeImage
	);
}

