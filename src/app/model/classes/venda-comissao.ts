import { VendaCabecalho } from './venda-cabecalho';
import { Vendedor } from './vendedor';

export class VendaComissao {
	id: number;
	dataLancamento: string;
	situacao: string;
	tipoContabil: string;
	valorComissao: number;
	valorVenda: number;
	vendaCabecalho: VendaCabecalho;
	vendedor: Vendedor;
}
