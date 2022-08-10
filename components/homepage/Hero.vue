<template>
	<div class="hero relative">
		<VueSlickCarousel
			ref="reviewSlides"
			v-bind="reviewSlidesConfig"
			@afterChange="changeSlider($event)"
		>
			<div
				v-for="(item, index) in reviews"
				:key="index"
				class="carousel-container"
			>
				<div class="review-slide container">
					<div class="slide-main slide-right">
						<img
							:src="
								item.image_path === null
									? `assets/img/banner-image-origin.jpg`
									: `${item.image_path}`
							"
							:alt="item.title"
							:title="item.title"
							class="slide-brand mb-32"
						/>
					</div>
				</div>
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script>
export default {
	props: {
		reviews: {
			type: Array,
			default: null
		}
	},
	data() {
		return {
			reviewSlidesConfig: {
				dots: true,
				arrows: false,
				dotsClass: 'slick-dots dots',
				edgeFriction: 0.35,
				infinite: true,
				speed: 900,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true
			},
			reviewsDum: [
				{
					bannerImage: 'banner-1.jpg'
				},
				{
					bannerImage: 'banner-2.jpg'
				},
				{
					bannerImage: 'banner-3.jpg'
				}
			]
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
.bzg {
	justify-content: center;
	flex-wrap: wrap-reverse;

	@media #{$large} {
		justify-content: space-around;
	}
}

// /deep/ {
// 	.dots {
// 		position: absolute;
// 		left: 0;
// 		right: 0;
// 		margin: auto;
// 		bottom: 40px;
// 		button {
// 			border: none;
// 			cursor: pointer;
// 			width: 8px;
// 			height: 8px;
// 			@media #{$medium} {
// 				width: 12px;
// 				height: 12px;
// 			}
// 		}

// 		.slick-active {
// 			button {
// 				background-color: $primary;
// 				border: none;
// 			}
// 		}
// 	}
// }

.hero {
	// margin-bottom: 126px;
	padding-inline: 16px;
	&-left {
		margin: auto 0;
		padding-left: 0;
		width: 507px;
	}

	&-right {
		padding-left: 0;

		img {
			max-width: 770px;
			width: 100%;
		}
	}
	&-text {
		color: $tc-head;
		width: 100%;
		max-width: 507px;
		line-height: 50px;
		font-size: 35px;
		@media #{$medium} {
			line-height: 60px;
			font-size: 48px;
		}
	}

	&-subtext {
		width: 100%;
		max-width: 442px;
		color: #6e7692;
		font-weight: 400;
		@media #{$medium} {
			font-size: 18px;
		}
	}

	&-button {
		padding: 20px 74.5px;
		border-radius: 12px;
	}

	&-pointer {
		position: absolute;
		bottom: -120px;
		left: 0;
		right: 0;
		margin: 0 auto;
		flex-direction: column;
		width: 100px;
		color: #6e7692;
		align-items: center;

		&--text {
			font-size: 14px;
			font-weight: 400;
			height: 20px;
		}

		&--mouse {
			&::before {
				display: unset;
			}
		}
	}
}

img {
	border-radius: 30px !important;
	width: 100%;
	max-height: 400px;
	object-fit: cover;
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
		left: 250px;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	&--right {
		right: 250px;
		top: 0;
		bottom: 0;
		margin: auto;
	}
}
</style>
