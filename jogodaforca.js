var letra;
var aleatorio;
var palavra;
var tentativa = 0;

function aleatorio_1(){
		document.getElementById('linha_1').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_2').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_3').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_4').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_5').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_6').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_7').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_8').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_9').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_10').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_11').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_12').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_13').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_14').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_15').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_16').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_17').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_18').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_19').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_20').src = "imagens/fundobranco.jpg";
 
     	tentativa = 0;
     	document.getElementById('forca'). src = "imagens/forca.jpg"

    aleatorio = Math.floor((Math.random() * 3) + 1);

if(aleatorio == 1){

    palavra = 'dinamarca';

   		document.getElementById('linha_1').src = "imagens/linha.jpg";
     	document.getElementById('linha_2').src = "imagens/linha.jpg";
     	document.getElementById('linha_3').src = "imagens/linha.jpg";
     	document.getElementById('linha_4').src = "imagens/linha.jpg";
     	document.getElementById('linha_5').src = "imagens/linha.jpg";
     	document.getElementById('linha_6').src = "imagens/linha.jpg";
     	document.getElementById('linha_7').src = "imagens/linha.jpg";
     	document.getElementById('linha_8').src = "imagens/linha.jpg";
     	document.getElementById('linha_9').src = "imagens/linha.jpg";
     	document.getElementById('linha_10').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_11').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_12').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_13').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_14').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_15').src = "imagens/fundobranco.jpg";
	}else if(aleatorio == 2){
		palavra = 'melancia';

    	document.getElementById('linha_1').src = "imagens/linha.jpg";
     	document.getElementById('linha_2').src = "imagens/linha.jpg";
     	document.getElementById('linha_3').src = "imagens/linha.jpg";
     	document.getElementById('linha_4').src = "imagens/linha.jpg";
     	document.getElementById('linha_5').src = "imagens/linha.jpg";
     	document.getElementById('linha_6').src = "imagens/linha.jpg";
     	document.getElementById('linha_7').src = "imagens/linha.jpg";
     	document.getElementById('linha_8').src = "imagens/linha.jpg";
     	document.getElementById('linha_9').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_10').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_11').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_12').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_13').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_14').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_15').src = "imagens/fundobranco.jpg";
     }else if(aleatorio == 3){
		palava = 'rugby';

     	document.getElementById('linha_1').src = "imagens/linha.jpg";
     	document.getElementById('linha_2').src = "imagens/linha.jpg";
     	document.getElementById('linha_3').src = "imagens/linha.jpg";
     	document.getElementById('linha_4').src = "imagens/linha.jpg";
     	document.getElementById('linha_5').src = "imagens/linha.jpg";
     	document.getElementById('linha_6').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_7').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_8').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_9').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_10').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_11').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_12').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_13').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_14').src = "imagens/fundobranco.jpg";
     	document.getElementById('linha_15').src = "imagens/fundobranco.jpg";
     }
}
function imagem_letra(){
	if (aleatorio == 1){
		if (letra == 'd'){
			document.getElementById('linha_1').src = "imagens/d.jpg";
		}
		else if (letra == 'i'){
			document.getElementById('linha_2').src = "imagens/i.jpg";
		}
		else if (letra == 'n'){
			document.getElementById('linha_3').src = "imagens/n.jpg";
		}
		else if (letra == 'a'){
			document.getElementById('linha_4').src = "imagens/a.jpg";
			document.getElementById('linha_6').src = "imagens/a.jpg";
			document.getElementById('linha_9').src = "imagens/a.jpg";
		}
		else if (letra == 'm'){
			document.getElementById('linha_5').src = "imagens/m.jpg";
		}
		else if (letra == 'r'){
			document.getElementById('linha_7').src = "imagens/r.jpg";
		}
		else if (letra == 'c'){
			document.getElementById('linha_8').src = "imagens/c.jpg";
		}
		if (letra!= 'd'&&
			letra!= 'i'&&
			letra!= 'n'&&
			letra!= 'a'&&
			letra!= 'm'&&
			letra!= 'r'&&
			letra!= 'c'){
				tentativa = tentativa + 1;
			if (tentativa == 1){
				document.getElementById('forca').src = "imagens/cabeça.jpg";
				document.getElementById('linha_16').src = "imagens/" + letra + ".jpg";
			}
			else if (tentativa == 2){
				document.getElementById('forca').src = "imagens/corpo.jpg"
				document.getElementById('linha_17').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 3){
				document.getElementById('forca').src = "imagens/braço1.jpg"
				document.getElementById('linha_18').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 4){
				document.getElementById('forca').src = "imagens/braço2.jpg"
				document.getElementById('linha_19').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 5){
				document.getElementById('forca').src = "imagens/pernas.jpg"
				document.getElementById('linha_20').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 6){
				alert('você perdeu');
				aleatorio_1();
			}
		}
	}
		if (aleatorio == 2){
		 if (letra == 'm'){
				document.getElementById('linha_1').src = "imagens/m.jpg"
			}
			else if (letra == 'e'){
				document.getElementById('linha_2').src = "imagens/e.jpg"
			}
			else if (letra == 'l'){
				document.getElementById('linha_3').src = "imagens/l.jpg"
			}
			else if (letra == 'a'){
				document.getElementById('linha_4').src = "imagens/a.jpg"
				document.getElementById('linha_8').src = "imagens/a.jpg"
			}
			else if (letra == 'n'){
				document.getElementById('linha_5').src = "imagens/n.jpg"
			}
			else if (letra == 'c'){
				document.getElementById('linha_6').src = "imagens/c.jpg"
			}
			else if (letra == 'i'){
				document.getElementById('linha_7').src = "imagens/i.jpg"
			}
			if (letra!= 'm'&&
			letra!= 'e'&&
			letra!= 'l'&&
			letra!= 'a'&&
			letra!= 'n'&&
			letra!= 'c'&&
			letra!= 'i'){
				tentativa = tentativa + 1;
			if (tentativa == 1){
				document.getElementById('forca').src = "imagens/cabeça.jpg";
				document.getElementById('linha_16').src = "imagens/" + letra + ".jpg";
			}
			else if (tentativa == 2){
				document.getElementById('forca').src = "imagens/corpo.jpg"
				document.getElementById('linha_17').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 3){
				document.getElementById('forca').src = "imagens/braço1.jpg"
				document.getElementById('linha_18').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 4){
				document.getElementById('forca').src = "imagens/braço2.jpg"
				document.getElementById('linha_19').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 5){
				document.getElementById('forca').src = "imagens/pernas.jpg"
				document.getElementById('linha_20').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 6){
				alert('você perdeu');
				aleatorio_1();
			}
		}
	}
			if (aleatorio == 3){
			  if (letra == 'r'){
				document.getElementById('linha_1').src = "imagens/r.jpg"
			}
			else if (letra == 'u'){
				document.getElementById('linha_2').src = "imagens/u.jpg"
			}
			else if (letra == 'g'){
				document.getElementById('linha_3').src = "imagens/g.jpg"
			}
			else if (letra == 'b'){
				document.getElementById('linha_4').src = "imagens/b.jpg"
			}
			else if (letra == 'y'){
				document.getElementById('linha_5').src = "imagens/y.jpg"
			}
			if (letra!= 'r'&&
			letra!= 'u'&&
			letra!= 'g'&&
			letra!= 'b'&&
			letra!= 'y'){
				tentativa = tentativa + 1;
			if (tentativa == 1){
				document.getElementById('forca').src = "imagens/cabeça.jpg";
				document.getElementById('linha_16').src = "imagens/" + letra + ".jpg";
			}
			else if (tentativa == 2){
				document.getElementById('forca').src = "imagens/corpo.jpg"
				document.getElementById('linha_17').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 3){
				document.getElementById('forca').src = "imagens/braço1.jpg"
				document.getElementById('linha_18').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 4){
				document.getElementById('forca').src = "imagens/braço2.jpg"
				document.getElementById('linha_19').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 5){
				document.getElementById('forca').src = "imagens/pernas.jpg"
				document.getElementById('linha_20').src = "imagens/" + letra + ".jpg"
			}
			else if (tentativa == 6){
				alert('você perdeu');
				aleatorio_1();
				}
			}
		}
	}

