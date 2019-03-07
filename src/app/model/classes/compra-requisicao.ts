import { Colaborador } from './colaborador';
import { CompraTipoRequisicao } from './compra-tipo-requisicao';

export class CompraRequisicao {
	id: number;
	dataRequisicao: string;
	colaborador: Colaborador;
	compraTipoRequisicao: CompraTipoRequisicao;
}
