import { CompraFornecedorCotacao } from './compra-fornecedor-cotacao';
import { Produto } from './produto';

export class CompraCotacaoDetalhe {
	id: number;
	quantidade: number;
	quantidadePedida: number;
	taxaDesconto: number;
	valorDesconto: number;
	valorSubtotal: number;
	valorTotal: number;
	valorUnitario: number;
	compraFornecedorCotacao: CompraFornecedorCotacao;
	produto: Produto;
}
