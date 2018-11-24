
var obj_CE = document.getElementById('btnCE');
var obj_so = document.getElementByClassName('btnSo');

function CE_Click(){
	obj_CE.setAttribute('value','0');
}

function So_Click(){
	obj_CE.setAttribute('value','1');
}

function DauBang_Clicked(){

}

obj_CE.onClick = CE_Click();
obj_so.onClick = So_Click();