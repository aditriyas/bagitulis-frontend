<template>
	<nuxt-link
		:to="localePath(`/karya-tulis/${slug}`)"
		:download="file"
		class="journal"
	>
		<div class="journal-card text-center">
			<img :src="thumbnail" alt="" class="journal-card--img" />
			<div class="journal-card--info text-left flex flex--row">
				<div class="journal-card--category mb-12 d-block">
					Kategori: {{ category.name }}
				</div>
				<span class="journal-card--title d-block">
					{{ title.slice(0, 30) }}<span>...</span>
				</span>

				<span class="journal-card--subtitle d-block text-tc-subtext">
					{{ description.slice(0, 120) }}<span>...</span>
				</span>
				<div class="journal-card--footer flex">
					<div class="photo">
						<img
							:src="photo != null ? photo : 'assets/img/dummy-profile-pic.png'"
							alt=""
						/>
					</div>
					<div class="info">
						<span class="journal-card--tags text-tc-subtext"
							>Tags: {{ tags }}</span
						>
						<span class="journal-card--author d-block"
							><span class="text-black">Diunggah oleh: </span>{{ user }} on May
							18, 2018</span
						>
					</div>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		slug: {
			type: String,
			default: null
		},
		file: {
			type: String,
			default: null
		},
		thumbnail: {
			type: String,
			default: null
		},
		category: {
			type: Object,
			default: null
		},
		title: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: null
		},
		tags: {
			type: String,
			default: null
		},
		user: {
			type: String,
			default: null
		},
		photo: {
			type: String,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
.journal {
	&-card {
		max-width: 400px;
		flex-direction: column;
		border-radius: 16px;
		box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);

		&--info {
			border: none !important;
			padding: 12px 20px 18px 20px;
			background-color: $white;
			border-radius: 0 0 16px 16px;
			border: 1px solid $black30;
			height: 350px;
			flex-direction: column;
			@media #{$medium} {
				height: 300px;
			}
		}
		&--img {
			width: 100%;
			object-fit: cover;
			// border-radius: 16px 16px 0 0;
		}

		&--author {
			font-size: 14px;
			color: $primary;
		}

		&--title {
			margin-bottom: 10px;
			text-transform: uppercase;
			font-weight: bold;
			color: $black90;
			font-size: 32px;
			line-height: 32px;
		}

		&--subtitle {
			font-size: 14px;
		}

		&--category {
			font-size: 12px;
			font-style: italic;
			color: $tc-subtext;
		}

		&--tags {
			font-size: 12px;
			font-style: italic;
		}

		&--footer {
			margin-top: auto;
			text-align: left;
			align-items: center;
			gap: 18px;
			img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
			}
		}
	}
}
</style>
