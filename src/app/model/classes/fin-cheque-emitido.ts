import { Cheque } from './cheque';

export class FinChequeEmitido {
	id: number;
	bomPara: string;
	dataCompensacao: string;
	dataEmissao: string;
	nominalA: string;
	valor: number;
	cheque: Cheque;
}
