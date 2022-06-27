<template>
	<div class="search relative">
		<input
			type="text"
			placeholder="Search question"
			class="form-input form-input--block"
		/>
		<span class="bzi bzi-Search"></span>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search {
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
</style>
