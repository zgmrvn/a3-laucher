<template>
	<div>
		{{ modFolder }}
		<button @click="deleteModFolder">supprimer</button>
	</div>
</template>

<script>
	export default {
		name: 'mod-folder',

		props: {
			modFolder: String,
			index: Number
		},

		methods: {
			deleteModFolder () {
				this.$store.dispatch('deleteModFolder', {
					index: this.index
				})
			}
		}
	}
</script>

<style>
</style>
