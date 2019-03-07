import { ContaCaixa } from './conta-caixa';

export class TalonarioCheque {
	id: number;
	numero: number;
	statusTalao: string;
	talao: string;
	contaCaixa: ContaCaixa;
}
