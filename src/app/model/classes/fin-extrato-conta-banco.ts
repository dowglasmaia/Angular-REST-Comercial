import { ContaCaixa } from './conta-caixa';

export class FinExtratoContaBanco {
	id: number;
	ano: string;
	conciliado: string;
	dataBalancete: string;
	dataMovimento: string;
	documento: string;
	historico: string;
	mes: string;
	mesAno: string;
	observacao: string;
	valor: number;
	contaCaixa: ContaCaixa;
}
