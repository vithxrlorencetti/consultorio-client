<template >
    <div class="secretaria">
        <div class="columns is-12">
            <div class="title">
                <h1>Lista de Secretárias</h1>
            </div>
        </div>
        <div class="search-bar">
            <input type="search" name="search-bar" placeholder="Nome da secretária">
            <button>Buscar</button>
            <button>Cadastrar</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>PIS</th>
                    <th>Salário</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td><p>Rama Naim</p></td>
                    <td><p>100.200.300-40</p></td>
                    <td><p>R$ 2000.00</p></td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td><p>Adriana Frasson</p></td>
                    <td><p>200.300.400-50</p></td>
                    <td><p>R$ 2000.00</p></td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td><p>Diana Ribeiro</p></td>
                    <td><p>300.400.500-60</p></td>
                    <td><p>R$ 3000.00</p></td>
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
    padding-bottom:3px;
    margin-left: 5px;
    padding-left: 5px;
    height: 35px;
    border-radius: 0.3em;
    font-size: 15px;
    color: #ffffff;
    background-color: #f10d0d;
    cursor: pointer;
    border:none;
    border: 1px solid #f10d0d;
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