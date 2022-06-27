<template>
	<div class="demo-wrapper flex v-center">
		<div v-for="item in demo" :key="item.title" class="demo">
			<h1 class="demo-title">
				{{ item.title }}
			</h1>
			<p class="demo-subtitle">
				{{ item.subTitle }}
			</p>
			<nuxt-link
				class="text-white"
				:title="item.title"
				:to="localePath(`${item.path}`)"
			>
				<button class="btn btn--primary demo-button">
					{{ item.pathName }}
				</button>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		demo: {
			type: Array,
			default: null
		},
		title: {
			type: String,
			default: null
		},
		subTitle: {
			type: String,
			default: null
		},
		path: {
			type: String,
			default: null
		},
		pathName: {
			type: String,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
.demo {
	margin: 0 auto;
	padding: 48px 24px;

	@media #{$small} {
		padding: 48px 0;
	}

	@media #{$extra_large} {
		margin-left: 200px;
	}
	&-wrapper {
		background-image: url(/assets/img/banner-web.jpg);
		background-repeat: no-repeat;
		background-size: cover;

		// @media #{$extra_large} {
		// 	background-size: cover;
		// }
	}

	&-title {
		color: #fff;
		font-weight: 700;
		font-size: 30px;
		max-width: 668px;
		line-height: 40px;
		width: 100%;
		@media #{$medium} {
			font-size: 40px;
			line-height: 56px;
		}
	}

	&-subtitle {
		color: #fff;
		width: 100%;
		max-width: 560px;
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 40px;

		@media #{$medium} {
			font-size: 24px;
		}
	}

	&-button {
		padding: 20px 74px;
		border-radius: 12px;
		width: 286px;
	}
}
</style>
