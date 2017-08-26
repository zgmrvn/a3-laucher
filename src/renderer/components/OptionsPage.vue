<template>
  <div>
    <ul>
      <li v-for="option in optionsString" :key="option"><launch-option :option="option"></launch-option></li>

      <!--
      <li><launch-option option="showScriptError"></launch-option></li>
      <li><launch-option option="world"></launch-option></li>
      -->
    </ul>

    {{ options }}
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import LaunchOption from '@/components/LaunchOption'

  export default {
    name: 'options-page',

    components: {
      LaunchOption
    },

    computed: mapState({
      options: state => state.options,

      // list of launch properties names
      optionsString () {
        let optionsString = []

        for (let property in this.options) {
          optionsString.push(property)
        }

        return optionsString
      }
    })
  }
</script>

<style>
  /* CSS */
</style>
