<template>
	<div>
		<ul>
			<mod-item v-for="(item, index) in mods" :item="item" :key="index"></mod-item>
		</ul>


		<br>
		<br>

		{{ mods }}
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	
	import fs from 'fs'
	//import { lstatSync, readdirSync } from 'fs'
	//import { join } from 'path'

	import ModItem from '@/components/ModItem'
	
	export default {
		name: 'mods-page',

		components: {
			ModItem
		},

		computed: mapState({
			modFolders: state => state.modFolders,

			mods () {
				let mods = []

				this.modFolders.forEach(folder => {
					mods.push(this.getMods(folder))
				})

				return mods
			}
		}),

		methods: {
			getMods (source, origin) {
				let files = fs.readdirSync(source)
				let children = []
				
				if (origin === undefined) {
					origin = source
				}

				let directory = source
				//console.log('origin',origin)

				files.forEach(file => {
					
					let source = origin + '\\' + file

					if (!fs.lstatSync(source).isDirectory()) {
						return
					}

					// if its a mod
					if (source.indexOf('@') !== -1) {
						children.push({ name: file })
					}


					//let res = []

					// we check if directory is a mod (starts with "@")
					// if not, we execute this function recursivly
					if (source.indexOf('@') === -1) {
						console.log(source)
						children.push(this.getMods(source, origin + '\\' + file))
					}

					//children.push({ name: file, children: children })
				})

				if (!Array.prototype.last){
					Array.prototype.last = function () {
						return this[this.length - 1]
					}
				}
				
				return { name: directory.split('\\').last(), children: children }
			}
		}
	}
</script>

<style>
</style>
