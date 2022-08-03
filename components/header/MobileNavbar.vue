<template>
	<nav class="mnav">
		<div class="container bg-white" @click="$nuxt.$emit('toggleMobileNav')">
			<div class="mnav-profile">
				<div
					class="
						mnav-profile--user mnav-profile--link
						flex
						v-center
						mb-16
						pl-16
					"
				></div>
			</div>

			<ul class="link mnav-menu pv-24">
				<li v-for="(nav, i) in mainNavData" :key="i">
					<nuxt-link
						:to="localePath(`${nav.url}`)"
						title="Mobile Nav"
						exact
						class="d-block text-cap text-black pv-12 ph-24 mb-8"
						>{{ nav.title }}</nuxt-link
					>
					<ul v-if="nav.child" class="link mnav-menu pb-16 mb-0">
						<li
							v-for="(child, idx) in nav.child"
							:key="idx"
							class="link mnav-menu"
						>
							<nuxt-link
								:to="localePath(child.url)"
								exact
								title="Mobile Nav Child"
								class="d-block text-cap text-black pv-8 ph-40 f-14"
								:class="child.isComingSoon ? 'disabled' : ''"
								>{{ child.title }}</nuxt-link
							>
						</li>
					</ul>
				</li>
				<li class="reqdemo-mobile pt-8">
					<nuxt-link
						class="text-white"
						:to="localePath('/karya-tulis/jurnal')"
						title="Minta Demo"
					>
						<button class="btn--primary request-button">
							Lihat Karya Tulis
						</button>
					</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'MobileNavbar',
	props: {
		showNavbar: {
			type: Boolean,
			default: false
		},
		mainNavData: {
			type: Array,
			default: null
		},
		supportNavData: {
			type: Array,
			default: null
		}
	},
	methods: {
		setUrl(slug) {
			const locales = this.$i18n.locale
			let url

			if (slug === '/') {
				url = slug + locales
			} else {
				url = '/' + locales + '/' + slug.toLowerCase()
			}

			return url
		}
	}
}
</script>

<style lang="scss" scoped>
.mnav {
	position: fixed;
	top: 0;
	right: -100%;
	width: 100%;
	height: 100vh;
	max-width: 320px;
	transition: all 0.3s ease-in-out;
	pointer-events: none;
	opacity: 0;
	z-index: 0;

	&.is-active {
		top: 0;
		right: 0;
		pointer-events: auto;
		opacity: 1;
		z-index: 1;

		@media #{$large} {
			display: none;
		}

		.container {
			pointer-events: all;
			position: fixed;
			max-width: 320px;
		}
	}

	.container {
		width: 100%;
		height: 100%;
		padding: 0 $space;
		box-shadow: 0px 3px 20px rgba(#cccccc, 0.87);
	}

	&-profile--user {
		gap: 16px;

		.name {
			font-size: 14px;

			@media #{$small} {
				font-size: 16px;
			}
		}
	}
}

.disabled {
	color: #b3b7c6;
	pointer-events: none;
	opacity: 0.6;
}

.link {
	list-style: none;
	padding: 0;
	// text-align: right;
}

.nuxt-link-exact-active {
	font-weight: bold;
	color: black;
	border-radius: 8px;
}

.reqdemo-mobile {
	button {
		width: 100%;
		padding: 16px 24px;
		border-radius: 12px;
	}
}

.search {
	&-container {
		position: relative;

		input {
			width: 100% !important;
			&::placeholder {
				font-size: 12px;
			}
		}
	}
	&-button {
		position: absolute;
		right: 12px;
		top: 9px;
		padding: 0;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
}
</style>
