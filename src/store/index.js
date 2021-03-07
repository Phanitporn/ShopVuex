import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // counter: 0,
    // todos: [
    //   { id: 1, text: 'A', done: true },
    //   { id: 2, text: 'B', done: false },
    //   { id: 3, text: 'C', done: true }
    // ]
    select: [],
    nun: [
      {
        img:
          "https://img.ltwebstatic.com/images3_pi/2020/12/23/16087037745f3a628dd09bbe0c746035ef3ac5de4d_thumbnail_600x.webp",
        name: "เคสiPhone ลายเปลวไฟ",
        price: 85,
      },
      {
        name: " เคสiPhone พิมพ์ลาย",
        price: 70,
        img:
          "https://img.ltwebstatic.com/images3_pi/2021/01/08/1610085416f3ab0a7ea6cc9849f814a19fa05e74ff_thumbnail_600x.webp",
      },
      {
        name: "เคสiPhone จับคู่สี",
        price: 45,
        img:
          "https://img.ltwebstatic.com/images3_pi/2020/12/23/1608703585d95b13b816cef24303b79a9e37be35f3_thumbnail_600x.webp",
      },
      {
        name: "เคสiPhone ลายเมฆ",
        price: 120,
        img:
          "https://img.ltwebstatic.com/images3_pi/2021/01/05/1609817927f24bab4c95b7ea5fa2a1af2cf15a6f5d_thumbnail_600x.webp",
      },
      {
        name: " เคสiPhone พิมพ์ลายแมว",
        price: 40,
        img:
          "https://img.ltwebstatic.com/images3_pi/2020/10/27/1603781050ca6f4af843164a80336ff6a53f47fbc5_thumbnail_600x.webp",
      },
      {
        name: "เคสiPhone แบบเกม",
        price: 50,
        img:
          "https://img.ltwebstatic.com/images3_pi/2021/01/08/16100770260532ecfa81d364d0cd06ef7e4dbec270_thumbnail_600x.webp",
      },
      {
        name: " เคสiPhone ลายกราฟฟิก",
        price: 79,
        img:
          "https://img.ltwebstatic.com/images3_pi/2020/10/21/1603269119e897e76dfde7cb3cb6684be9ad7700d3_thumbnail_600x.webp",
      },
      {
        name: "เคส iPad ลายหินอ่อน",
        price: 139,
        img:
          "https://img.ltwebstatic.com/images3_pi/2020/06/22/1592800433ecf45d453cd2df5034586710c901801c_thumbnail_600x.webp",
      },
    ],
    s: [],
    data: [{}],
    Total: 0,
  },
  getters: {
    T: (state) => {
      return state.Total;
    },
    Menu: (state) => {
      return state.nun;
    },
    Order: (state) => (value, index) => {
      return state.select.push({
        name: state.nun[index].name,
        price: state.nun[index].price,
        value: value,
        Total: value * state.nun[index].price,
      });
    },
    ShowSelect: (state) => {
      return state.select;
    },
  },
  mutations: {
    //Clearสินค้า
    Clear: (state) => {
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = 0;
        state.select = [];
      }
    },
    //รวมราคา
    Submit: (state) => {
      state.Total = 0;
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = state.Total + state.select[i].Total;
      }
    },
  },
  actions: {},
  modules: {},
});
