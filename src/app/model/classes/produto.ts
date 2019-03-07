import { UnidadeProduto } from './unidade-produto';
import { ProdutoMarca } from './produto-marca';
import { ProdutoSubGrupo } from './produto-sub-grupo';

export class Produto {
	id: number;
	codigoBalanca: number;
	codigoInterno: string;
	dataCadastro: string;
	descricao: string;
	descricaoPdv: string;
	estoqueIdeal: number;
	estoqueMaximo: number;
	estoqueMinimo: number;
	excluido: string;
	fotoProduto: string;
	gtin: string;
	iat: string;
	inativo: string;
	ippt: string;
	ncm: string;
	nome: string;
	precoLucroMaximo: number;
	precoLucroMinimo: number;
	precoLucroZero: number;
	precoVendaMinimo: number;
	quantidadeEstoque: number;
	quantidadeEstoqueAnterior: number;
	tipoItemSped: string;
	totalizadorParcial: string;
	valorCompra: number;
	valorVenda: number;
	marcaProduto: ProdutoMarca;
	subGrupo: ProdutoSubGrupo;
	unidadeProduto: UnidadeProduto;
}
