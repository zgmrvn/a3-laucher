<template>
  <div>
    <ul>
      <li><input type="checkbox" @change="updateOption">show script errors</li>
    </ul>

    {{ getOption }}
  </div>
</template>

<script>
  export default {
    name: 'options-page',

    computed: {
      showScriptError: state => state.options.showScriptError
    },

    methods: {
      updateOption (e) {
        // alert('check')
        // this.$store.state.option = element.checked
        console.log(e.target.checked)
        this.$store.commit('updateOption', e.target.checked)
      },

      getOption () {
        return $store.state.options.showScriptError
      }
    },

    mutations: {
      updateOption (state, value) {
        state.options.showScriptError = value
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
