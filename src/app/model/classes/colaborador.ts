import { Cargo } from './cargo';
import { Pessoa } from './pessoa';
import { Setor } from './setor';
import { TipoColaborador } from './tipo-colaborador';

export class Colaborador {
	id: number;
	ctpsDataExpedicao: string;
	ctpsNumero: string;
	ctpsSerie: string;
	ctpsUf: string;
	dataAdmissao: string;
	dataCadastro: string;
	dataDemissao: string;
	foto34: string;
	matricula: string;
	observacao: string;
	pagamentoAgencia: string;
	pagamentoAgenciaDigito: string;
	pagamentoBanco: string;
	pagamentoConta: string;
	pagamentoContaDigito: string;
	pagamentoForma: string;
	cargo: Cargo;
	pessoa: Pessoa;
	setor: Setor;
	tipoColaborador: TipoColaborador;
}
