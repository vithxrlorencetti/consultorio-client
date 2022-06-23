import {AbstractEntity} from "./abstract-entity.model";
import {statusAgenda} from "./status-agenda.enum";
import {Secretaria} from "./secretaria.model";
import {Medico} from "./medico.model";
import {Agenda} from "./agenda.model";

export class Historico extends AbstractEntity {
    data! : Date
    statusAgenda! : statusAgenda
    observacao! : string
    secretaria! : Secretaria
    medico! : Medico
    agenda! : Agenda
}