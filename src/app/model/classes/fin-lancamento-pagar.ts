import { FinDocumentoOrigem } from './fin-documento-origem';
import { FinNaturezaFinanceira } from './fin-natureza-financeira';
import { Fornecedor } from './fornecedor';

export class FinLancamentoPagar {
	id: number;
	dataLancamento: string;
	imagemDocumento: string;
	intervaloEntreParcelas: number;
	numeroDocumento: string;
	primeiroVencimento: string;
	quantidadeParcela: number;
	valorAPagar: number;
	valorTotal: number;
	finDocumentoOrigem: FinDocumentoOrigem;
	finNaturezaFinanceira: FinNaturezaFinanceira;
	fornecedor: Fornecedor;
}
