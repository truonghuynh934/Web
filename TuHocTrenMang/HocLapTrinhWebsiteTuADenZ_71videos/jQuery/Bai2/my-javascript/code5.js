// JavaScript Document

// chờ tài liệu tạo xong
$(document).ready(function() {
    
	// Lệnh trong đây chỉ chạy khi tài liệu đã tạo xong
	// Cài đặt sự kiện 1
	document.getElementById('btb1').onclick = function(){
		$('.btb').wrap('<div class="Wrap"><p></p></div>');
	}
	
	// Cài đặt sự kiện 2
	document.getElementById('btb2').onclick = function(){
		// gán không cần alert
		$('.btb').wrapAll('<div class="Wrap"><p></p></div>');		
	}
	
	// Cài đặt sự kiện 3
	document.getElementById('btb3').onclick = function(){
		$('.btb').wrapInner('<div class="Wrap"><p></p></div>');
	}
	
	// Cài đặt sự kiện 4
	document.getElementById('btb4').onclick = function(){
		$("<div style='background-color:yellow'>123</div>").insertBefore('#div1');		
	}

});