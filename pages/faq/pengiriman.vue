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
			id: '/faq/pengiriman',
			en: '/faq/shipping'
		}
	},
	layout: 'faq',
	data() {
		return {
			isEmpty: false,
			dropdowns: [
				{
					title: 'Apa saja pilihan jasa kirim yang didukung oleh RocketMall?',
					text: '<p>Jasa kirim yang didukung RocketMall adalah penyedia jasa pengiriman (pihak ketiga) yang telah terintegrasi dengan sistem RocketMall.</br></br>Berikut adalah layanan jasa kirim yang tersedia di RocketMall:</p><ol><li>POS Indonesia</li><li>Lion Parcel</li><li>Ninja Express</li><li>ID Express</li><li>SiCepat Express</li><li>AnterAja</li><li>J&T Express</li><li>SAP EXpress</li><li>J&T Express</li><li>Nusantara Card Semesta</li><li>Ninja Xpress</li><li>Royal Express Indonesia (REX)</li><li>Sentral Cargo</li><li>TIKI</li><li>RPX Holding (RPX)</li><li>Alfatrex</li><li>TIKI</li><li>Wahana Prestasi Logistik</li><li>JET Express (JET)</li><li>Solusi Ekspres (SLIS)</li><li>Expedito</li><li>21 Express (DSE)</li><li>First Logistics (FIRST)</li><li>Star Cargo</li><li>IDL Cargo</li></ol><p>Dengan jasa kirim ini, Anda dapat melacak pengiriman Anda secara langsung dengan mudah melalui aplikasi RocketMall.</p>'
				}
			]
		}
	},
	head() {
		return {
			title: 'Pengiriman Produk - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Pengiriman Produk - RocketMall',
				metaDesc: 'Temukan informasi tentang pengiriman produk dari RocketMall'
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
