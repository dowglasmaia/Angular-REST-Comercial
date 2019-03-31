import { CompraRequisicaoDetalhesComponent } from './../../components/compras/compra-requisicao/compra-requisicao-detalhes/compra-requisicao-detalhes.component';
import { Colaborador } from './colaborador';
import { CompraTipoRequisicao } from './compra-tipo-requisicao';

export class CompraRequisicao {
	id: number;
	dataRequisicao: string;
	colaborador: Colaborador;
	compraTipoRequisicao: CompraTipoRequisicao;
	listaCompraRequisicaoDetalhes: CompraRequisicaoDetalhesComponent[];
}
