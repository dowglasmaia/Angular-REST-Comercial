import { ContaCaixa } from './conta-caixa';
import { FinLancamentoReceber } from './fin-lancamento-receber';
import { FinStatusParcela } from './fin-status-parcela';

export class FinParcelaReceber {
	id: number;
	boletoNossoNumero: string;
	dataEmissao: string;
	dataVencimento: string;
	descontoAte: string;
	emitiuBoleto: string;
	numeroParcela: number;
	valor: number;
	contaCaixa: ContaCaixa;
	finLancamentoReceber: FinLancamentoReceber;
	finStatusParcela: FinStatusParcela;
}
