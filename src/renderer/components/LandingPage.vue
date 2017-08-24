<template>
  <div id="wrapper">
      <input
        id="armaDirectory"
        type="file"
        webkitdirectory
        @change="onFileChange"
      >
      {{ armaPath }}
      <button @click="onLaunch">launch</button>

      {{ options }}
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'landing-page',

    data () {
      return {
        armaFolder: ''
      }
    },

    computed: mapState({
      options: state => state.options,

      armaPath () {
        return this.armaFolder + '\\arma3.exe'
      }
    }),

    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },

      onFileChange (e) {
        let files = e.target.files

        if (!files.length) {
          return
        }

        this.armaFolder = files[0].path
      },

      onLaunch (e) {
        /*
        if (!this.armaFolder.length) {
          return
        }
        */

        // let exec = require('child_process').execFile

        // Bus.$emit('launchEvent', 18)

        /*
        exec(this.armaPath, function (err, data) {
          console.log(err)
          console.log(data.toString())
        })
        */
      }
    }
  }
</script>

<style>
</style>
