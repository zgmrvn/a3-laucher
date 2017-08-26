<template>
  <div>
	  <input type="checkbox" v-model="optionState">{{ optionText }}
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
          return this.$store.state.options[this.option].state
        },
        set (state) {
          this.$store.dispatch('setOption', {
            option: this.option,
            state: state
          })
        }
      },

      optionText: {
        get () {
          return this.$store.state.options[this.option].text
        }
      }
    }
  }
</script>

<style>
</style>
