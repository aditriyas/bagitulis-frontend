<template>
	<main class="site-main pv-56">
		<div class="writings container">
			<div class="head text-center mb-40">
				<h2 class="head-title text-black">Jurnal</h2>
				<p class="head-subtitle">Jurnal yang telah dibagikan ke Bagitulis.</p>
			</div>
			<div class="body flex flex--wrap">
				<div v-for="(item, i) in writings" :key="i" class="body-card">
					<div v-if="item.category.name === 'Jurnal'">
						<CardJournal
							:file="item.file_path"
							:thumbnail="item.thumbnail_path"
							:category="item.category"
							:title="item.title"
							:description="item.description"
							:tags="item.tags"
							:user="item.user"
							:photo="item.thumbnail"
							:slug="item.id"
							:date="item.updated_at"
						/>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CardJournal from '../../components/card/CardJournal.vue'
export default {
	components: { CardJournal },
	async asyncData({ $axios, error, $catch500, $catch401, $catch404 }) {
		try {
			const cat = 'Jurnal'
			const [writings] = await Promise.all([
				$axios.$get(`http://bagitulis-cms.test/api/journals?category=${cat}`)
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
	methods: {}
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
