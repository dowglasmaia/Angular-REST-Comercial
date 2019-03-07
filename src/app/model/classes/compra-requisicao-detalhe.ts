import { CompraRequisicao } from './compra-requisicao';
import { Produto } from './produto';

export class CompraRequisicaoDetalhe {
	id: number;
	itemCotado: string;
	quantidade: number;
	quantidadeCotada: number;
	compraRequisicao: CompraRequisicao;
	produto: Produto;
}
