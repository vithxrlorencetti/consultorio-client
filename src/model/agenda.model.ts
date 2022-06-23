import {AbstractEntity} from "./abstract-entity.model";
import {Secretaria} from "./secretaria.model";
import {Medico} from "./medico.model";
import {Paciente} from "./paciente.model";
import {statusAgenda} from "./status-agenda.enum";

export class Agenda extends AbstractEntity {
    status! : statusAgenda
    dataDe! : Date
    dataAte! : Date
    encaixe! : boolean
    paciente! : Paciente
    secretaria! : Secretaria
    medico! : Medico
}