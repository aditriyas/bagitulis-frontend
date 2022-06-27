<template>
	<main class="site-main">
		<!-- Hero -->
		<section>
			<homepageHero />
		</section>

		<LinkCopied />

		<!-- Random Journal -->
		<section id="solution">
			<homepageJournals :journals="posts" />
		</section>

		<!-- Our Products -->
		<section class="articles pt-64">
			<div class="container">
				<div class="articles-head text-center mb-64">
					<h1 class="articles-title mb-24">
						<span class="text-primary">Artikel </span> terkini
					</h1>
					<p class="articles-text">
						Artikel dan info terbaru yang mungkin dapat membantu Anda dalam
						menulis dan berkarya!
					</p>
				</div>
				<articlesArticleInsights
					:left-articles="leftArticles"
					:right-articles="rightArticles"
				/>
			</div>
		</section>

		<!-- Most Saved -->
		<section>
			<MostLiked :journals="posts" />
		</section>

		<!-- Banner -->
		<section>
			<Demo :demo="demo" :title="demo.title" :sub-title="demo.subTitle" />
		</section>
	</main>
</template>

<script>
import MostLiked from '../components/journals/MostLiked.vue'

export default {
	auth: false,
	components: { MostLiked },
	async asyncData({ $axios, error, $catch500, $catch401, $catch404 }) {
		try {
			const [posts] = await Promise.all([
				$axios.$get('https://62b331104f851f87f456726b.mockapi.io/api/journals')
			])
			return {
				posts: posts.data
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
			linkCopied: true,
			leftArticles: [
				{
					articleImage: '/assets/img/article-image-1.png',
					articleCategory: 'Business Insights',
					articleTitle: 'The 23 Most Profitable Business Opportunities in 2021',
					articleDate: 'September 21 2021'
				}
			],
			rightArticles: [
				{
					articleImage: '/assets/img/article-image-2.png',
					articleCategory: 'Business Insights',
					articleTitle: 'How to Make and Sell Stickers Online in 2021',
					articleDate: 'September 20 2021'
				},
				{
					articleImage: '/assets/img/article-image-2.png',
					articleCategory: 'Business Insights',
					articleTitle: 'How to Make and Sell Stickers Online in 2021',
					articleDate: 'September 20 2021'
				},
				{
					articleImage: '/assets/img/article-image-2.png',
					articleCategory: 'Business Insights',
					articleTitle: 'How to Make and Sell Stickers Online in 2021',
					articleDate: 'September 19 2021'
				}
			],
			demo: [
				{
					title: 'Ayo unggah Jurnal dan Karya Tulis kamu! ',
					subTitle: `"Ilmu itu adalah hasil panen/buruan dalam karung, menulis adalah ikatannya!"`,
					path: '/karya-tulis/ilmiah',
					pathName: 'Lihat Karya Tulis'
				}
			],
			slides: [
				{
					id: 1,
					slideImage: 'assets/img/comingsoon-slide-1.png',
					textTop: 'OMS',
					textMid: 'Memprofesionalkan performa bisnis Anda',
					textBottom:
						'Fasilitasi bisnis Anda dengan order management system untuk meminimalisir perbedaan penjualan.'
				},
				{
					id: 2,
					slideImage: 'assets/img/comingsoon-slide-2.png',
					textTop: 'WMS',
					textMid: 'Kelola penyimpanan e-commerce dengan sederhana',
					textBottom:
						'Mengoptimalkan inventaris dan penyimpanan Anda dengan tempat penyimpanan yang lancar dan solusi-solusi pemenuhan'
				},
				{
					id: 3,
					slideImage: 'assets/img/comingsoon-slide-3.png',
					textTop: 'O2O',
					textMid: 'Merealisasikan toko online Anda',
					textBottom:
						'Tidak hanya melalui online, kami juga akan membantu operasional offline dengan tim profesional kami'
				},
				{
					id: 4,
					slideImage: 'assets/img/comingsoon-slide-4.png',
					textTop: 'Loyalty System',
					textMid: 'Menjaga pelanggan setia, menarik lebih banyak',
					textBottom:
						'Membangun hubungan jangka panjang dengan pelanggan dengan loyalty solution kami'
				}
			],
			reviews: [
				{
					reviewBrand: 'assets/img/adhi-testimony.png',
					reviewText:
						'"Great support and wide knowledge on creating marketplace website."',
					reviewName: 'Rangga Maulana',
					reviewInfo: 'Adhi Karya Marketplace'
				},
				{
					reviewBrand: 'assets/img/klink-testimony.png',
					reviewText:
						'"Suitmedia was helpfull when find out solutions. Some of problems solve with their idea. Now, our members use this apps and they are happy."',
					reviewName: 'Nandang Hermansyah',
					reviewInfo: 'IT Manager of K-Link'
				},
				{
					reviewBrand: 'assets/img/courts-testimony.png',
					reviewText: `"We've been working closely since 2014. Our E -Commerce business growth also with support from Suitmedia. Keep up the Good work!"`,
					reviewName: 'Pramudya Bayu Sasongko',
					reviewInfo: 'Head Marketing & E-Commerce of COURTS'
				}
			],
			journals: [
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				},
				{
					img: 'assets/img/jurnal-img-1.png',
					title: 'lorem ipsum dolor sit amet, consectetur',
					author: 'John Parment',
					subtitle:
						'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur'
				}
			]
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

	/deep/ {
		.slick-slider {
			@media #{$large} {
				position: relative;
				&::before {
					content: '';
					height: 100%;
					position: absolute;
					left: 0;
					z-index: 2;
					background-image: linear-gradient(
						to left,
						rgba(255, 255, 255, 0),
						white
					);
					@media #{$extra_large} {
						width: 750px;
					}
					// background: black;
				}
				&::after {
					content: '';
					height: 100%;
					position: absolute;
					width: 350px;
					right: 0;
					z-index: 2;
					background-image: linear-gradient(
						to right,
						rgba(255, 255, 255, 0),
						white
					);
					top: 0;
					@media #{$extra_large} {
						width: 750px;
					}
				}
			}
		}
		:not(.slick-active) {
			.slide-right {
				opacity: 1;
			}
		}

		.slick-active {
			.slide-left {
				opacity: 1;
			}

			.slide-right {
				transform: translateX(0) scale(1);

				opacity: 1;
				@media #{$large} {
					margin-inline: 40px;
				}
			}
		}
	}

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
