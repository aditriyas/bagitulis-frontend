<template>
	<div class="container text-center">
		<div v-if="statusCode === 404" class="mb-24">
			<img
				v-lazy-load
				data-src="~assets/img/error-image.png"
				alt="Not Found"
				title="Not Found"
			/>
			<p class="text mb-32">The page you are looking about is not available</p>
		</div>
		<div v-else class="mb-24">
			<img
				v-lazy-load
				data-src="~assets/img/error-image.png"
				title="Server Error"
				alt="Server Error"
			/>
			<p class="text mb-32">This page is still under repair</p>
		</div>
		<nuxt-link
			class="btn--primary text-white p-16"
			:to="localePath('/')"
			title="Homepage"
			>Back to Homepage</nuxt-link
		>
	</div>
</template>

<script>
export default {
	layout: 'blanklayout',
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	head() {
		return {
			title: this.error.statusCode
		}
	},
	computed: {
		statusCode() {
			return (this.error && this.error.statusCode) || 500
		},
		message() {
			return this.error.message
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	padding: 60px 0;
	max-width: 590px !important;
}

.text {
	font-size: 32px !important;
	color: $tc-head;
	line-height: 48px;
	font-weight: 600;
	max-width: 479px;
	margin: 0 auto;
}

a {
	border-radius: 8px;
	color: $white !important;
}
</style>
