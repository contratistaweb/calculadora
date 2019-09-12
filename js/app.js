var teclas = document.getElementsByClassName('tecla')
var pantalla = document.getElementById('display')
var operando_a, operando_b, operacion;

function Calculadora() {
	//cero
	teclas['15'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '0';
		}else{
			pantalla.textContent = pantalla.textContent + '0';
		}
		
	}
	//uno
	teclas['12'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '1';
		}else{
			pantalla.textContent = pantalla.textContent + '1'
		}
		
	}
	//dos
	teclas['13'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '2';
		}else{
			pantalla.textContent = pantalla.textContent + '2'
		}
	}
	//tres 
	teclas['14'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '3';
		}else{
			pantalla.textContent = pantalla.textContent + '3'
		}
	}
	//cuatro
	teclas['8'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '4';
		}else{
			pantalla.textContent = pantalla.textContent + '4'
		}
	}
	//cinco
	teclas['9'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '5';
		}else{
			pantalla.textContent = pantalla.textContent + '5'
		}
	}
	//seis
	teclas['10'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '6';
		}else{
			pantalla.textContent = pantalla.textContent + '6'
		}
	}
	//siete
	teclas['4'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '7';
		}else{
			pantalla.textContent = pantalla.textContent + '7'
		}
	}
	//ocho
	teclas['5'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '8';
		}else{
			pantalla.textContent = pantalla.textContent + '8'
		}
	}
	//nueve
	teclas['6'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '9';
		}else{
			pantalla.textContent = pantalla.textContent + '9'
		}
	}
	// punto
	teclas['16'].onclick = function(e){
		if(pantalla.textContent == '0'){
			pantalla.textContent = pantalla.textContent + '.'
		}
		if(pantalla.textContent == '.'){
			pantalla.textContent = pantalla.textContent
		}
	}
	// menos
	teclas['1'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '-' + pantalla.textContent
		}else{
			pantalla.textContent = pantalla.textContent*(-1)
		}
	}
	// On/C
	teclas['0'].onclick = function(e){
		resetear();
	}
	//suma
	teclas['18'].onclick = function(e){
		operando_a = pantalla.textContent;
		operacion = '+';
		limpiar();
	}
	//resta
	teclas['11'].onclick = function(e){
		operando_a = pantalla.textContent;
		operacion = '-';
		limpiar();
	}
	//multiplicacion
	teclas['7'].onclick = function(e){
		operando_a = pantalla.textContent;
		operacion = '*';
		limpiar();
	}
	//division
	teclas['3'].onclick = function(e){
		operando_a = pantalla.textContent;
		operacion = '/';
		limpiar();
	}
	//igual
	teclas['17'].onclick = function(e){
			operando_b = pantalla.textContent;
			resultado();
	}
}

function limpiar(){
	pantalla.textContent = '';
}

function resetear(){
	pantalla.textContent = '0';
	operando_a = '';
	operando_b = '';
	operacion = ''
}

function resultado(){
	var res = 0
	
	switch(operacion){
		case '+':
			res = parseFloat(operando_a) + parseFloat(operando_b);
			break;
			case '-':
			res = parseFloat(operando_a) - parseFloat(operando_b);
			break;
			case '*':
			res = parseFloat(operando_a) * parseFloat(operando_b);
			break;
			case '/':
			res = parseFloat(operando_a) / parseFloat(operando_b);
			break;
									}
	resetear();
	pantalla.textContent = res.toPrecision(8);
}

	Calculadora();
