<template>
	<main class="site-main pt-40">
		<div class="bzg success">
			<div class="bzg_c success-left flex v-center" data-col="m5">
				<div class="success-text">
					<h1 class="title">Terima kasih telah menghubungi kami!</h1>
					<p class="subtitle mb-40">
						Kami akan menjawab pertanyaan atau umpan balik dari anda segera
						melalui email. Mohon cek email Anda secara rutin.
					</p>
					<nuxt-link
						class="text-white"
						:to="localePath('/')"
						title="Hubungi Kami"
					>
						<button class="btn btn--primary text-cap">
							Kembali ke Beranda
						</button>
					</nuxt-link>
				</div>
			</div>
			<div class="bzg_c success-right" data-col="m6" style="height: 100%">
				<img
					src="/assets/img/success.jpg"
					alt="Success Img"
					title="Sukses"
					class="succes-image"
				/>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	nuxtI18n: {
		paths: {
			id: '/hubungi-kami/sukses',
			en: '/contact-us/success'
		}
	},
	head() {
		return {
			title: 'Hubungi Kami Sukses- RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Hubungi Kami Sukses - RocketMall',
				metaImage:
					'https://rocketmall-landlord-frontend.suitdev.com/assets/img/minta-demo-success-image.png',
				metaDesc:
					'Sukses terhubung dengan RocketMall. Dapatkan informasi lain yang Anda butuhkan melalui kontak kami.'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-top: 45px;
	background: white;
	// height: 100%;
}
.bzg {
	justify-content: flex-end;
	gap: 24px;
	flex-wrap: wrap-reverse !important;
}

.success {
	&-left {
		padding-left: 40px;
	}

	&-right {
		padding-left: 0;
	}

	&-text {
		.title {
			font-size: 48px;
			color: $tc-head;
			line-height: 64px;
			max-width: 537px;
			width: 100%;
		}

		.subtitle {
			color: #6e7692;
			font-size: 20px;
			max-width: 450px;
			width: 100%;
			line-height: 32px;
		}

		.btn {
			padding: 20px 70px;
			border-radius: 8px;
			margin-bottom: 120px;
		}
	}
}
</style>
