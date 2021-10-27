<template>
	<div class="col row-card">
		<a href="#" class="row-card-overlay"></a>

		<div class="details" v-if="!cardOptions.isEmptyCard">
			<h3 class="row-card-title">{{ cardOptions.title }}</h3>
			<h6 class="row-card-chart-type">{{ cardOptions.chart }}</h6>
		</div>

		<div class="add-data-icon">
			<i class="bi bi-plus-circle"></i>
		</div>

		<div class="button-group">
			<!-- <Button /> -->
		</div>
	</div>
</template>

<script>
import Button from "../UI/Buttons/Button.vue";
export default {
	name: "Card",
	data() {
		return {};
	},
	props: {
		cardOptions: Object,
	},
	components: {
		Button,
	},
	methods: {},
};
</script>

<style lang="scss">
.row {
	&-card {
		overflow: hidden;
		position: relative;

		padding: 2rem 4rem;

		/* background-color: var(--clr-white-100); */
		background-color: inherit;
		border: 1px solid var(--clr-blue-100);
		border-radius: 0.6rem;
	}
	&-card-overlay {
		position: absolute;
		left: 0;
		top: 0;

		width: 100%;
		height: 100%;
	}
}

.add-data-icon {
	display: grid;
	place-items: center;

	width: 100%;
	height: 100%;

	.bi {
		color: var(--clr-blue-100);
	}
}
</style>