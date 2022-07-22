<template>
	<main class="site-main">
		<div class="form">
			<div class="head mb-24">
				<h2 class="text-black mb-8">Unggah Karya Tulis Kamu!</h2>
				<p style="font-size: 14px" class="mb-0">
					Segera unggah Karya Tulis kamu disini!
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
export default {
	layout: 'profile',
	async asyncData({ $axios, error, $catch500, $catch401, $catch404 }) {
		try {
			const [categories] = await Promise.all([
				$axios.$get('http://bagitulis-cms.test/api/category')
			])
			return {
				categories: categories.data
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
			id: '/akun-saya/unggah',
			en: '/profile/upload-writing'
		}
	},
	data() {
		return {
			formData: {
				category: null,
				title: null,
				description: null,
				file: null,
				thumbnail: null
			}
		}
	},
	methods: {
		async onSubmit() {
			const formData = new FormData()

			formData.set('title', this.formData.title)
			formData.set('category', this.formData.category.id)
			formData.set('user_id', this.$auth.user.user.id)
			formData.set('description', this.formData.description)
			formData.set('thumbnail', this.formData.thumbnail)
			formData.set('file', this.formData.file)
			formData.set('published', 1)

			await this.$axios
				.post('http://bagitulis-cms.test/api/journal', formData)
				.then(res => {
					// eslint-disable-next-line no-console
					alert('Success')
				})
				.catch(error => {
					console.log(error)
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

		input {
			font-size: 14px;
		}

		&-flex {
			justify-content: flex-start;
			gap: 30px;
		}
	}
}

.button-container {
	justify-content: flex-end;

	button {
		padding: 12px 60px;
	}
}
</style>
