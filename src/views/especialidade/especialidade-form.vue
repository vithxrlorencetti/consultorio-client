<template>
    
    <div class="especialidade-form column is-12">

        <form action="cadastro-especialidade">
            <div class="title">
                <h1>Cadastro de Especialidade</h1>
            </div>
            <div class="control column is-5">
                <label for="nome">Nome da Especialidade</label>
                <input class="input is-primary" type="text" placeholder="Nome da especialidade">
            </div>
            <div class="control column is-2">
                <button class="save-button" >
                    <router-link to="/convenio-list">Salvar</router-link>
                </button>
            </div>
        </form>

    </div>

</template>

<style>

.save-button{
    height: 35px;
    width: 70px;
    border-radius: 0.3em;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
    border:none;
    text-decoration: none;
    background-color: hsl(171deg, 100%, 41%);
}

.save-button:hover{
    background-color: #ffffff;
    border: 1px solid #f10d0d;
    color: #f10d0d;
    
}
</style>