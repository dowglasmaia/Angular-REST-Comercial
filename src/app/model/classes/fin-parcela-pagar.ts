import { ContaCaixa } from './conta-caixa';
import { FinLancamentoPagar } from './fin-lancamento-pagar';
import { FinStatusParcela } from './fin-status-parcela';

export class FinParcelaPagar {
	id: number;
	dataEmissao: string;
	dataVencimento: string;
	descontoAte: string;
	numeroParcela: number;
	valor: number;
	contaCaixa: ContaCaixa;
	finLancamentoPagar: FinLancamentoPagar;
	finStatusParcela: FinStatusParcela;
}
