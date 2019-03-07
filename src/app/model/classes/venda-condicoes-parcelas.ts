import { VendaCondicoesPagamento } from './venda-condicoes-pagamento';

export class VendaCondicoesParcelas {
	id: number;
	dias: number;
	parcela: number;
	taxa: number;
	vendaCondicoesPagamento: VendaCondicoesPagamento;
}
