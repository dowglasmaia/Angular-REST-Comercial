import { Produto } from './produto';
import { VendaCabecalho } from './venda-cabecalho';

export class VendaDetalhe {
	id: number;
	quantidade: number;
	taxaComissao: number;
	taxaDesconto: number;
	valorComissao: number;
	valorDesconto: number;
	valorSubtotal: number;
	valorTotal: number;
	valorUnitario: number;
	produto: Produto;
	vendaCabecalho: VendaCabecalho;
}
