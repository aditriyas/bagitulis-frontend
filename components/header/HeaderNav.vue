<template>
	<div class="header-nav">
		<button class="btn--ghost-grey nav-toggle" type="button" aria-label="Menu">
			<span class="bzi-bars bzi-1_2x" aria-hidden="true"></span>
		</button>
		<div class="nav-container">
			<headerMainNav :main-nav-data="mainNav" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderNav',
	// async fetch() {
	//   const [getMainNav, getNofif] = await Promise.all([

	//   ])
	// },
	data() {
		return {
			mainNav: [
				{
					title: 'Products',
					url: '/donasi',
					icon: 'bzi-Caret-down'
				},
				{
					title: 'Our clients',
					url: '/zakat'
				},
				{
					title: 'Contact us',
					url: '/sedekah'
				},
				{
					title: 'Articles',
					url: '/wakaf'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.header-nav {
	height: 100%;
}

.nav-toggle {
	@media #{$medium} {
		display: none;
	}
}

.nav-container {
	display: flex;
	height: 100%;
}

.header-link {
	// color: $dark-grey;
	height: 100%;
	display: flex;
	align-items: center;
	// padding: 5px 10px;
	border-right: 3px solid transparent;
	border-bottom: 3px solid transparent;

	&:hover,
	&:focus,
	&.is-active {
		color: $link;
	}

	&.is-active {
		border-right-color: $link;
	}

	@media #{$medium} {
		&.is-active {
			border-right-color: transparent;
			border-bottom-color: $link;
		}
	}
}
</style>
