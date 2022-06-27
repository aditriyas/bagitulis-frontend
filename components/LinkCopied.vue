<template>
	<div v-show="linkCopied === true" class="link">
		<div class="link-wrapper flex f-space-between v-center">
			<div class="link-left flex v-center">
				<span class="bzi bzi-Checkmark-Circle bzi-1_5x link-left--icon"></span>
				<p class="link-left--text mb-0">Link Successfully copied</p>
			</div>
			<div class="link-right">
				<button
					class="bzi bzi-Cross bzi-2x link-right--icon"
					@click.prevent="linkCopied = false"
				></button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			linkCopied: false
		}
	},
	created() {
		this.$nuxt.$on('link-copied', () => {
			this.linkCopied = true
			setTimeout(() => (this.linkCopied = false), 2000)
		})
	}
}
</script>

<style lang="scss" scoped>
.link {
	position: absolute;
	width: 100%;
	&-wrapper {
		position: fixed;
		z-index: 3;
		top: 118px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		box-sizing: border-box;
		width: 100%;
		max-width: 548px;
		padding: 9px 12px;
		background-color: #e8f6f0;
		border-radius: 8px;
		border: 1px solid #20ae73;
		color: #20ae73;
	}

	&-left {
		gap: 8px;
		&--text {
			font-weight: 500;
			font-size: 12px;
		}
	}

	&-right {
		&--icon {
			background: transparent;
			border: none;
			color: #20ae73;
			cursor: pointer;
		}
	}
}
</style>
