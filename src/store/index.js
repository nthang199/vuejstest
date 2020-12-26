import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listProductLast: [
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-1.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-2.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-3.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-4.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
        url:require('../assets/images/product-5.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
        url:require('../assets/images/product-6.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
        url:require('../assets/images/product-7.jpg'),
        price:50.00
      }
    ,
      {
        title: 'Red T-shit man',
        rating: 4,
        url:require('../assets/images/product-8.jpg'),
        price:50.00
      }
    ],
    listProductFeat: [
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-1.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-2.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-3.jpg'),
        price:50.00
      },
      {
        title: 'Red T-shit man',
        rating: 4,
       url:require('../assets/images/product-4.jpg'),
        price:50.00
      }
    ]
  },
  getters: {
    listProductLast: state => state.listProductLast,
    listProductFeat:state=>state.listProductFeat
  },
  mutations: {},
  actions: {},
  modules: {}
});
