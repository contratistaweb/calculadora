var pantalla = document.getElementById('display');
var num_a, num_b, operacion;
var teclas = document.querySelectorAll('.teclado .tecla');


	for(var i=0;i<=teclas.length-1;i++){
		teclas[i].addEventListener("click", function(numeros){
        var x = numeros.target;
       // console.log(
					if(x.id <= 9){
					pantalla.textContent = x.id;
							}else{
					pantalla.textContent = '';
				};//);
    });
};


function resetear(){
	pantalla.textContent = '0';
	num_a = '0';
	num_b = '0';
	operacion = ''
}

function limpiar(){
	pantalla.textContent = '';
}

function igual(){
	var res = 0
	
	switch(operacion){
		case 'mas':
			res = (num_a) + (num_b);
			break;
			case 'menos':
			res = (num_a) - (num_b);
			break;
			case 'por':
			res = (num_a) * (num_b);
			break;
			case 'dividido':
			res = (num_a) / (num_b);
			break;
			case 'raiz':
			res = 0;
			break;
									}
	pantalla.textContent = res
	};

Calculadora();
function Calculadora() {
}







	/*
	//   On/C
	teclas[0].onclick = function(e){
		resetear();
	};
	
	//   Sign
	teclas[1].onclick = function(e){
		if(pant.textContent != '0'){
		pant.textContent = pant.textContent*(-1);
		}
	};
		//  Mas
	teclas[18].onclick = function(e){
		num_a = pant.textContent;
		limpiar();
		operacion = teclas[18].id;
	};
		//   Menos
	teclas[11].onclick = function(e){
		num_a = pant.textContent;
		limpiar();
		operacion = teclas[11].id;
	};
		//   Por
	teclas[7].onclick = function(e){
		num_a = pant.textContent;
		limpiar();
		operacion = teclas[7].id;
	};
		//   Dividido
	teclas[3].onclick = function(e){
		num_a = pant.textContent;
		limpiar();
		operacion = teclas[3].id;
	};
			//   Igual
	teclas[17].onclick = function(e){
		num_b = pant.textContent;
		igual();
	};
	
		//   Punto
	teclas[16].onclick = function(e){
		if(pant.textContent == ""){
				pant.textContent = pant.textContent + '0.';
			}else{
				if( pant.textContent.split(".").length-1 == 0) {
			pant.textContent = pant.textContent + '.';
				}else{
					pant.textContent = pant.textContent ;
				}
			}
	}
	// <---------- Numeros ---------->
	//   Cero
	teclas[15].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = pant.textContent;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[15].id;
			}
		}
	};
		//   Uno
	teclas[12].onclick = function(e){
		if(pant.textContent == '0'){
			pant.textContent = teclas[12].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[12].id;
			}
		}
	};
			//   Dos
	teclas[13].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[13].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[13].id;
			}
		}
	};
			//   Tres
	teclas[14].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[14].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[14].id;
			}
		}
	};
			//   Cuatro
	teclas[8].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[8].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[8].id;
			}
		}
	};
			//   Cinco
	teclas[9].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[9].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[9].id;
			}
		}
	};
			//   Seis
	teclas[10].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[10].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[10].id;
			}
		}
	};
				//   Siete
	teclas[4].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[4].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[4].id;
			}
		}
	};
			//   Ocho
	teclas[5].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[5].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[5].id;
			}
		}
	};
			//   Nueve
	teclas[6].onclick = function(e){
		if(pant.textContent == '0'){
		pant.textContent = teclas[6].id;
		}else{
			if(pant.textContent.length < 8){
			pant.textContent = pant.textContent + teclas[6].id;
			}
		}
	};
	

};
Calculadora();



function resetear(){
	pant.textContent = '0';
	num_a = '0';
	num_b = '0';
	operacion = ''
}


function igual(){
	var res = 0
	
	switch(operacion){
		case 'mas':
			res = parseFloat(num_a) + parseFloat(num_b);
			break;
			case 'menos':
			res = parseFloat(num_a) - parseFloat(num_b);
			break;
			case 'por':
			res = parseFloat(num_a) * parseFloat(num_b);
			break;
			case 'dividido':
			res = parseFloat(num_a) / parseFloat(num_b);
			break;
									}
	cadena = res.length;
	n_ent = res.toFixed().length;
	for(var i=0;i<=8-n_ent-1;i++){
		var dec = i;
	}
	if(cadena-1 <= 8){
		pant.textContent = res;
	}else{
		pant.textContent = res.toFixed(dec);
	}
	pant.textContent = res
	
	};
*/