<template>
	<nav class="main-nav">
		<ul class="list-nostyle">
			<li v-for="(nav, i) in mainNavData" :key="i" class="main-nav__item flex">
				<nuxt-link class="header-link" :to="nav.url">{{ nav.title }}</nuxt-link>
				<span :class="['bzi', nav.icon]"></span>
			</li>
			<li class="main-nav__item separator">|</li>
			<li class="main-nav__item lang-switch">
				EN <span class="bzi bzi-Caret-down"></span>
			</li>

			<li class="main-nav__item">
				<button class="btn--primary request-button">Request Demo</button>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'MainNav',
	props: {
		mainNavData: {
			type: Array,
			default: null
		},
		icon: {
			type: String,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
.main-nav {
	@media #{$medium} {
		& > ul {
			display: flex;
			gap: 20px;
		}
	}

	.separator {
	}

	&__item {
		gap: 8px;

		.request-button {
			padding: 12px 26.5px;
			border-radius: 8px;
			font-size: 14px;
		}
	}

	li {
		font-weight: 500;
		font-size: 16px;
		display: flex;
		align-items: center;

		span {
			font-size: 24px;
		}

		a {
			color: $tc-head;
		}
	}

	ul,
	li {
		height: 100%;
	}
}
</style>
