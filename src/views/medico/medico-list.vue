<template >

    <div class="medico">
        <div class="columns is-12">
            <div class="title">
                <h1>Lista de Médicos</h1>
            </div>
        </div>
        <div class="search-bar">
            <input type="search" name="search-bar" placeholder="Nome do médico">
            <button>Buscar</button>
            <button>Cadastrar</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Especialidade</th>
                    <th>CRM</th>
                    <th>% de participação</th>
                    <th>Valor consulta</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td><p>Gustavo Koslovski</p></td>
                    <td><p>Neurologista</p></td>
                    <td><p>CRM/PR 123456</p></td>
                    <td>12.00</td>
                    <td>80.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td><p>Vithor Lorencetti</p></td>
                    <td><p>Ginecologista</p></td>
                    <td><p>CRM/PR 123456</p></td>
                    <td>14.00</td>
                    <td>75.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td><p>Eduardo Sganderla</p></td>
                    <td><p>Urologista</p></td>
                    <td><p>CRM/PR 123456</p></td>
                    <td>7.00</td>
                    <td>90.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td><p>Layal Youssef Al Wanni</p></td>
                    <td><p>Pediatra</p></td>
                    <td><p>CRM/PR 123456</p></td>
                    <td>13.00</td>
                    <td>85.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td><p>Vinicius Frasson</p></td>
                    <td><p>Cardiologista</p></td>
                    <td><p>CRM/PR 123456</p></td>
                    <td>10.00</td>
                    <td>65.00</td>
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
    background-color: #f8f8f8;;
}

</style>