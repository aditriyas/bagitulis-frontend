<template>
	<main class="site-main">
		<div class="container">
			<div class="client">
				<div class="client-head text-center">
					<h1 class="title">Klien Unggulan</h1>
					<p class="subtitle">
						Platform kami cocok untuk perjalanan bisnis Anda yang sempurna!
						Ambil langkah terbaik Anda bersama kami.
					</p>
				</div>

				<div class="client-slide relative">
					<VueSlickCarousel
						ref="clientSlides"
						v-bind="clientSlidesConfig"
						class=""
					>
						<div v-for="(item, index) in clientSlides" :key="index">
							<div class="slide flex--wrap flex h-center">
								<img
									:src="item.slideImage"
									alt="Slide Image"
									title="Partner Logo"
									class="slide-image"
								/>
							</div>
						</div>
					</VueSlickCarousel>
				</div>

				<div class="client-card flex flex--wrap">
					<div v-for="(item, index) in clientCards" :key="index">
						<a
							:target="item.cardLink !== '#' ? '_blank' : ''"
							:title="item.cardText"
							:href="item.cardLink !== '#' ? item.cardLink : '#'"
						>
							<div class="client-card--wrapper">
								<img
									:src="item.cardImage"
									alt="Client Image"
									:title="item.cardText"
									class="card-image"
								/>
								<p
									class="card-text"
									:class="item.isBold === true ? 'text-bold' : ''"
								>
									{{ item.cardText }}
								</p>
								<p class="card-subtext">
									{{ item.cardSubtext }}
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	nuxtI18n: {
		paths: {
			id: '/klien-kami',
			en: '/our-client'
		}
	},
	data() {
		return {
			clientSlides: [
				{
					slideImage: '/assets/img/bi-client-logo.png'
				},
				{
					slideImage: '/assets/img/bukalapak-client-logo.png'
				},
				{
					slideImage: '/assets/img/sesa-client-logo.png'
				},
				{
					slideImage: '/assets/img/hijup-client-logo.png'
				},
				{
					slideImage: '/assets/img/klink-client-logo.png'
				},
				{
					slideImage: '/assets/img/mise-client-logo.png'
				},
				{
					slideImage: '/assets/img/bukalapak-client-logo.png'
				}
			],
			clientCards: [
				{
					cardImage: '/assets/img/client-card-1.png',
					cardText: 'Bukalapak',
					cardSubtext:
						'Aplikasi website dan Android dari marketplace C2C terbesar di Indonesia',
					isBold: true,
					cardLink: 'https://www.bukalapak.com'
				},
				{
					cardImage: '/assets/img/client-card-2.png',
					cardText: 'HIJUP',
					cardSubtext:
						'Aplikasi website dan iOS dari E-Commerce Pakaian Muslim Terbesar di Indonesia',
					cardLink: 'https://www.hijup.com/id/'
				},
				{
					cardImage: '/assets/img/client-card-3.png',
					cardText: 'Bank Indonesia',
					cardSubtext:
						'Pasar pesantren secara virtual - didukung oleh bank pusat di Indonesia',
					cardLink: 'https://www.bi.go.id/id'
				},
				{
					cardImage: '/assets/img/client-card-4.png',
					cardText: 'SESA.ID',
					cardSubtext: 'Website E-Commerce untuk menjual makanan organik',
					cardLink: 'https://sesa.id/'
				},
				{
					cardImage: '/assets/img/mise-page-img.png',
					cardText: 'MISE.ID',
					cardSubtext: 'E-Commerce untuk marketing bisnis multi-level',
					cardLink: '#'
				},
				{
					cardImage: '/assets/img/client-card-5.png',
					cardText: 'K-LINK',
					cardSubtext: 'Aplikasi Android dan iOs untuk E-Commerce multi-level',
					cardLink: 'https://www.k-net.co.id/'
				}
			],
			clientSlidesConfig: {
				arrows: false,
				dots: false,
				autoplay: true,
				infinite: true,
				speed: 800,
				slidesToShow: 6,
				slidesToScroll: 1,
				swipeToSlide: false
			}
		}
	},
	head() {
		return {
			title: 'Klien Kami - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Klien Kami - RocketMall',
				metaImage:
					'https://rocketmall-landlord-frontend.suitdev.com/assets/img/client-card-1.png',
				metaDesc:
					'Informasi terkait klien-klien yang sudah pernah berkerjasama dengan kami.'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-block: 56px;
	@media #{$medium} {
		padding: 56px 0 128px 0;
	}
}

.client {
	&-head {
		margin-bottom: 56px;
		.title {
			font-weight: 600;
			font-size: 35px;
			color: $tc-head;
			margin-bottom: 24px;
			@media #{$medium} {
				font-size: 56px;
			}
		}

		.subtitle {
			width: 100%;
			max-width: 542px;
			margin: 0 auto;
			font-size: 14px;
			color: #505565;
			@media #{$medium} {
				font-size: 1em;
			}
		}
	}

	&-slide {
		margin-bottom: 64px;
		&::before {
			content: '';
			position: absolute;
			z-index: 2;
			width: 100%;
			max-width: 40%;
			background-image: linear-gradient(
				to right,
				rgba(255, 255, 255, 1),
				rgba(255, 255, 255, 0)
			);
			height: 100%;
		}

		&::after {
			content: '';
			right: 0;
			position: absolute;
			z-index: 2;
			width: 100%;
			max-width: 40%;
			background-image: linear-gradient(
				to left,
				rgba(255, 255, 255, 1),
				rgba(255, 255, 255, 0)
			);
			height: 100%;
			top: 0;
		}

		/deep/ {
			.slick-track {
				display: flex;
				align-items: center;
				gap: 24px;
			}
		}

		.slide {
			&-image {
				// width: 112px;
			}
		}
	}

	&-card {
		justify-content: center;
		@media #{$medium} {
			justify-content: space-between;
			row-gap: 68px;
		}

		&--wrapper {
			margin-bottom: 40px;
			@media #{$medium} {
				margin-bottom: 0;
			}

			.card {
				&-image {
					width: 358px;
					box-shadow: 0px 4px 32px 0px rgba(0, 14, 51, 0.08);
					margin-bottom: 24px;
				}

				&-text {
					color: #000000;
					font-size: 24px;
					font-weight: 600;
					margin-bottom: 4px;

					@media #{$medium} {
						margin-bottom: 8px;
					}
				}

				&-subtext {
					color: #505565;
					width: 100%;
					max-width: 357px;
				}
			}
		}
	}
}
</style>
