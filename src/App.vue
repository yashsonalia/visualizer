<template>
	<div id="app" class="full-height">
		<Navbar />
		<router-view />
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/UI/Navbar/Navbar";

export default {
	name: "App",
	data() {
		return {};
	},
	props: {},
	components: { Navbar },
	methods: { ...mapActions(["getAllData"]) },
	mounted() {},
	created() {
		this.getAllData();
	},
};
</script>

<style></style>