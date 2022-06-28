<template>
	<main class="site-main">
		<div class="form">
			<form action="">
				<div class="photo flex mb-20">
					<img src="/assets/img/dummy-profile-pic.png" alt="" />
					<label for="photo" class="photo-label">
						<input id="photo" type="file" name="photo" accept="image/*" />
					</label>
				</div>
				<div class="form-item">
					<label for="name"
						>{{ $t('Name') }}<span class="text-primary">*</span></label
					>
					<input id="name" type="text" name="name" class="form-input w-100" />
				</div>
				<div class="form-item">
					<label for="email">Email<span class="text-primary">*</span></label>
					<input
						id="email"
						type="email"
						name="email"
						class="form-input w-100"
					/>
				</div>
				<div class="form-item">
					<label for="password"
						>Password<span class="text-primary">*</span></label
					>
					<input
						id="password"
						type="password"
						name="password"
						class="form-input w-100"
					/>
				</div>
				<div class="form-item">
					<label for="password"
						>{{ $t('repeatPassword')
						}}<span class="text-primary">*</span></label
					>
					<input
						id="password"
						type="password"
						name="password"
						class="form-input w-100"
					/>
				</div>
				<div class="button-container flex">
					<button type="submit" class="btn btn--primary">Ubah</button>
				</div>
			</form>
		</div>
	</main>
</template>

<script>
export default {
	// middleware: 'auth',
	nuxtI18n: {
		paths: {
			id: '/akun-saya',
			en: '/profile'
		}
	},
	layout: 'profile'
}
</script>

<style lang="scss" scoped>
.site-main {
	padding-top: 0;
	margin: 0;
}

.photo {
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;

	img {
		width: 90px;
		height: 90px;
		border-radius: 50%;
	}
}

input[type='file'] {
	max-width: 218px;
}

.form {
	&-item {
		margin-bottom: 12px;

		label {
			font-size: 12px;
			color: $tc-head;
		}

		input {
			font-size: 14px;
		}
	}
}

.button-container {
	justify-content: flex-end;

	button {
		padding: 12px 60px;
	}
}
</style>
