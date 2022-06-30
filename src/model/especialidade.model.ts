import {AbstractEntity} from "./abstract-entity.model";

export class Especialidade extends AbstractEntity {
    nome! : string

    constructor() {
        super()
        this.ativo = true
    }
}