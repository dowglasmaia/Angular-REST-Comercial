import { ContaCaixa } from './conta-caixa';

export class FinFechamentoCaixaBanco {
	id: number;
	ano: string;
	chequeNaoCompensado: number;
	dataFechamento: string;
	mes: string;
	mesAno: string;
	pagamentos: number;
	recebimentos: number;
	saldoAnterior: number;
	saldoConta: number;
	saldoDisponivel: number;
	contaCaixa: ContaCaixa;
}
