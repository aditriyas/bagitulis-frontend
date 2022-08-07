<template>
	<nav class="mnav">
		<div class="container bg-white" @click="$nuxt.$emit('toggleMobileNav')">
			<ul class="link mnav-menu pv-24">
				<template v-if="$auth.loggedIn">
					<li class="mnav-menu mb-0">
						<div class="profile-container flex v-center">
							<nuxt-link :to="localePath('/akun-saya')">
								<img
									:src="
										$auth.user[0].photo === null
											? '/assets/img/dummy-profile-pic.png'
											: $auth.user[0].photo
									"
									:alt="$auth.user[0].name"
								/>
							</nuxt-link>
							<div class="info">
								<span class="name d-block">{{ $auth.user[0].name }}</span>
								<span class="email">{{ $auth.user[0].email }}</span>
							</div>
						</div>
						<hr class="mt-20 mb-0" />
					</li>
				</template>
				<li v-for="(nav, i) in mainNavData" :key="i">
					<template v-if="nav.loggedIn">
						<template v-if="$auth.loggedIn">
							<nuxt-link
								:to="localePath(`${nav.url}`)"
								title="Mobile Nav"
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
						</template>
					</template>
					<template v-else>
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
					</template>
				</li>
				<template v-if="!$auth.loggedIn">
					<li>
						<nuxt-link
							:to="localePath('/masuk')"
							class="d-block text-cap text-black pv-12 ph-24 mb-8"
							>Masuk</nuxt-link
						>
					</li>
					<li>
						<nuxt-link
							:to="localePath('/daftar')"
							class="d-block text-cap text-black pv-12 ph-24 mb-8"
							>Daftar</nuxt-link
						>
					</li>
				</template>
				<li class="reqdemo-mobile pt-8">
					<nuxt-link
						class="text-white"
						:to="localePath('/hubungi-kami')"
						title="Hubungi Kami"
					>
						<button class="btn--yellow request-button p-10">
							Hubungi Kami
						</button>
					</nuxt-link>
				</li>
				<li v-if="$auth.loggedIn" class="reqdemo-mobile pt-8">
					<nuxt-link
						class="text-white"
						:to="localePath('/hubungi-kami')"
						title="Hubungi Kami"
					>
						<button
							class="btn--primary request-button p-10"
							@click.prevent="logout()"
						>
							Logout
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
		},
		loggedIn: {
			type: Boolean,
			default: false
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
		},
		async logout() {
			try {
				await this.$auth.logout()
			} catch (e) {
				console.log(e)
			}
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
		box-shadow: 0px 3px 20px rgba(black, 0.4);
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

.nuxt-link-active {
	font-weight: bold;
	border-radius: 8px;
}

.reqdemo-mobile {
	button {
		width: 100%;
		padding: 16px 24px;
		border-radius: 8px;
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

.profile-container {
	gap: 20px;
	justify-content: center;
	.info {
		.name {
			text-transform: capitalize;
			font-size: 16px;
		}
	}
	img {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		object-fit: cover;
	}
}
</style>
