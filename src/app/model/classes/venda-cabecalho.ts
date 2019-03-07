import { Cliente } from './cliente';
import { TipoNotaFiscal } from './tipo-nota-fiscal';
import { Transportadora } from './transportadora';
import { VendaCondicoesPagamento } from './venda-condicoes-pagamento';
import { VendaOrcamentoCabecalho } from './venda-orcamento-cabecalho';
import { Vendedor } from './vendedor';

export class VendaCabecalho {
	id: number;
	dataSaida: string;
	dataVenda: string;
	formaPagamento: string;
	horaSaida: string;
	localCobranca: string;
	localEntrega: string;
	numeroFatura: number;
	observacao: string;
	situacao: string;
	taxaComissao: number;
	taxaDesconto: number;
	tipoFrete: string;
	valorComissao: number;
	valorDesconto: number;
	valorFrete: number;
	valorSeguro: number;
	valorSubtotal: number;
	valorTotal: number;
	cliente: Cliente;
	tipoNotaFiscal: TipoNotaFiscal;
	transportadora: Transportadora;
	vendaCondicoesPagamento: VendaCondicoesPagamento;
	vendaOrcamentoCabecalho: VendaOrcamentoCabecalho;
	vendedor: Vendedor;
}
