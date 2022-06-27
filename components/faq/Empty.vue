<template>
	<div class="empty text-center">
		<img
			src="/assets/img/faq-empty.png"
			alt="Search Empty"
			title="Empty"
			class="empty-image mb-32"
		/>
		<div class="empty-text">
			<h3 class="title mb-24">No results found</h3>
			<p class="subtitle">
				Sorry, we weren’t able to find any results for your question. Try
				another question or check our previous FAQ.
			</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.empty {
	&-text {
		.title {
			color: #505565;
			font-size: 24px;
			font-weight: 600;
		}

		.subtitle {
			color: #6e7692;
			font-size: 20px;
			max-width: 580px;
			margin: 0 auto;
		}
	}
}
</style>
