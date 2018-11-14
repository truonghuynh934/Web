// JavaScript Document
var a = 50;
var b = 6;
var c =7;

var _max = a;

if(_max < b){
	_max = b;
	if (_max < c){
		_max = c;
	}
}else{
	if (_max < c){
		_max = c;
	}
}
alert(_max);