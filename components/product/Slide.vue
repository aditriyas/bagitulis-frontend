<template>
	<div v-if="isOut === false">
		<div class="products-body flex">
			<div class="carousel">
				<VueSlickCarousel
					ref="slides"
					v-bind="slidesConfig"
					class=""
					@afterChange="changeSlider($event)"
				>
					<div v-for="(item, index) in slides" :key="index">
						<div class="slide flex--wrap flex v-center">
							<img
								:src="item.slideImage"
								:alt="item.textTop"
								:title="item.textTop"
								class="slide-image"
							/>
							<div class="slide-text">
								<p class="slide-text--top mb-8">{{ item.textTop }}</p>
								<p class="slide-text--mid">{{ item.textMid }}</p>
								<p class="slide-text--bottom">
									{{ item.textBottom }}
								</p>
							</div>
						</div>
					</div>
				</VueSlickCarousel>
			</div>
			<div class="arrow h-center flex">
				<button class="arrow-left arrow-button" :disabled="currentIndex === 0">
					<span
						class="bzi bzi-1_5x bzi-Arrow-up"
						@click.prevent="prevSlide"
					></span>
				</button>
				<div class="arrow-index mb-0 flex h-center">
					<span class="index">0{{ currentIndex + 1 }}</span>
					<span class="length">/0{{ slides.length }}</span>
				</div>
				<button
					class="arrow-right arrow-button"
					:disabled="currentIndex + 1 === slides.length"
				>
					<span
						class="bzi bzi-1_5x bzi-Arrow-down"
						@click.prevent="nextSlide"
					></span>
				</button>
			</div>
		</div>
	</div>
	<div v-else>
		<div class="products-body relative">
			<div v-for="(item, index) in slides" :key="index" class="mb-32">
				<div
					class="slide flex v-center"
					:class="index % 2 == 1 ? 'fr-reverse' : ''"
				>
					<img
						:src="item.slideImage"
						:alt="item.textTop"
						:title="item.textTop"
						class="slide-image"
					/>
					<div class="slide-text">
						<p class="slide-text--top mb-16">{{ item.textTop }}</p>
						<p class="slide-text--bottom">
							{{ item.textBottom }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		slides: {
			type: Array,
			default: null
		},
		isOut: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			currentIndex: 0,
			currentSlide: {},
			slidesConfig: {
				arrows: false,
				dots: false,
				centerMode: true,
				centerPadding: '1vw',
				// rows: 2,
				infinite: false,
				speed: 700,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				swipe: true,
				vertical: true,
				verticalSwiping: true,
				adaptiveHeight: true
			}
		}
	},
	mounted() {
		this.currentSlide = this.slides[this.currentIndex]
	},
	methods: {
		prevSlide() {
			this.$refs.slides.prev()
		},
		nextSlide() {
			this.$refs.slides.next()
		},
		changeSlider(index) {
			this.currentIndex = index
			this.currentSlide = this.slides[index]
		}
	}
}
</script>

<style lang="scss" scoped>
.carousel {
	width: 100%;
	max-width: 1000px;
}
.products {
	&-body {
		justify-content: space-evenly;
		flex-direction: column;
		gap: 14px;

		@media #{$medium} {
			flex-direction: row;
		}
		// width: 100%;

		/deep/ {
			.slick-slide {
				min-height: 593px;
				@media #{$medium} {
					min-height: 1px;
				}
			}
		}
		.slide {
			gap: 24px;
			justify-content: center;
			width: 100%;

			&-image {
				width: 100%;
				max-width: 453px;
				height: 310.4px;
			}

			&-text {
				width: 100%;
				max-width: 453px;

				&--top {
					font-weight: 600;
					color: $tc-head;
					font-size: 30px;
					@media #{$medium} {
						font-size: 32px;
					}
				}

				&--bottom {
					color: #6e7692;
				}
			}
		}
	}
}

.products-body::v-deep {
	.slick-slide {
		img.banner-img {
			margin: 0 auto;
			transform: scale(0.93, 0.8);
			transition: all 0.3s ease;
		}

		&.slick-active {
			img.banner-img {
				transform: scale(1);
			}
		}
	}

	.slick-dots {
		position: absolute;
		display: flex !important;
		right: 8%;
		bottom: -50px;

		// transform: rotate(90deg);
		margin: 0;
		color: $tc-head;
		gap: 40px;

		@media #{$extra_large} {
			transform: rotate(90deg);
			margin-top: auto;
			margin-bottom: auto;
			top: 0;
			bottom: 0;
		}

		li {
			position: relative;
		}

		button {
			background-color: #ccc;
			border: none;
			width: 8px;
			height: 8px;
			// position: relative;
			cursor: pointer;
		}
		.slick-active button {
			background-color: $tc-head;
		}
		.slick-active {
			&::before {
				content: '';
				position: absolute;
				top: -12px;
				right: -12px;
				width: 32px;
				height: 32px;
				border-radius: 50%;
				border: 1px solid $tc-head;
			}
		}
	}
}

.arrow {
	gap: 42px;
	flex-direction: row;
	align-items: center;

	@media #{$medium} {
		flex-direction: column;
	}
	// width: 100%;
	// max-width: 34px;

	.bzi {
		font-size: 32px;
		color: #25252d;
	}

	&-button {
		border: none;
		background: transparent;
		cursor: pointer;

		&:disabled {
			opacity: 0.6;
		}
	}

	&-index {
		color: rgba(37, 37, 45, 0.32);
		font-size: 12px;
		.index {
			color: #25252d;
			font-weight: 500;
		}

		.length {
			font-weight: 600;
		}
	}
}
</style>
