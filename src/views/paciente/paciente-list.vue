<template >
    <div class="paciente">
        <div class="columns is-12">
            <div class="title">
                <h1>Lista de Pacientes</h1>
            </div>
        </div>
        <div class="search-bar">
            <input type="search" name="search-bar" placeholder="Nome do paciente">
            <button>Buscar</button>
            <button>Cadastrar</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Atendimento</th>
                    <th>N° do cartão</th>
                    <th>Validade do cartão</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td><p>João Pedro Barbosa</p></td>
                    <td><p>Convênio</p></td>
                    <td><p>3333 3333 3333 3333</p></td>
                    <td>14/07/2024</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td><p>Paulo Khensani</p></td>
                    <td><p>Convênio</p></td>
                    <td><p>8888 8888 8888 8888</p></td>
                    <td>21/02/2023</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td><p>Pedro Costa</p></td>
                    <td><p>Particular</p></td>
                    <td><p>6666 6666 6666 6666</p></td>
                    <td>09/11/2024</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td><p>Gabriel Martins</p></td>
                    <td><p>Particular</p></td>
                    <td><p>7777 7777 7777 7777</p></td>
                    <td>04/04/2024</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td><p>Nicolas Farhat</p></td>
                    <td><p>Convênio</p></td>
                    <td><p>2222 2222 2222 2222</p></td>
                    <td>21/02/2023</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>

.title h1{
    font-size:0.7em;
    margin-left: 13px;
}

.search-bar input{
    height: 35px;
    width: 55.5em;
    border-radius: 0.3em;
    border: 1px solid #f10d0d;
}

.search-bar input:focus{
    outline: 1px solid #f10d0d;
}

.search-bar button, .detail-button{
    margin-left: 5px;
    height: 35px;
    border-radius: 0.3em;
    font-size: 15px;
    color: #ffffff;
    background-color: #f10d0d;
    cursor: pointer;
    border:none;
    
}

.search-bar button:hover{
    background-color: #ffffff;
    border: 1px solid #f10d0d;
    color: #f10d0d;
}

.detail-button{
    background-color: #f10d0d;
    border: 1px solid #f10d0d;
}

.detail-button:hover{
    background-color: #ffffff;
    border: 1px solid #f10d0d;
    color: #f10d0d;
    
}

::-webkit-input-placeholder{ 
    color:rgb(202, 202, 202);
    padding:10px; 
}

.table{
    width: 54.9em;
    margin-top: 2em;
}

.table td{
    border-left: 1px dashed #cacaca;
}

td p{
    font-weight: bold;
}

tr:hover{
    background-color: #a8a8a8;;
}

</style>