<template>
	<div class="form-group">
		<label :for="field.inputFor">{{ field.inputLabel }}</label>
		<input
			:type="field.inputType"
			:class="['form-control', field.hasPrefixedIcon ? 'prefixed' : '']"
			:id="field.inputFor"
			aria-describedby=""
			:placeholder="field.inputPlaceholder"
		/>
		<div :class="['prefixed-icon', field.hasPrefixedIcon ? 'show' : '']">
			<i class="bi bi-search"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: "InputField",
	data() {
		return {};
	},
	props: {
		field: Object,
	},
	components: {},
	methods: {},
};
</script>

<style lang="scss" scoped>
</style>