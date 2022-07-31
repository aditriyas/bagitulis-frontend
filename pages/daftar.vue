<template>
	<main class="main relative">
		<form class="register">
			<div class="register-form left flex--wrap">
				<h2 class="text-center mb-0 text-tc-head">Daftar</h2>
				<div class="form-item name-container">
					<label for="name">Fullname<span class="text-primary">*</span></label>
					<input
						v-model.trim="$v.formData.name.$model"
						type="text"
						class="form-input"
						name="name"
						placeholder="John Doe"
						:class="{
							'form-input--error': $v.formData.name.$error
						}"
						@blur="$v.formData.name.$touch()"
					/>
					<div v-if="$v.formData.name.$error" class="form-error-msg mt-4 flex">
						<img
							src="~assets/img/form-error-icon.svg"
							alt="Error"
							title="Error"
							class="form-error-icon"
						/>
						<span class="text pl-4">Format nama yang anda masukkan salah</span>
					</div>
				</div>
				<div class="email-container form-item">
					<label for="email">Email <span class="text-primary">*</span></label>
					<input
						v-model.trim="$v.formData.email.$model"
						type="email"
						class="form-input"
						name="email"
						placeholder="example@mail.com"
						:class="{
							'form-input--error': $v.formData.email.$error
						}"
						@blur="$v.formData.email.$touch()"
					/>
					<div v-if="$v.formData.email.$error" class="form-error-msg mt-4 flex">
						<img
							src="~assets/img/form-error-icon.svg"
							alt="Error"
							title="Error"
							class="form-error-icon"
						/>
						<span class="text pl-4">Format email yang anda masukkan salah</span>
					</div>
				</div>
				<div class="password-container form-item">
					<label for="password" class="label-container"
						>Password <span class="text-primary">*</span>
					</label>
					<div class="relative">
						<input
							v-model.trim="$v.formData.password.$model"
							:type="showPassword ? 'text' : 'password'"
							class="form-input"
							:class="{
								'form-input--error': $v.formData.password.$error
							}"
							:maxlength="$v.formData.password.$params.maxLength.max"
							@blur="$v.formData.password.$touch()"
						/>
						<span
							:class="showPassword ? 'bzi-Eye' : 'bzi-Eye-closed'"
							class="bzi-1_5x eye"
							@click="showPassword = !showPassword"
						></span>
					</div>
					<div
						v-if="$v.formData.password.$error"
						class="form-error-msg mt-4 flex"
					>
						<img
							src="~assets/img/form-error-icon.svg"
							alt="Error"
							title="Error"
							class="form-error-icon"
						/>
						<span class="text pl-4"
							>Format password yang anda masukkan salah</span
						>
					</div>
				</div>
				<div class="password-container form-item">
					<label for="password" class="label-container"
						>Re-type Password <span class="text-primary">*</span>
					</label>
					<div class="relative">
						<input
							v-model.trim="$v.formData.repeatPassword.$model"
							:type="showRepeatPassword ? 'text' : 'password'"
							class="form-input"
							:class="{
								'form-input--error': $v.formData.password.$error
							}"
							@blur="$v.formData.repeatPassword.$touch()"
						/>
						<span
							:class="showRepeatPassword ? 'bzi-Eye' : 'bzi-Eye-closed'"
							class="bzi-1_5x eye"
							@click="showRepeatPassword = !showRepeatPassword"
						></span>
					</div>
					<div
						v-if="$v.formData.repeatPassword.$error"
						class="form-error-msg mt-4 flex"
					>
						<img
							src="~assets/img/form-error-icon.svg"
							alt="Error"
							title="Error"
							class="form-error-icon"
						/>
						<span class="text pl-4">Konfirmasi password tidak sama</span>
					</div>
					<nuxt-link :to="localePath('/masuk')" class="forgot-password"
						>Sudah memiliki akun? Masuk disini</nuxt-link
					>
				</div>
				<button
					type="submit"
					:disabled="$v.$invalid"
					class="btn--primary register-submit btn"
					@click.prevent="onSubmit()"
				>
					Daftar
				</button>
				<nuxt-link
					:to="localePath('/')"
					exact
					class="btn--yellow register-submit btn"
					>Back to Home</nuxt-link
				>
			</div>
			<div class="right flex">
				<img src="/assets/img/login-illustration.jpg" alt="" />
			</div>
		</form>
		<div v-if="success === true">
			<div class="modal p-24">
				<div class="body mb-40">
					<h3 class="text-black">Terimakasih telah menghubungi kami</h3>
					<p>
						Pesan Anda telah kami terima, kami akan menghubungi anda kembali
						secepatnya!
					</p>
				</div>
				<nuxt-link :to="localePath('/')" exact class="btn--primary success-btn"
					>Kembali ke Home</nuxt-link
				>
			</div>
			<div class="overlay"></div>
		</div>
	</main>
