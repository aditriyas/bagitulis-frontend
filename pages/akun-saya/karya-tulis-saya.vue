<template>
	<main class="site-main p-0 m-0">
		<div class="head mb-24">
			<h2 class="text-black mb-8">Karya Tulis yang Anda miliki!</h2>
			<template v-if="writings.length > 0">
				<p style="font-size: 14px" class="mb-0">
					Berikut adalah Karya Tulis yang Anda miliki!
				</p>
			</template>
			<template v-else>
				<p style="font-size: 14px" class="mb-0">
					Anda belum memiliki Karya Tulis,
					<nuxt-link :to="localePath('/akun-saya/unggah')" class="text-primary"
						>Klik Disini</nuxt-link
					>
					untuk mengunggah Karya Tulis Anda!
				</p>
			</template>
		</div>
		<div class="flex flex-con">
			<template v-if="writings.length > 0">
				<div v-for="(item, i) in writings" :key="i">
					<div class="card">
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
							<nuxt-link :to="localePath(`/karya-tulis/${item.id}`)">
								<button class="bzi bzi-Eye btn btn--yellow button"></button>
							</nuxt-link>
							<nuxt-link :to="localePath(`/akun-saya/${item.id}`)">
								<button
									class="bzi bzi-Edit btn btn--secondary button"
									style="color: black"
								></button>
							</nuxt-link>
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
					</div>
				</div>
			</template>
			<template v-else>
				<div class="container text-center mt-20">
					<img src="/assets/img/empty.jpg" alt="" width="800" />
				</div>
			</template>
		</div>
	</main>
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
						html: `<h4 class="mb-0">Karya Tulis Terhapus!</h4><p class="mb-0">Anda berhasil menghapus karya tulis ini!</p></br>`,
						confirmButtonClass: 'btn-sweet--danger',
						position: 'center',
						timer: 3000,
						showCloseButton: true
					})
					this.$nuxt.refresh()
				})
				.catch(err => {
					swal({
						html: `<h4 class="mb-0">${err}</h4>`,
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
	flex-wrap: wrap;
	gap: 20px;
	row-gap: 15px;
	justify-content: center;

	@media #{$medium} {
		justify-content: space-between;
	}
}
.card {
	width: 380px;
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
	justify-content: flex-end;
	gap: 8px;
}

// .head {
// 	top: 0;
// 	position: sticky;
// 	background-color: $white;
// 	padding-top: -32px;
// }
</style>
