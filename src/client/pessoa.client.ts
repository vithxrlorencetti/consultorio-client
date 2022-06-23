import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";
import {Pessoa} from "../model/pessoa.model";

export class PessoaClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/paciente',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Pessoa> {
        try {
            return (await this.axiosClient.get<Pessoa>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest): Promise<PageResponse<Pessoa>> {
        try {

            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined
                ? '' : pageRequest.sortField},${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Pessoa>>(requestPath,
                {
                    params: { filtros: pageRequest.filter }
                }
            )).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(pessoa: Pessoa): Promise<void> {
        try {
            return (await this.axiosClient.post('/', pessoa))
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(pessoa: Pessoa): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${pessoa.id}`, pessoa)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(pessoa: Pessoa): Promise<void> {
        try {
            return (await this.axiosClient.put(`/desativar/${pessoa.id}`, pessoa)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}