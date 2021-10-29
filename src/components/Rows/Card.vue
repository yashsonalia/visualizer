<template>
	<div
		v-if="cardData"
		:class="['card-inner', !cardData.isNewCard ? 'isFilled' : '']"
	>
		<a href="#" class="row-card-overlay"></a>
		<div class="details" v-if="!cardData.isNewCard">
			<h3 class="row-card-title">{{ cardData.title }}</h3>
			<h6 class="row-card-chart-type">{{ cardData.chartType }}</h6>
		</div>

		<div class="add-data-icon" v-else>
			<i class="bi bi-plus-circle"></i>
		</div>
		<div class="delete-card">
			<button
				class="button delete-card-button"
				@click="
					deleteCardHandler({
						rowId: cardData.rowId,
						rowIndex: cardData.rowIndex,
						cardIndex: cardData.cardIndex,
					})
				"
			>
				<i class="bi bi-trash"></i>
			</button>
		</div>
	</div>
	<div v-else class="card-inner" style="display: none"></div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "../UI/Buttons/Button.vue";
export default {
	data() {
		return {
			id: 0,
		};
	},
	name: "Card",
	props: {
		cardData: Object,
	},
	components: {
		Button,
	},
	mounted() {
		this.id = this.cardData.cardId;
	},
	methods: {
		...mapActions(["deleteCard", "deleteRow"]),
		deleteCardHandler(values) {
			if (this.cardData.rowLength < 2) this.deleteRow(this.cardData.rowId);
			else this.deleteCard(values);
		},
	},
};
</script>

<style lang="scss">
.row {
	&-card-overlay {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;

		width: 100%;
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
	top: 1rem;
	right: 1rem;
	z-index: 10;

	&-button {
		background: none;
		border: none;

		.bi {
			font-size: 2.4rem;
		}
	}
}
</style>