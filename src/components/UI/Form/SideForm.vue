<template>
	<form class="form side-form">
		<!-- <div v-for="field in fields" :key="field.id">
		</div> -->
		<SelectField :field="selectFields['groupID']" />
		<InputField :field="inputFields['dashboardID']" />
		<InputField :field="inputFields['dashboardHead']" />
		<SelectField :field="selectFields['dataset']" />
		<InputField :field="inputFields['filterAlignment']" />
	</form>
</template>

<script>
import InputField from "./InputField.vue";
import SelectField from "./SelectField.vue";
export default {
	name: "SideForm",
	data() {
		return {
			selectFields: {
				groupID: {
					inputId: 1,
					listFor: "groupID",
					inputLabel: "Group ID",
					inputPlaceholder: "Search",
					hasPrefixedIcon: true,
					options: ["1001", "1002", "1003"],
				},
				dataset: {
					inputId: 4,
					listFor: "dataset",
					inputLabel: "Dataset",
					inputPlaceholder: "Enter text here",
					hasPrefixedIcon: true,
					options: ["1001", "1002", "1003"],
				},
			},
			inputFields: {
				dashboardID: {
					inputId: 2,
					inputType: "text",
					inputFor: "dashboardID",
					inputLabel: "Dashboard ID",
					inputPlaceholder: "Enter your text here",
					hasPrefixedIcon: false,
				},
				dashboardHead: {
					inputId: 3,
					inputType: "text",
					inputFor: "dashboardHead",
					inputLabel: "Dashboard Head",
					inputPlaceholder: "Enter your text here",
					hasPrefixedIcon: false,
				},
				filterAlignment: {
					inputId: 5,
					inputType: "text",
					inputFor: "filterAlignment",
					inputLabel: "Filter Alignment",
					inputPlaceholder: "Enter your text here",
					hasPrefixedIcon: false,
				},
			},
		};
	},
	props: {},
	components: {
		InputField,
		SelectField,
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
/* .side-form {
	position: relative;
	&::after {
		content: "";
		position: absolute;
		right: 0;
		top: 0;
		transform: translateX(3rem);
		height: 100%;
		border-right: 0.1rem solid var(--clr-blue-100);
	}
} */
</style>