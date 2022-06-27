<template>
	<div class="article">
		<div class="article-card flex flex--wrap">
			<div
				v-for="(item, index) in leftArticles"
				:key="index"
				class="article-card--left"
			>
				<nuxt-link :to="localePath('/artikel/:title')" title="Article">
					<img
						:src="item.articleImage"
						alt="Article Big Thumbnail"
						img="Article Thumbnail"
						class="thumbnail mb-10"
					/>
					<div class="category">{{ item.articleCategory }}</div>
					<h2 class="title">
						{{ item.articleTitle }}
					</h2>
					<p class="date">{{ item.articleDate }}</p>
				</nuxt-link>
			</div>
			<div class="article-card--right">
				<nuxt-link :to="localePath('/artikel/:title')" title="Article">
					<div
						v-for="(item, index) in rightArticles"
						:key="index"
						class="card-wrapper flex flex--wrap"
					>
						<img
							:src="item.articleImage"
							alt="Article Small Thumbnail"
							img="Article Thumbnail"
							width="228"
							height="127"
						/>
						<div class="card-text">
							<div class="category">{{ item.articleCategory }}</div>
							<h3 class="title">{{ item.articleTitle }}</h3>
							<p class="date">{{ item.articleDate }}</p>
						</div>
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		leftArticles: {
			type: Array,
			default: null
		},
		rightArticles: {
			type: Array,
			default: null
		},
		articleImage: {
			type: String,
			default: null
		},
		articleCategory: {
			type: String,
			default: null
		},
		articleTitle: {
			type: String,
			default: null
		},
		articleDate: {
			type: String,
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
			max-width: 540px;

			.thumbnail {
				border-radius: 16px;
			}

			.category {
				width: 100%;
				max-width: 123px;
				font-size: 12px;
				color: #20ae73;
				padding: 6px 12px;
				background-color: #e8f6f0;
				border-radius: 13px;
				margin-bottom: 14px;
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
</style>
