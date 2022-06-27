<template>
	<div class="solutions">
		<div class="solutions-head text-center">
			<h1 class="solutions-title mb-24">
				<span class="text-primary">Karya Tulis </span> yang bisa Anda lihat
			</h1>
			<p class="solutions-text">
				Beberapa Jurnal yang telah diunggah dapat anda lihat disini, segera
				unggah Karya Tulis dan Jurnal kamu!
			</p>
		</div>
		<div class="journal container relative">
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
				<span class="bzi bzi_2x bzi-Caret-right bzi-2x"></span>
			</button>
			<button class="btn-arrow btn-arrow--left" @click.prevent="prevSlide()">
				<span class="bzi bzi_2x bzi-Caret-left bzi-2x"></span>
			</button>
		</div>
	</div>
</template>

<script>
import CardJournal from '../card/CardJournal.vue'
export default {
	props: {
		journals: {
			type: Array,
			default: null
		}
	},
	data() {
		return {
			components: { CardJournal },
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
.flex--row {
	flex-direction: column;
}
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

	// .journal {
	// 	&-card {
	// 		max-width: 400px;
	// 		// box-shadow: 4px 1px $black90;

	// 		&--info {
	// 			padding: 12px 20px 18px 20px;
	// 			background-color: $white;
	// 			border-radius: 0 0 16px 16px;
	// 			border: 1px solid $black30;
	// 			height: 350px;
	// 			@media #{$medium} {
	// 				height: 300px;
	// 			}
	// 		}
	// 		&--img {
	// 			width: 100%;
	// 			object-fit: cover;
	// 			border-radius: 16px 16px 0 0;
	// 		}

	// 		&--author {
	// 			font-size: 14px;
	// 			color: $primary;
	// 		}

	// 		&--title {
	// 			margin-bottom: 10px;
	// 			text-transform: uppercase;
	// 			font-weight: bold;
	// 			color: $black90;
	// 			font-size: 32px;
	// 			line-height: 32px;
	// 		}

	// 		&--subtitle {
	// 			font-size: 14px;
	// 		}

	// 		// &--category {
	// 		// 	padding: 8px 12px;
	// 		// 	font-weight: bold;
	// 		// 	color: $white;
	// 		// 	width: max-content;
	// 		// 	font-size: 12px;
	// 		// 	border-radius: 8px;
	// 		// 	background-color: #ff7a18;
	// 		// 	&:hover {
	// 		// 		background-color: #fb944b;
	// 		// 		transition: all 0.2s ease;
	// 		// 	}
	// 		// }

	// 		&--category {
	// 			font-size: 12px;
	// 			font-style: italic;
	// 			color: $tc-subtext;
	// 		}

	// 		&--tags {
	// 			font-size: 12px;
	// 			font-style: italic;
	// 		}

	// 		&--footer {
	// 			margin-top: auto;
	// 			text-align: left;
	// 			align-items: center;
	// 			gap: 18px;
	// 			img {
	// 				width: 60px;
	// 				height: 60px;
	// 				border-radius: 50%;
	// 			}
	// 		}
	// 	}
	// }
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
</style>
