<template>
	<div class="solutions">
		<div class="solutions-head text-center">
			<h1 class="solutions-title mb-24">
				<span class="text-primary">Artikel </span> yang bisa Anda lihat
			</h1>
			<p class="solutions-text">
				Artikel yang mungkin dapat bermanfaat untuk Anda!
			</p>
		</div>
		<template v-if="articles.length > 0">
			<div class="journal container relative">
				<VueSlickCarousel ref="journalSlides" v-bind="journalSlidesConfig">
					<div v-for="(item, i) in articles" :key="i">
						<div class="article-card--left">
							<nuxt-link :to="localePath(`/artikel/${item.id}`)">
								<img
									:src="
										item.thumbnail_path === null
											? '/assets/img/article-image-origin.jpg'
											: item.thumbnail_path
									"
									:alt="item.title"
									img="Article Thumbnail"
									class="thumbnail mb-10"
								/>
								<div class="info text-center">
									<h2 class="title">
										{{ item.title }}
									</h2>
									<p class="date">
										Created at: {{ dateFormat(item.created_at) }}
									</p>
									<hr />
									<p class="description">
										{{ item.description }}
									</p>
								</div>
							</nuxt-link>
						</div>
					</div>
				</VueSlickCarousel>
				<button class="btn-arrow btn-arrow--right" @click.prevent="nextSlide()">
					<span class="bzi bzi_2x bzi-Caret-right bzi-2x"></span>
				</button>
				<button class="btn-arrow btn-arrow--left" @click.prevent="prevSlide()">
					<span class="bzi bzi_2x bzi-Caret-left bzi-2x"></span>
				</button>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		articles: {
			type: Array,
			default: null
		}
	},

	data() {
		return {
			journalSlidesConfig: {
				accessibility: true,
				arrows: false,
				dots: false,
				centerMode: true,
				centerPadding: '0',
				infinite: true,
				speed: 600,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				variableWidth: false,
				autoplay: true,
				rtl: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							variableWidth: false,
							centerPadding: '0vw',
							slidesToShow: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							variableWidth: false,
							slidesToShow: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							variableWidth: false,
							centerMode: true,
							slidesToShow: 1
						}
					}
				]
			}
		}
	},
	methods: {
		dateFormat(date) {
			const tanggal = new Date()
			const day = tanggal.getDate()
			const year = tanggal.getFullYear()
			const month = tanggal.toLocaleString('default', { month: 'long' })
			return `${month} ${day} ${year}`
		},
		prevSlide() {
			this.$refs.journalSlides.prev()
		},
		nextSlide() {
			this.$refs.journalSlides.next()
		},
		changeSlider(index) {
			this.currentIndex = index
			this.currentSlide = this.reviews[index]
		}
	}
}
</script>

<style lang="scss" scoped>
.flex--row {
	flex-direction: column;
}
.solutions {
	&-head {
		margin-bottom: 48px;
	}

	&-title {
		color: $tc-head;
		font-size: 35px;
		@media #{$medium} {
			font-size: 40px;
		}
	}

	&-text {
		color: $tc-subtext;
		width: 100%;
		max-width: 800px;
		margin: auto;
		font-size: 17px;
		@media #{$medium} {
			font-size: 20px;
		}
	}
}

.btn-arrow {
	position: absolute;
	border-radius: 50%;
	background-color: #fff;
	border: 2px solid $primary;
	cursor: pointer;
	height: 50px;
	width: 50px;
	&:hover {
		background-color: $primary;
		transition: all 0.5s;
	}

	span {
		color: $primary;
		font-size: 12px;
		&:hover {
			color: $white;
			transition: all 0.5s;
		}
		@media #{$medium} {
			font-size: 20px;
		}
	}

	&--left {
		left: -10px;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	&--right {
		right: -10px;
		top: 0;
		bottom: 0;
		margin: auto;
	}
}

.thumbnail {
	width: 100%;
	max-height: 300px;
	object-fit: cover;
}

.info {
	.title {
		color: $tc-head;
		text-transform: capitalize;
		margin-bottom: 8px;
	}

	.date {
		color: $tc-pbody;
		font-weight: bold;
		font-size: 14px;
	}

	.description {
		color: $tc-pbody;
	}
}
</style>
