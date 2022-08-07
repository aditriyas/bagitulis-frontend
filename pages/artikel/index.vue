<template>
	<main class="site-main pt-40">
		<div class="article">
			<div class="container">
				<!-- Head -->
				<articlesHead />
				<div v-if="articles.length >= 1" class="tab-content flex flex--wrap">
					<div
						v-for="(item, index) in articles"
						:key="index"
						class="tab-content--card"
					>
						<nuxt-link :to="localePath(`/artikel/${item.id}`)">
							<img
								:src="
									item.thumbnail_path === null
										? '/assets/img/article-image-origin.jpg'
										: `${item.thumbnail_path}`
								"
								alt="Tab Card Image"
								:title="item.title"
								class="article-img mb-12"
							/>
							<div class="body">
								<h4 class="title">
									{{ item.title.slice(0, 40) }}
									<span v-if="item.title.length > 30">...</span>
								</h4>
								<p class="desc text-black">
									{{ item.description.slice(0, 200) }}
									<span v-if="item.description.length > 200">...</span>
								</p>
								<p class="date">{{ dateFormat(item.created_at) }}</p>
							</div>
						</nuxt-link>
					</div>
				</div>
				<div v-else>
					<articlesEmpty />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	auth: false,
	async asyncData({ $axios, error, $catch500, $catch401, $catch404 }) {
		try {
			const [articles] = await Promise.all([
				$axios.$get('http://bagitulis-cms.test/api/articles')
			])
			return {
				articles: articles.data
			}
		} catch (e) {
			if (e.response.status === 401) {
				error($catch401)
			} else if (e.response.status === 404) {
				error($catch404)
			} else {
				error($catch500)
			}
		}
	},
	nuxtI18n: {
		paths: {
			id: '/artikel',
			en: '/article'
		}
	},
	data() {
		return {
			isEmpty: false
		}
	},
	head() {
		return {
			title: 'Bagitulis - Artikel Semua Kategori',
			...this.$SEOMeta({
				metaTitle: 'Bagitulis - Artikel Semua Kategori',
				metaDesc:
					'Cari artikel sesuai dengan kategori yang Anda perlukan disini.'
			})
		}
	},
	methods: {
		dateFormat(date) {
			const tanggal = new Date()
			const day = tanggal.getDate()
			const year = tanggal.getFullYear()
			const month = tanggal.toLocaleString('default', { month: 'long' })
			return `${day} ${month} ${year}`
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-bottom: 96px;
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
			max-width: 400px;
			background-color: transparent;
			box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
			padding: 16px 20px;
			border-radius: 10px;

			&:hover {
				transform: scale(1.07);
				transition: all 0.3s ease-in-out;
				box-shadow: 0px 2px 32px 0px rgba(0, 30, 51, 0.2);
			}

			.title {
				color: $tc-head;
				font-size: 24px;
				font-weight: 600;
				line-height: 32px;
				margin-bottom: 16px;
			}

			.desc {
				font-size: 14px;
			}

			.category {
				width: max-content;
				font-size: 12px;
				padding: 6px 12px;
				border-radius: 13px;
				margin-bottom: 15px;
			}

			.article-img {
				width: 100%;
				max-height: 232px;
				object-fit: cover;
				border-radius: 10px;
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
