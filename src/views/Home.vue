<template>
	<section class="home full-height pad-t-8 pad-r-3 pad-b-3 pad-l-3">
		<div class="home__inner full-height pad-2">
			<div class="row">
				<div class="col-md-4 col-lg-3 full-height">
					<SideForm />
					<!-- Form -->
				</div>
				<div class="col-md-8 col-lg-9 pad-l-3">
					<!-- Cards -->
					<Overview />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SideForm from "../components/UI/Form/SideForm.vue";
import Overview from "../components/Overview.vue";
export default {
	name: "Home",
	data() {
		return {};
	},
	props: {},
	components: {
		SideForm,
		Overview,
	},
	methods: {},
};
</script>

<style lang="scss">
.home {
	&__inner {
		padding: 1.6rem;
		background-color: var(--clr-blue-10);

		border-radius: 1rem;
	}
}
</style>
