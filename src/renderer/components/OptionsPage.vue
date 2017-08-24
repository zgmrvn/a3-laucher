<template>
  <div>
    <ul>
      <li><launch-option option="showScriptError">show script errors</launch-option></li>
      <li><launch-option option="otherOption">other option</launch-option></li>
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
      options: state => state.options
    })
  }
</script>

<style>
  /* CSS */
</style>
