<template>
	<nuxt-link :to="localePathHome()">
		<img
			src="~/assets/img/site-logo.png"
			alt="Icon"
			title="Bagi Tulis"
			width="200"
		/>
	</nuxt-link>
</template>

<script>
export default {
	methods: {
		localePathHome() {
			return this.localePath('/')
		}
	}
}
</script>

<style lang="scss"></style>
