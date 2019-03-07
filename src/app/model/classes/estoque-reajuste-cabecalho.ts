import { Colaborador } from './colaborador';

export class EstoqueReajusteCabecalho {
	id: number;
	dataReajuste: string;
	porcentagem: number;
	tipoReajuste: string;
	colaborador: Colaborador;
}
