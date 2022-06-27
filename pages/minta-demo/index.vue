<template>
	<main class="site-main pt-40">
		<div class="container">
			<div class="bzg request">
				<div class="bzg_c" data-col="m4">
					<div class="request-left">
						<div class="request-left--head mb-64">
							<p class="head-subtitle mb-16">Permintaan Demo</p>
							<h1 class="head-title">Solusi E-Commerce Multi-vendor</h1>
						</div>
						<div class="request-left--image">
							<img
								src="/assets/img/request-demo-picture.png"
								alt="Request Demo Image"
								title="Minta Demo"
							/>
						</div>
					</div>
				</div>
				<div class="bzg_c" data-col="m7">
					<div class="request-right">
						<div class="request-right--wrapper ph-32 bg-white">
							<div class="request-right--head mb-32">
								<h1 class="head-title">
									Coba RocketMall untuk solusi bisnis Anda.
								</h1>
								<p class="head-subtitle">Isi formulir dan segera mulai</p>
							</div>
							<div class="form-wrapper">
								<form @submit.prevent="">
									<div class="form-text mb-32">
										<div class="form-name form-item">
											<label for="" class="text-cap form-label"
												>nama lengkap<span class="text-red">*</span></label
											>
											<input
												v-model.trim="$v.formData.fullName.$model"
												type="text"
												class="form-input form-input--block"
												:class="{
													'form-input--error': $v.formData.fullName.$error
												}"
												@blur="$v.formData.fullName.$touch()"
											/>
											<div
												v-if="$v.formData.fullName.$error"
												class="form-error-msg mt-4 flex v-start"
											>
												<img
													src="~assets/img/form-error-icon.svg"
													alt="Error"
													title="Error"
													class="form-error-icon"
												/>
												<span class="text">Nama lengkap wajib diisi</span>
											</div>
										</div>
										<div class="form-email form-item">
											<label for="" class="text-cap form-label"
												>Email Bisnis<span class="text-red">*</span>
											</label>
											<input
												v-model.trim="$v.formData.email.$model"
												type="email"
												class="form-input form-input--block"
												:maxlength="$v.formData.email.$params.maxLength.max"
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
												<span class="text"
													>Format email yang anda masukkan salah</span
												>
											</div>
										</div>
										<div class="form-company form-item">
											<label for="" class="text-cap form-label"
												>nama perusahaan<span class="text-red">*</span></label
											>
											<input
												v-model.trim="$v.formData.companyName.$model"
												type="text"
												class="form-input form-input--block"
												:class="{
													'form-input--error': $v.formData.companyName.$error
												}"
												@blur="$v.formData.companyName.$touch()"
											/>
											<div
												v-if="$v.formData.companyName.$error"
												class="form-error-msg mt-4 flex v-start"
											>
												<img
													src="~assets/img/form-error-icon.svg"
													alt="Error"
													title="Error"
													class="form-error-icon"
												/>
												<span class="text">Nama perusahaan wajib diisi</span>
											</div>
										</div>
										<div class="form-phone relative">
											<label for="" class="text-cap form-label"
												>nomor handphone<span class="text-red">*</span></label
											>
											<input
												v-model.trim="$v.formData.phoneNumber.$model"
												type="number"
												class="form-input form-input--block form-input--phone"
												:maxlength="
													$v.formData.phoneNumber.$params.maxLength.max
												"
												:class="{
													'form-input--error': $v.formData.phoneNumber.$error
												}"
												@blur="$v.formData.phoneNumber.$touch()"
											/>
											<span class="number-select">+62</span>
										</div>
										<div
											v-if="
												$v.formData.phoneNumber.$error ||
												!$v.formData.phoneNumber.minLength
											"
											class="form-error-msg flex mt-4"
										>
											<img
												src="~assets/img/form-error-icon.svg"
												alt="Error"
												title="Error"
												class="form-error-icon"
											/>
											Format nomor telepon yang Anda masukkan salah.
										</div>
									</div>
									<div class="form-products">
										<h2 class="product-title text-cap mb-24">produk</h2>
										<div class="product-checkbox">
											<div class="product-checkbox--left flex flex--wrap">
												<div
													v-for="(product, i) in products"
													:key="i"
													class="checkbox-multivendor checkbox-wrapper flex"
												>
													<input
														:id="product.id"
														v-model="formData.product_ids"
														:value="product.id"
														type="checkbox"
														:disabled="product.is_coming_soon === 1"
														class="form-input--check"
													/>
													<label class="product-labels">{{
														product.name
													}}</label>
												</div>
											</div>
										</div>
										<recaptcha
											class="mt-32 mb-40"
											@error="onError"
											@success="onSuccess"
											@expired="onExpired"
										/>
										<div class="product-button">
											<button
												type="submit"
												class="btn btn--primary text-cap"
												:disabled="
													$v.$invalid ||
													!captchaChecked ||
													isSending ||
													selectedProducts === ''
												"
												@click="onSubmit"
											>
												mulai
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import {
	required,
	email,
	minLength,
	maxLength,
	numeric
} from 'vuelidate/lib/validators'
export default {
	nuxtI18n: {
		paths: {
			id: '/minta-demo',
			en: '/request-demo'
		}
	},
	async asyncData({
		$axios,
		error,
		$catch500,
		$catch404,
		store,
		params,
		i18n,
		$tr
	}) {
		try {
			const [productData] = await Promise.all([$axios(`/api/en/products`)])
			return {
				products: productData.data.results
			}
		} catch (e) {
			if (error.statusCode === 404) {
				error($catch404)
			} else {
				error($catch500)
			}
		}
	},
	data() {
		return {
			isSending: false,
			captchaChecked: false,
			products: [],
			formData: {
				fullName: null,
				region_code: null,
				phoneNumber: null,
				email: null,
				companyName: null,
				subject: null,
				message: null,
				product_ids: []
			}
		}
	},
	validations: {
		formData: {
			email: {
				email,
				minLength: minLength(4),
				maxLength: maxLength(256),
				required
			},
			phoneNumber: {
				numeric,
				minLength: minLength(10),
				maxLength: maxLength(256),
				required
			},
			fullName: {
				required
			},
			companyName: {
				required
			}
		}
	},
	head() {
		return {
			title: 'Permintaan Demo - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Permintaan Demo - RocketMall',
				metaImage:
					'https://rocketmall-landlord-frontend.suitdev.com/assets/img/request-demo-picture.png',
				metaDesc:
					'Coba RocketMall secara gratis melalui permintaan demo. Temukan solusi untuk bisnis Anda di RocketMall.'
			})
		}
	},

	// async fetch() {
	// 	await this.$axios.get(`/api/en/products`).then(res => {
	// 		this.products = res.data.results
	// 	})
	// },
	computed: {
		selectedProducts() {
			return this.formData.product_ids.toString()
		}
	},
	methods: {
		async onSubmit() {
			const formData = new FormData()
			const token = await this.$recaptcha.getResponse()
			this.isSending = true

			formData.set('full_name', this.formData.fullName)
			formData.set('email', this.formData.email)
			formData.set('company_name', this.formData.companyName)
			formData.set('phone', `+62${this.formData.phoneNumber}`)
			formData.set('product_ids', this.selectedProducts)
			formData.set('g-recaptcha-response', token)

			await this.$axios
				.post('/api/demo_requests', formData)
				.then(res => {
					this.$router.push({
						path: this.localePath('/minta-demo/sukses')
					})
					this.captchaChecked = false
					this.isSending = false
				})
				.catch(error => {
					console.log(error)
				})
		},
		onError(error) {
			console.log('Error happened:', error)
		},
		onSuccess(token) {
			this.captchaChecked = true
			console.log('Succeeded')
		},
		onExpired() {
			this.captchaChecked = false
			console.log('Expired')
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-bottom: 120px;
	background-color: #f6f8fb;
}
.bzg {
	justify-content: space-between;

	&_c {
		padding-bottom: 24px;
		@media #{$medium} {
			padding-bottom: 0;
		}
	}
}

