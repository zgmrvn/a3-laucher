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

      <p>{{ armaFolder }}</p>
      <p>{{ armaOptions }}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'landing-page',

    data () {
      return {
        folder: ''
      }
    },

    watch: {
      folder (value) {
        this.$store.dispatch('setFolder', {
          folder: value
        })
      }
    },

    computed: mapState({
      options: state => state.options,
      armaFolder: state => state.arma.folder,

      armaPath () {
        return this.armaFolder + '\\arma3.exe'
      },

      armaOptions () {
        let args = []
        let options = this.options

        for (var property in options) {
          if (options.hasOwnProperty(property)) {

            // if the launch option has a state property
            // and its set to true
            if (options[property].state) {

              let option = '-' + property

              // if the options has a value
              // push it after the launch option
              if (options[property].value) {
                option += '="' + options[property].value + '"'
              }

              args.push(option)
            }
          }
        }

        return args
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

        this.folder = files[0].path
      },

      onLaunch (e) {
        if (!this.armaFolder.length) {
          return
        }

        let exec = require('child_process').execFile

        exec(this.armaPath, this.armaOptions, function (err, data) {
          console.log(err)
          console.log(data.toString())
        })
      }
    }
  }
</script>

<style>
</style>