function a(){
	letra = 'a';
	imagem_letra();
}
function b(){
	letra = 'b';
	imagem_letra();
}
function c(){
	letra = 'c';
	imagem_letra();
}
function d(){
	letra = 'd';
	imagem_letra();
}
function e(){
	letra = 'e';
	imagem_letra();
}
function f(){
	letra = 'f';
	imagem_letra();
}
function g(){
	letra = 'g';
	imagem_letra();
}
function h(){
	letra = 'h';
	imagem_letra();
}
function i(){
	letra = 'i';
	imagem_letra();
}
function j(){
	letra = 'j';
	imagem_letra();
}
function k(){
	letra = 'k';
	imagem_letra();
}
function l(){
	letra = 'l';
	imagem_letra();
}
function m(){
	letra = 'm';
	imagem_letra();
}
function n(){
	letra = 'n';
	imagem_letra();
}
function o(){
	letra = 'o';
	imagem_letra();
}
function p(){
	letra = 'p';
	imagem_letra();
}
function q(){
	letra = 'q';
	imagem_letra();
}
function r(){
	letra = 'r';
	imagem_letra();
}
function s(){
	letra = 's';
	imagem_letra();
}
function t(){
	letra = 't';
	imagem_letra();
}
function u(){
	letra = 'u';
	imagem_letra();
}
function v(){
	letra = 'v';
	imagem_letra();
}
function w(){
	letra = 'w';
	imagem_letra();
}
function x(){
	letra = 'x';
	imagem_letra();
}
function y(){
	letra = 'y';
	imagem_letra();
}
function z(){
	letra = 'z';
	imagem_letra();
}