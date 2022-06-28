<template >

    <div class="convenio">
        <div class="columns is-12">
            <div class="title">
                <h1>Lista de Convênios</h1>
            </div>
        </div>
        <div class="search-bar">
            <input type="search" name="search-bar" placeholder="Nome do convênio">
            <button>Buscar</button>
            <button>Cadastrar</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td><p>Unimed</p>
                    </td><td>R$ 200.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td><p>Amil</p></td>
                    <td>R$ 200.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td><p>SulAmérica</p></td>
                    <td>R$ 200.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td><p>Notredame</p></td>
                    <td>R$ 200.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td><p>Assim Saúde</p></td>
                    <td>R$ 200.00</td>
                    <td><button class="detail-button">Detalhar</button></td>
                </tr>
            </tbody>
        </table>

        <div id="modal-js-example" class="modal">
            <div class="modal-background"></div>

            <div class="modal-content">
                <div class="box">
                    <p>Modal JS example</p>
                    <!-- Your content -->
                </div>
            </div>

            <button class="modal-close is-large" aria-label="close"></button>
        </div>

        <button class="js-modal-trigger" data-target="modal-js-example">
            Open JS example modal
        </button>


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
    padding-left:5px;
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

<script>
export default{

    document.addEventListener('DOMContentLoaded' () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});
}
</script>

