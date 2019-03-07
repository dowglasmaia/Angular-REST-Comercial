import { Banco } from './banco';

export class AgenciaBanco {
	id: number;
	bairro: string;
	cep: string;
	codigo: string;
	contato: string;
	digito: string;
	gerente: string;
	logradouro: string;
	municipio: string;
	nome: string;
	numero: string;
	observacao: string;
	telefone: string;
	uf: string;
	banco: Banco;
}
