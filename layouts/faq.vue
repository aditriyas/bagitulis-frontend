<template>
	<div id="app" class="sticky-footer-container">
		<div class="sticky-footer-container-item">
			<Header />
		</div>
		<div class="sticky-footer-container-item --pushed">
			<main class="site-main">
				<section class="banner mb-40">
					<div class="container">
						<div class="banner-content">
							<h1 class="title">Frequently Asked Questions</h1>
							<p class="subtitle">Get to know more about RocketMall</p>
						</div>
					</div>
				</section>
				<nuxt />
			</main>
		</div>
		<div class="sticky-footer-container-item">
			<Footer />
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
	background-image: url(/assets/img/faq-bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	height: 237px;

	&-content {
		padding: 24px;
		color: $white;

		@media #{$medium} {
			padding-top: 69px;
			padding-left: 100px;
		}

		.title {
			font-size: 35px;
			line-height: 45px;
			@media #{$medium} {
				font-size: 40px;
				line-height: 56px;
			}
		}
	}
}
</style>
