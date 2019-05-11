// JavaScript Document

// chờ tài liệu tạo xong
$(document).ready(function() {
    
	// Lệnh trong đây chỉ chạy khi tài liệu đã tạo xong
	// Cài đặt sự kiện 1
	document.getElementById('btb1').onclick = function(){
		$('#span1').unwrap();
	}
	
	// Cài đặt sự kiện 2
	document.getElementById('btb2').onclick = function(){
		// gán không cần alert
		$('#div1').replaceWith("<div style='background-color:yellow'>123</div>");		
	}
	
	// Cài đặt sự kiện 3
	document.getElementById('btb3').onclick = function(){
		$("<div style='background-color:green'>ABC</div>").insertAfter('#div1');		
	}
	
	// Cài đặt sự kiện 4
	document.getElementById('btb4').onclick = function(){
		$("<div style='background-color:yellow'>123</div>").insertBefore('#div1');		
	}

});