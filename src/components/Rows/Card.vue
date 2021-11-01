<template>
	<div
		:class="[
			'row-card-inner',
			!cardData.isNewCard ? 'card-filled' : 'card-empty',
		]"
	>
		<div
			class="row-card-overlay"
			@click="
				$emit('edit-card-details', {
					rowIndex: cardData.rowIndex,
					cardIndex: cardData.index,
				})
			"
		></div>
		<div class="details" v-if="!cardData.isNewCard">
			<h3 class="row-card-title">{{ cardData.title }}</h3>
			<h6 class="row-card-chart-type">{{ cardData.chartType }}</h6>
		</div>

		<div class="add-data-icon" v-else>
			<i class="bi bi-plus-circle"></i>
		</div>
		<div class="delete-card">
			<button class="button delete-card-button" @click="deleteCardHandler">
				<i class="bi bi-trash"></i>
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "../UI/Buttons/Button.vue";
export default {
	data() {
		return {
			card: {},
		};
	},
	name: "Card",
	props: {
		cardData: Object,
	},
	components: {
		Button,
	},
	mounted() {},
	computed: { ...mapGetters(["getRow"]) },
	methods: {
		...mapActions(["deleteCard", "deleteRow"]),
		deleteCardHandler(event) {
			const row = this.getRow(this.cardData.rowId);

			if (row.cards.length === 2)
				this.deleteCard({
					rowId: this.cardData.rowId,
					rowIndex: this.cardData.rowIndex,
					index: this.cardData.index,
				});
			else this.deleteRow(this.cardData.rowId);
		},
		editCardDetails() {
			this.$emit("edit-card-details", this.cardData);
		},
	},
};
</script>

<style lang="scss">
.row {
	&-card-inner {
		display: flex;
		align-items: center;

		height: 100%;
		max-height: 6rem;

		padding: 2rem 1rem;
		cursor: pointer;
	}
	&-card-overlay {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;

		width: 95%;
		height: 100%;
	}
}
.details {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
.delete-card {
	position: absolute;
	top: 0.2rem;
	right: 0.2rem;
	z-index: 10;

	&-button {
		background: inherit;
		border: none;

		.bi {
			font-size: 2.4rem;
		}
		&:hover {
			background-color: var(--clr-red-100);
		}
	}
}
</style>