// JavaScript Document
$(document).ready(function(e) {
	
	// PROGRESSBAR
	// Khởi tạo
	$("#my-prb").progressbar({
		value:false,
		change:function(){
			var c_value = $("#my-prb").progressbar("value");
			$("#my-prb-label").html(c_value + "%");
		},
		complete:function(){
			$("#my-prb-label").html("Đã xong");
		}
	});
	
	// DATE PICKER
	$("#birthday").datepicker({
		dateFormat: "dd/mm/yy",
		minDate:"-10D",
		maxDate:"28/05/2019"
	});
	
	// TOOL TIP
	$("#my-tooltip").tooltip({
		track:true
	});
	
	// ACCORDION
	$("#my-accordion").accordion({
		heightStyle:"content"	
	});
	
	// AUTOCOMPLETE
	var data = ["thư viện lập trình","đặng văn lel","jquery ui","lập trình web"];
	$("#my-autocomplete").autocomplete({
		delay:100,
		source: data
	});
	
	// MENU
	$("#my-menu").menu();
	
});

// xử lý
function StartProgressbar(){
	var c_value = $("#my-prb").progressbar("value") + 1; // đọc giá trị hiện tại và cộng lên 1
	$("#my-prb").progressbar("value", c_value); 	// Lệnh thay đổi % của tiến trình, gán ngược giá trị lên
	if (c_value < 100){
		setTimeout("StartProgressbar()",100);  // sau 100 miligiay thì gọi lại chính nó, đến khi bằng 100 thì thôi
	}
	
	/*
	 đây chỉ là giả lập, quá trình thực thì nó không lấy value của chính thằng này để cộng thêm mà là lấy value
	 của một quá trình khác, vì progressbar đại diện cho 1 quá trình khác (ví dụ quá trình upload 1 file thì có
	 hàm lấy % file đã upload, sau đó lấy % đó gán vào progressbar bằng lệnh này:
	 	$("#my-prb").progressbar("value", c_value); )
	*/
}