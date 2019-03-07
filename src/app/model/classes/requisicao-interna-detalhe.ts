import { Produto } from './produto';
import { RequisicaoInternaCabecalho } from './requisicao-interna-cabecalho';

export class RequisicaoInternaDetalhe {
	id: number;
	quantidade: number;
	produto: Produto;
	reqInternaCabecalho: RequisicaoInternaCabecalho;
}
