import { Colaborador } from './colaborador.dto';
import { Papel } from './papel';

export class Usuario {
  id: number;
  administrador: string;
  dataCadastro: string;
  login: string;
  senha: string;
  colaborador: Colaborador;
  papel: Papel;
  token: string;
}
