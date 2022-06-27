<template>
	<div class="dropdown">
		<ul class="list-nostyle">
			<li
				v-for="(item, index) in dropdowns"
				:key="index"
				class="pb-32"
				:class="dropdownShowed === index ? 'pointer' : ''"
				@click.prevent="openDropdown(index)"
			>
				<div class="dropdown-head flex f-space-between mb-0">
					<h4 class="dropdown-head--title mb-0">{{ item.title }}</h4>
					<span
						class="bzi bzi-2x"
						:class="
							dropdownShowed === index ? 'bzi-Caret-up' : 'bzi-Caret-down'
						"
					></span>
				</div>
				<div
					v-if="dropdownShowed === index"
					class="dropdown-content"
					v-html="item.text"
				></div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		dropdowns: {
			type: Array,
			default: null
		},
		title: {
			type: String,
			default: 'Title'
		},
		text: {
			type: String,
			default: 'Text'
		}
	},
	data() {
		return {
			dropdownShowed: 0
		}
	},
	methods: {
		openDropdown(index) {
			if (this.dropdownShowed === index) {
				this.dropdownShowed = -1
			} else {
				this.dropdownShowed = index
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.dropdown {
	ul {
		li {
			&:first-child {
				border-bottom: 1px solid #e8eaef;
			}
			&:not(:last-child) {
				border-bottom: 1px solid #e8eaef;
			}

			&:not(:first-child) {
				padding-block: 32px;
			}
		}
	}

	&-head {
		cursor: pointer;
		&--title {
			font-size: 20px;
			font-weight: 600;
			line-height: 24px;
			color: $tc-head;
		}
		.bzi {
			color: #222b45;
		}
	}

	&-content {
		/deep/ {
			p {
				color: #505565;
				line-height: 28px;
				margin-top: 16px;
				margin-bottom: 0;
			}
			ul {
				margin-bottom: 0;
				li {
					padding-top: 8px;
					list-style-type: none;
					&::before {
						content: '-';
						padding-right: 12px;
					}
				}
			}
			ol {
				margin-block: 16px;
				@media #{$medium} {
					max-height: 594px;
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
					column-gap: 50px;
				}
				li {
					padding: 12px 14px;
					&:nth-child(2) {
						flex-basis: 10%;
					}
					p {
						margin: 0;
					}
				}
			}
		}
	}
}

.pointer {
	cursor: pointer;
}
</style>
