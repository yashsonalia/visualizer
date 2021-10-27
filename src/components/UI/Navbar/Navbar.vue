<template>
	<nav class="nav">
		<h5 class="nav-title">Visualizer</h5>
		<ul class="nav-list">
			<li class="nav-items" v-for="link in links" :key="link.key">
				<router-link :to="link.route">
					<i :class="['nav-icon', 'bi', link.icon]"></i>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
//import File from 'Path'
export default {
	name: "Navbar",
	data() {
		return {
			links: [
				{
					id: "l0",
					icon: "bi-flag",
					route: "/",
				},
				{
					id: "l1",
					icon: "bi-bell",
					route: "/about",
				},
				{
					id: "l2",
					icon: "bi-person-circle",
					route: "/",
				},
			],
		};
	},
	props: {},
	components: {},
	methods: {},
};
</script>

<style lang="scss" scoped>
</style>