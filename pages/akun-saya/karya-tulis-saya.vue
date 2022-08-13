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
				<div v-for="(item, i) in writings" :key="i" class="contain-card">
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
						<div class="button flex flex-en mb-6">
							<nuxt-link :to="localePath(`/karya-tulis/${item.id}`)">
								<button class="bzi bzi-Eye btn btn--yellow button"></button>
							</nuxt-link>
							<nuxt-link :to="localePath(`/akun-saya/${item.id}`)">
								<button class="bzi bzi-Edit btn btn--link-text button"></button>
							</nuxt-link>
							<button
								class="bzi bzi-Trash btn btn--primary button"
								@click.prevent="delJournal(item.id)"
							></button>
						</div>
						<div class="head-journal mb-8">
							<h5 class="title mb-0">
								{{ item.title.slice(0, 25) }}
								<span v-if="item.description.length > 25">...</span>
							</h5>
							<span class="date-string">{{ dateFormat(item.created_at) }}</span>
						</div>
						<p class="desc mb-0">
							{{ item.description.slice(0, 120) }}
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
	middleware: 'auth',

	async asyncData({ $axios, error, $catch500, $catch401, $catch404, $auth }) {
		try {
			const [writings] = await Promise.all([
				$axios.$get(
					`${process.env.BASE_URL}/api/journal-user/${$auth.user[0].id}`
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
				.delete(`${process.env.BASE_URL}/api/journal/${id}`)
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
		},
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
.flex-con {
	flex-wrap: wrap;
	gap: 20px;
	row-gap: 15px;
	justify-content: center;

	@media #{$medium} {
		justify-content: space-between;
	}
}

.contain-card {
	width: 380px;
}
.card {
	width: 100%;
	height: 400px;
	padding: 8px 12px;
	box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
	border-radius: 12px;
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-in-out;
		transform: scale(1.05);
	}

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

.date-string {
	font-size: 12px;
	padding-bottom: 8px;
}
</style>
