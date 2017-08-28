<template>
  <div>
    <input
      type="file"
      webkitdirectory
      @change="onFileChange"
    >

    <ul>
      <li v-for="(modFolder, index) in modFolders" :key="index">
        <mod-folder :modFolder="modFolder" :index="index"></mod-folder>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ModFolder from '@/components/ModFolder'

  export default {
    name: 'folders-page',

    components: {
      ModFolder
    },

    computed: mapState({
      modFolders: state => state.modFolders
    }),

    methods: {
      onFileChange (e) {
        let files = e.target.files

        if (!files.length) {
          return
        }

        this.$store.dispatch('addModFolder', {
					modFolder: files[0].path
				})
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
