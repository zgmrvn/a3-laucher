<template>
  <div>
    <ul>
      <li><router-link to="/">Launcher</router-link></li>
      <li>Mods</li>
      <li><router-link to="/folders">Folders</router-link></li>
      <li><router-link to="/options">Options</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar'
  }
</script>

<style>
  /* CSS */
</style>
