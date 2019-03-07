import { AtividadeForCli } from './atividade-for-cli';
import { Pessoa } from './pessoa';
import { SituacaoForCli } from './situacao-for-cli';

export class Cliente {
	id: number;
	dataCadastro: string;
	desde: string;
	limiteCredito: number;
	observacao: string;
	porcentoDesconto: number;
	atividadeForCli: AtividadeForCli;
	pessoa: Pessoa;
	situacaoForCli: SituacaoForCli;
}
