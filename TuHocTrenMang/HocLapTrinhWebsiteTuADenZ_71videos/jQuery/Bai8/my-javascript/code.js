// JavaScript Document
$(document).ready(function(e) {
	$('#my-dialog').dialog({
		autoOpen: false,
		show: {effect:"blind",duration:1000},
		hide: {effect:"explode",duration:1000},
		width:400, height:"auto", resizable:false,
		modal:true,
		buttons:{
			"Đồng ý":function(){
				$("#msg").html('Bạn đã đồng ý. Bấm hủy bỏ để đóng');
			},
			"Hủy bỏ":function(){
				$(this).dialog("close");
			}
		}
	});  
	
});

function OpenDialog(){
	$('#my-dialog').dialog("open");
}
