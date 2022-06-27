<template>
	<div class="article">
		<div class="article-head text-center">
			<h1 class="title">Artikel</h1>
			<p class="subtitle">
				Cari tahu lebih banyak tentang e-commerce dan semua hal yang bisnis Anda
				butuhkan.
			</p>
		</div>
		<div class="article-search relative mb-56">
			<input
				type="text"
				class="form-input--block form-input search-field"
				placeholder="Cari Artikel"
			/>
			<span class="bzi bzi-Search search-icon"></span>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.article {
	&-head {
		margin-bottom: 47px;
		.title {
			color: $tc-head;
			font-size: 40px;
			line-height: 56px;
			margin-bottom: 2px;
			@media #{$medium} {
				font-size: 56px;
				margin-bottom: 24px;
				line-height: 56px;
			}
		}

		.subtitle {
			color: #6e7692;
			line-height: 24px;
		}
	}

	&-search {
		width: 100%;
		max-width: 548px;
		margin: 0 auto;

		&:focus {
			color: $primary;
		}

		.search {
			&-icon {
				font-size: 24px;
				color: #979797;
				position: absolute;
				left: 8px;
				top: 8px;
			}
		}

		.form-input {
			background: #f9f9fb;
			border: 1px solid #e8eaef;
			border-radius: 10px;
			padding-block: 13px;
			padding-left: 40px;
			color: $tc-head;

			&:focus {
				border: 1px solid $primary;
				background-color: $white;
			}

			&:focus + .bzi {
				color: $primary;
			}

			&::placeholder {
				color: #b3b7c6;
				font-size: 14px;
				font-weight: 400;
			}
		}
	}
}
</style>
