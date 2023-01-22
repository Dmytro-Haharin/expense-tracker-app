import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList:[],
    thisPage:"page2",
    taskListForThisPage:[]
  },
  getters: {
    getTaskList:(state) => state.taskList,
    getThisPage:(state)=> state.thisPage,
    getTaskListForThisPage:(state)=> {
      for (var key in state.taskList) {
        if(key == state.thisPage){
            return state.taskList[key] 
        }
      }
    }
  },
  mutations: {
    setTaskList:(state , payload) => state.taskList = payload,
    addNewList:(state , payload)=> state.taskList[state.thisPage].push(payload),
    setThisPage:(stage , payload) => stage.thisPage = payload
  },
  actions: {
    loadProducts({commit}){ // commit метод для вызова мутаций
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({
            "page1":[
              {id: 1, PaymentDescription: "apple", PaymentAmount: "124", PaymentDate: "30.02.2023"},
              {id: 2, PaymentDescription: "banana", PaymentAmount: "358", PaymentDate: "27.05.2021"},
              {id: 3, PaymentDescription: "lemon", PaymentAmount: "45", PaymentDate: "18.04.2023"},
            ],
            "page2":[
              {id: 4, PaymentDescription: "cherry", PaymentAmount: "59", PaymentDate: "16.01.2021"},
              {id: 5, PaymentDescription: "grapefruit", PaymentAmount: "50", PaymentDate: "10.09.2023"},
              {id: 6, PaymentDescription: "pizza", PaymentAmount: "75", PaymentDate: "21.07.2023"},
            ],
            "page3":[
              {id: 7, PaymentDescription: "burger", PaymentAmount: "13", PaymentDate: "02.06.2022"},
              {id: 8, PaymentDescription: "cola", PaymentAmount: "20", PaymentDate: "23.01.2021"},
              {id: 9, PaymentDescription: "tabaco", PaymentAmount: "30", PaymentDate: "24.12.2021"},
            ],
            "page4":[
              {id: 10, PaymentDescription: "energy drink", PaymentAmount: "150", PaymentDate: "26.01.2022"},
              {id: 11, PaymentDescription: "spoon", PaymentAmount: "90", PaymentDate: "02.11.2020"}
            ]
          })
        },1000)
      })
      .then((list) => commit('setTaskList',list)) // вызываем мутацию и передаем в нее результат функции
    }
  },
  modules: {
  }
})
