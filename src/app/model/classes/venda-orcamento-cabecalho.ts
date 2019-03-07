import { Cliente } from './cliente';
import { Transportadora } from './transportadora';
import { VendaCondicoesPagamento } from './venda-condicoes-pagamento';
import { Vendedor } from './vendedor';

export class VendaOrcamentoCabecalho {
	id: number;
	codigo: string;
	dataCadastro: string;
	observacao: string;
	taxaComissao: number;
	taxaDesconto: number;
	tipo: string;
	tipoFrete: string;
	validade: string;
	valorComissao: number;
	valorDesconto: number;
	valorFrete: number;
	valorSubtotal: number;
	valorTotal: number;
	cliente: Cliente;
	transportadora: Transportadora;
	vendaCondicoesPagamento: VendaCondicoesPagamento;
	vendedor: Vendedor;
}
