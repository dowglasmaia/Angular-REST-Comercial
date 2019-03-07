import { CompraTipoPedido } from './compra-tipo-pedido';
import { Fornecedor } from './fornecedor';

export class CompraPedido {
	id: number;
	contato: string;
	dataPedido: string;
	dataPrevisaoPagamento: string;
	dataPrevistaEntrega: string;
	diasIntervalo: number;
	diasPrimeiroVencimento: number;
	formaPagamento: string;
	localCobranca: string;
	localEntrega: string;
	quantidadeParcelas: number;
	taxaDesconto: number;
	tipoFrete: string;
	valorDesconto: number;
	valorSubtotal: number;
	valorTotalPedido: number;
	compraTipoPedido: CompraTipoPedido;
	fornecedor: Fornecedor;
}
