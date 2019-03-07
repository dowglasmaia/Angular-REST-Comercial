import { AgenciaBanco } from './agencia-banco';

export class ContaCaixa {
	id: number;
	codigo: string;
	descricao: string;
	digito: string;
	nome: string;
	tipo: string;
	agenciaBanco: AgenciaBanco;
}
