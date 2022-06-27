<template>
	<main class="site-main">
		<div class="banner mb-40">
			<div class="container">
				<div class="banner-content">
					<h1 class="title mb-4">{{ data.title }}</h1>
					<p class="subtitle">{{ data.subTitle }}</p>
				</div>
			</div>
		</div>
		<!-- <div class="body flex container">
			<div class="body-title" v-html="data.body.bodyTitle"></div>
			<div class="body-item" v-html="data.body.bodyItem"></div>
		</div> -->
		<div class="main">
			<div class="container">
				Privasi Anda penting bagi kami. Merupakan kebijakan PT Roket Strategi
				Inovasi untuk menghormati privasi Anda mengenai informasi apapun yang
				kami kumpulkan dari Anda di situs web kami, rocketmall.id, dan situs
				lain yang kami miliki dan operasikan.<br />
				Kami hanya meminta informasi pribadi ketika kami benar-benar
				membutuhkannya untuk memberikan layanan kepada Anda. Kami
				mengumpulkannya dengan cara yang adil dan sah, dengan sepengetahuan dan
				persetujuan Anda. Kami juga memberi tahu Anda mengapa kami
				mengumpulkannya dan bagaimana itu akan digunakan.<br />
				Kami hanya menyimpan informasi yang dikumpulkan selama diperlukan untuk
				menyediakan layanan yang Anda minta. Data yang kami simpan, akan kami
				lindungi dengan cara yang dapat diterima secara komersial untuk mencegah
				kehilangan dan pencurian, akses yang tidak dikenal, pengungkapan,
				penyalinan, penggunaan, atau modifikasi yang tidak sah. Kami tidak
				membagikan informasi pribadi apapun secara publik atau dengan pihak
				ketiga, kecuali jika diwajibkan oleh hukum.<br />
				Situs web kami dapat menautkan ke situs eksternal yang tidak
				dioperasikan oleh kami. Perlu diketahui bahwa kami tidak memiliki
				kendali atas konten dan praktik situs-situs ini, dan tidak dapat
				menerima tanggung jawab atau kewajiban atas kebijakan privasi
				masing-masing.<br />Anda bebas menolak permintaan kami untuk informasi
				pribadi Anda, dengan pengertian bahwa kami mungkin tidak dapat
				menyediakan beberapa layanan yang Anda inginkan.<br />
				Penggunaan Anda yang berkelanjutan atas situs web kami akan dianggap
				sebagai penerimaan praktik kami seputar privasi dan informasi pribadi.
				Jika Anda memiliki pertanyaan tentang bagaimana kami menangani data
				pengguna dan informasi pribadi, jangan ragu untuk menghubungi kami.<br />
				Kebijakan ini berlaku mulai 1 Januari 2022.
			</div>
		</div>
	</main>
</template>

<script>
export default {
	nuxtI18n: {
		paths: {
			id: '/kebijakan-pribadi',
			en: '/privacy-policy'
		}
	},
	data() {
		return {
			data: {
				title: 'Kebijakan Pribadi',
				subTitle: 'Last Update : January 1, 2022',
				body: {
					bodyTitle:
						"<ol type='A'><li>Collection and Collection of User's Personal Data</li><li>Use of Personal Data</li><li>Password and Security</li><li>Cookies</li></ol>",
					bodyItem:
						"<ol type='A'><li><h4>Collection and Collection of User's Personal Data</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id feugiat eros. In massa dui, vulputate quis dolor sed, pulvinar pellentesque lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer gravida orci vitae libero feugiat pulvinar. Quisque eu libero molestie, auctor ex quis, varius lectus. Donec finibus nisl in accumsan pretium.</p></li><li><h4>Collection and Collection of User's Personal Data</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id feugiat eros. In massa dui, vulputate quis dolor sed, pulvinar pellentesque lacus. Class aptent taciti sociosqu ad litoratorquent per conubia nostra, per inceptos himenaeos. Integergravida orci vitae libero feugiat pulvinar. Quisque eu liberomolestie, auctor ex quis, varius lectus. Donec finibus nisl inaccumsan pretium.</p></li></ol>"
				}
			}
		}
	},
	head() {
		return {
			title: 'Kebijakan Pribadi - RocketMall',
			...this.$SEOMeta({
				metaTitle: 'Kebijakan Pribadi - RocketMall',
				metaDesc: 'Informasi kebijakan pribadi yang berlaku di RocketMall'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.banner {
	background-image: url(/assets/img/static-bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	height: 292px;

	&-content {
		padding: 24px;
		color: $white;
		max-width: 929px;
		margin: 0 auto;
		padding-top: 92px;

		@media #{$medium} {
			// padding-left: 100px;
		}

		.title {
			width: 100%;
			font-size: 40px;
			line-height: 45px;
			@media #{$medium} {
				font-size: 52px;
				line-height: 56px;
			}
		}

		.subtitle {
			font-size: 14px;
			line-height: 20px;
		}
	}
}

.site-main {
	padding-bottom: 60px;
}

.main {
	color: #505565;
	font-size: 16px;
	line-height: 20px;
	padding-bottom: 24px;
	margin: 0 auto;
	text-align: left;
	line-height: 32px;
	width: 100%;
	max-width: 929px;
}

.body {
	// gap: 111px;
	gap: 108px;
	flex-wrap: wrap;
	&-title {
		max-width: 267px;
		& /deep/ {
			ol {
				li {
					color: #505565;
					font-size: 18px;
					line-height: 20px;
					font-weight: 600;
					padding-bottom: 24px;
				}
			}
		}
	}

	&-item {
		max-width: 736px;
		& /deep/ {
			ol {
				// padding-left: 0;
				font-weight: 600;
				color: $tc-head;

				@media #{$medium} {
					padding-left: 16px;
				}

				li {
					font-size: 20px;
					padding-bottom: 32px;
					padding-left: 16px;
					h4 {
						font-size: 20px;
						color: $tc-head;
						font-weight: 600;
						margin-bottom: 16px;
					}
					p {
						color: #505565;
						font-size: 16px;
						font-weight: 400;
						margin-bottom: 0;
					}
				}
			}
		}
	}
}
</style>
