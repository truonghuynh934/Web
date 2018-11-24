
//var JSON_str = '{"nAme":"Đặng Văn Lel","age":30,"more_infor":{"id":"123","message":"Hello World"}}';
var JSON_str = '{"nAme":"Đặng Văn Lel","age":30,"more_infor":[125,"ABC",{"id":"Đây là ID"}]}';
var JSON_obj = JSON.parse(JSON_str);

//JSON_obj.nAme = "HIHI";
//var JSON_str_2 = JSON.stringify(JSON_obj);
//alert(JSON_str_2);

//alert(JSON_obj.more_infor.message);

alert(JSON_obj.more_infor[2].id);