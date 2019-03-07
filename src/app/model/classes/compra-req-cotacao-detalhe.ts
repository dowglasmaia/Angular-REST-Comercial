import { CompraCotacao } from './compra-cotacao';
import { CompraRequisicaoDetalhe } from './compra-requisicao-detalhe';

export class CompraReqCotacaoDetalhe {
	id: number;
	quantidadeCotada: number;
	compraCotacao: CompraCotacao;
	compraRequisicaoDetalhe: CompraRequisicaoDetalhe;
}
