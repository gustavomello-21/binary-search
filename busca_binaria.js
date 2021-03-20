const functions = require('./functions.js');
const TAMANHO = 1000000;
let array = functions.gerar_array(10000);

let valor = 1024;

let start = new Date();
for(let i = 0; i<TAMANHO; i++){
	busca_binaria();
}
let time1 = new Date() - start;
console.log("com busca binaria achou o valor de "+valor+" em "+time1);

start = new Date();
for(let i = 0; i<TAMANHO; i++){
	busca_linear();
}
time1 = new Date() - start;
console.log("sem busca binaria achou o valor "+valor+" em "+time1);

function busca_binaria(){
		let max = array.length -1; 
		let min = 0;

		while (min != valor){
		let meio = Math.floor((min+max)/2);
		if (array[meio] == valor){
			return
		}
		else if (array[meio] < valor){
			min = meio;
		}
		else if (array[meio] > valor){
			max = meio;
		}
	}
}

function busca_linear(){
	for (var i = 0; i < array.length -1 ; i++){
		if (array[i] == valor){
			return;
		}
	}
}

