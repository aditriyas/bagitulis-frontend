<template>
	<main class="site-main relative">
		<div class="container pv-32">
			<div class="contact relative">
				<div class="contact-left">
					<div class="contact-left--map">
						<img src="/assets/img/hubungi-kami-illustration.jpg" alt="" />
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
import {
	required,
	email,
	minLength,
	maxLength,
	numeric
} from 'vuelidate/lib/validators'
export default {
	auth: false,
	nuxtI18n: {
		paths: {
			id: '/hubungi-kami',
			en: '/contact-us'
		}
	},
	data() {
		return {
			isSending: false,
			success: false,
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

			formData.set('name', this.formData.fullName)
			formData.set('email', this.formData.email)
			formData.set('phone', `+62${this.formData.phoneNumber}`)
			formData.set('subject', this.formData.subject)
			formData.set('message', this.formData.message)

			await this.$axios
				.post('http://bagitulis-cms.test/api/feedback', formData)
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
.site-main {
	// padding: 40px 0 300px 0;
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
			img {
				max-width: 600px;
			}
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
	height: 100vh;
	position: absolute;
	top: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
}

.success-btn {
	padding: 12px 32px;
}
</style>
