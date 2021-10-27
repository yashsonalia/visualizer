<template>
	<div class="row new-row mar-l-1 mar-r-6 mar-b-2">
		<div v-for="columnData in RowData" :key="columnData.id">
			<Card :cardOptions="{ isEmptyCard: true, title: '', chart: '' }" />
		</div>
		<!-- <RowCard /> -->
		<div class="row-options">
			<Button
				:options="buttonSmOptions"
				:handler="addCardHandler"
				:classes="['button-sm', 'button-success']"
				:text="''"
				:icon="'bi-plus-circle'"
			/>
			<Button
				:options="buttonSmOptions"
				:handler="deleteCardHandler"
				:classes="['button-sm', 'button-danger']"
				:text="''"
				:icon="'bi-trash'"
			/>
		</div>
	</div>
</template>

<script>
import Button from "../UI/Buttons/Button.vue";
import Card from "./Card.vue";
export default {
	name: "Row",
	data() {
		return {
			buttonSmOptions: {
				hasHandler: true,
				hasIcon: true,
				hasText: false,
			},
		};
	},
	props: {
		rowData: Array,
	},
	components: {
		Button,
		Card,
	},
	methods: {
		addCardHandler() {},
		deleteCardHandler() {},
	},
};
</script>

<style lang="scss">
.new-row {
	position: relative;
	gap: 1rem;
	padding: 0.6rem;

	background-color: var(--clr-blue-10);
	border-radius: 0.6rem;
}
.row-options {
	position: absolute;
	top: 50%;
	right: -5rem;
	transform: translateY(-50%);

	display: grid;
	gap: 0.4rem;
}
</style>