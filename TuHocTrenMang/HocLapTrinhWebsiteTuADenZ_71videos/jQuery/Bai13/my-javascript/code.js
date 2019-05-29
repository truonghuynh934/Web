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
	
	// TAB
	$("#myTabs").tabs({
		collapsible:true
	});
	
	// SPINNER
	$("#mySpinner").spinner({
		min:0,
		max:100,
		step:5,
		stop: function(){
			var vl = $(this).spinner("value");
			$("#SpinnerValue").html(vl);
		}
	});
	
	// SLIDER
	$("#mySlider").slider({
		min:0,
		max:200,
		step:1,
		slide: function(){
			var vl = $(this).slider("value");
			$("#SliderValue1").html(vl)
		}
	});
	$("#mySlider2").slider({
		orientation: "vertical",
		start: function(){
			var vl = $(this).slider("value");
			$("#SliderValue2").html(vl)
		}
	});	
	
	// SELECT MENU 1: định nghĩa lại hàm render selectmenu
	$.widget("custom.selectmenuwithavartar", $.ui.selectmenu,
		{
			_renderItem: function(ul, item){
				// mỗi item là một thẻ <li>
				var li = $("<li>");
				// thêm class đánh dấu disable vào thẻ <li> (nếu có)
				if (item.disabled){
					li.addClass("ui-state-disabled");
				}
				// Mỗi thẻ <li> chứa thẻ <div> làm nội dung
				var wrapper = $("<div>",{text: item.label});
				// Trong thẻ <div> sẽ có TEXT và 1 thẻ <span> làm avartar
				$("<span>",{
					style: item.element.attr("dataStyle"),
					"class": item.element.attr("dataClass") + " ui-icon"
				}).appendTo(wrapper);
				// trả về 1 item sau khi render
				return li.append(wrapper).appendTo(ul);
			}
		}
	);
	// SELECT MENU bước 2: sử dụng
	$("#MySelect").selectmenuwithavartar();
	
	// CHECKBOX RADIO
	$("input.MyCheckboxradioClass").checkboxradio({
	});
	
	// DRAGGABLE
	$("#MyDraggable").draggable({
		/*
		drag: function(){
			$(this).css("background-color","green");
		},
		stop: function(){
			$(this).css("background-color","yellow");
		}	
		*/	
	});
	
	// DROPPABLE
	$("#MyDroppable").droppable({
		accept:"#MyDraggable",
		activate: function(){
			$(this).css("background-color","blue");
		},
		over: function(){
			$(this).css("background-color","yellow");
		},
		out: function(){
			$(this).css("background-color","green");
		},
		drop: function(){
			$(this).css("background-color","#ccc");
		},
		deactivate: function(){
			$(this).css("background-color","");
		}
	});
	
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