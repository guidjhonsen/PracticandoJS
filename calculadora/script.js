//para alidar numeros

function solonumeros(e){
	key=e.keyCode || e.which;
	teclado=String.fromCharCode(key);
	numeros="0123456789";
	especiales="8-37-39-46";
	tecla_especial=false;

	for (var i in especiales) {
		if (key==especiales[i]) {
			tecla_especial=true;
		}
	}
	if(numeros.indexOf(teclado)==-1 && !tecla_especial){
		return false;
	}
}

//para asignar cada valor

function retornar(num){
	var anterior=document.fo.valores.value;//?
	document.getElementById("valores").value=anterior+num;
}

//eliminar el ultiomo caracter

function eliminar(){
	var anterior=document.fo.valores.value;
	var nuevoValor=anterior.substring(0,anterior.length-1);
	document.getElementById("valores").value=nuevoValor;
}

//
function eliminarTodo(){
	document.fo.valores.value="";
}
//para validar los signos

function comprobar(num){
	var anterior=document.fo.valores.value;
	if(anterior==""){
		document.fo.valores.value="";
	}else{
			var anterior = document.fo.valores.value;
			document.getElementById("valores").value=anterior+num;
			esto=document.fo.valores.value;

			record=0;
			igual=1;
			var letrarecord;
			var b=0;
			var letra="";
		}
	for (a=1;a<esto.length; a++){
		if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" ||esto.charAt(a)=="/") {
			igual=igual+1;
			letra=esto.charAt(a);
		}
		else{
			if(igual>record){
				record=igual;
				letraRecord=letra;
			}
			b=a;
		}
		if(igual>record){
			record=igual;
			letraRecord=letra;
		}
		if(record>2){
			var anterior = esto;
			var nuevoValor = anterior.substring(0,anterior.length-1);
			document.getElementById("valores").value=nuevoValor;
			record=0; b=0; igual=1; letra=""; letraRecord="";
		}
	}
}


//realizar operaciones matematicas
function calcular(){
	var resultado=eval(document.fo.valores.value);
	document.fo.valores.value=resultado;
}