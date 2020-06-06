import Vue from "vue";
import Vuex from "vuex";
import apiService from "../services/apiService";

Vue.use(Vuex);

const state = {
    characters: [],
};

const mutations = {
    RECEIVE_CHARACTERS(state, characters) {
        state.characters = characters;
    },
};

const actions = {
    fetchCharacters({ commit }) {
        return apiService
            .getCharacters()
            .then((response) => {
                for (var i = 0; response.data.data.results.length; i++) {
                    const result = response.data.data.results[i];
                    // console.log(JSON.parse(JSON.stringify(result)));
                    commit("RECEIVE_CHARACTERS", result);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    },
};

const getters = {
    // characters: (state) => {
    //     return state.characters.map((character) => {
    //         return {
    //             name: character.name,
    //             image: `${character.thumbnail.path}/standard_fantastic.${character.extension}`,
    //             description: character.description === "" ?
    //                 "No description listed for this character." :
    //                 character.description,
    //         };
    //     });
    // },
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

export default store;