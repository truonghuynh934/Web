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
var mang_so_max_index = 0;
var mang_so = new Array();

// mảng ghi nhớ phép tính
var mang_pt_max_index = 0;
var mang_pt = new Array();

/********CÀI ĐẶT SỰ KIỆN********/
//object kết quả
var ketqua = document.getElementById('ketqua');

// vừa kết thúc phép tính
var end = false;
	
// nội dung đang có
var str_ketqua_old ='';
// phím mới
var phim_moi ='';

// vừa bấm phép tính
var doi_phep_tinh = false;

// ghi nhớ phép tính cũ nếu có thay đổi phép tính
var phep_tinh_cu = '';

function ClickButton(obj){
	
	if (end){
		ketqua.value ='';
		end =false;
	}
	
	// chuỗi hiện tại của kết quả
	if (str_ketqua_old =='' && phim_moi ==''){
		str_ketqua_old = ketqua.value;
	}
	if (str_ketqua_old=='0'){
		str_ketqua_old ='';
	}
	
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
			// nếu phép tính cũ là ưu tiên nhưng phép tính mới không ưu tiên
			if ((phep_tinh_cu=='x' || phep_tinh_cu=='/') && (type=='+' || type =='-')){
				uu_tien--;
			}
			// nếu phép tính cũ không ưu tiên nhưng phép tính mới có ưu tiên
			else if ((phep_tinh_cu=='+' || phep_tinh_cu=='-') && (type=='x' || type =='/')){
				uu_tien++;
			}
			
			// lưu vào mảng phép tính			
			mang_pt[mang_pt_max_index-1] = type;
			// xử lí hiển thị
			ketqua.value = ketqua.value.substring(0,ketqua.value.length-1) + type;
			
		}
		// chưa có bấm phép tính
		else{
			// ghi nhớ phép tính
			phep_tinh_cu = type;
			// lưu vào mảng số
			mang_so[mang_so_max_index] = parseFloat(phim_moi);
			mang_so_max_index++;
			// lưu vào mảng phép tính
			mang_pt[mang_pt_max_index] = type;
			mang_pt_max_index++;
			// xử lí hiển thị
			ketqua.value = ketqua.value + type;
			
			// cộng số đếm ưu tiên lên
			if (type=='x' || type =='/'){
				uu_tien++;
			}
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
		end = true;
		if (phim_moi!=''){
				mang_so[mang_so_max_index] = parseFloat(phim_moi);
		}
		// dấu =
		if (type == '='){
			// gọi hàm tính kq
			GetValue();
		}
		// dấu %
		else
		{
			// gọi hàm tính %
			GetPercent();
		}
		//reset
		str_ketqua_old ='';
		phim_moi='';
		mang_so = new Array();
		mang_pt = new Array();
		mang_so_max_index = 0;
		mang_pt_max_index = 0;
		uu_tien = 0;
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
	//console.log(mang_so);
	//console.log(mang_pt);
}

// hàm tính %
function GetPercent(){
	mang_pt_max_index--;
	// kiểm tra mảng số chỉ có 2 phần tử và phần tử thứ 2 phải khác 0
	if (mang_so_max_index != 1 || mang_so[1] == 0){
		ketqua.value = '0';
	}
	// Phải có 1 phép tính
	else if(mang_pt_max_index!=0){
		ketqua.value = '0';
	}
	// Phép tính phải là chia	
	else if(mang_pt[0] != '/'){
		ketqua.value = '0';
	}
	// tất cả điều kiện đã vượt qua
	else{
		var _kq = mang_so[0] / mang_so[1] * 100;
		ketqua.value = _kq;
	}
}

// hàm tính giá trị thường
function GetValue(){
	console.log(mang_so);
	console.log(mang_pt);
	mang_pt_max_index--;
	
	// Bước 1: phép tính ưu tiên
	while(uu_tien>0){
		for (var index = 0; index <= mang_pt_max_index; index++){
			if (mang_pt[index]=='x' || mang_pt[index]=='/'){
				// lấy 2 số hạng
				var sh1 = mang_so[index];
				var sh2 = mang_so[index+1];	
				// tính kết quả * hoặc /
				var kqt = 0;
				if (mang_pt[index] == 'x'){
					kqt = sh1 * sh2;
				}else if(sh2==0){
					ketqua.value='0';
				}else{
					kqt = sh1 / sh2;
				}
				// thay thế số hạng
				mang_so[index] = kqt;
				// dồn số hạng
				for (var new_index = index+1; new_index < mang_so_max_index; new_index++){
					mang_so[new_index] = mang_so[new_index+1];
				}
				mang_so_max_index--;
				// xóa bỏ phép tính
				for (var new_index = index; new_index < mang_pt_max_index; new_index++){
					mang_pt[new_index] = mang_pt[new_index+1];
				}
				mang_pt_max_index--;
				
				// xóa ghi nhớ ưu tiên
				uu_tien--;
				console.log(mang_so);
				console.log(mang_pt);
				// ngắt vòng lặp
				break;
			}
		}
	}
	// Bước 2: phép tính thường
	while(mang_so_max_index>0){
		// lấy 2 số hạng
		var sh1 = mang_so[0];
		var sh2 = mang_so[1];
		// tính kết quả
		var kqt = 0;
		if (mang_pt[0]=='+'){
			kqt = sh1 + sh2;
		}else{
			kqt = sh1 - sh2;			
		}
		// thay thế số hạng
		mang_so[0] = kqt;
		// dồn số hạng
		for (var new_index = 1; new_index < mang_so_max_index; new_index++){
			mang_so[new_index] = mang_so[new_index+1];
		}
		mang_so_max_index--;
		// xóa bỏ phép tính
		for (var new_index = 0; new_index < mang_pt_max_index; new_index++){
			mang_pt[new_index] = mang_pt[new_index+1];
		}
		mang_pt_max_index--;
		console.log(mang_so);
		console.log(mang_pt);		
	}
	// in kết quả
	ketqua.value = mang_so[0];
}