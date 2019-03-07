import { CompraCotacaoDetalhe } from './compra-cotacao-detalhe';
import { CompraPedido } from './compra-pedido';

export class CompraCotacaoPedidoDetalhe {
	id: number;
	quantidadePedida: number;
	compraCotacaoDetalhe: CompraCotacaoDetalhe;
	compraPedido: CompraPedido;
}
