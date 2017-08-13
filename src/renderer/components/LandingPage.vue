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

      {{ option }}
  </div>
</template>

<script>
  export default {
    name: 'landing-page',

    data () {
      return {
        service: {},
        armaFolder: ''
      }
    },

    computed: {
      armaPath () {
        return this.armaFolder + '\\arma3.exe'
      }
    },

    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },

      option () {
        return this.$store.state.option
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
