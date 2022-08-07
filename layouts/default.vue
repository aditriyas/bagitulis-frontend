<template>
	<main class="site">
		<div id="app" class="relative sticky-footer-container">
			<div class="sticky-footer-container-item">
				<!-- <div class="upper bg-white-bg"></div> -->
				<Header />
				<LinkCopied />
			</div>
			<div class="sticky-footer-container-item --pushed">
				<Nuxt />
				<button class="btn--ghost-primary btn-up" @click.prevent="scrollTo">
					<span class="bzi-Arrow-up bzi-2x"></span>
				</button>
			</div>
			<div class="sticky-footer-container-item">
				<Footer />
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			isSearch: false,
			currTop: 0
		}
	},
	methods: {
		scrollTo() {
			window.scrollTo(0, 0)
		}
	}
}
</script>

<style lang="scss">
.upper {
	position: relative;
	z-index: 5;
	height: 24px;
	background: $white;
}

.upper > .container {
	gap: 32px;
}

#app {
	position: relative;
}

.btn-up {
	position: fixed;
	right: 30px;
	bottom: 50px;
	z-index: 9999;
	padding: 8px 16px;
	border: 2px solid $primary;

	@media #{$large} {
		right: 80px;
		bottom: 100px;
	}
}
</style>
