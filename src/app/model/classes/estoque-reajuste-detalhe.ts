import { EstoqueReajusteCabecalho } from './estoque-reajuste-cabecalho';
import { Produto } from './produto';

export class EstoqueReajusteDetalhe {
	id: number;
	valorOriginal: number;
	valorReajuste: number;
	estoqueReajusteCabecalho: EstoqueReajusteCabecalho;
	produto: Produto;
}
