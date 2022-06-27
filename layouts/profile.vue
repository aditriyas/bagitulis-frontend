<template>
	<main class="site-main">
		<Header />

		<div class="container">
			<div class="bzg bzg--no-gutter profile">
				<div class="profile-nav profile-item bzg_c" data-col="m3">
					<div class="profile-info flex pt-0">
						<img src="/assets/img/dummy-profile-pic.png" alt="" />
						<div class="profile-info--text">
							<span class="name d-block">John Doe</span>
							<span class="email d-block">example@mail.com</span>
						</div>
					</div>
					<hr />
					<ul class="nav list-nostyle">
						<li class="nav-item">
							<nuxt-link :to="localePath('/akun-saya')" exact
								><span class="bzi bzi-Settings-alt bzi-1_5x"></span>Pengaturan
								Akun</nuxt-link
							>
						</li>
						<li class="nav-item">
							<nuxt-link
								:to="localePath('/akun-saya/karya-tulis-tersimpan')"
								exact
								><span class="bzi bzi-Book-mark bzi-1_5x"></span>Karya Tulis
								Tersimpan</nuxt-link
							>
						</li>
						<li class="nav-item">
							<nuxt-link :to="localePath('/akun-saya/karya-tulis-saya')" exact
								><span class="bzi bzi-Book-mark bzi-1_5x"></span>Karya Tulis
								Saya</nuxt-link
							>
						</li>
					</ul>
				</div>
				<div class="profile-content profile-item bzg_c" data-col="m8">
					<nuxt />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.site-main {
	padding-top: 70px;
}

.profile {
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 32px;
	@media #{$medium} {
		gap: 0px;
	}

	&-nav {
		height: max-content;
	}

	&-info {
		gap: 12px;
		align-items: center;
		// padding: 8px 8px;
		text-align: center;
		flex-wrap: wrap;
		justify-content: center;

		@media #{$large} {
			justify-content: center;
			text-align: left;
			gap: 24px;
			padding: 10px 16px;
			flex-wrap: nowrap;
		}
		&--text {
			.name {
				margin-bottom: 0;
				font-size: 20px;
				text-transform: capitalize;
				font-weight: bold;
			}
		}
		img {
			border-radius: 50%;
			width: 80px;
			height: 80px;
		}
	}
	&-item {
		border-radius: 16px;
		padding: 32px 24px;
		box-shadow: 0px 24px 56px 30px rgba(35, 39, 53, 0.08);
	}
}

.nav {
	&-item {
		cursor: pointer;
		color: $tc-head !important;
		border-radius: 12px;
		padding: 12px 8px;

		&:not(:last-child) {
			margin-bottom: 8px;
		}

		&:hover {
			background-color: $light-grey;
			border-radius: 12px;
		}

		& > .nuxt-link-active {
			color: $primary !important;
			font-weight: bold;
		}
		a {
			color: $tc-pbody !important;
			font-weight: bold;
		}
	}

	.bzi {
		padding-right: 12px;
	}
}
</style>
