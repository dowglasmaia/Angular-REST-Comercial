import { ProdutoGrupo } from './produto-grupo';


export class ProdutoSubGrupo {
	id: number;
	descricao: string;
	nome: string;
	grupo: ProdutoGrupo;
}
