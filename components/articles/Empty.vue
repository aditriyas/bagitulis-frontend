<template>
	<div class="empty text-center">
		<div class="empty-image">
			<img src="/assets/img/empty.jpg" alt="Empty Image" img="Empty Image" />
		</div>
		<div class="empty-text">
			<h1 class="title">SEGERA HADIR</h1>
			<p class="subtitle">
				Halaman artikel kami akan tersedia dalam waktu dekat!
			</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.empty {
	&-image {
		margin-bottom: 64px;
		width: 60%;
	}

	&-text {
		width: 100%;
		max-width: 467px;
		margin: 0 auto;

		.title {
			color: #505565;
			font-size: 28px;
			font-weight: 600;
			@media #{$medium} {
				font-size: 32px;
			}
		}

		.subtitle {
			color: #6e7692;
			font-size: 12px;
			@media #{$medium} {
				font-size: 1em;
			}
		}
	}
}
</style>
