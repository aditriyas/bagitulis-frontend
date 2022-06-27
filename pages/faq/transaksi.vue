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
			id: '/faq/transaksi',
			en: '/faq/transaction'
		}
	},
	layout: 'faq',
	data() {
		return {
			isEmpty: false,
			dropdowns: [
				{
					title: 'About RocketMall',
					text: '<p>RocketMall mendukung total 7 opsi pembayaran, yaitu:</p><ol><li>Virtual Accounts (Transfer Bank)<p>Pembayaran bank yang didukung oleh RocketMall yaitu terdiri dari BCA, Bank BJB, BNI, BRI, BSI, CIMBNIAGA, Mandiri, Permata Bank dan Bank Sampoerna.</p></li><li>Kartu Kredit<p>Pembayaran dengan kartu kredit diproses oleh pihak ketiga dan hanya kartu dengan 3DSecure yang dapat digunakan di RocketMall.</p></li><li>Gerai Ritel<p>Pembayaran bisa dilakukan dengan mudah melalui tunai (cash over the counter) pada toko ritel seperti Alfamart, Alfamidi, Alfaexpress, Dan+Dan, Indomaret, Lawson, dan masih banyak lagi.</p></li><li>e-Wallets<p>Kami terintegrasi dengan e-Wallet terkemuka di Indonesia yaitu OVO, DANA, LinkAja, dan ShopeePay.</p></li><li>QR Codes<p>Pembayaran menggunakan QRIS dapat dilakukan dengan mudah melalui e-Wallet ternama (OVO, GoPay, DANA, LinkAja, ShopeePay) dan aplikasi mobile banking (BCA, CIMB).</p></li><li>Direct Debit<p>Pembayaran dengan mudah dengan menarik dana langsung dari rekening bank. Dapat dilakukan melalui Bank BRI, BCA KlikPay dan OneKlik.</p></li><li>Cicilan tanpa kartu<p>Pembayaran fleksibel dengan cicilan dapat dilakukan dengan menggunakan Kredivo dan AkuLaku.</p></li></ol>'
				}
			]
		}
	},
	head() {
		return {
			title: 'Pembayaran - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Pembayaran - RocketMall',
				metaDesc:
					'Dapatkan informasi metode pembayaran yang digunakan di RocketMall'
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
				justify-content: space-between;
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
