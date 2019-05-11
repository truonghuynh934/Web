// JavaScript Document

// chờ toàn bộ tài liệu đã tải xong và sẵn sàng
$(document).ready(function(e) {
	// code trong khu vực này chỉ chạy khi tài liệu đã sẵn sàng
    $(window).resize(ResizeHappend);
});

$(window).resize(ResizeHappend);

function ResizeHappend(){
	var x = $(window).width(); // lấy độ rộng sau khi resize
	var y = $(window).height();
	$('#status').html("Trình duyệt rộng " + x + "px và cao " + y + "px");
}