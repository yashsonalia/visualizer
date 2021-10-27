<template>
	<div class="form-group">
		<label :for="field.listFor">{{ field.inputLabel }}</label>
		<input
			:list="field.listFor"
			:name="field.listFor"
			:class="['form-control', field.hasPrefixedIcon ? 'prefixed' : '']"
			:placeholder="field.inputPlaceholder"
		/>
		<datalist :id="field.listFor">
			<option v-for="opt in field.options" :key="opt">{{ opt }}</option>
		</datalist>
		<div :class="['prefixed-icon', field.hasPrefixedIcon ? 'show' : '']">
			<i class="bi bi-search"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: "SelectField",
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
