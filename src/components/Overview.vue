<template>
	<div class="overview">
		<div class="container-fluid">
			<div class="row mar-b-4">
				<div class="col-12">
					<div class="button-group pad-t-2 pad-l-1">
						<Button
							:options="{ ...addRowButtonOptions }"
							:handler="addRowHandler"
							:classes="['button-lg']"
							:text="'Add a Row'"
							:icon="'bi-plus-circle-fill'"
						/>
					</div>
				</div>
			</div>
			<!-- Card Row -->
			<div class="card-rows">
				<div v-for="rowData in allCardsData" :key="rowData.key">
					<Row :data="rowData" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "./UI/Buttons/Button.vue";
import Row from "./Rows/Row.vue";
export default {
	name: "Overview",
	data() {
		return {
			addRowButtonOptions: {
				hasHandler: true,
				hasIcon: true,
				hasText: true,
			},
			allCardsData: [],
		};
	},
	mounted() {
		this.allCardsData = this.$store.getters.getAllCardsData;
	},
	props: {},
	components: {
		Row,
		Button,
	},
	methods: {
		addRowHandler() {
			console.log(this.allCardsData);
		},
	},
};
</script>

<style lang="scss">
.overview {
	overflow-y: auto;
	height: 54rem;

	background-color: var(--clr-white-100);
	border-radius: 1rem;
}
</style>