<template>
	<div v-if="banners.length > 0 || writings.length > 0 || articles.length > 0">
		<main class="site-main">
			<!-- Hero -->
			<section>
				<template v-if="banners.length > 0">
					<homepageHero :reviews="banners" />
				</template>
			</section>

			<LinkCopied />

			<!-- Random Journal -->
			<section id="solution">
				<homepageJournals :journals="writings" />
			</section>

			<!-- Our Products -->
			<section class="articles pv-64">
				<homepageArticles :articles="articles" />
			</section>
		</main>
	</div>
	<div v-else>
		<Empty />
	</div>
</template>

<script>
export default {
	auth: false,
	async asyncData({ $axios, error, $catch500, $catch401, $catch404 }) {
		try {
			const [writings] = await Promise.all([
				$axios.$get(`${process.env.BASE_URL}/api/journals`)
			])
			const [banners] = await Promise.all([
				$axios.$get(`${process.env.BASE_URL}/api/banners`)
			])
			const [articles] = await Promise.all([
				$axios.$get(`${process.env.BASE_URL}/api/articles`)
			])
			return {
				writings: writings.data,
				banners: banners.data,
				articles: articles.data
			}
		} catch (e) {
			if (e.response.status === 401) {
				error($catch401)
			} else if (e.response.status === 404) {
				error($catch404)
			} else {
				error($catch500)
			}
		}
	},
	data() {
		return {
			isOut: false,
			currentSlide: {},
			currentIndex: 0,
			linkCopied: true
		}
	},
	head() {
		return {
			title: 'Bagitulis - Repository Jurnal dan Karya Tulis Online',
			...this.$SEOMeta({
				metaTitle: 'Bagitulis - Repository Jurnal dan Karya Tulis Online',
				metaDesc:
					'Bagitulis adalah website yang menyediakan dan menampung Jurnal dan Karya Tulis ilmiah maupun non-ilmiah secara online'
			})
		}
	},
	methods: {
		prevSlide() {
			this.$refs.reviewSlides.prev()
		},
		nextSlide() {
			this.$refs.reviewSlides.next()
		},
		changeSlider(index) {
			this.currentIndex = index
			this.currentSlide = this.reviews[index]
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-top: 24px;
}

.square {
	position: absolute;
	bottom: 0;
	z-index: -1;
}

.bg-white {
	background-color: #fff !important;
}

.slide {
	&-wrapper {
		justify-content: space-between;
		gap: 64px;
	}
}

.review {
	background-color: #f6f8fb;
	padding-inline: 16px;
	@media #{$medium} {
		padding-inline: 0;
	}
	&-head {
		margin-bottom: 80px;
		@media #{$large} {
		}
		.title {
			color: $tc-head;
			font-size: 30px;
			@media #{$medium} {
				font-size: 40px;
			}
		}
		.subtitle {
			margin: 0 auto;
			width: 100%;
			max-width: 581px;
			color: #6e7692;
		}
	}

	// /deep/ {
	// 	.slick-slider {
	// 		@media #{$large} {
	// 			position: relative;
	// 			&::before {
	// 				content: '';
	// 				height: 100%;
	// 				position: absolute;
	// 				left: 0;
	// 				z-index: 2;
	// 				background-image: linear-gradient(
	// 					to left,
	// 					rgba(255, 255, 255, 0),
	// 					white
	// 				);
	// 				@media #{$extra_large} {
	// 					width: 750px;
	// 				}
	// 				// background: black;
	// 			}
	// 			&::after {
	// 				content: '';
	// 				height: 100%;
	// 				position: absolute;
	// 				width: 350px;
	// 				right: 0;
	// 				z-index: 2;
	// 				background-image: linear-gradient(
	// 					to right,
	// 					rgba(255, 255, 255, 0),
	// 					white
	// 				);
	// 				top: 0;
	// 				@media #{$extra_large} {
	// 					width: 750px;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	:not(.slick-active) {
	// 		.slide-right {
	// 			opacity: 1;
	// 		}
	// 	}

	// 	.slick-active {
	// 		.slide-left {
	// 			opacity: 1;
	// 		}

	// 		.slide-right {
	// 			transform: translateX(0) scale(1);

	// 			opacity: 1;
	// 			@media #{$large} {
	// 				margin-inline: 40px;
	// 			}
	// 		}
	// 	}
	// }

	&-slide {
		margin-bottom: 0;
		@media #{$medium} {
			margin-bottom: 80px;
		}
		.slide {
			&-left {
				.review-picture {
					width: 340px;
				}
			}
			&-right {
				width: 100%;
				max-width: 584px;
				flex-direction: column;
				justify-content: space-between !important;
				@media #{$large} {
					height: 300px;
				}
			}

			&-brand {
				margin: 0 auto;
			}

			&-text {
				color: #505565;
				font-size: 24px;
				font-weight: 400;
			}

			&-bio {
				.name {
					font-size: 20px;
					font-weight: 600;
					color: $tc-head;
					line-height: 24px;
				}

				.info {
					color: #6e7692;
				}
			}
		}
	}

	&-arrow {
		gap: 32px;
		.index {
			font-size: 20px;
			color: $primary;
			.slide {
				&-total {
					opacity: 0.6;
					font-weight: 600;
				}
				&-current {
					font-weight: 600;
				}
			}
		}
		.arrow {
			gap: 16px;
			.bzi {
				font-size: 24px;
			}
			&-button {
				border: none;
				background: transparent;
				color: $primary;
				cursor: pointer;

				&:disabled {
					color: $primary;
					pointer-events: none;
					cursor: not-allowed;
					opacity: 0.6;
				}
			}
		}
	}

	.mb-80 {
		margin-bottom: 80px;
	}
}

.articles {
	&-head {
		color: $black;
	}

	&-text {
		color: $tc-subtext;
		font-size: 20px;
	}
}

.parent {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.div1 {
	grid-area: 1 / 1 / 4 / 3;
}
.div2 {
	grid-area: 1 / 3 / 2 / 4;
}
.div3 {
	grid-area: 2 / 3 / 3 / 4;
}
.div4 {
	grid-area: 3 / 3 / 4 / 4;
}
</style>
