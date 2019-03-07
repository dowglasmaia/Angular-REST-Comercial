import { Pessoa } from './pessoa';

export class Fornecedor {
	id: number;
	chequeNominalA: string;
	dataCadastro: string;
	desde: string;
	localizacao: string;
	observacao: string;
	optanteSimplesNacional: string;
	sofreRetencao: string;
	pessoa: Pessoa;
}
