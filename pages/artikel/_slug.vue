<template>
	<main class="site-main pb-40 pt-24">
		<div class="detail container">
			<div class="img-container">
				<img
					:src="
						article.thumbnail_path === null
							? '/assets/img/article-image-origin.jpg'
							: article.thumbnail_path
					"
					class="w-100 article-img"
				/>
			</div>
			<div class="article-head mt-32 text-center mb-50">
				<h1 class="title text-black">{{ article.title }}</h1>
				<p class="mb-0 text-body">Updated by: Aditya</p>
				<p>
					{{ dateFormat(article.updated_at) }}
				</p>
			</div>
			<div class="article-body">
				<p class="text-pbody">{{ article.description }}</p>
				<hr class="mt-60" />
			</div>
		</div>
	</main>
</template>

<script>
export default {
	async asyncData({ $axios, error, $catch500, $catch401, $catch404, params }) {
		try {
			const [article] = await Promise.all([
				$axios.$get(`http://bagitulis-cms.test/api/article/${params.slug}`)
			])
			return {
				article: article.data
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
	data() {
		return {
			mountains: []
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
.detail {
	.card {
		padding: 16px 32px;
		box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
		width: max-content;
		margin: 0 auto;
		max-width: 700px;
		border-radius: 12px;

		img {
			width: 800px;
			height: 500px;
			object-fit: cover;
		}

		&-info {
			justify-content: space-between;
			text-align: left;

			&--item {
				max-width: 200px;
				a {
					text-decoration: underline;
				}
			}

			.info-title {
				font-size: 13px;
				margin-bottom: 20px;
				color: $tc-pbody-light;
			}
		}

		&-main {
			.main-title {
				font-size: 13px;
				margin-bottom: 10px;
				color: $tc-pbody-light;
			}

			.main-desc,
			.main-published {
				font-size: 13px;
				margin-bottom: 6px;
				color: $tc-pbody-light;
			}

			.title {
				color: $black;
				text-transform: uppercase;
				max-width: 500px;
			}
		}
	}
}

.img-container {
	width: 100%;
	max-height: 400px;
}
.article-img {
	width: 100%;
	height: 300px;
	object-fit: cover;
}

.article {
	&-head {
		width: 700px;
		margin: 0 auto;
		h2 {
			margin-bottom: 8px;
		}
		p {
			font-size: 14px;
		}
	}
	&-body {
		width: 900px;
		margin: 0 auto;

		p {
			font-size: 18px;
		}
	}
}
</style>
