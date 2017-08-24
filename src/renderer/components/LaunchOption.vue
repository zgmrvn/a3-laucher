<template>
  <div>
	  <input type="checkbox" v-model="optionState"><slot>option name</slot>
  </div>
</template>

<script>
  export default {
    name: 'launch-option',

    props: {
      option: String
    },

    computed: {
      optionState: {
        get () {
          return this.$store.state.options[this.option]
        },
        set (value) {
          this.$store.dispatch('setOption', {
            option: this.option,
            value: value
          })
        }
      }
    }
  }
</script>

<style>
</style>
