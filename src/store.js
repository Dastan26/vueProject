import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {};
//new Vuex.Store = {

//     state: {
//         products: "",
//     },
//     mutations: {
//         SET_PRODUCTS(state, product) {
//             state.products = newProducts;
//         }
//     },
//     actions: {
//         getProducts({ commit }, payload) {
//             fetch(`https://fakestoreapi.com/products?limit=${payload}`)
//                 .then((res) => res.json())
//                 .then((json) => {
//                     commit("SET_PRODUCTS", json);
//                 });
//         }
//     },
//     getters: {
//         getProducts: (state) => state.products
//     },
