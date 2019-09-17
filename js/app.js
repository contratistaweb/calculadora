
var teclas = document.querySelectorAll('.tecla');
var pantalla = document.getElementById('display');
var operando_a, operando_b, operacion;


function Calculadora() {
	
	//   On/C
	teclas[0].onclick = function(e){
		resetear();
	};
	
	//   Sign
	teclas[1].onclick = function(e){
		if(pantalla.textContent != '0'){
		pantalla.textContent = pantalla.textContent*(-1);
		}
	};
		//  Mas
	teclas[18].onclick = function(e){
		operando_a = pantalla.textContent;
		limpiar();
		operacion = teclas[18].id;
	};
		//   Menos
	teclas[11].onclick = function(e){
		operando_a = pantalla.textContent;
		limpiar();
		operacion = teclas[11].id;
	};
		//   Por
	teclas[7].onclick = function(e){
		operando_a = pantalla.textContent;
		limpiar();
		operacion = teclas[7].id;
	};
		//   Dividido
	teclas[3].onclick = function(e){
		operando_a = pantalla.textContent;
		limpiar();
		operacion = teclas[3].id;
	};
			//   Igual
	teclas[17].onclick = function(e){
		operando_b = pantalla.textContent;
		igual();
	};
	
		//   Punto
	teclas[16].onclick = function(e){
		if( pantalla.textContent.split(".").length-1 == 0) {
			pantalla.textContent = pantalla.textContent + '.';	
		}else{
			pantalla.textContent = pantalla.textContent ;
	}
	}
	
	// <---------- Numeros ---------->
	//   Cero
	teclas[15].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = pantalla.textContent;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[15].id;
			}
		}
	};
		//   Uno
	teclas[12].onclick = function(e){
		if(pantalla.textContent == '0'){
			pantalla.textContent = teclas[12].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[12].id;
			}
		}
	};
			//   Dos
	teclas[13].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[13].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[13].id;
			}
		}
	};
			//   Tres
	teclas[14].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[14].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[14].id;
			}
		}
	};
			//   Cuatro
	teclas[8].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[8].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[8].id;
			}
		}
	};
			//   Cinco
	teclas[9].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[9].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[9].id;
			}
		}
	};
			//   Seis
	teclas[10].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[10].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[10].id;
			}
		}
	};
				//   Siete
	teclas[4].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[4].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[4].id;
			}
		}
	};
			//   Ocho
	teclas[5].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[5].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[5].id;
			}
		}
	};
			//   Nueve
	teclas[6].onclick = function(e){
		if(pantalla.textContent == '0'){
		pantalla.textContent = teclas[6].id;
		}else{
			if(pantalla.textContent.length < 8){
			pantalla.textContent = pantalla.textContent + teclas[6].id;
			}
		}
	};
	

};
Calculadora();

function limpiar(){
	pantalla.textContent = '';
}

function resetear(){
	pantalla.textContent = '0';
	operando_a = '0';
	operando_b = '0';
	operacion = ''
}


function igual(){
	var res = 0
	
	switch(operacion){
		case 'mas':
			res = parseFloat(operando_a) + parseFloat(operando_b);
			break;
			case 'menos':
			res = parseFloat(operando_a) - parseFloat(operando_b);
			break;
			case 'por':
			res = parseFloat(operando_a) * parseFloat(operando_b);
			break;
			case 'dividido':
			res = parseFloat(operando_a) / parseFloat(operando_b);
			break;
									}
	
	if(res.length < 8){
			pantalla.textContent = res;
		}else{
			var ent = res.toFixed().length;
			pantalla.textContent = res.toFixed(8 - ent);
		}
	return(pantalla.textContent);
};
	
