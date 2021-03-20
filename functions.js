function gerar_array(numero_itens){
	let count = 0;
	let itens = [];
	while(count < numero_itens){
			itens.push(count);

		count ++;
	}
	return itens;
}

module.exports = {gerar_array};