import { EstoqueContagemCabecalho } from './estoque-contagem-cabecalho';
import { Produto } from './produto';

export class EstoqueContagemDetalhe {
	id: number;
	acuracidade: number;
	divergencia: number;
	quantidadeContada: number;
	quantidadeSistema: number;
	estoqueContagemCabecalho: EstoqueContagemCabecalho;
	produto: Produto;
}
