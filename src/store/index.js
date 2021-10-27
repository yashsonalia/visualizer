import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allCardsData: [
			[
				{
					id: 1001,
					title: "Covid",
					chart: "Bar Chart",
					isEmptyCard: false,
				},
				{
					id: 1002,
					title: "HIV",
					chart: "Pie Chart",
					isEmptyCard: false,
				},
			],
			[
				{
					id: 1003,
					title: "Aids",
					chart: "Ba Chart",
					isEmptyCard: false,
				},
			],
		],
	},
	mutations: {
		setNewCardData(state, payload) {},
	},
	actions: {},
	modules: {},
	getters: {
		getCardData: (state) => {},
		getAllCardsData: (state) => state.allCardsData,
	},
});
