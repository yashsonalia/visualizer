<template>
	<section class="home full-height pad-t-8 pad-r-3 pad-b-3 pad-l-3">
		<div class="modal-container" v-if="isModalOpen">
			<div class="modal-bg" @click="closeModal"></div>
			<Modal
				:modalData="modalData"
				@updated-values="(card) => updatedValuesHandler(card)"
				@cancel-update="() => (isModalOpen = false)"
			/>
		</div>
		<div class="home__inner full-height" v-show="!isModalOpen">
			<div class="row">
				<div class="col-md-4 col-lg-3 full-height">
					<SideForm />
					<!-- Form -->
				</div>
				<div class="col-md-8 col-lg-9 pad-l-3">
					<!-- Cards -->
					<Overview
						@edit-card-details="(cardIndices) => editCardDetails(cardIndices)"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SideForm from "../components/UI/Form/SideForm.vue";
import Overview from "../components/Overview.vue";
import Modal from "../components/UI/Modal/Modal.vue";
export default {
	name: "Home",
	data() {
		return {
			isModalOpen: false,
			modalData: {},
			cardIndices: {},
		};
	},
	props: {},
	components: {
		SideForm,
		Overview,
		Modal,
	},
	computed: mapGetters(["getCard"]),
	methods: {
		...mapActions(["updateCardData"]),
		editCardDetails(cardIndices) {
			const { rowIndex, cardIndex } = cardIndices;
			this.modalData = this.getCard(rowIndex, cardIndex);
			this.cardIndices = cardIndices;
			this.isModalOpen = true;
		},
		updatedValuesHandler(card) {
			this.updateCardData({ indices: this.cardIndices, card });
			this.isModalOpen = false;
		},
		closeModal() {
			this.isModalOpen = false;
		},
	},
};
</script>

<style lang="scss">
.home {
	position: relative;
	&__inner {
		padding: 1.6rem;
		background-color: var(--clr-blue-10);

		border-radius: 1rem;
	}
}
.modal {
	&-container {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;

		width: 100%;
		height: 100%;
	}
	&-bg {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		backdrop-filter: blur(1rem);
		background-color: var(--clr-transparent-black-50);
	}
}
</style>
