<template>
	<main class="site-main">
		<div class="form">
			<div class="head mb-24">
				<h2 class="text-black mb-8">Edit Karya Tulis Kamu!</h2>
				<p style="font-size: 14px" class="mb-0">
					Edit Karya Tulis kamu disini!
				</p>
			</div>
			<form action="">
				<div class="form-item">
					<label for="title">Judul<span class="text-primary">*</span></label>
					<input
						id="title"
						v-model="formData.title"
						type="text"
						name="title"
						class="form-input w-100"
						:placeholder="writing.title"
						required
					/>
				</div>
				<div class="form-item">
					<label for="category"
						>Kategori<span class="text-primary">*</span></label
					>
					<v-select
						v-model="formData.category"
						:options="categories"
						title="category"
						name="category"
						label="name"
						:value="writing.category.name"
						required
					></v-select>
				</div>
				<div class="form-item">
					<label for="description"
						>Deskripsi<span class="text-primary">*</span></label
					>
					<textarea
						id="description"
						v-model="formData.description"
						name="description"
						cols="30"
						rows="5"
						class="form-input w-100"
						:placeholder="writing.description"
					></textarea>
				</div>
				<div class="thumbnail">
					<label for="thumbnail" class="d-block"
						>Thumbnail<span class="text-primary">*</span></label
					>
					<div class="form-input">
						<input
							id="thumbnail"
							type="file"
							name="thumbnail"
							accept="image/*"
							class="w-100"
							@change="image($event)"
						/>
					</div>
				</div>
				<div class="file">
					<label for="file" class="d-block"
						>File<span class="text-primary">*</span></label
					>
					<div class="form-input">
						<input
							id="thumbnail"
							type="file"
							name="thumbnail"
							accept="application/pdf"
							class="w-100"
							@change="file($event)"
						/>
					</div>
				</div>
				<div
					class="snk flex mb-32 mt-12 v-center"
					style="gap: 12px; font-size: 12px; width: 50%"
				>
					<input type="checkbox" class="form-input" checked disabled />
					<span
						>Saya <strong>{{ $auth.user[0].name }}</strong
						>, akan bertanggung jawab secara penuh terhadap apa yang saya unggah
						pada
						<a href="/">Bagitulis.com</a>
					</span>
				</div>
				<div class="button-container flex">
					<button
						type="submit"
						class="btn btn--primary"
						@click.prevent="onSubmit()"
					>
						Unggah
					</button>
				</div>
			</form>
		</div>
	</main>
</template>

<script>
import swal from 'sweetalert2'

export default {
	layout: 'profile',
	middleware: 'auth',

	async asyncData({ $axios, error, $catch500, $catch401, $catch404, params }) {
		try {
			const [categories] = await Promise.all([
				$axios.$get('http://bagitulis-cms.test/api/category')
			])
			const [writing] = await Promise.all([
				$axios.$get(`http://bagitulis-cms.test/api/journal/${params.slug}`)
			])
			return {
				categories: categories.data,
				writing: writing.data
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
			formData: {
				category: null,
				file: null,
				thumbnail: null,
				title: null,
				description: null
			}
		}
	},
	methods: {
		async onSubmit() {
			const formData = new FormData()

			formData.set('title', this.formData.title)
			formData.set('category', this.formData.category.id)
			formData.set('description', this.formData.description)
			formData.set('thumbnail', this.formData.thumbnail)
			formData.set('file', this.formData.file)
			formData.set('published', 1)

			await this.$axios
				.post(
					`http://bagitulis-cms.test/api/journal/${this.$route.params.slug}`,
					formData
				)
				.then(res => {
					// eslint-disable-next-line no-console
					swal({
						html: `<h4 class="mb-0">Edit Karya Tulis berhasil!</h4></br><p class="mb-0">Anda berhasil mengubah Karya Tulis Anda!</p>`,
						confirmButtonClass: 'btn-sweet--danger',
						position: 'center',
						timer: 2000,
						showCloseButton: true
					})
					this.$router.push({
						path: this.localePath('/akun-saya/karya-tulis-saya')
					})
				})
				.catch(error => {
					swal({
						html: `<h4 class="mb-0">${error}</h4></br><p class="mb-0">Anda berhasil mengubah Karya Tulis Anda!</p>`,
						confirmButtonClass: 'btn-sweet--danger',
						position: 'center',
						timer: 2000,
						showCloseButton: true
					})
				})
		},
		file(event) {
			this.formData.file = event.target.files[0]
		},
		image(event) {
			this.formData.thumbnail = event.target.files[0]
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-top: 0;
	margin: 0;
}

.photo {
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;

	img {
		width: 90px;
		height: 90px;
		border-radius: 50%;
	}
}

input[type='file'] {
	max-width: 218px;
}

.form {
	&-item,
	.thumbnail,
	.file {
		margin-bottom: 12px;

		label {
			font-size: 12px;
			color: $tc-head;
		}

		&-flex {
			justify-content: flex-start;
			gap: 30px;
		}
	}
}
input,
textarea,
select {
	font-size: 14px;
}

/deep/ {
	.vs__dropdown-toggle,
	.vs__dropdown-menu {
		font-size: 14px;
	}
}

.button-container {
	justify-content: flex-end;

	button {
		padding: 12px 60px;
	}
}
</style>
