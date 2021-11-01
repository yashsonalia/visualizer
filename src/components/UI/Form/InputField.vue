<template>
	<div class="form-group">
		<label :for="field.inputFor">{{ field.inputLabel }}</label>
		<input
			:id="field.inputFor"
			:type="field.inputType"
			:placeholder="field.inputPlaceholder"
			:class="['form-control', field.hasPrefixedIcon ? 'prefixed' : '']"
			v-model="value"
			@input="$emit('input-value-change', value)"
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
		return {
			value: "",
		};
	},
	props: {
		field: Object,
	},
	components: {},
	methods: {},
	created() {
		this.value = this.field.value;
	},
};
</script>

