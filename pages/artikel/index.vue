<template>
	<main class="site-main pt-40">
		<div class="article">
			<div class="container">
				<!-- Head -->
				<articlesHead />

				<!-- Article Insights -->
				<articlesArticleInsights
					v-if="isEmpty === false"
					:left-articles="leftArticles"
					:right-articles="rightArticles"
				/>

				<!-- Tab Navigation -->
				<div class="tab-nav mb-40">
					<ul class="pl-0 mb-0 list-nostyle">
						<li v-for="(item, index) in tabnames" :key="index" class="tab-opt">
							<nuxt-link
								:to="localePath(`/artikel/${tablinks[index]}`)"
								:title="item"
								class="tab-opt-link pv-16 ph-56"
								:class="tablinks[index] === null ? 'disabled' : ''"
								exact
							>
								<h4 class="mb-0 f-20 text-semibold text-cap">{{ item }}</h4>
							</nuxt-link>
						</li>
					</ul>
				</div>
				<div v-if="isEmpty === false" class="tab-content flex flex--wrap">
					<div
						v-for="(item, index) in articleCards"
						:key="index"
						class="tab-content--card"
					>
						<nuxt-link :to="localePath('/artikel/:title')">
							<img
								:src="item.cardImage"
								alt="Tab Card Image"
								:title="item.cardTitle"
								class="mb-16"
							/>
							<div
								class="category"
								:class="[
									item.cardCategory === 'Business Insights' ? 'cat-green' : '',
									item.cardCategory === 'Tips & Trends' ? 'cat-yellow' : '',
									item.cardCategory === 'E-Commerce Update' ? 'cat-blue' : ''
								]"
							>
								{{ item.cardCategory }}
							</div>
							<h4 class="title">
								{{ item.cardTitle }}
							</h4>
							<p class="date">{{ item.cardDate }}</p>
						</nuxt-link>
					</div>
				</div>
				<div v-else>
					<articlesEmpty />
				</div>
				<Pagination
					v-if="isEmpty === false"
					:total-pages="512"
					:max-visible-buttons="8"
					:total="512"
					:per-page="1"
					:current-page="1"
					class="mb-0"
				/>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	auth: false,
	nuxtI18n: {
		paths: {
			id: '/artikel',
			en: '/article'
		}
	},
	data() {
		return {
			isEmpty: false,
			tabnames: [
				'Semua Kategori',
				'Pengetahuan Bisnis',
				'E-Commerce Terbaru',
				'Tips & Tren'
			],
			tablinks: ['/', null, null, null],
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
			articleCards: [
				{
					cardImage: '/assets/img/article-image-blank.png',
					cardTitle: 'How to Make and Sell Stickers Online in 2021',
					cardDate: 'September 18 2021',
					cardCategory: 'Tips & Trends'
				},
				{
					cardImage: '/assets/img/article-image-1.png',
					cardTitle:
						'How to Start an Online Boutique: A Complete 2021 Playbook',
					cardDate: 'September 18 2021',
					cardCategory: 'Business Insights'
				},
				{
					cardImage: '/assets/img/article-image-blank.png',
					cardTitle:
						'How to Start a Phone Case Business From Home, Step by Step',
					cardDate: 'September 17 2021',
					cardCategory: 'E-Commerce Update'
				},
				{
					cardImage: '/assets/img/article-image-blank.png',
					cardTitle:
						'How to Start a Phone Case Business From Home, Step by Step',
					cardDate: 'September 16 2021',
					cardCategory: 'E-Commerce Update'
				},
				{
					cardImage: '/assets/img/article-image-blank.png',
					cardTitle: 'How to Make and Sell Stickers Online in 2021',
					cardDate: 'September 18 2021',
					cardCategory: 'Tips & Trends'
				},
				{
					cardImage: '/assets/img/article-image-1.png',
					cardTitle:
						'How to Start an Online Boutique: A Complete 2021 Playbook',
					cardDate: 'September 18 2021',
					cardCategory: 'Business Insights'
				}
			]
		}
	},
	head() {
		return {
			title: 'Artikel Semua Kategori - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Artikel Semua Kategori - RocketMall',
				metaImage:
					'https://rocketmall-landlord-frontend.suitdev.com/assets/img/article-image-empty.png',
				metaDesc:
					'Cari artikel sesuai dengan kategori yang Anda perlukan disini.'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-bottom: 96px;
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
.article {
	&-tab {
		margin-bottom: 32px;
		ul {
			display: flex;
			justify-content: space-around;
		}

		.tab-opt {
			width: 100%;
			border-bottom: 1px solid #e8eaef;
		}

		.nuxt-link-active {
			color: $primary;
		}

		.tab-opt-link {
			color: $tc-subtext-light;
		}
	}
}

.tab {
	&-nav {
		ul {
			justify-content: space-between;
			flex-wrap: wrap;

			@media #{$extra_large} {
				flex-wrap: nowrap;
			}
		}

		.tab-opt {
			width: 100%;
		}

		a {
			border-bottom: 1px solid #e8eaef;
			box-sizing: border-box;
		}

		.nuxt-link-active {
			color: $primary !important;
			border-bottom: 3px solid $primary;
			padding-bottom: 14px !important;
		}

		.tab-opt-link {
			color: $tc-subtext-light;
			justify-content: center;
		}
	}

	&-content {
		gap: 24px;
		margin-bottom: 88px;
		justify-content: space-evenly;
		&--card {
			width: 100%;
			max-width: 357px;

			.title {
				color: $tc-head;
				font-size: 24px;
				font-weight: 600;
				line-height: 32px;
				margin-bottom: 16px;
			}

			.category {
				width: max-content;
				font-size: 12px;
				padding: 6px 12px;
				border-radius: 13px;
				margin-bottom: 15px;
			}

			.date {
				font-size: 14px;
				font-weight: 400;
				color: #9296a3;
			}
		}
	}
}

.cat {
	&-blue {
		background-color: #deecfd;
		color: #3267e3;
	}

	&-green {
		background-color: #e8f6f0;
		color: #20ae73;
	}

	&-yellow {
		background-color: #fff3db;
		color: #d48e01;
	}
}

.disabled {
	pointer-events: none;
}
</style>
