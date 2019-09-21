Calculadora();
function Calculadora() {
	var pantalla = document.getElementById('display');
	var num_a, num_b, operacion;
	var teclas = document.querySelectorAll('.teclado .tecla');
	for(var i=0;i<=teclas.length-1;i++){
		teclas[i].addEventListener("click", function(tecla){
			var x = tecla.target;
			if(x.id <= 9){
				if(pantalla.textContent == '0'){
					pantalla.textContent = x.id;
				}else{
					if(pantalla.textContent.length <= 7 ||  pantalla.textContent == '0.'){
						pantalla.textContent = pantalla.textContent + x.id;
					}
				}
			}else{
				if(x.id == 'mas' || x.id == 'menos' || x.id == 'por'  || x.id == 'dividido'){
					operacion = x.id;
					num_a = pantalla.textContent;
					limpiar();
					function limpiar(){
						pantalla.textContent = '';
					}
				}else{
					if(x.id == 'on'){
						resetear();
					}else{
						if(x.id == 'sign'){
							pantalla.textContent = pantalla.textContent*(-1);
						}else{
							if(x.id == 'igual'){
								num_b = pantalla.textContent;
								igual();
							}else{
								if(x.id == 'punto'){
									if(pantalla.textContent == ""){
										pantalla.textContent = pantalla.textContent + '0.';
									}else{
										if(pantalla.textContent.split(".").length-1 == 0) {
											pantalla.textContent = pantalla.textContent + '.';
										}else{
											pantalla.textContent = pantalla.textContent ;
										}
									}
								}
							}
						}
					}
				}
				function resetear(){
					pantalla.textContent = '0';
					num_a = '0';
					num_b = '0';
					operacion = ''
				}
				function igual(){
					var respuesta = '';
					switch(operacion){
						case 'mas':
							respuesta = parseFloat(num_a) + parseFloat(num_b);
							break;
						case 'menos':
							respuesta = parseFloat(num_a) - parseFloat(num_b);
							break;
						case 'por':
							respuesta = parseFloat(num_a) * parseFloat(num_b);
							break;
						case 'dividido':
							respuesta = parseFloat(num_a) / parseFloat(num_b);
							break;
													}
					pantalla.textContent =respuesta
					if(pantalla.textContent.length <= 7){
						pantalla.textContent;
					}else{
						var ent = respuesta.toFixed(0);
						pantalla.textContent = respuesta.toFixed(7 - ent.length);
						// resultado con decimales
					}
				}
			}
			document.getElementById(x.id).animate([
				{ transform: 'scale(0.9)' }, 
				{ transform: 'scale(1)' }
			], { 
				duration: 100,
				iterations: 1
			});
		});
	}
}
