<template>
	<header class="site-header">
		<div class="container">
			<!-- Logo -->
			<Logo />
			<!-- Nav -->
			<div class="header-nav">
				<div class="nav-container">
					<nav class="main-nav">
						<ul class="list-nostyle main-nav__wrapper v-center">
							<li
								class="main-nav__item flex"
								@mouseover="showCategoryDropdown = true"
								@mouseleave="showCategoryDropdown = false"
							>
								<div class="product-container flex v-center relative">
									<button
										class="popup-button"
										:class="showCategoryDropdown === true ? 'text-primary' : ''"
									>
										Kategori
										<span
											class="bzi"
											:class="
												showCategoryDropdown === true
													? 'bzi-Caret-up'
													: 'bzi-Caret-down'
											"
										></span>
									</button>
									<!-- Products Popup -->
									<div
										v-show="showCategoryDropdown === true"
										class="product-dropdown"
									>
										<ul class="product-list mb-0">
											<li
												v-for="category in categories"
												:key="category.id"
												class="product-list--item flex f-space-between"
											>
												<nuxt-link
													class="product-link journal-link"
													:class="category.isDisabled ? 'disabled' : ''"
													:to="localePath(`/karya-tulis/${category.link}`)"
													title="Category"
													exact
													@click.native="showCategoryDropdown = false"
												>
													{{ category.name }}
													<span
														v-if="category.comingSoon === true"
														class="coming-soon text-cap text-center"
														>coming soon</span
													>
												</nuxt-link>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="main-nav__item flex">
								<nuxt-link
									:to="localePath('/hubungi-kami')"
									class="header-link"
									title="Hubungi Kami"
									>{{ $t('contactUs') }}</nuxt-link
								>
							</li>
							<li class="main-nav__item flex">
								<nuxt-link
									:to="localePath('/artikel')"
									class="header-link"
									title="Artikel"
									>{{ $t('article') }}</nuxt-link
								>
							</li>
							<li class="main-nav__item separator"></li>
							<template v-if="!$auth.loggedIn">
								<li class="main-nav__item flex">
									<nuxt-link
										:to="localePath('/masuk')"
										class="header-link"
										title="Login"
										>{{ $t('login') }}</nuxt-link
									>
								</li>
								<li class="main-nav__item flex">
									<nuxt-link
										:to="localePath('/daftar')"
										class="header-link"
										title="Register"
										>{{ $t('register') }}</nuxt-link
									>
								</li>
							</template>
							<template v-if="$auth.loggedIn">
								<li
									class="main-nav__item flex relative"
									@mouseover="showProfileDropdown = true"
									@mouseleave="showProfileDropdown = false"
								>
									<nuxt-link
										:to="localePath('/akun-saya')"
										class="header-link"
										title="Akun Saya"
										><img src="/assets/img/dummy-profile-pic.png" alt="" />
										<span class="text-black" style="text-transform: capitalize"
											>Hi, {{ $auth.user[0].name }}!</span
										>
									</nuxt-link>
									<div
										v-if="showProfileDropdown === true"
										class="profile-dropdown"
									>
										<div class="profile-dropdown--item" @click.prevent="logout">
											Logout
										</div>
										<nuxt-link
											class="profile-dropdown--item"
											:to="localePath('/akun-saya')"
											>Akun Saya</nuxt-link
										>
									</div>
								</li>
							</template>
							<li class="burger flex">
								<button
									class="burger-button"
									@click="$nuxt.$emit('toggleMobileNav')"
								>
									<span class="bzi bzi-Menu bzi-1_5x"></span>
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		<headerMobileNavbar
			:class="{ 'is-active': mobileNav }"
			:show-navbar="mobileNav"
			:main-nav-data="mainNav"
			:support-nav-data="supportNavs"
		/>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			showCategoryDropdown: false,
			showProfileDropdown: false,
			mobileNav: false,
			isSearch: false,
			supportNavs: [
				{
					title: 'Contact Us',
					url: 'contact-us'
				},
				{
					title: 'FAQ',
					url: 'faq'
				}
			],
			mainNav: [
				{
					title: 'kategori',
					child: [
						{
							title: `Semua`,
							url: 'karya-tulis'
						},
						{
							title: `${this.$t('journal')}`,
							url: 'karya-tulis/jurnal'
						},
						{
							title: `${this.$t('scientificWritings')}`,
							url: 'karya-tulis/ilmiah'
						},
						{
							title: `${this.$t('nonScientificWritings')}`,
							url: 'karya-tulis/non-ilmiah'
						}
					]
				},
				{
					title: `${this.$t('contactUs')}`,
					url: '/hubungi-kami'
				},
				{
					title: `${this.$t('article')}`,
					url: '/artikel'
				},
				{
					title: `${this.$t('login')}`,
					url: '/masuk'
				},
				{
					title: `${this.$t('register')}`,
					url: '/daftar'
				}
			],
			categories: [
				{
					id: 1,
					name: 'Semua',
					link: ''
				},
				{
					id: 2,
					name: `${this.$t('journal')}`,
					link: 'jurnal'
				},
				{
					id: 3,
					name: `${this.$t('scientificWritings')}`,
					link: 'ilmiah',
					isDisabled: false,
					comingSoon: false
				},
				{
					id: 4,
					name: `${this.$t('nonScientificWritings')}`,
					link: 'non-ilmiah',
					isDisabled: false,
					comingSoon: false
				}
			]
		}
	},
	created() {
		this.$nuxt.$on('toggleMobileNav', () => {
			this.mobileNav = !this.mobileNav
		})
	},
	mounted() {
		document.addEventListener('click', this.hideMobileNav)
		document.addEventListener('click', this.hideOpts)
	},
	destroyed() {
		document.removeEventListener('click', this.hideMobileNav)
		document.removeEventListener('click', this.hideOpts)
	},
	methods: {
		async logout() {
			try {
				await this.$auth.logout()
			} catch (e) {
				console.log(e)
			}
		},
		hideOpts(e) {
			if (!this.$el.contains(e.target.closest('.popup-button'))) {
				this.showCategoryDropdown = false
			}
		},
		hideMobileNav(e) {
			if (!this.$el.contains(e.target)) {
				this.mobileNav = false
			}
		}
	}
}
</script>

