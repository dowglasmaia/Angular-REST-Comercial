import { ContaCaixa } from './conta-caixa';
import { FinChequeEmitido } from './fin-cheque-emitido';
import { FinParcelaPagar } from './fin-parcela-pagar';
import { FinTipoPagamento } from './fin-tipo-pagamento';

export class FinParcelaPagamento {
	id: number;
	dataPagamento: string;
	historico: string;
	taxaDesconto: number;
	taxaJuro: number;
	taxaMulta: number;
	valorDesconto: number;
	valorJuro: number;
	valorMulta: number;
	valorPago: number;
	contaCaixa: ContaCaixa;
	finChequeEmitido: FinChequeEmitido;
	finParcelaPagar: FinParcelaPagar;
	finTipoPagamento: FinTipoPagamento;
}
