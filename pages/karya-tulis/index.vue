<template>
	<main class="site-main pv-56">
		<div class="writings container">
			<div class="head text-center mb-40">
				<h2 class="head-title text-black">Semua Karya Tulis</h2>
				<p class="head-subtitle">
					Semua Karya Tulis yang telah dibagikan ke Bagitulis.
				</p>
				<!-- <input v-model="journalSearch" type="text" class="form-input" /> -->
			</div>
			<div class="body flex flex--wrap">
				<template v-if="writings.length > 0">
					<div v-for="(item, i) in writings" :key="i" class="body-card">
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
				</template>
				<template v-else>
					<div class="container text-center">
						<img src="/assets/img/empty.jpg" alt="" width="800" />
					</div>
				</template>
			</div>
		</div>
	</main>
</template>

<script>
import CardJournal from '../../components/card/CardJournal.vue'
export default {
	async asyncData({ $axios, error, $catch500, $catch401, $catch404 }) {
		try {
			const [writings] = await Promise.all([
				$axios.$get(`${process.env.BASE_URL}/api/journals`)
			])
			return {
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
			writings: [],
			journalSearch: ''
		}
	},
	methods: {},
	components: { CardJournal }
}
</script>

<style lang="scss" scoped>
.head {
	&-title {
		color: $tc-head;
		font-size: 30px;
		@media #{$medium} {
			font-size: 40px;
		}
	}
	&-subtitle {
		margin: 0 auto;
		width: 100%;
		max-width: 700px;
		color: #6e7692;
	}
}
.body {
	justify-content: center;
	gap: 20px;

	&-card {
		box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
		border-radius: 12px;
	}
}
</style>
