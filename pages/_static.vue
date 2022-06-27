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
		<div class="body flex container">
			<div class="body-title" v-html="data.body.bodyTitle"></div>
			<div class="body-item" v-html="data.body.bodyItem"></div>
		</div>
	</main>
</template>

<script>
export default {
	nuxtI18n: {
		paths: {
			id: '/:static',
			en: '/:static'
		}
	},

	data() {
		return {
			data: {
				title: 'Privacy Policy',
				subTitle: 'Last Update : September 12, 2021',
				body: {
					bodyTitle:
						"<ol type='A'><li>Collection and Collection of User's Personal Data</li><li>Use of Personal Data</li><li>Password and Security</li><li>Cookies</li></ol>",
					bodyItem:
						"<ol type='A'><li><h4>Collection and Collection of User's Personal Data</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id feugiat eros. In massa dui, vulputate quis dolor sed, pulvinar pellentesque lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer gravida orci vitae libero feugiat pulvinar. Quisque eu libero molestie, auctor ex quis, varius lectus. Donec finibus nisl in accumsan pretium.</p></li><li><h4>Collection and Collection of User's Personal Data</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id feugiat eros. In massa dui, vulputate quis dolor sed, pulvinar pellentesque lacus. Class aptent taciti sociosqu ad litoratorquent per conubia nostra, per inceptos himenaeos. Integergravida orci vitae libero feugiat pulvinar. Quisque eu liberomolestie, auctor ex quis, varius lectus. Donec finibus nisl inaccumsan pretium.</p></li></ol>"
				}
			}
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

		@media #{$medium} {
			padding-top: 92px;
			padding-left: 100px;
		}

		.title {
			font-size: 52px;
			line-height: 56px;
		}

		.subtitle {
			font-size: 14px;
			line-height: 20px;
		}
	}
}

.site-main {
	padding-bottom: 120px;
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
