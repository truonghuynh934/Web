/*
function HocSinh(name, age, _class){
	this.NAME = name;
	this.AGE = age;
	this.CLASS = _class;
	this.FULL_INFORMATION = function(){
		return this.NAME + ', ' + this.AGE + ' tuổi, học lớp' + this.CLASS;
	}
}
var nguyenvana = new HocSinh("Nguyễn Văn A", 17,"12A7");
alert(nguyenvana.FULL_INFORMATION());	*/

function TruongPhong(name, age){
	this.NAME = name;
	this.AGE = age;
	this.HELLO = function(){
		alert("Chào sếp ! :) ");
	}
}

function GiamDoc(name, age){
	this.NAME = name;
	this.AGE = age;
	this.TRUONG_PHONG_KY_THUAT = new TruongPhong("Đặng Văn Lel",30);
}

var gd = new GiamDoc("Nguyễn Văn Sếp", 40);
gd.TRUONG_PHONG_KY_THUAT.HELLO();
