<template>
    
    <div class="convenio-form column is-12">

        <form>

            <div class="title">
                <h1>Cadastro de Convênio</h1>
            </div>

            <div class="control column is-5">
                <label for="nome">Nome do Convênio</label>
                <input class="input" type="text" placeholder="Nome do convênio">
            </div>
            
            <div class="control column is-2">
                <label for="valor">Valor</label>
                <input class="input" type="number" placeholder="Valor (R$)">
            </div>

            <div class="control column is-3 ">
                <button class="back-button" >
                    <router-link to="/convenio-list" style="text">Voltar</router-link>
                </button>
                <button class="save-button" >
                    <router-link to="/convenio-list">Salvar</router-link>
                </button>
            </div>

        </form>

    </div>

</template>

<style>

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

