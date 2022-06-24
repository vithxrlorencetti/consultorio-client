<template>
  
  <div class="column">
    <div class="columns is-12 menu-top">
      Consultório - XYZ
    </div>
  </div>

  <div class="columns">
    <div class="column is-3">
      <nav>
        <aside class="menu">
          <p class="menu-label"> Agenda </p>
          <ul class="menu-list">
            <li><router-link to="/agendamento">Agendamento</router-link></li>
            <li><router-link to="/historico">Históricos</router-link></li>
          </ul>
      
          <p class="menu-label"> Pessoas </p>
          <ul class="menu-list">
            <li><router-link to="/paciente">Paciente</router-link></li>
            <li><router-link to="/medico">Médico</router-link></li>
            <li><router-link to="/secretaria">Secretaria</router-link></li>
          </ul>

          <p class="menu-label"> Administração </p>
          <ul class="menu-list">
            <li><router-link to="/especialidade">Especialidade</router-link></li>
            <li><router-link to="/convenio">Convênio</router-link></li>
          </ul>
        </aside>
      </nav>
    </div>
    <div class="column is-9 conteudo">
      <router-view> </router-view>
    </div>

  </div>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f10d0d;
    }
  }
}

.conteudo {
  margin-top: 30px;
}

.menu-top{
  background: hsl(0, 0%, 29%);
  padding: 15px;
  color: white;
}
</style>
