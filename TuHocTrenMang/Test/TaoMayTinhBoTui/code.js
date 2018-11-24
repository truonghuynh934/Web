// Chúng ta có 4 nhóm button
// Nhóm 1: số (bao gồm phím . và +/-)
// Nhóm 2: phép tính (+ - * / %)
// Nhóm 3: xóa (< CE)
// Nhóm 4: =

// Chúng ta có 2 phím đặc biệt: % =

// Quy ước cách thao tác
/*
|| Quy ước nhập phép tính: khi bấm + mà ngay sau đó bấm - thì tính là -
|| Quy ước %: Khi bấm % thì trước đó phải là phép tính dạng a/b ngược lại kết quả luôn là 0
|| Quy ước ưu tiên: 1 (nhân - chia) 2 (cộng - trừ)
|| Quy ước cùng ưu tiên: ưu tiên bên trái sang phải
*/
/* 
	Nhập: 1 + 15 * 2 + 6 / 3 + 2 * 2
	
	Mảng số: 					Mảng phép tính:	
			0 = 1				0 = +
			1 = 15				1 = *
			2 = 2				2 = +
			3 = 6				3 = /
			4 = 3				4 = +
			5 = 2				5 = *
			6 = 2
	---------------------------------------------		
	Bước 1: tính các giá trị của * hoặc / có trong biểu thức. Sau đó lưu lại bên trong 2 mảng		
	
	Tính *
	Mảng số: 					Mảng phép tính:	
			0 = 1				0 = +
			1 = 30				
								1 = +
			2 = 6				2 = /
			3 = 3				3 = +
			4 = 2				4 = *
			5 = 2
	Tính /
	Mảng số: 					Mảng phép tính:	
			0 = 1				0 = +
			1 = 30				1 = +
			2 = 2				2 = +
			3 = 2				3 = *
			4 = 2
	Tính *
	Mảng số: 					Mảng phép tính:	
			0 = 1				0 = +
			1 = 30				1 = +
			2 = 2				2 = +
			3 = 4							
			
*/
// đổi dấu
var doi_dau = false;

// số phép tính ưu tiên tìm thấy
var uu_tien = 0;
// mảng ghi nhớ các số hạng
var mang_so_index = 0;
var mang_so = new Array();

// mảng ghi nhớ phép tính
var mang_pt_index = 0;
var mang_pt = new Array();

/********CÀI ĐẶT SỰ KIỆN********/
// nội dung đang có
var str_ketqua_old ='';
// phím mới
var phim_moi ='';

// vừa bấm phép tính
var doi_phep_tinh = false;

function ClickButton(obj){
	//object kết quả
	var ketqua = document.getElementById('ketqua');
	
	if (str_ketqua_old =='' && phim_moi ==''){
		str_ketqua_old = ketqua.value;
	}
	
	// chuỗi hiện tại của kết quả
//	var str_ketqua_old = ketqua.value;
	if (str_ketqua_old=='0'){
		str_ketqua_old ='';
	}
	
	// phím mới
	//var phim_moi = '';
	
	//html của phím bấm
	var type = obj.innerHTML;
	
	// Nhóm số 
	if (type =='0' ||
		type =='1' ||
		type =='2' ||
		type =='3' ||
		type =='4' ||
		type =='5' ||
		type =='6' ||
		type =='7' ||
		type =='8' ||
		type =='9' ||
		type =='+/-' ||
		type =='.')
	{
		doi_phep_tinh = false;
		// đổi dấu
		if (type =='+/-'){
			// đổi từ - thành +
			if (doi_dau){
				doi_dau = false;
				phim_moi = phim_moi.substring(1);
			}else{ // đổi từ + thành -
				doi_dau = true;
				phim_moi='-'+phim_moi;
			}
		}
		// số
		else{
			phim_moi += type;
		}
		// Thay đổi hiển thị
		ketqua.value = str_ketqua_old + phim_moi;
		
	}
	// nhóm phép tính + - * /
	else if(
		type =='+' ||
		type =='-' ||
		type =='x' ||
		type =='/')
	{
		// trước đó có bấm 1 phép tính
		if (doi_phep_tinh){
			mang_pt[mang_pt_index-1] = type;
			// xử lí hiển thị
			ketqua.value = ketqua.value.substring(0,ketqua.value.length-1) + type;
		}
		// chưa có bấm phép tính
		else{
			mang_so[mang_so_index] = parseFloat(phim_moi);
			mang_so_index++;
		
			mang_pt[mang_pt_index] = type;
			mang_pt_index++;
			// xử lí hiển thị
			ketqua.value = ketqua.value + type;
		}
		// ghi nhớ đã bấm phím phép tính
		doi_phep_tinh=true;
		// đổi giá trị 2 chuỗi cơ bản về rỗng
		str_ketqua_old ='';
		phim_moi='';
	}
	// nhóm tính kết quả
	else if (type == '=' || type == '%')
	{
		if (phim_moi!=''){
				mang_so[mang_so_index] = parseFloat(phim_moi);
		}
		// dấu =
		if (type == '='){
			// gọi hàm tính kq
		}
		// dấu %
		else
		{
			// gọi hàm tính %
		}
	}
	// CE
	else if(type == 'CE')
	{
		phim_moi = '';
		// thay đổi hiển thị
		ketqua.value = str_ketqua_old + phim_moi;
	} 
	// phím xóa 1 ký tự
	else
	{
		if (phim_moi.length > 1){
			phim_moi = phim_moi.substring(0, phim_moi.length-1);
		}else{
			phim_moi = '';
		}
		// thay đổi hiển thị
		ketqua.value = str_ketqua_old + phim_moi;		
	}
	// Log xem
	console.log(mang_so);
	console.log(mang_pt);
}
