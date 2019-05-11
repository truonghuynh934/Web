// JavaScript Document

// chờ tài liệu tạo xong
$(document).ready(function() {
    
	// Lệnh trong đây chỉ chạy khi tài liệu đã tạo xong
	// Cài đặt sự kiện 1
	document.getElementById('btb1').onclick = function(){
		$('#div1').append("<b>Nội dung in đậm mới</b>");		
	}
	
	// Cài đặt sự kiện 2
	document.getElementById('btb2').onclick = function(){
		// gán không cần alert
		$('#div1').prepend("<b>Nội dung in đậm mới 1111111</b><br />");		
	}
	
	// Cài đặt sự kiện 3
	document.getElementById('btb3').onclick = function(){
		$("<b>Nội dung in đậm mới</b>").appendTo('#div1');		
	}
	
	// Cài đặt sự kiện 4
	document.getElementById('btb4').onclick = function(){
		$("<b>Nội dung in đậm mới 1111111</b><br />").prependTo('#div1');		
	}

});