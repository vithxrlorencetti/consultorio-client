import {Pessoa} from "./pessoa.model";
import {tipoAtendimento} from "./tipo-atendimento.enum";
import {Convenio} from "./convenio.model";

export class Paciente extends Pessoa {
    tipoAtendimento! : tipoAtendimento
    numeroCartaoConvenio! : number
    dataVencimento! : Date
    convenio! : Convenio
}