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
			id: '/faq/tentang-rocketmall',
			en: '/faq/about-rocketmall'
		}
	},
	layout: 'faq',
	data() {
		return {
			isEmpty: false,
			dropdowns: [
				{
					title: 'Apa itu RocketMall?',
					text: '<p>RocketMall E-commerce Multi-vendor adalah sebuah produk dari Suitmedia yang menawarkan SaaS (software as a service) sebagai konsep utama. Kami merupakan platform e-commerce yang menyediakan fitur-fitur yang fleksibel untuk memberikan kemudahan kepada vendor.</p>'
				},
				{
					title: 'Bagaimana cara mendaftar di RocketMall?',
					text: '<p>Anda dapat mendaftarkan pengajuan demo untuk produk RocketMall. Kemudian dari tim RocketMall akan menghubungi Anda untuk mulai mendiskusikan mengenai produk yang Anda inginkan. Setelah adanya kesepakatan antara RocketMall dan Anda mengenai produk yang di inginkan. Tim kami akan membuatkan akun RocketMall untuk Anda.</p>'
				},
				{
					title: 'Berapa biaya untuk RocketMall?',
					text: '<p>Untuk mengetahui biaya RocketMall, Anda dapat menghubungi kami melalui layanan Contact Us.</p>'
				},
				{
					title: 'Apa saja produk yang RocketMall tawarkan?',
					text: '<p>Kami menyediakan Multi-vendor E-commerce sebagai produk utama yang kami tawarkan. Multi-vendor E-commerce merupakan platform yang memungkinkan banyak vendor atau penjual untuk membuat toko online atau profil mereka sendiri dan memasang produk untuk dijual.<br/></p><span>Selain itu juga terdapat beberapa produk yang akan segera kami rilis, yaitu:</span><ul><li>Order Management System (OMS)</li><li>Warehouse Management Sytem (WMS)</li><li>Online to Offline (O2O)</li><li>Loyalty System</li></ul>'
				},
				{
					title: 'Bagaimana cara untuk meminta demo?',
					text: '<p>Anda dapat memilih menu “Minta Demo” yang berada pada pojok kanan website dan mengisi formulir yang telah disediakan. Setelah itu, Anda dapat menunggu admin RocketMall untuk menghubungi Anda melalui email untuk langkah selanjutnya.</p>'
				},
				{
					title: 'Apakah RocketMall mendukung untuk melakukan white label?',
					text: '<p>Ya, RocketMall mendukung vendor apabila ingin melakukan white labelling. Untuk informasi lebih lanjut Anda dapat menghubungi kami melalui Contact Us.</p>'
				}
			]
		}
	},
	head() {
		return {
			title: 'FAQ - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'FAQ - RocketMall',
				metaDesc: 'Temukan jawaban Anda dari pertanyaan yang sering kami terima'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
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
