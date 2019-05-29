// JavaScript Document

// tương tự như sự kiện onload của thẻ <body>, đảm bảo khi chạy những code trong đây thì toàn bộ thành phần trong html
// đã có hết rồi
$(document).ready(function(e) {
	
	// RESIZABLE
	$("#Resizable_1").resizable({
		
	});
	$("#Resizable_2").resizable({
//		alsoResize: "#Resizable_1",
		 animate:true,
		 ghost:true
	});	
	
	// SORTABLE
	$("#MySortable").sortable({
		connectWith:"#MySortable2"
	});
	
	$("#MySortable2").sortable({
		connectWith:"#MySortable",
		activate: function(){
			$("#MySortable2 li").css("background-color","green");
		},
		deactivate: function(){
			$("#MySortable2 li").css("background-color",""); // xóa background
		}
	});	
	
	// SELECTABLE
	$("#List1").selectable({
		filter:".A",
		selected: function(){
			var data = "";
			// duyệt qua từng phần tử, vì cái hàm dưới trả về một danh sách (mỗi phần tử là một thẻ đã được chọn)
			$("#List1 .ui-selected").each(function() {
                data += " ; " + $(this).attr("data");
            });
			alert(data);
		}
	});
});