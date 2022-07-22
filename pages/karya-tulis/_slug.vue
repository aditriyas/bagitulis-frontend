<template>
	<main class="site-main pv-56">
		<div class="detail container">
			<div class="card">
				<div class="card-image flex mb-32">
					<img :src="writing.thumbnail_path" alt="" class="mv-auto" />
				</div>
				<div class="card-info flex pb-32">
					<div class="card-info--item">
						<p class="info-title">Author</p>
						<p>John Doe, {{ dateFormat(writing.created_at) }}</p>
					</div>
					<div class="card-info--item">
						<p class="info-title">Category</p>
						<p>{{ writing.category.name }}</p>
					</div>
					<div class="card-info--item">
						<p class="info-title">Download</p>
						<a :href="writing.file" :download="writing.title">Download</a>
					</div>
				</div>
				<hr />
				<div class="card-main">
					<p class="main-title d-block">Title</p>
					<h3 class="title">{{ writing.title }}</h3>
					<p class="main-desc d-block">Description</p>
					<p class="desc">{{ writing.description }}</p>
					<p class="main-published d-block">Published at</p>
					<p class="published">{{ dateFormat(writing.published_at) }}</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	async asyncData({ $axios, error, $catch500, $catch401, $catch404, params }) {
		try {
			const [writing, writings] = await Promise.all([
				$axios.$get(`http://bagitulis-cms.test/api/journal/${params.slug}`),
				$axios.$get('http://bagitulis-cms.test/api/journals')
			])
			return {
				writing: writing.data,
				writings: writings.data
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
			return `${month} ${day} ${year}`
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
			width: 700px;
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
</style>