<style lang="scss">
.site-header {
	display: flex;
	position: fixed;
	z-index: 2;
	top: 0;
	width: 100%;
	background-color: #fff;
	height: 60px;
	border-bottom: 2px solid $primary;

	& > .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&.transparent-header {
		background: transparent;

		.header-link {
			color: #fff;

			&:hover {
				color: $black20;
			}
		}
	}

	@media #{$large} {
		height: 72px;
	}
}

.journal-link {
	width: 100%;
}

.separator {
	&::before {
		content: '';
		background: #ccc !important;
		width: 1px;
		height: 15px;
	}
}

.burger {
	align-items: center;
	display: flex;
	@media #{$large} {
		display: none;
	}

	&-button {
		border: none;
		background: transparent;
		cursor: pointer;
	}
}
.main-nav {
	& > ul {
		display: flex;
		gap: 40px;
		align-items: center;
	}
	&__item {
		gap: 8px;
		font-weight: 500;
		font-size: 16px;
		display: none;
		align-items: center;
		cursor: pointer;
		height: 100%;
		color: $tc-head;

		@media #{$large} {
			display: flex;
		}

		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}

		a {
			color: $tc-head;
			gap: 8px;
			display: flex;
			align-items: center;

			&:hover {
				color: $primary;
			}
		}

		.nuxt-link-active {
			color: $primary;
		}

		.bzi {
			font-size: 24px;
		}

		.request-button {
			padding: 12px 26.5px;
			border-radius: 8px;
			font-size: 14px;
		}

		.popup-button {
			background: transparent;
			border: none;
			padding: 0;
			cursor: pointer;
		}

		.product {
			&-dropdown {
				width: 220px;
				background-color: $white;
				position: absolute;
				box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
				top: 40px;
				right: 0;
				left: -60px;
				border-radius: 8px;
				padding: 8px;
			}

			&-list {
				padding-left: 0;

				.disabled {
					pointer-events: none;
					color: #b3b7c6;
				}

				&--item {
					padding: 8px;
					color: $tc-head;
					font-size: 14px;

					.coming-soon {
						box-sizing: border-box;
						width: 60px;
						display: inline-block;
						padding: 4px 2px;
						font-size: 8px;
						line-height: 12px;
						font-weight: 500;
						color: #6e7692;
						background-color: #eceff7;
						border-radius: 8px;
						border: 1px solid #6e7692;
					}

					&:disabled {
						color: #b3b7c6;
						pointer-events: none;
						opacity: 0.6;
					}

					&:hover {
						background-color: #f6f8fb;
						color: $tc-head;
						border-radius: 8px;
					}
				}
			}
		}
	}

	&__wrapper {
		height: 100%;
	}
}

.lang-switcher {
	display: none;

	@media #{$large} {
		display: flex;
	}
}

.popup-button {
	&:hover {
		color: $primary;
	}
}

.search {
	&-container {
		position: relative;
	}
	&-button {
		position: absolute;
		right: 10px;
		top: 2px;
		padding: 0;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
}

.profile-dropdown {
	position: absolute;
	width: max-content;
	background-color: #fff;
	padding: 0 24px;
	min-width: 200px;
	box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
	top: 60px;
	left: -30px;
	border-radius: 8px;
	font-size: 14px;

	&--item {
		padding: 12px 0;
		&:hover {
			color: $primary;
		}
		&:not(:last-child) {
			border-bottom: 1px solid $light-grey;
		}
	}
}

.search-container {
	input {
		font-size: 14px;
		color: $black;
	}
}
</style>
