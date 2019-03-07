import { Produto } from './produto';
import { VendaOrcamentoCabecalho } from './venda-orcamento-cabecalho';

export class VendaOrcamentoDetalhe {
	id: number;
	quantidade: number;
	taxaDesconto: number;
	valorDesconto: number;
	valorSubtotal: number;
	valorTotal: number;
	valorUnitario: number;
	produto: Produto;
	vendaOrcamentoCabecalho: VendaOrcamentoCabecalho;
}
