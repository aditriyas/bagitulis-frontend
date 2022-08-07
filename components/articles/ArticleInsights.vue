<template>
	<div :class="`div${num}`" class="article-card--left">
		<nuxt-link :to="localePath('/artikel/:title')" title="Article">
			<img
				:src="image"
				alt="Article Big Thumbnail"
				img="Article Thumbnail"
				class="thumbnail mb-10"
			/>
			<!-- <div class="category">{{ item.category }}</div> -->
			<h2 class="title">
				{{ title }}
			</h2>
			<p class="description">
				{{ description }}
			</p>
			<p class="date">{{ date }}</p>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		articles: {
			type: Array,
			default: null
		},
		title: {
			type: String,
			default: null
		},
		// category: {
		// 	type: String,
		// 	default: null
		// },
		date: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: null
		},
		image: {
			type: String,
			default: null
		},
		num: {
			type: Number,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
.article {
	&-card {
		gap: 24px;
		justify-content: center;
		margin-bottom: 54px;
		&--left {
			width: 100%;
			// max-width: 540px;

			.thumbnail {
				border-radius: 16px;
			}

			.title {
				font-size: 32px;
				font-weight: 600;
				line-height: 38.73px;
				margin-bottom: 13px;
				color: $tc-head;
			}

			.date {
				font-size: 14px;
				color: #9296a3;
			}
		}
		&--right {
			display: flex;
			flex-direction: column;
			gap: 20px;

			.card-wrapper {
				gap: 26px;
				justify-content: center;

				img {
					max-width: 100%;
					height: 127px;
					border-radius: 8px;
				}

				.card-text {
					width: 100%;
					max-width: 370px;

					.category {
						width: 100%;
						max-width: 123px;
						font-size: 12px;
						color: #20ae73;
						padding: 6px 12px;
						background-color: #e8f6f0;
						border-radius: 13px;
						margin-bottom: 15px;
					}

					.title {
						font-weight: 600;
						line-height: 25px;
						margin-bottom: 14px;
						color: $tc-head;
					}

					.date {
						font-size: 14px;
						color: #505565;
					}
				}
			}
		}
	}
}

.description {
	font-size: 16px;
	color: $tc-pbody;
}
</style>
