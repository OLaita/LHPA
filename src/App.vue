<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">LHPA-AWARDS</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/votar" class="nav-link">Votar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/awards-list" class="nav-link">Awards List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-award" class="nav-link">Add Award</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/participantes-list" class="nav-link">Participantes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-participante" class="nav-link">Add Participantes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </div>
    </nav>

    <div class="h-screen mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>