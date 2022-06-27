<template>
	<main class="site-main">
		<section id="hero" class="">
			<div class="hero">
				<div class="container">
					<div class="hero-wrapper text-center pt-40">
						<h1 class="hero-title">E-commerce Multi-vendor</h1>
						<p class="hero-subtitle">
							Kuasai pasar dengan solusi bisnis yang tepat dan tingkatkan bisnis
							Anda dengan cepat menggunakan platform eCommerce Multi-vendor
							RocketMall. Jual lebih banyak secara online ke semua orang, kapan
							pun dan dimana pun.
						</p>
						<nuxt-link
							class="text-white"
							:to="localePath('/minta-demo')"
							title="Minta Demo"
						>
							<button class="hero-button btn btn--primary text-cap">
								Permintaan Demo
							</button>
						</nuxt-link>
						<img
							src="/assets/img/ecommerce-hero.png"
							alt="Ecommerce Hero"
							title="E-commerce"
							class="hero-image"
						/>
					</div>
				</div>
			</div>
		</section>

		<section id="products">
			<div class="products pv-60">
				<div class="container">
					<div class="products-head text-center mb-32">
						<h1 class="products-title">Apa saja yang kami sediakan?</h1>
						<p class="products-subtitle">
							Dapatkan semua solusi bisnis yang tepat untuk E-Commerce hebat
							dengan RocketMall Multi-Vendor Solutions. Jual lebih banyak secara
							online ke semua orang, kapan pun dan di mana pun.
						</p>
					</div>
					<productSlide :slides="slides" :is-out="isOut" />
				</div>
			</div>
		</section>

		<section id="choose">
			<div class="choose">
				<div class="choose-wrapper">
					<div class="container">
						<div class="choose-head text-center">
							<h1 class="title">Kenapa Pilih Kami?</h1>
							<p class="subtitle">
								Dapatkan manfaat berlipat ganda untuk laman Anda bersama
								RocketMall.
							</p>
						</div>
						<div class="choose-body flex">
							<div
								v-for="(card, index) in cards"
								:key="index"
								class="choose-body--card flex flex--wrap v-center"
							>
								<img
									:src="card.cardImage"
									alt="Card"
									:title="card.cardTitle"
									class="card-image"
								/>
								<div class="card-text">
									<p class="card-text--title mb-8">{{ card.cardTitle }}</p>
									<p class="card-text--subtitle mb-0">
										{{ card.cardSubtitle }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="demo">
			<Demo :demo="demo" :title="demo.title" :sub-title="demo.subTitle" />
		</section>
	</main>
</template>

<script>
export default {
	nuxtI18n: {
		paths: {
			id: '/produk/e-commerce',
			en: '/product/e-commerce'
		}
	},
	data() {
		return {
			isOut: false,
			demo: [
				{
					title: 'Mari mulai langkah pertama Anda dengan RocketMall sekarang',
					subTitle:
						'Coba RocketMall secara gratis, dan kembangkan bisnis Anda lebih dari yang dibayangkan!',
					path: '/minta-demo',
					pathName: 'Permintaan Demo'
				}
			],
			slides: [
				{
					id: 1,
					slideImage: '/assets/img/product-slide-1.png',
					textTop: 'Fitur multi-vendor siap digunakan',
					textBottom:
						'Kami menyediakan fitur multi-vendor yang siap digunakan. Anda dapat memaksimalkan potensi e-commerce Anda dengan mengundang banyak seller dan dapat mengontrol kegiatan seller dengan mudah. Tingkatkan trafik laman Anda dengan menggunakan e-commerce multi-vendor. '
				},
				{
					id: 2,
					slideImage: '/assets/img/product-slide-2.png',
					textTop: 'Menyesuaikan dengan desain Anda',
					textBottom:
						'Kami menyediakan desain yang disesuaikan dengan brand Anda. Temukan template desain yang memukau dan sesuaikan dengan bisnis Anda. '
				},
				{
					id: 3,
					slideImage: '/assets/img/product-slide-3.png',
					textTop: 'Penjual pusat yang kuat',
					textBottom:
						'Mengelola aktivitas penjualan pada konsep all-in-one. Dengan penjual pusat kami yang kuat, kami membuat semudah mungkin untuk Anda memulai penjualan. Dapatkan wawasan tentang performa toko Anda yang akan membantu Anda membuat keputusan bisnis yang kritis.'
				},
				{
					id: 4,
					slideImage: '/assets/img/product-slide-4.png',
					textTop: 'Jasa mobile siap digunakan',
					textBottom:
						'Kami juga menyediakan solusi mobile untuk Anda. Anda dapat memiliki storefront dan seller mobile app sendiri, jadi penjual dan pembeli dapat dengan mudah berbisnis melalui mobile.'
				},
				{
					id: 5,
					slideImage: '/assets/img/product-slide-5.png',
					textTop: 'Performa yang gesit',
					textBottom:
						'Kami akan memastikan laman Anda akan terus berjalan seharian penuh- tidak perlu khawatir mengenai jalannya teknis dan manfaatkan waktu untuk fokus pada bisnis Anda.'
				},
				{
					id: 6,
					slideImage: '/assets/img/product-slide-6.png',
					textTop: 'Tersedia bantuan profesional dan perbaikan',
					textBottom:
						'Tim profesional kami akan mengembangkan laman Anda. Kami akan memastikan laman Anda terintegrasi dengan fitur dan teknologi terbaru. Dari pengembangan hingga perbaikan, laman Anda terjamin berada di tangan yang tepat.'
				}
			],
			cards: [
				{
					cardImage: '/assets/img/solutions-card-3.png',
					cardTitle: 'Dapatkan asisten pribadi',
					cardSubtitle:
						'Anda tidak perlu khawatir tentang segalanya. Kami akan menemai Anda dengan semua kebutuhan bisnis Anda dari A hingga Z.'
				},
				{
					cardImage: '/assets/img/choose-card-1.png',
					cardTitle: 'Membership yang fleksibel',
					cardSubtitle:
						'Kami selalu peduli tentang kenyamanan pelanggan. Anda bisa memilih membayar sebulan sekali atau setahun sekali, disesuaikan dengan kebutuhan bisnis Anda.'
				},
				{
					cardImage: '/assets/img/solutions-card-2.png',
					cardTitle: 'Dashboard yang terhubung',
					cardSubtitle:
						'Kami menghubungkan semua penjual dengan rancangan yang berbeda dan mengelolanya dalam dashboard yang terhubung satu sama lain.'
				},
				{
					cardImage: '/assets/img/solutions-card-1.png',
					cardTitle: 'Menyesuaikan desain Anda',
					cardSubtitle:
						'Kami dapat memenuhi desain brand ideal Anda menjadi nyata dengan fitur yang dapat menyesuaikan dengan desain Anda.'
				}
			]
		}
	},
	head() {
		return {
			title: 'Multi Vendor E-Commerce - RocketMalll',
			...this.$SEOMeta({
				metaTitle: 'Multi Vendor E-Commerce - RocketMalll',
				metaImage:
					'https://rocketmall-landlord-frontend.suitdev.com/assets/img/ecommerce-hero.png',
				metaDesc:
					'Multi Vendor E-Commerce merupakan produk utama RocketMall. Produk ini memberikan kemudahan kepada penjual untuk mengembangkan bisnis pada satu platform.'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.hero {
	background: #e5f3ff;

	&-title {
		color: $tc-head;
		font-size: 35px;

		@media #{$medium} {
			font-size: 48px;
		}
	}

	&-subtitle {
		color: #6e7692;
		font-size: 16px;
		width: 100%;
		max-width: 818px;
		margin: 0 auto;
		margin-bottom: 33px;
		@media #{$medium} {
			font-size: 20px;
		}
	}

	&-button {
		padding: 20px 86.5px;
		border-radius: 12px;
	}
}

.products {
	&-title {
		font-size: 25px;
		color: $tc-head;
		@media #{$medium} {
			font-size: 40px;
		}
	}

	&-subtitle {
		color: #6e7692;
		font-size: 16px;
		width: 100%;
		max-width: 806px;
		margin: 0 auto;
		@media #{$medium} {
			font-size: 20px;
		}
	}
}

.choose {
	background-color: #f6f8fb;

	&-wrapper {
		padding-top: 72px;
	}
	&-head {
		padding-bottom: 56px;
		.title {
			color: $tc-head;
			font-size: 35px;

			@media #{$medium} {
				font-size: 40px;
			}
		}

		.subtitle {
			color: #6e7692;
			font-size: 16px;

			@media #{$medium} {
				font-size: 20px;
			}
		}
	}

	&-body {
		flex-wrap: wrap;
		justify-content: center;
		gap: 32px;
		padding-bottom: 120px;
		&--card {
			background-color: $white;
			box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
			width: 544px;
			border-radius: 16px;
			justify-content: center;
			gap: 32px;
			padding: 27px;
			.card-text {
				&--title {
					font-size: 24px;
					color: $tc-head;
					font-weight: 600;
					margin-bottom: 12px;
				}

				&--subtitle {
					color: #6e7692;
					width: 100%;
					max-width: 287px;
					line-height: 28px;
				}
			}

			.card-image {
				height: 128px;
			}
		}
	}
}
</style>
