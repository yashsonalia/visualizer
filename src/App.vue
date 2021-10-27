<template>
	<div id="app" class="full-height">
		<Navbar />
		<router-view />
	</div>
</template>

<script>
import Navbar from "./components/UI/Navbar/Navbar";
export default {
	name: "App",
	data() {
		return {};
	},
	props: {},
	components: { Navbar },
	methods: {},
};
</script>

<style></style>