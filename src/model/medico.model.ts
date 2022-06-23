import {Pessoa} from "./pessoa.model";
import {Especialidade} from "./especialidade.model";

export class Medico extends Pessoa {
    crm! : string
    consultorio! : string
    porcentagemParticipacao! : number
    valorConsulta! : number
    especialidade! : Especialidade
}