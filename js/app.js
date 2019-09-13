var teclas = document.getElementsByClassName('tecla');
var pantalla = document.getElementById('display');
var operando_a, operando_b, operacion;

function Calculadora() {
	
	//cero
	teclas['15'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '0';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '0';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//uno
	teclas['12'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '1';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '1';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//dos
	teclas['13'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '2';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '2';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//tres 
	teclas['14'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '3';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '3';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//cuatro
	teclas['8'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '4';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '4';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//cinco
	teclas['9'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '5';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '5';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//seis
	teclas['10'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '6';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '6';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//siete
	teclas['4'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '7';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '7';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//ocho
	teclas['5'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '8';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '8';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	//nueve
	teclas['6'].onclick = function(e){
		if(pantalla.textContent=='0'){
			pantalla.textContent = '9';
		}else if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + '9';
		}else{
			if(pantalla.textContent.length = 8){
				pantalla.textContent = pantalla.textContent
			}
		}
	}
	
	// punto Revisar ---------->
	teclas['16'].onclick = function(e){
		if(pantalla.textContent.split(".").length-1 == 1){
			pantalla.textContent = pantalla.textContent ;
		}else{
			pantalla.textContent = pantalla.textContent + '.';
		}
	}
	
	// mas o menos
	teclas['1'].onclick = function(e){
		if(pantalla.textContent == '0'){
			pantalla.textContent = '-' + pantalla.textContent;
		}else{
			pantalla.textContent = pantalla.textContent*(-1);
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
	//igual --> Evaluar resultado para recortarlo
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
	operando_a = '0';
	operando_b = '0';
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
	pantalla.textContent = res
}

	Calculadora();
