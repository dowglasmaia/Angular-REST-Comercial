import { CompraCotacao } from './compra-cotacao';
import { Fornecedor } from './fornecedor';

export class CompraFornecedorCotacao {
	id: number;
	prazoEntrega: string;
	taxaDesconto: number;
	total: number;
	valorDesconto: number;
	valorSubtotal: number;
	vendaCondicoesPagamento: string;
	compraCotacao: CompraCotacao;
	fornecedor: Fornecedor;
}
