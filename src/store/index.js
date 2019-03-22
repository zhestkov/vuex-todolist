import Vue from "vue";
import Vuex from "vuex";
import { ADD_TODO_MUTATION } from "./mutation-types";
import { ADD_TODO_ACTION } from "./action-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: [
      {
        id: 1,
        name: "Task1"
      },
      {
        id: 2,
        name: "Task2"
      },
      {
        id: 3,
        name: "Something else"
      }
    ]
  },
  getters: {
    todolist: state => state.list,
    maxCurrId: state => Math.max(...state.list.map(item => item.id))
  },
  mutations: {
    [ADD_TODO_MUTATION](state, payload) {
      state.list.push(payload);
    }
  },
  actions: {
    [ADD_TODO_ACTION]({ commit, getters }, payload) {
      commit(ADD_TODO_MUTATION, {
        id: getters.maxCurrId + 1,
        name: payload
      });
    }
  }
});
