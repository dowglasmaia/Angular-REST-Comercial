import { ContaCaixa } from './conta-caixa';
import { FinChequeRecebido } from './fin-cheque-recebido';
import { FinParcelaReceber } from './fin-parcela-receber';
import { FinTipoRecebimento } from './fin-tipo-recebimento';

export class FinParcelaRecebimento {
	id: number;
	dataRecebimento: string;
	historico: string;
	taxaDesconto: number;
	taxaJuro: number;
	taxaMulta: number;
	valorDesconto: number;
	valorJuro: number;
	valorMulta: number;
	valorRecebido: number;
	contaCaixa: ContaCaixa;
	finChequeRecebido: FinChequeRecebido;
	finParcelaReceber: FinParcelaReceber;
	finTipoRecebimento: FinTipoRecebimento;
}
