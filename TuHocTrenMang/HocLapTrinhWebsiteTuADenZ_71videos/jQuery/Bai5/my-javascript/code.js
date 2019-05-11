// JavaScript Document

// chờ toàn bộ tài liệu đã tải xong và sẵn sàng
$(document).ready(function(e) {
	// code trong khu vực này chỉ chạy khi tài liệu đã sẵn sàng
	SetupEvent();
});

// Cài đặt sự kiện
function SetupEvent(){
	//Show
	$('#show').click(function (){
		$('#image_id').fadeIn(500, function(){ alert('Đã show'); });
	});
	
	//Hide
	$('#hide').click(function (){
		$('#image_id').fadeOut(500, function(){alert('Đã hide'); });
	});
	
	//Toggle
	$('#change').click(function(){
		$('#image_id').fadeToggle(500);
	});	
	//To x
	$('#ft').change(function(){
		var x = parseFloat($(this).val()); // do nằm trong sự kiện nội tại của nó nên có thể dùng this thay thế cho ft, lấy val của thẻ input
		$('#image_id').fadeTo(500,x);
	});
}
