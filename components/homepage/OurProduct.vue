<template>
	<div class="ourproduct" :class="isOut === true ? 'isout' : ''">
		<div class="ourproduct-head text-center">
			<h1 class="head-title mb-16">Produk Kami</h1>
			<p class="head-subtitle">
				Kami menyediakan fitur yang tepat dan fleksibel untuk meningkatkan
				bisnis Anda.
			</p>
		</div>
		<div class="ourproduct-body flex v-center h-center flex--wrap">
			<div class="body-left">
				<p class="body-left--product">E-commerce Multi-vendor</p>
				<h2 class="body-left--title">
					Solusi kebutuhan
					<span class="text-primary">all-in-one</span> untuk perkembangan bisnis
					Anda.
				</h2>
			</div>
			<div class="body-right">
				<p class="body-right--text mb-16">
					Kami menyediakan semua kebutuhan e-commerce Anda. Jangan khawatir,
					kami berkomitmen penuh atas kesuksesan e-commerce Anda
				</p>
				<button class="btn btn--flat-primary body-right--button">
					<nuxt-link :to="localePath('/produk/e-commerce')" title="Products">
						Pelajari lebih lanjut <span class="bzi bzi-Arrow-right"></span
					></nuxt-link>
				</button>
			</div>
		</div>
		<div class="ourproduct-image flex h-center">
			<img
				src="assets/img/ourproducts-image.png"
				alt="Our Products Image"
				title="Our Products"
				class="image text-center"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isOut: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.isout {
	background-color: #e5f3ff !important;
}
.ourproduct {
	padding: 72px 16px 16px 16px;
	@media #{$medium} {
		padding: 72px 0 0 0;
	}

	&-head {
		margin-bottom: 56px;
		.head {
			&-title {
				color: $tc-head;
				font-size: 30px;
				font-weight: 700;
				@media #{$medium} {
					font-size: 40px;
				}
			}

			&-subtitle {
				color: #6e7692;
				font-size: 15px;
				max-width: 568px;
				width: 100%;
				margin: auto;
				@media #{$medium} {
					font-size: 20px;
				}
			}
		}
	}

	&-body {
		gap: 16px;
		margin-bottom: 56px;

		@media #{$large} {
			gap: 96px;
		}

		@media #{$medium} {
			padding: 0;
		}

		.body {
			&-left {
				&--product {
					font-weight: 700;
					color: $tc-head;
				}

				&--title {
					color: $tc-head;
					font-weight: 600;
					font-size: 30px;
					width: 100%;
					max-width: 381px;
					@media #{$medium} {
						font-size: 40px;
					}
				}
			}

			&-right {
				@media #{$medium} {
					padding-top: 25px;
				}
				&--text {
					color: #6e7692;
					font-size: 16px;
					width: 100%;
					max-width: 477px;
					@media #{$medium} {
						font-size: 20px;
					}
				}

				&--button {
					font-size: 16px;
					border: none;
					background: transparent;
					padding: 0;

					.bzi {
						font-size: 24px;
					}
				}
			}
		}
	}

	&-image {
		.image {
			width: 100%;
			max-width: 1229px;
		}
	}
}
</style>
