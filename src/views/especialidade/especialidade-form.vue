<template>
    
    <div class="especialidade-form column is-12">

        <form>

            <div class="title">
                <h1>Cadastro de Especialidade</h1>
            </div>

            <div class="columns" v-if="notification.ativo">
                <div class="column is-12">
                    <div :class="notification.classe">
                        <button @click="onClickFecharNotificacao()" class="delete" ></button>
                        {{ notification.mensagem }}
                    </div>
                </div>
            </div>

            <div class="column is-12 is-size-3">
                <label class="label">
                    Ativar Especialidade
                    <input v-model="especialidade.ativo" checked type="checkbox" :disabled="model==='detalhar'">
                </label>  
            </div>

            <div class="control column is-5">
                <label for="nome">Nome da Especialidade</label>
                <input class="input" v-model="especialidade.nome" type="text" placeholder="Nome da especialidade" :disabled="model==='detalhar'">
            </div>

            <div class="control column is-3 ">
                <button class="back-button" >
                    <router-link to="/especialidade/listar">Voltar</router-link>
                </button>
                <button @click="onClickCadastrar" class="save-button">
                    Salvar
                </button>
            </div>

        </form>

    </div>

</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'
    import { Especialidade } from '@/model/especialidade.model'
    import { Notification } from '@/model/notification'
    import { EspecialidadeClient } from '@/client/especialidade.client'
    
    export default class EspecialidadeForm extends Vue {

        private especialidadeClient!: EspecialidadeClient
        especialidade : Especialidade = new Especialidade()
        notification : Notification = new Notification()
    
        @Prop({ type: Number, required: false })
        private readonly id!: number

        @Prop({ type: String, default: false })
        private readonly model!: string

        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
            console.log(this.id)
            console.log(this.model)
            this.carregarEspecialidade()
        }
        
        public onClickCadastrar(): void {
            
            this.especialidadeClient.cadastrar(this.especialidade)
                .then(
                success => {
                    console.log(success)
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    //this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    //this.onClickLimpar()
                })
        }

        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }

        public onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }

        public carregarEspecialidade(): void{

            console.log("carregarEspecialidade" + this.id)
                 this.especialidadeClient.findById(this.id).then(value => {
                this.especialidade = value
                console.log(value)
                }).catch(error => {
                    console.log(error)
                })
            
        }
        // private created(): void { }
    }
</script>

<style>

.label{
    font-size: 15px;
}

.label input{
    color: red;
}

.save-button, .back-button{
    margin-right: 0.5em;
    height: 40px;
    width: 70px;
    border-radius: 0.3em;
    font-size: 15px;
    cursor: pointer;
    border:none;
    text-decoration: none;
    background-color: hsl(171deg, 100%, 41%);
    color: #ffffff;
}

.back-button {
    background-color: rgb(209, 195, 0);
}

.save-button:hover, .back-button:hover{
    background-color: #ffffff;
    border: 1px solid hsl(171deg, 100%, 41%);
    color: hsl(171deg, 100%, 41%);
}

.back-button:hover {
    border: 1px solid rgb(209, 195, 0);
}

form input{
    margin-top:5px;   
}

::-webkit-input-placeholder{ 
    color:rgb(202, 202, 202);
    padding:0px; 
}
</style>