<template>
	<li>
		<span v-if="isFolder" @click="toggle">{{open ? '-' : '+'}}</span>

		<input type="checkbox">

		{{ item.name }}

		<ul v-show="open" v-if="isFolder">
			<mod-item v-for="(item, index) in item.children" :item="item" :key="index"></mod-item>
		</ul>
	</li>
</template>

<script>
	export default {
		name: 'mod-item',

		props: {
			item: Object
		},

		data () {
			return {
				open: false
			}
		},

		computed: {
			isFolder () {
				return this.item.children && this.item.children.length
			}
		},

		methods: {
			toggle () {
				this.open = !this.open
			}
		}
	}
</script>

<style>
</style>
