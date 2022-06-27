<template>
	<main class="site-main pt-40">
		<div class="about">
			<section class="about-one">
				<div class="container">
					<div class="about-one--head text-center">
						<h1 class="title mb-24">
							RocketMall membuat pengalaman e-commerce Anda
							<span class="text-primary">lebih baik dari platform lain</span>
						</h1>
						<p class="subtitle">
							Kami platform terkemuka untuk berbagai solusi e-commerce
						</p>
					</div>
					<div class="about-one--image text-center">
						<img
							src="/assets/img/about-image-1.png"
							alt="About Image 1"
							title="RocketMall"
							class="image"
						/>
					</div>
					<div class="about-one--content text-center">
						<p class="content-one mb-32">
							E-commerce Multi-vendor RocketMall adalah sebuah produk dari
							Suitmedia yang menawarkan SaaS (software as a service) sebagai
							konsep utama. Kami menyediakan fitur-fitur yang fleksibel untuk
							memberikan kewenangan kepada vendor.
						</p>
						<p class="content-two mb-72">
							Terdapat lebih dari 50+ klien yang telah bergabung dengan
							RocketMall dan mempercayakan jasa kami, seperti Bukalapak.com dan
							Hijup.com. Kami membantu klien untuk mencapai tujuan dengan
							membuat platform all-in-one.
						</p>
					</div>
				</div>
			</section>

			<section class="about-two pv-72">
				<div class="container flex flex--wrap">
					<div class="about-two--left">
						<h1 class="title mb-40">
							Membuat
							<span class="text-primary">platform yang mudah</span> digunakan
							untuk memulai bisnis
						</h1>
						<div class="text">
							<p class="text-one">
								Misi RocketMall sebagai platform multi-vendor adalah membantu
								pebisnis mengembangkan bisnis mereka secara efisien di satu
								tempat.
							</p>
							<p class="text-two">
								Kami memiliki semua solusi yang Anda butuhkan, seperti Order
								Management System (OMS), Online to Offline (O2O), Loyalty
								System, dan masih banyak lagi.
							</p>
						</div>
					</div>
					<div class="about-two--right">
						<img
							src="/assets/img/about-image-2.png"
							alt="About Image 2"
							title="RocketMall"
							class="image"
						/>
					</div>
				</div>
			</section>

			<section class="about-three pv-72">
				<div class="about-three--head text-center mb-40">
					<h1 class="title mb-24">
						Terhubung dengan beberapa
						<span class="text-primary">perusahaan terbaik</span> di mancanegara
					</h1>
					<p class="subtitle">
						Kami memilih perusahaan terbaik di Indonesia sebagai partner kami
						untuk menuntun bisnis Anda. Untuk membuat siklus bisnis yang
						efisien, profesional, dan gesit.
					</p>
				</div>

				<div class="about-three--brands h-center flex mb-40 flex--wrap">
					<img
						v-for="(item, index) in brands"
						:key="index"
						:src="item.image"
						alt=""
						title="About Image"
					/>
				</div>

				<div class="about-three--image text-center">
					<img
						src="/assets/img/about-image-3.png"
						alt="About Image 3"
						title="RocketMall"
						class="image"
					/>
				</div>
			</section>

			<Demo :demo="demo" />
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			demo: [
				{
					title: 'Ambil langkah selanjutnya bersama RocketMall',
					subTitle:
						'Coba gratis RocketMall dan kembangkan bisnis Anda dari yang dibayangkan!',
					path: '/hubungi-kami',
					pathName: 'Kontak Kami'
				}
			],
			brands: [
				{
					image: '/assets/img/Mise.png'
				},
				{
					image: '/assets/img/K-Link.png'
				},
				{
					image: '/assets/img/Bukalapak.png'
				},
				{
					image: '/assets/img/Hijup.png'
				},
				{
					image: '/assets/img/Bank Indonesia.png'
				},
				{
					image: '/assets/img/Sesa.png'
				}
			]
		}
	},
	head() {
		return {
			title: 'Tentang Kami - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Tentang Kami - RocketMall',
				metaImage:
					'https://rocketmall-landlord-frontend.suitdev.com/assets/img/about-image-1.png',
				metaDesc:
					'Ketahui selengkapnya tentang produk dan pelayanan kami disini'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.about {
	&-one {
		p {
			color: #6e7692;
			font-size: 20px;
			line-height: 32px;
			font-weight: 400;
		}
		&--head {
			margin-bottom: 88px;

			.title {
				width: 100%;
				max-width: 827px;
				margin: 0 auto;
				color: $tc-head;
				font-weight: 600;
				font-size: 30px;
				line-height: 40px;
				@media #{$medium} {
					font-size: 38px;
					line-height: 56px;
				}
			}

			.subtitle {
				font-size: 18px;
				@media #{$medium} {
					font-size: 20px;
				}
			}
		}

		&--image {
			margin-bottom: 104px;
		}

		&--content {
			.content {
				&-one {
					width: 100%;
					max-width: 929px;
					margin: 0 auto;
					font-size: 16px;
					@media #{$medium} {
						font-size: 20px;
					}
				}

				&-two {
					width: 100%;
					max-width: 898px;
					margin: 0 auto;
					font-size: 16px;
					@media #{$medium} {
						font-size: 20px;
					}
				}
			}
		}
	}

	&-two {
		background: #f6f8fb;

		.container {
			justify-content: space-evenly;
		}

		&--left {
			.title {
				width: 100%;
				max-width: 522px;
				font-weight: 600;
				color: $tc-head;
				line-height: 45px;
				font-size: 30px;
				@media #{$medium} {
					line-height: 56px;
					font-size: 40px;
				}
			}

			.text {
				p {
					width: 100%;
					max-width: 548px;
					line-height: 40px;
					color: #6e7692;
					font-size: 17px;
					@media #{$medium} {
						font-size: 20px;
					}
				}
			}
		}
	}

	&-three {
		&--head {
			padding-inline: 16px;
			@media #{$medium} {
				padding: 0;
			}
			.title {
				color: $tc-head;
				font-weight: 600;
				max-width: 822px;
				margin: 0 auto;
				font-size: 30px;
				line-height: 45px;
				@media #{$medium} {
					line-height: 56px;
					font-size: 40px;
				}
			}

			.subtitle {
				width: 100%;
				max-width: 868px;
				margin: 0 auto;
				color: #6e7692;
				font-size: 15px;
				line-height: 35px;
				@media #{$medium} {
					font-size: 20px;
					line-height: 40px;
				}
			}
		}
		&--brands {
			gap: 32px;
			img {
				width: auto;
				height: 40px;
			}
		}
	}
}
</style>
