<template>
	<button
		:class="['button', ...classes]"
		@click="options.hasHandler ? handler() : null"
	>
		<i :class="['bi', icon]" v-show="options.hasIcon"></i>
		<span class="button-inner" v-if="options.hasText">{{ text }}</span>
	</button>
</template>

<script>
//import File from 'Path'
export default {
	name: "Button",
	data() {
		return {};
	},
	props: {
		text: String,
		icon: String,
		classes: Array,
		handler: Function,
		options: Object,
	},
	components: {},
	methods: {},
};
</script>

<style lang="scss">
.button {
	display: flex;
	gap: 1rem;

	cursor: pointer;

	border: none;
	border-radius: 0.6rem;

	&-lg {
		padding: 1.25rem 1.75rem;

		color: var(--clr-white-100);
		background-color: var(--clr-blue-100);
	}
	&-md {
	}
	&-sm {
		padding: 0.8rem;
		.bi {
			color: var(--clr-white-100);
		}
	}
	&-inner {
		color: inherit;
		font-size: 1.6rem;
	}

	&-success {
		background-color: var(--clr-green-100);
	}
	&-danger {
		background-color: var(--clr-red-100);
	}
}
</style>