import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		rows: [],
	},
	getters: {
		getRows: (state) => state.rows,
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
			});

			try {
				const response = await axios.put(`/api/rows/${+id}`, { cards });

				const data = response.data;
				commit("updateRow", data);
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
			const { cardIndex, rowId, rowIndex } = values;

			const cards = [...this.state.rows[rowIndex].cards];
			cards.splice(cardIndex, 1);
			try {
				await axios.patch(`api/rows/${+rowId}`, { cards });
				commit("removeFromRow", { rowIndex, cardIndex });
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

		updateRow: (state, data) => {
			const index = state.rows.findIndex((row) => row.id === data.id);
			if (index !== -1) state.rows.splice(index, 1, data);
		},

		removeFromRow(state, payload) {
			const { rowIndex, cardIndex } = payload;
			state.rows[rowIndex].cards.splice(cardIndex, 1);
		},
	},
	modules: {},
});
