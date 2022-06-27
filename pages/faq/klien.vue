<template>
	<section class="content">
		<div class="container">
			<!-- <div class="content-top mb-32 flex">
				<faqSearchBar />
			</div> -->

			<div class="content-list flex flex--wrap">
				<div class="content-list--left mb-24">
					<TabList
						:tabnames="[
							'RocketMall',
							'Akun Pengguna',
							'Pengiriman Produk',
							'Pembayaran'
						]"
						:tablinks="[
							'/tentang-rocketmall',
							'/klien',
							'/pengiriman',
							'/transaksi'
						]"
					/>
				</div>
				<div class="content-list--right">
					<div v-if="isEmpty === false">
						<faqDropdown :dropdowns="dropdowns" />
					</div>
					<div v-else>
						<p class="search-indicator mb-32">
							Search results from ‘Lorem Ipsum’
						</p>
						<faqEmpty />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	nuxtI18n: {
		paths: {
			id: '/faq/klien',
			en: '/faq/client'
		}
	},
	layout: 'faq',
	data() {
		return {
			isEmpty: false,
			dropdowns: [
				{
					title: 'Apakah saya bisa menggunakan nama domain saya sendiri?',
					text: '<p>Ya, Anda dapat menggunakan nama domain milik pribadi. RocketMall memberikan dukungan jika Anda ingin menggunakan domain pribadi.</p>'
				},
				{
					title: 'Apa yang harus saya lakukan jika lupa kata sandi?',
					text: '<p>Anda dapat menekan menu lupa kata sandi pada halaman log in back office yang anda miliki.</p><ol><li>Masukkan email yang didaftarkan, selanjutnya kami akan mengirimkan link untuk melakukan reset kata sandi melalui <i>email</i>.</li><li>Dari<i>link</i> yang dikirimkan melalui <i>email</i>, Anda akan diminta untuk mengubah kata sandi.</li><li>Setelah proses mengubah kata sandi berhasil dilakukan, Anda dapat <i>log in</i> kembali dengan <i>password baru</i></li></ol>'
				},
				{
					title: 'Bagaimana cara mengubah kata sandi?',
					text: '<p>Untuk mengubah kata sandi, Anda dapat mengikuti langkah berikut ini:</p><ol><li>Anda harus masuk ke dalam akun Anda terlebih dahulu.</li><li>Selanjutnya, untuk mengubah kata sandi akun RocketMall dapat dilakukan melalui menu "Profil".</li><li>Pada profil pilih menu "Ubah Kata Sandi". Anda akan diarahkan pada sebuah formulir yang perlu Anda lengkapi datanya untuk melanjutkan proses pengubahan kata sandi.</li><li>Apabila kata sandi baru anda telah terverifikasi, maka kata sandi Anda telah sukses diubah.</li></ol>'
				},
				{
					title: 'Bagaimana cara log in ke akun RocketMall?',
					text: '<p>Anda dapat mengakses <i>link</i> Content Management System (CMS) Anda terlebih dahulu. Setelahnya, Anda akan diarahkan untuk mengisi <i>email</i> serta kata sandi yang telah terdaftar sebelumnya pada bagian form <i>log in</i> untuk melanjutkan proses <i>log in</i>.</p>'
				}
			]
		}
	},
	head() {
		return {
			title: 'Akun Pengguna - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Akun Pengguna - RocketMall',
				metaDesc: 'Dapatkan jawaban tentang akun yang Anda gunakan'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.search-indicator {
	color: #6e7692;
}

.content {
	padding-bottom: 120px;
	&-top {
		justify-content: flex-end;
		&--wrapper {
			width: 100%;
			max-width: 357px;
			.form-input {
				padding-left: 40px;
				border-radius: 10px;
				padding-block: 11px;
				background-color: #f9f9fb;
				border: 1px solid #e8eaef;
				color: $tc-head;

				&::placeholder {
					color: #b3b7c6;
					font-size: 14px;
				}

				&:focus {
					border: 1px solid #e8eaef;
					background-color: $white;
				}

				&:focus + .bzi {
					color: #505565;
				}
			}

			.bzi {
				position: absolute;
				left: 8px;
				top: 6px;
				font-size: 24px;
				color: #cecece;
			}
		}
	}

	&-list {
		gap: 0;
		@media #{$medium} {
			gap: 136px;
		}
		&--left {
			.list {
				&-title {
					color: #000000;
					font-weight: 600;
					line-height: 16px;
				}
				&-item {
					margin-bottom: 24px;
					font-size: 20px;
					color: #b3b7c6;
					line-height: 24px;
				}
			}
		}

		&--right {
			width: 100%;
			max-width: 739px;
		}
	}
}
</style>
