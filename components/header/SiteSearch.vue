<template>
	<div v-if="isSearch === true" class="site-search">
		<input type="text" class="form-input search" placeholder="Cari Campaign" />
	</div>
</template>

<script>
export default {
	name: 'SiteSearch',
	props: {
		isSearch: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.site-search {
	width: 100%;
	height: 40px;
}
</style>
