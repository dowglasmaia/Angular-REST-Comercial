import { CompraPedido } from './compra-pedido';
import { Produto } from './produto';

export class CompraPedidoDetalhe {
	id: number;
	quantidade: number;
	taxaDesconto: number;
	valorDesconto: number;
	valorSubtotal: number;
	valorTotal: number;
	valorUnitario: number;
	compraPedido: CompraPedido;
	produto: Produto;
}
