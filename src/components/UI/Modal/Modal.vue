<template>
	<div class="modal mar-t-2">
		<div class="modal-head">
			<h5 class="nav-title">Adding Charts</h5>
		</div>
		<div class="modal-body">
			<form class="modal-form">
				<div class="row">
					<div class="col-6">
						<div class="row">
							<div class="col-6">
								<InputField
									:field="{
										value: modalData.title,
										inputId: 1,
										inputType: 'text',
										inputFor: 'title',
										inputLabel: 'Title',
										inputPlaceholder: 'Enter title',
										hasPrefixedIcon: false,
									}"
									@input-value-change="(title) => titleChangeHandler(title)"
								/>
							</div>
							<div class="col-6">
								<SelectField
									:field="{
										value: modalData.chartType,
										inputId: 2,
										listFor: 'chartTypes',
										inputLabel: 'Chart Types',
										inputPlaceholder: 'Select chart type',
										hasPrefixedIcon: true,
										options: getChartTypes,
									}"
									@select-value-change="
										(chartType) => chartTypeChangeHandler(chartType)
									"
								/>
							</div>
						</div>
					</div>
					<div class="col-6"></div>
				</div>
			</form>
		</div>
		<div class="modal-buttons">
			<Button
				:options="modalButtonOptions"
				:handler="cancelHandler"
				:classes="['button-lg']"
				:text="'Cancel'"
				:icon="''"
			/>
			<Button
				:options="modalButtonOptions"
				:handler="submitHandler"
				:classes="['button-lg']"
				:text="'Save and Proceed'"
				:icon="''"
			/>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InputField from "../Form/InputField.vue";
import SelectField from "../Form/SelectField.vue";
import Button from "../Buttons/Button.vue";
export default {
	name: "Modal",
	data() {
		return {
			updatedValues: {
				title: "",
				chartType: "",
				filters: [],
				otherData: {},
				isNewCard: false,
			},
			modalButtonOptions: {
				hasHandler: true,
				hasIcon: false,
				hasText: true,
			},
		};
	},
	props: {
		modalData: Object,
	},
	components: {
		InputField,
		SelectField,
		Button,
	},
	created() {
		this.updatedValues = this.modalData;
	},
	computed: mapGetters(["getChartTypes"]),
	methods: {
		submitHandler(event) {
			if (this.updatedValues.title.trim() !== "") {
				this.updatedValues.isNewCard = false;
				this.$emit("updated-values", this.updatedValues);
			} else return;
		},
		titleChangeHandler(title) {
			// console.log(title);
			this.updatedValues.title = title.trim();
		},
		chartTypeChangeHandler(chartType) {
			// console.log(chartType);
			this.updatedValues.chartType = chartType;
		},
		cancelHandler() {
			this.$emit("cancel-update");
		},
	},
};
</script>

<style lang="scss">
.modal {
	overflow: hidden;

	position: absolute;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);

	width: calc(100% - 14rem);
	height: calc(100% - 10rem);

	background-color: var(--clr-white-100);
	border-radius: 0.6rem;

	&-head {
		width: 100%;
		height: auto;
		padding: 1.2rem 3rem;

		background-color: var(--clr-blue-100);
	}

	&-body {
		padding: 2rem;
	}
	&-buttons {
		position: fixed;
		bottom: 0;
		left: 0;

		display: flex;
		gap: 1rem;
		justify-content: end;

		width: 100%;
		padding: 2rem;
	}
	&-left-form {
		display: flex;
		gap: 4rem;
	}
}

.code-editor {
	height: 100%;
	padding: 4rem;
	background-color: var(--clr-black-100);
}
</style>