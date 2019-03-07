import { Cliente } from './cliente';
import { FinDocumentoOrigem } from './fin-documento-origem';
import { FinNaturezaFinanceira } from './fin-natureza-financeira';

export class FinLancamentoReceber {
	id: number;
	dataLancamento: string;
	intervaloEntreParcelas: number;
	numeroDocumento: string;
	primeiroVencimento: string;
	quantidadeParcela: number;
	taxaComissao: number;
	valorAReceber: number;
	valorComissao: number;
	valorTotal: number;
	cliente: Cliente;
	finDocumentoOrigem: FinDocumentoOrigem;
	finNaturezaFinanceira: FinNaturezaFinanceira;
}
