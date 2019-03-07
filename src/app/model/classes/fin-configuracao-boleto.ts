import { ContaCaixa } from './conta-caixa';

export class FinConfiguracaoBoleto {
	id: number;
	aceite: string;
	caminhoArquivoLogotipo: string;
	caminhoArquivoPdf: string;
	caminhoArquivoRemessa: string;
	caminhoArquivoRetorno: string;
	carteira: string;
	codigoCedente: string;
	codigoConvenio: string;
	especie: string;
	instrucao01: string;
	instrucao02: string;
	layoutRemessa: string;
	localPagamento: string;
	mensagem: string;
	taxaMulta: number;
	contaCaixa: ContaCaixa;
}
