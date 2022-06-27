<template>
	<div class="tab-list">
		<h3 class="list-title mb-32 pl-12">Categories</h3>
		<ul class="list list-nostyle">
			<li v-for="(item, index) in tabnames" :key="index" class="mb-24">
				<nuxt-link
					:to="localePath(`/faq${tablinks[index]}`)"
					class="list-item"
					title="Tab"
					exact
				>
					{{ item }}
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	layout: 'faq',
	props: {
		tabnames: {
			type: Array,
			default: null
		},
		tablinks: {
			type: Array,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
.tab-list {
	.list {
		&-title {
			color: #000000;
			font-weight: 600;
			line-height: 16px;
		}
		&-item {
			font-size: 20px;
			color: #b3b7c6;
			line-height: 24px;
		}
	}
}

a {
	padding-left: 12px;
}

.nuxt-link-active {
	border-left: 2px solid $primary;
	font-weight: 600;
	color: $primary !important;
}
</style>
