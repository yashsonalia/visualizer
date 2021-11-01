import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
import { v4 as uuidGen } from "uuid";
export default new Vuex.Store({
	state: {
		rows: [],
		chartTypes: ["Bar Chart", "Area Graph", "Pie Chart"],
	},
	getters: {
		getRows: (state) => state.rows,
		getRow: (state) => (id) => state.rows.find((row) => row.id === id),
		getCard: (state) => (rowIndex, cardIndex) =>
			state.rows[rowIndex].cards[cardIndex],
		getChartTypes: (state) => state.chartTypes,
	},
	actions: {
		async getAllData({ commit }) {
			try {
				const response = await axios.get("/api/rows/");
				const data = response.data;

				commit("setAllData", data);
			} catch (error) {
				console.error(error);
			}
		},

		async createNewRow({ commit }) {
			try {
				const response = await axios.post("/api/rows/", {
					cards: [
						{
							title: "",
							chartType: "",
							filters: [],
							otherData: {},
							isNewCard: true,
							cid: uuidGen(),
						},
					],
				});

				const data = response.data;
				commit("setNewRow", data);
			} catch (error) {
				console.error(error);
			}
		},

		async addCardToRow({ commit }, row) {
			const { id, cards } = row;

			cards.push({
				title: "",
				chartType: "",
				filters: [],
				otherData: {},
				isNewCard: true,
				cid: uuidGen(),
			});

			try {
				const response = await axios.put(`/api/rows/${+id}`, { cards });

				const data = response.data;
				commit("setUpdatedRow", data);
			} catch (error) {
				console.error(error);
			}
		},

		async deleteRow({ commit }, id) {
			try {
				await axios.delete(`/api/rows/${+id}`);
				commit("removeRow", id);
			} catch (error) {
				console.error(error);
			}
		},

		async deleteCard({ commit }, values) {
			const { index, rowId, rowIndex } = values;
			const cards = [...this.state.rows[rowIndex].cards];

			cards.splice(index, 1);

			try {
				await axios.patch(`api/rows/${+rowId}`, { cards });
				commit("removeFromRow", { rowIndex, index });
			} catch (error) {
				console.error(error);
			}
		},

		async updateCardData({ commit }, data) {
			const { rowIndex, cardIndex } = data.indices;
			const { card } = data;
			const row = this.state.rows[rowIndex];
			row.cards[cardIndex] = card;

			try {
				const response = await axios.patch(`api/rows/${+row.id}`, {
					cards: row.cards,
				});
				commit("setUpdatedCardData", { rowIndex, cardIndex, card });
			} catch (error) {
				console.error(error);
			}
		},
	},

	mutations: {
		setAllData: (state, data) => (state.rows = data),

		setNewRow: (state, data) => state.rows.push(data),

		removeRow: (state, id) =>
			(state.rows = state.rows.filter((card) => card.id !== id)),

		setUpdatedRow: (state, data) => {
			const index = state.rows.findIndex((row) => row.id === data.id);
			if (index !== -1) state.rows.splice(index, 1, data);
		},

		setUpdatedCardData: (state, { rowIndex, cardIndex, card }) => {
			state.rows[rowIndex].cards[cardIndex] = card;
		},

		removeFromRow(state, payload) {
			const { rowIndex, index } = payload;
			state.rows[rowIndex].cards.splice(index, 1);
		},
	},
	modules: {},
});
