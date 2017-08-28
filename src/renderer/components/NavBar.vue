<template>
  <div>
    <ul>
      <li><router-link to="/">Launcher</router-link></li>
      <li><router-link to="/mods">Mods</router-link></li>
      <li><router-link to="/mod-folders">Mod folders</router-link></li>
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
