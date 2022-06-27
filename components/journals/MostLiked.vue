<template>
	<div class="solutions">
		<div class="solutions-head text-center">
			<h1 class="solutions-title mb-24">
				<span class="text-primary">Karya Tulis </span> yang paling banyak
				disimpan
			</h1>
			<p class="solutions-text">
				Jurnal dan Karya Tulis milikmu mungkin ada disini! Jadilah salah satu
				dari yang paling diminati banyak orang!
			</p>
		</div>
		<div class="journal container v-center flex--wrap relative">
			<VueSlickCarousel ref="journalSlides" v-bind="journalSlidesConfig">
				<div v-for="(item, i) in journals" :key="i">
					<CardJournal
						:file="item.file"
						:thumbnail="item.thumbnail"
						:category="item.category"
						:title="item.title"
						:description="item.description"
						:tags="item.tags"
						:user="item.user"
						:photo="item.photo"
					/>
				</div>
			</VueSlickCarousel>
			<button class="btn-arrow btn-arrow--right" @click.prevent="nextSlide()">
				<span class="bzi bzi_2x bzi-Arrow-right bzi-1_5x"></span>
			</button>
			<button class="btn-arrow btn-arrow--left" @click.prevent="prevSlide()">
				<span class="bzi bzi_2x bzi-Arrow-left bzi-1_5x"></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		journals: {
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
				speed: 800,
				slidesToShow: 3,
				slidesToScroll: 1,
				swipeToSlide: true,
				variableWidth: false,
				rtl: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							variableWidth: false,
							centerPadding: '0vw',
							slidesToShow: 2
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
.solutions {
	background-color: $grey-bg;
	padding: 72px 16px;
	@media #{$medium} {
		padding-block: 72px;
	}

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

	&-card {
		justify-content: center;
		width: 100%;
		max-width: 1105px;
		column-gap: 10px;
		margin: 0 auto;

		row-gap: 50px;
		flex-wrap: wrap;

		@media #{$medium} {
			column-gap: 72px;
			row-gap: 50px;
		}
		// gap: 500px;

		.card {
			&-text {
				color: $tc-head;
				font-size: 24px;
				font-weight: 600;
			}

			&-image {
				width: 120px;
				height: 120px;
				// &--wrapper {
				// 	width: 130px;
				// }
			}

			&-subtext {
				max-width: 286px;
				width: 100%;
				margin: 0;
			}
		}
		&--wrapper {
			width: 100%;
			max-width: 320px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			// height: 252px;
			height: max-content;
			// height: 252px;
		}
	}

	.journal {
		flex-direction: row;
		justify-content: space-evenly;
		gap: 10px;
		&-card {
			max-width: 400px;
			padding: 24px 20px;
			background-color: $white;
			border-radius: 16px;
			border: 1px solid $black30;
			// box-shadow: 4px 1px $black90;
			&--img {
				width: 100%;
				margin-bottom: 12px;
				object-fit: cover;
			}

			&--author {
				margin-bottom: 12px;
				font-size: 14px;
				color: $primary;
			}

			&--title {
				// margin-bottom: px;
				text-transform: uppercase;
				font-weight: bold;
				color: $black90;
				font-size: 18px;
			}

			&--subtitle {
				font-size: 14px;
			}
		}
	}
}

.btn-arrow {
	position: absolute;
	border-radius: 50%;
	height: 50px;
	width: 50px;
	background-color: #fff;
	border: 2px solid $primary;
	cursor: pointer;
	&:hover {
		background-color: $primary;
		transition: all 0.5s;
	}

	span {
		color: $primary;
		&:hover {
			color: $white;
			transition: all 0.5s;
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
</style>
