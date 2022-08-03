<template>
	<div class="container">
		<div class="flex flex-con">
			<div v-for="(item, i) in writings" :key="i">
				<div class="card">
					<nuxt-link :to="localePath(`/karya-tulis/${item.id}`)">
						<div class="image mb-12">
							<img
								:src="
									item.thumbnail_path === null
										? '/assets/img/jurnal-img-1.png'
										: item.thumbnail_path
								"
								:alt="item.title"
								class=""
							/>
						</div>
						<div class="button flex flex-en">
							<button
								class="bzi bzi-Trash btn btn--primary button"
								@click.prevent="delJournal(item.id)"
							></button>
						</div>
						<h5 class="title mb-8">
							{{ item.title.slice(0, 35) }}
							<span v-if="item.description.length > 35">...</span>
						</h5>
						<p class="desc">
							{{ item.description.slice(0, 130) }}
							<span v-if="item.description.length > 130">...</span>
						</p>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import swal from 'sweetalert2'

export default {
	layout: 'profile',
	async asyncData({ $axios, error, $catch500, $catch401, $catch404, $auth }) {
		try {
			const [writings] = await Promise.all([
				$axios.$get(
					`http://bagitulis-cms.test/api/journal-user/${$auth.user[0].id}`
				)
			])
			return {
				writings: writings.data
			}
		} catch (e) {
			console.log(e)
		}
	},
	nuxtI18n: {
		paths: {
			id: '/akun-saya/karya-tulis-saya',
			en: '/my-account/my-writings'
		}
	},
	methods: {
		delJournal(id) {
			this.$axios
				.delete(`http://bagitulis-cms.test/api/journal/${id}`)
				.then(response => {
					swal({
						html: `<h4 class="mb-0">Login berhasil!</h4></br><p class="mb-0">Login berhasil, sekarang cari jurnal yang Anda mau!</p>`,
						confirmButtonClass: 'btn-sweet--danger',
						position: 'center',
						timer: 3000,
						showCloseButton: true
					})
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.flex-con {
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 20px;
}
.card {
	max-width: 350px;
	height: 400px;
	padding: 8px 12px;
	box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
	border-radius: 12px;

	img {
		border-radius: 12px;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.image {
		height: 200px;
	}

	.desc {
		font-size: 14px;
		color: $tc-head;
	}

	.title {
		color: $tc-head;
	}
}

.flex-end {
	justify-content: flex-end;
}

.button {
	padding: 4px 8px;
}
</style>
