<template>
	<main class="site-main">
		<div class="form">
			<form action="">
				<div class="photo flex mb-20">
					<img
						:src="
							$auth.user[0].photo === null
								? '/assets/img/dummy-profile-pic.png'
								: $auth.user[0].photo
						"
						alt=""
					/>
					<label for="photo" class="photo-label">
						<input
							id="photo"
							type="file"
							name="photo"
							accept="image/*"
							@change="image($event)"
						/>
					</label>
				</div>
				<div class="form-item">
					<label for="name"
						>{{ $t('Name') }}<span class="text-primary">*</span></label
					>
					<input
						id="name"
						v-model="formData.name"
						type="text"
						name="name"
						class="form-input w-100"
						:placeholder="$auth.user[0].name"
					/>
				</div>
				<div class="form-item">
					<label for="email">Email<span class="text-primary">*</span></label>
					<input
						id="email"
						v-model="formData.email"
						type="email"
						name="email"
						class="form-input w-100"
						:placeholder="$auth.user[0].email"
					/>
				</div>
				<div class="form-item">
					<label for="password"
						>Password<span class="text-primary">*</span></label
					>
					<input
						id="password"
						v-model="formData.password"
						type="password"
						name="password"
						class="form-input w-100"
					/>
				</div>
				<div class="button-container flex mt-32">
					<button
						type="submit"
						class="btn btn--primary"
						@click.prevent="onSubmit"
					>
						Ubah
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
	nuxtI18n: {
		paths: {
			id: '/akun-saya',
			en: '/profile'
		}
	},
	data() {
		return {
			formData: {
				name: null,
				photo: null,
				email: null,
				password: null
			}
		}
	},
	methods: {
		async onSubmit() {
			const formData = new FormData()

			formData.set('user_id', this.$auth.user[0].id)
			if (this.formData.name !== null) {
				formData.set('name', this.formData.name)
			}
			if (this.formData.photo !== null) {
				formData.set('photo', this.formData.photo)
			}
			if (this.formData.email !== null) {
				formData.set('email', this.formData.email)
			}
			if (this.formData.password !== null) {
				formData.set('password', this.formData.password)
			}
			await this.$axios
				.post(`${process.env.BASE_URL}/api/update-profile`, formData)
				.then(res => {
					swal({
						html: `<h4 class="mb-0">Profile berhasil diupdate!</h4></br><p class="mb-0">Anda berhasil mengupdate profile Anda!</p>`,
						confirmButtonClass: 'btn-sweet--danger',
						position: 'center',
						showCloseButton: true
					})
					window.location.reload(true)
				})
				.catch(error => {
					swal({
						html: `<h4 class="mb-0">${error}</h4></br>`,
						confirmButtonClass: 'btn-sweet--danger',
						position: 'center',
						showCloseButton: true
					})
				})
		},
		image(event) {
			this.formData.photo = event.target.files[0]
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
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
	}
}

input[type='file'] {
	max-width: 218px;
}

.form {
	&-item {
		margin-bottom: 12px;

		label {
			font-size: 12px;
			color: $tc-head;
		}

		input {
			font-size: 14px;
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
