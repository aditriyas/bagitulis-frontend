<template>
	<main class="site-main">
		<div class="container">
			<div class="contact relative">
				<div class="contact-left">
					<div class="contact-left--map">
						<iframe
							title="RocketMall"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.904827929205!2d106.82244961455521!3d-6.276242695457351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2247acd037f%3A0xddf875f24f8daae7!2sSuitmedia!5e0!3m2!1sen!2sid!4v1643621241164!5m2!1sen!2sid"
							class="map"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>
					<div class="contact-left--info">
						<div v-for="(item, index) in info" :key="index" class="info flex">
							<span :class="[item.infoIcon, 'info-icon']"></span>
							<a
								:href="item.url"
								target="_blank"
								title="RocketMall Info"
								class="info-text"
							>
								<p class="info-text--title mb-8">{{ item.infoTitle }}</p>
								<p class="info-text--subtitle">{{ item.infoSubtitle }}</p>
							</a>
						</div>
					</div>
				</div>
				<div class="contact-right">
					<div class="contact-card pv-24 ph-32">
						<div class="contact-card--head">
							<h1 class="title mb-12">{{ $t('contactUs') }}</h1>
							<p class="subtitle">
								{{ $t('contactPage.tellUs') }}
							</p>
						</div>
						<div class="contact-card--form form">
							<form @submit.prevent="">
								<div class="form-group-1 form-group flex mb-32">
									<div class="form-name form-group--item one">
										<label for="name"
											>{{ $t('fullName')
											}}<span class="text-red">*</span></label
										>
										<input
											id="name"
											v-model.trim="$v.formData.fullName.$model"
											type="text"
											class="form-input form-item item-1"
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
									<div class="form-phone form-group--item two relative">
										<label for="phone-number"
											>{{ $t('phoneNum')
											}}<span class="text-red">*</span></label
										>
										<input
											id="phone-number"
											v-model.trim="$v.formData.phoneNumber.$model"
											type="number"
											class="form-input form-item item-2 number"
											:maxlength="$v.formData.phoneNumber.$params.maxLength.max"
											:class="{
												'form-input--error': $v.formData.phoneNumber.$error
											}"
											@blur="$v.formData.phoneNumber.$touch()"
										/>
										<span class="number-select">+62</span>
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
								</div>
								<div class="form-email mb-32">
									<label for="email"
										>Email<span class="text-red">*</span></label
									>
									<input
										id="email"
										v-model.trim="$v.formData.email.$model"
										type="text"
										class="form-input form-input--block form-item"
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
								<div class="form-subject mb-32">
									<label for="subject"
										>{{ $t('subject') }}<span class="text-red">*</span></label
									>
									<input
										id="subject"
										v-model.trim="$v.formData.subject.$model"
										type="text"
										class="form-input form-input--block form-item"
										:class="{
											'form-input--error': $v.formData.subject.$error
										}"
										@blur="$v.formData.subject.$touch()"
									/>
									<div
										v-if="$v.formData.subject.$error"
										class="form-error-msg mt-4 flex v-start"
									>
										<img
											src="~assets/img/form-error-icon.svg"
											alt="Error"
											title="Error"
											class="form-error-icon"
										/>
										<span class="text">Subjek wajib diisi</span>
									</div>
								</div>
								<div class="form-message mb-32">
									<label for="message"
										>{{ $t('message') }}<span class="text-red">*</span></label
									>
									<textarea
										id="message"
										v-model.trim="$v.formData.message.$model"
										class="form-input form-input--block form-item"
										rows="3"
										cols="50"
										:class="{
											'form-input--error': $v.formData.message.$error
										}"
										@blur="$v.formData.message.$touch()"
									></textarea>
									<div
										v-if="$v.formData.message.$error"
										class="form-error-msg mt-4 flex v-start"
									>
										<img
											src="~assets/img/form-error-icon.svg"
											alt="Error"
											title="Error"
											class="form-error-icon"
										/>
										<span class="text">Pesan wajib diisi</span>
									</div>
								</div>
								<button
									type="submit"
									class="btn--primary form-button pv-16"
									:disabled="$v.$invalid"
									@click="onSubmit"
								>
									Kirim
								</button>
							</form>
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
			id: '/hubungi-kami',
			en: '/contact-us'
		}
	},
	data() {
		return {
			isSending: false,
			countries: ['Indonesia'],
			products: [],
			countryOptions: ['Indonesia', 'America'],
			formData: {
				email: null,
				phoneNumber: null,
				fullName: null,
				subject: null,
				message: null
			},
			info: [
				{
					infoIcon: 'bzi-Envelope',
					infoTitle: 'Email',
					infoSubtitle: 'aditriyas04@gmail.com',
					infoSub: null,
					url: 'mailto:aditriyas04@gmail.com'
				},
				{
					infoIcon: 'bzi-Phone-call',
					infoTitle: 'Nomor Handphone',
					infoSubtitle: '+62812 9683 9332',
					infoSub: null,
					url: 'tel:+6281296839332'
				}
			]
		}
	},
	head() {
		return {
			title: 'Hubungi Kami - Bagitulis',
			...this.$SEOMeta({
				metaTitle: 'Hubungi Kami - Bagitulis',
				metaDesc: 'Hubungi tim Bagitulis untuk tahu lebih lanjut'
			})
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
				minLength: minLength(4),
				maxLength: maxLength(256),
				required
			},
			fullName: {
				required
			},
			subject: {
				required
			},
			message: {
				required
			}
		}
	},
	methods: {
		async onSubmit() {
			const formData = new FormData()

			formData.set('full_name', this.formData.fullName)
			formData.set('email', this.formData.email)
			formData.set('phone', `+62${this.formData.phoneNumber}`)
			formData.set('subject', this.formData.subject)
			formData.set('messages', this.formData.message)

			await this.$axios
				.post('/api/contact_us', formData)
				.then(res => {
					// eslint-disable-next-line no-console
					this.$router.push({
						path: this.localePath('/hubungi-kami/sukses')
					})
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
.site-main {
	padding: 40px 0 300px 0;
}

.contact {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	row-gap: 32px;

	@media #{$medium} {
		display: block;
	}

	&-left {
		width: 100%;
		padding: 0 !important;
	}

	&-card {
		box-shadow: 0px 24px 56px 0px rgba(35, 39, 53, 0.08);
		width: 100%;
		max-width: 572px;
		border-radius: 8px;
		background: $white;

		&--head {
			margin-bottom: 32px;
			.title {
				font-weight: 600;
				font-size: 35px;
				color: $tc-head;
				@media #{$medium} {
					font-size: 40px;
				}
			}

			.subtitle {
				color: #6e7692;
				width: 100%;
				font-size: 13px;
				max-width: 364px;
				@media #{$medium} {
					font-size: 1em;
				}
			}
		}
	}

	&-right {
		@media #{$medium} {
			position: absolute;
			top: 104px;
			right: 123px;
		}
	}

	&-left {
		padding-left: 32px;
		@media #{$medium} {
			padding: 0;
		}
		&--map {
			margin-bottom: 58px;
			.map {
				border-radius: 16px;
				width: 100%;
				max-width: 643px;
				height: 553px;
			}
		}

		&--info {
			.info {
				gap: 16px;

				&:not(:last-child) {
					margin-bottom: 32px;
				}
				&-icon {
					font-size: 24px;
					color: #505565;
				}

				&-text {
					&--title {
						font-weight: 600;
						color: #505565;
					}

					&--subtitle,
					&--sub {
						color: #6e7692;
						width: 100%;
						max-width: 233px;
						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
}

.form {
	label {
		color: $tc-head;
		font-size: 12px;
		display: block;
	}

	textarea {
		resize: none;
	}

	&-country,
	&-products {
		/deep/ {
			.vs--open {
				box-sizing: border-box;
				border: 1px solid $primary !important;
				border-radius: 6px;
			}
			.v-select {
				padding: 0;

				.vs__dropdown-toggle {
				}

				.vs__dropdown-menu {
					border-radius: 6px;
					margin-top: 8px;
					box-shadow: 0px 0px 15px 0px rgba(35, 39, 53, 0.2);
					border: none;
					overflow: hidden;
					padding: 24px;
					overflow-y: auto;

					.vs__dropdown-option {
						border-radius: 4px;
						background-color: transparent;
						color: #505565;
						padding: 8px;
						position: relative;
						overflow: hidden;

						&:not(:last-child) {
							margin-bottom: 12px;
						}

						&:hover {
							background-color: #f6f8fb;
						}

						&:not(:last-child) {
							border-bottom: 1px solid #e8eaef;
						}
					}
				}

				.vs--open {
					&::placeholder {
						padding-top: 10px;
					}
				}

				.vs__selected {
					margin: 0;
					font-size: 16px;
					// padding: 2px 0 2px 4px;
					padding: 0;
					color: #505565;
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
					padding: 13px 16px;
					border-radius: 6px;
					background-color: transparent;
					border: 1px solid #e8eaef;
				}

				.vs__search {
					z-index: 3;
					padding: 0;
					margin: 0;
					&::placeholder {
						color: #232735;
						font-size: 14px;
						padding-left: 6px;
					}
				}

				.vs__selected-options {
					padding: 0;
					color: #232735;
				}
			}
		}
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
		border-radius: 6px;
		border: 1px solid #e8eaef;
		padding: 12px 16px;
		color: #505565;

		&--error {
			border: 1px solid $red;
		}
	}

	&-group {
		flex-wrap: wrap;
		width: 100%;
		max-width: 514px;
		justify-content: space-between;
		row-gap: 32px;

		.one {
			width: 100%;

			@media #{$medium} {
				width: 244px;
			}
		}

		.two {
			width: 100%;

			@media #{$medium} {
				width: 234px;
			}
		}

		&--item {
			.item-1 {
				width: 100%;
			}

			.item-2 {
				width: 100%;
			}
		}
	}

	&-phone {
		.number {
			padding-left: 76px;
		}
		/deep/ {
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
					font-size: 14px;
					padding: 2px 0 2px 4px;
				}

				.vs__actions {
					padding-left: 0;
					padding-bottom: 6px;
					z-index: 2;

					// svg {
					// 	display: none;
					// }

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
					color: #232735;
				}
			}
		}
	}

	&-button {
		width: 100%;
		max-width: 251px;
		border-radius: 8px;

		&:disabled {
			background-color: #e8eaef;
			color: #b3b7c6;
		}
	}
}
.number {
	&-select {
		position: absolute;
		box-sizing: border-box;
		border: none !important;
		top: 29px;
		left: 10px;
		padding: 4px 20px 4px 8px;
		border-radius: 4px;
		background-color: #eceff7;
		color: $tc-head;
	}
}
.form-error-msg {
	gap: 6px;
	align-items: flex-start;
	font-size: 12px;

	img {
		padding-top: 2px;
	}
}
</style>
