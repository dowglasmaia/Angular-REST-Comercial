import { Pessoa } from './pessoa';

export class FinChequeRecebido {
	id: number;
	bomPara: string;
	codigoAgencia: string;
	codigoBanco: string;
	conta: string;
	cpfCnpj: string;
	dataCompensacao: string;
	dataEmissao: string;
	nome: string;
	numero: number;
	valor: number;
	pessoa: Pessoa;
}
