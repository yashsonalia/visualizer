<template>
	<div class="overview">
		<div class="container-fluid">
			<div class="row mar-b-4">
				<div class="col-12">
					<div class="button-group pad-t-2 pad-l-1">
						<Button
							:options="addRowButtonOptions"
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
				<div v-for="(row, index) in getRows" :key="row.id">
					<Row :row="row" :rowIndex="index" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
		};
	},
	components: {
		Row,
		Button,
	},
	computed: mapGetters(["getRows"]),
	methods: {
		...mapActions(["createNewRow"]),
		addRowHandler() {
			this.createNewRow();
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