.request {
	&-left {
		&--head {
			.head {
				&-title {
					color: $tc-head;
					font-size: 38px;
					line-height: 50px;

					@media #{$medium} {
						line-height: 64px;
						font-size: 48px;
						width: 100%;
						max-width: 360px;
					}
				}

				&-subtitle {
					font-size: 20px;
					color: $tc-head;
					font-weight: 600;
				}
			}
		}
	}

	&-right {
		&--wrapper {
			border-radius: 8px;
			box-shadow: 0px 2px 16px 0px rgba(0, 14, 51, 0.08);
			padding-top: 24px;
			padding-bottom: 40px;
		}

		&--head {
			.head {
				&-title {
					color: $tc-head;
					font-weight: 600;
					line-height: 50px;
					width: 100%;
					max-width: 516px;
					@media #{$medium} {
						font-size: 40px;
						line-height: 56px;
					}
				}

				&-subtitle {
					font-size: 18px;
					color: #6e7692;
					@media #{$medium} {
						font-size: 20px;
					}
				}
			}
		}
	}
}

input[type='checkbox']:disabled + label {
	pointer-events: none;
	color: #9296a3;
}

.form {
	&-item {
		margin-bottom: 32px;
	}

	&-error {
		&-msg {
			font-size: 12px;
		}

		&-icon {
			font-size: 16px;
		}
	}

	&-input {
		border-radius: 8px;
		border: 1px solid #e8eaef;
		padding: 12px 16px;
		color: #505565;

		&--phone {
			padding-left: 74px !important;
		}

		&--error {
			border: 1px solid $red;
		}

		&--check {
			&:disabled {
				pointer-events: none;
			}
		}
	}

	&-phone::v-deep {
		.v-select {
			padding: 0;
			.vs__dropdown-menu {
				display: block !important;
			}

			.vs--open {
				&::placeholder {
					padding-top: 10px;
				}
			}

			.vs__selected {
				margin: 0;
				// padding-left: 15px;
				font-size: 14px;
				padding: 2px 0 2px 4px;
			}

			.vs__actions {
				padding-left: 0;
				padding-bottom: 6px;
				z-index: 2;

				.vs__clear {
					display: none !important;
				}
			}

			.vs__dropdown-toggle {
				padding-bottom: 0;
				border-radius: 4px;
				border: none !important;
				background-color: #eceff7;
			}

			.vs__search {
				z-index: 3;
				padding: 2px 0px;
				margin: 0;
				&::placeholder {
					color: $black60;
					font-size: 14px;
					padding-left: 6px;
				}
			}

			.vs__selected-options {
				padding: 0;
				// padding-left: 6px;
				color: #232735;
			}
		}
	}

	&-label {
		font-size: 12px;
		color: #505565;
	}

	&-products {
		.product {
			&-title {
				color: $tc-head;
				font-weight: 600;
				font-size: 18px;
				@media #{$medium} {
					font-size: 24px;
				}
			}

			&-labels {
				color: $tc-head;
				font-size: 15px;
				@media #{$medium} {
					font-size: 16px;
				}
			}

			&-checkbox {
				gap: 47px;

				&--left {
					justify-content: space-between;
				}

				.checkbox {
					&-wrapper {
						margin-bottom: 20px;
						width: 50%;
						height: auto;

						label {
							padding-left: 16px;
						}
					}
				}
			}

			&-button {
				.btn {
					padding: 16px 52px;
					border-radius: 8px;

					&:disabled {
						background-color: #e8eaef;
						color: #b3b7c6;
					}
				}
			}
		}
	}
}

.number {
	&-select {
		position: absolute;
		box-sizing: border-box;
		border: none !important;
		top: 35px;
		left: 10px;
		padding: 4px 20px 4px 8px;
		border-radius: 4px;
		background-color: #eceff7;
		color: $tc-head;
	}

	&-field {
		padding-left: 83px !important;
	}
}

.form-error-msg {
	gap: 4px;
	align-items: center;
}
</style>