</template>

<script>
import { required, email, maxLength, sameAs } from 'vuelidate/lib/validators'
export default {
	// middleware: ['guest'],
	nuxtI18n: {
		paths: {
			id: '/daftar',
			en: '/register'
		}
	},
	layout: 'blanklayout',
	data() {
		return {
			showPassword: false,
			showRepeatPassword: false,
			// success: true,
			formData: {
				name: null,
				email: null,
				password: null,
				repeatPassword: null
			}
		}
	},
	validations: {
		formData: {
			name: {
				required,
				maxLength: maxLength(256)
			},
			email: {
				required,
				email
			},
			password: {
				required,
				maxLength: maxLength(20)
			},
			repeatPassword: {
				required,
				sameAsPassword: sameAs('password')
			}
		}
	},
	methods: {
		async onSubmit() {
			const formData = new FormData()

			formData.set('name', this.formData.name)
			formData.set('email', this.formData.email)
			formData.set('password', this.formData.password)

			await this.$axios
				.post('http://bagitulis-cms.test/api/register', formData)
				.then(res => {
					// eslint-disable-next-line no-console
					this.success = true
				})
				.catch(error => {
					console.log(error)
					this.$nuxt.refresh()
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.register {
	display: block;
	width: auto;
	padding: 24px 32px;
	box-shadow: 0px 24px 56px 30px rgba(35, 39, 53, 0.08);
	align-items: center;
	border-radius: 8px;
	margin: 0 12px;
	&:hover {
		box-shadow: 0px 24px 56px 60px rgba(35, 39, 53, 0.08);
		transition: all 0.3s ease-in-out;
	}
	@media #{$medium} {
		margin: 0;
	}
	@media #{$large} {
		min-height: 500px;
		width: max-content;
		padding: 28px 32px;
		display: flex;
		gap: 24px;
	}

	&-form {
		flex-direction: column;
		justify-content: center;
		gap: 16px;
		width: 100%;

		@media #{$small} {
			min-width: 400px;
		}
	}
}

.form-item {
	margin-bottom: 12px;
	&:nth-last-child(3) {
		margin-bottom: 28px;
	}
}

.form-input {
	font-size: 12px;
	padding: 12px 14px;

	&:focus {
		border-color: $link;
	}

	&::placeholder {
		font-size: 14px;
	}
}

.forgot-password {
	font-size: 12px;
	&:hover {
		text-decoration: underline;
	}
}

.btn {
	padding: 12px 16px;
	width: 100%;
	margin-bottom: 12px;
}

.eye {
	position: absolute !important;
	bottom: 10px;
	right: 20px;
	cursor: pointer;
	color: $tc-pbody-light !important;
}

label {
	font-size: 12px;
}

.right {
	display: none;
	@media #{$large} {
		display: block;
		img {
			max-width: 600px;
		}
	}
}

.modal {
	background-color: #fff;
	box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
	border-radius: 16px;
	max-width: 600px;
	z-index: 1000;
	position: absolute;
	height: max-content;
	margin: 0 auto;
	left: 0;
	top: 30%;
	bottom: 0;
	right: 0;
	text-align: center;
}

.overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
}

.success-btn {
	padding: 12px 32px;
}

.form-input {
	width: 100%;
}
</style>
