<template>
	<main class="main">
		<form class="login">
			<div class="login-form left flex--wrap">
				<h2 class="text-center mb-0 text-tc-head">Masuk</h2>
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
					<div
						v-if="$v.formData.email.$error"
						class="form-error-msg mt-4 flex v-start"
					>
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
					<nuxt-link :to="localePath('/masuk')" class="forgot-password"
						>Lupa password?</nuxt-link
					>
				</div>
				<button
					type="submit"
					class="btn--primary login-submit btn"
					@click.prevent="login()"
				>
					Masuk
				</button>
				<nuxt-link
					:to="localePath('/daftar')"
					class="btn--yellow login-submit btn"
					>Register</nuxt-link
				>
			</div>
			<div class="right flex">
				<img src="/assets/img/login-illustration.jpg" alt="" />
			</div>
		</form>
	</main>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
export default {
	// middleware: ['guest'],
	nuxtI18n: {
		paths: {
			id: '/masuk',
			en: '/login'
		}
	},
	layout: 'blanklayout',
	data() {
		return {
			showPassword: false,
			form: {
				email: 'admin@gmail.com',
				password: 'password'
			},
			formData: {
				email: null,
				password: null
			}
		}
	},
	validations: {
		formData: {
			email: {
				email,
				required
			},
			password: {
				required,
				maxLength: maxLength(20)
			}
		}
	},
	methods: {
		// async login() {
		// 	try {
		// 		const response = await this.$auth.loginWith('laravelSanctum', {
		// 			data: this.formData
		// 		})
		// 		// this.$auth.$storage.setUniversal('user', response.data.data.user, true)
		// 		this.$auth.setUser(response.data.user)
		// 		this.$auth.$storage.setState('loggedIn', true)
		// 		// this.$auth.$storage.setLocalStorage('loggedIn', true)
		// 		console.log(response)
		// 	} catch (err) {
		// 		console.log(err)
		// 	}
		// }
		login() {
			this.$auth
				.loginWith('laravelSanctum', {
					data: {
						email: this.form.email,
						password: this.form.password
					}
				})
				.then(
					response => console.log(response)
					// (this.$store.state.auth.loggedIn = true)
				)
				.catch(error => console.log(error))
		}
	}
}
</script>

<style lang="scss" scoped>
.login {
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
		padding: 20px 32px;
		display: flex;
		gap: 24px;
	}

	&-form {
		flex-direction: column;
		justify-content: center;
		gap: 16px;
		width: 100%;
		// min-width: 400px;

		@media #{$small} {
			min-width: 400px;
		}
	}
}

.form-item {
	margin-bottom: 12px;
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
	color: $link !important;
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

.form-input {
	width: 100%;
}
</style>
