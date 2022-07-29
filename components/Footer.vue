<template>
	<footer class="site-footer pv-24">
		<div class="container flex f-space-between flex--wrap v-center">
			<div class="copyright">©2022 Bagitulis, Aditya Triyaswanda</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss" scoped>
.site-footer {
	background-color: $black-origin;
}

.container {
	gap: 8px;
}

.copyright {
	color: $tc-inverse;
	opacity: 0.56;
}
.links {
	gap: 40px;

	&-item {
		color: $tc-inverse;
	}

	&-socmed {
		gap: 20px;

		&--item {
			color: $tc-inverse;
			font-size: 27px;
		}
	}
}
</style>
