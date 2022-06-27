<template>
	<div class="lang-switcher relative">
		<button
			class="button-wrapper flex v-center p-0"
			:class="isLangShow === true ? 'text-primary' : ''"
			@click.prevent="isLangShow = !isLangShow"
		>
			<p class="lang-selected mb-0">EN</p>
			<span
				class="bzi"
				:class="isLangShow === true ? 'bzi-Caret-up' : 'bzi-Caret-down'"
			></span>
		</button>
		<div v-if="isLangShow === true" class="lang-dropdown">
			<ul class="lang-list mb-0">
				<li
					v-for="(lang, index) in langs"
					:key="index"
					class="lang-list--item flex f-space-between"
				>
					<nuxt-link class="lang-link" to="/">
						{{ lang.name }}
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLangShow: false,
			langs: [
				{
					id: 1,
					name: 'English'
				},
				{
					id: 2,
					name: 'Indonesia'
				}
			]
		}
	},
	mounted() {
		document.addEventListener('click', this.hideOpts)
	},
	destroyed() {
		document.removeEventListener('click', this.hideOpts)
	},
	methods: {
		hideOpts(e) {
			if (!this.$el.contains(e.target)) {
				this.isLangShow = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.lang-switcher {
	.button-wrapper {
		border: none;
		background: transparent;
		cursor: pointer;
		gap: 8px;

		&:hover {
			color: $primary;
		}
	}
}

.popup-button {
	background: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
}

.lang {
	&-dropdown {
		width: 220px;
		background-color: $white;
		position: absolute;
		box-shadow: 0px 2px 32px 0px rgba(0, 14, 51, 0.08);
		top: 50px;
		right: 0;
		left: -60px;
		border-radius: 8px;
		padding: 8px;
	}

	&-list {
		padding-left: 0;

		.disabled {
			pointer-events: none;
			color: #b3b7c6;
		}

		&--item {
			padding: 8px;
			font-size: 14px;

			a {
				color: $tc-head;
			}

			.coming-soon {
				box-sizing: border-box;
				width: 60px;
				display: inline-block;
				padding: 4px 2px;
				font-size: 8px;
				line-height: 12px;
				font-weight: 500;
				color: #6e7692;
				background-color: #eceff7;
				border-radius: 8px;
				border: 1px solid #6e7692;
			}

			&:disabled {
				color: #b3b7c6;
				pointer-events: none; //This makes it not clickable
				opacity: 0.6;
			}

			&:hover {
				background-color: #f6f8fb;
				color: $tc-head;
				border-radius: 8px;
			}
		}
	}
}
</style>
