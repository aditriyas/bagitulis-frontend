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
		<template v-if="journals.length > 0">
			<div class="journal container relative">
				<VueSlickCarousel ref="journalSlides" v-bind="journalSlidesConfig">
					<div v-for="(item, i) in journals" :key="i">
						<CardJournal
							:file="item.file"
							:thumbnail="item.thumbnail_path"
							:category="item.category"
							:title="item.title"
							:description="item.description"
							:tags="item.tags"
							:user="item.user"
							:photo="item.photo"
							:slug="item.id"
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
		</template>
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
