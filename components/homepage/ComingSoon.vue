<template>
	<div class="coming" :class="isOut === true ? 'isout' : ''">
		<div v-if="isOut === false" class="coming-wrap">
			<div class="coming-head text-center">
				<h1 class="title">
					<span class="text-primary">Sesuatu yang hebat </span>akan segera hadir
				</h1>
				<p class="subtitle">
					Hanya perlu menunggu beberapa saat! Beberapa produk kami akan hadir
					untuk membangun bisnis Anda dengan kualitas dan fleksibilitas
				</p>
			</div>
			<div class="coming-body relative">
				<VueSlickCarousel ref="slides" v-bind="slidesConfig">
					<div v-for="(item, index) in slides" :key="index">
						<div class="slide flex--wrap flex h-center v-center">
							<img
								:src="item.slideImage"
								alt="Slide Image"
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
		</div>
		<div v-else>
			<div class="coming-body relative">
				<div v-for="(item, index) in slides" :key="index">
					<div
						class="slide flex v-center"
						:class="[
							index % 2 == 1 ? 'fr-reverse' : '',
							isOut === true ? 'f-space-between' : ''
						]"
					>
						<img
							:src="item.slideImage"
							alt="Slide Image"
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
			slidesConfig: {
				arrows: false,
				dots: true,
				centerMode: true,
				centerPadding: '10px',
				infinite: true,
				speed: 700,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				vertical: true,
				verticalSwiping: true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							variableWidth: false,
							vertical: false,
							verticalSwiping: false
						}
					},
					{
						breakpoint: 600,
						settings: {
							variableWidth: false
						}
					},
					{
						breakpoint: 480,
						settings: {
							variableWidth: false,
							centerPadding: '0px',

							vertical: false,
							verticalSwiping: false
						}
					}
				]
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.isout {
	background-color: #fff !important;
}
.coming {
	background-color: #f6f8fb;
	padding: 56px 0;

	&-wrap {
		padding: 16px;
		@media #{$medium} {
			padding: 0;
		}
	}
	&-head {
		margin-bottom: 56px;
		.title {
			color: $tc-head;
			font-size: 30px;
			@media #{$medium} {
				font-size: 40px;
			}
		}

		.subtitle {
			color: #6e7692;
			font-size: 15px;
			width: 100%;
			max-width: 681px;
			margin: 0 auto;
			@media #{$medium} {
				font-size: 20px;
			}
		}
	}

	&-body {
		width: 100%;
		max-width: 965px;
		margin: 0 auto;
		.slide {
			&-image {
				width: 100%;
				max-width: 453px;
				height: 310.4px;
			}

			&-text {
				width: 100%;
				max-width: 383px;

				&--top {
					font-size: 20px;
					font-weight: 600;
					color: $tc-head;
				}

				&--mid {
					font-size: 32px;
					font-weight: 600;
					line-height: 40px;
					color: $tc-head;
				}

				&--bottom {
					color: #6e7692;
				}
			}
		}
	}
}

.coming::v-deep {
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
</style>
