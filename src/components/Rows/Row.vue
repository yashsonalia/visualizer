<template>
	<div class="new-row row mar-l-1 mar-r-6 mar-b-2">
		<div class="col row-card" v-for="(card, index) in cards" :key="index">
			<Card
				:cardData="{
					...card,
					cardIndex: index,
					rowId: id,
					rowIndex,
					rowLength: cards.length,
				}"
			/>
		</div>
		<div class="row-options">
			<Button
				:options="buttonSmOptions"
				:handler="() => addCardToRow(row)"
				:classes="['button-sm', 'button-success']"
				:text="''"
				:icon="'bi-plus-circle'"
				:disabled="cards.length > 1"
			/>

			<Button
				:options="{ ...buttonSmOptions }"
				:handler="() => deleteRow(id)"
				:classes="['button-sm', 'button-danger']"
				:text="''"
				:icon="'bi-trash'"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "../UI/Buttons/Button.vue";
import Card from "./Card.vue";

export default {
	name: "Row",
	data() {
		return {
			id: null,
			cards: [],
			buttonSmOptions: {
				hasHandler: true,
				hasIcon: true,
				hasText: false,
			},
		};
	},
	props: {
		row: Object,
		rowIndex: Number,
	},
	components: {
		Button,
		Card,
	},
	methods: mapActions(["deleteRow", "addCardToRow"]),
	created() {
		this.cards = this.row.cards;
		this.id = this.row.id;
	},
};
</script>

<style lang="scss">
@keyframes identifier {
	0% {
		transform: translateY(-8.5rem);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
.new-row {
	position: relative;

	gap: 1rem;
	padding: 0.6rem;

	background-color: var(--clr-blue-10);
	border-radius: 0.6rem;

	animation: identifier 0.3s linear 0s 1 forwards;
}
.row {
	&-card {
		overflow: hidden;
		position: relative;

		padding: 2rem 4rem;

		/* background-color: var(--clr-white-100); */
		background-color: inherit;
		border: 1px solid var(--clr-blue-100);
		border-radius: 0.6rem;

		&.isFilled {
			padding: 1rem 2rem;
		}
	}
	&-options {
		position: absolute;
		top: 50%;
		right: -5rem;
		transform: translateY(-50%);

		display: grid;
		gap: 0.4rem;
	}
}
</style>