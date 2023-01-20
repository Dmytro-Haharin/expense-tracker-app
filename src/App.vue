<template>
  <div id="app">
    <TaskForm v-on:add="onAdd"></TaskForm>
    <TaskList v-bind:data="list"></TaskList> <!-- v-bind позволяет передать данные в пропс 
                                              синтаксис v-bind:(props name) = 'data to components' 
                                              подключаем пользовательское события из дочернего компонента и назначаем обработчик -->
    
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  data(){
    return {
      list: []
    }
  },
  methods:{
    onAdd(obj){
      let maxIndex = this.list.reduce((acc, curr, i) => this.list[acc].b > curr.b ? acc : i, 0);
      obj.id = maxIndex+2
      this.list.push( obj)
    }
  },
  created(){
    setTimeout(()=>{
      this.list = [
        {id: 1, PaymentDescription: "apple", PaymentAmount: "124", PaymentDate: "30.02.2023"},
        {id: 2, PaymentDescription: "banana", PaymentAmount: "358", PaymentDate: "27.05.2021"},
        {id: 3, PaymentDescription: "lemon", PaymentAmount: "45", PaymentDate: "18.04.2023"},
        {id: 4, PaymentDescription: "cherry", PaymentAmount: "59", PaymentDate: "16.01.2021"},
        {id: 5, PaymentDescription: "grapefruit", PaymentAmount: "50", PaymentDate: "10.09.2023"},
        {id: 6, PaymentDescription: "pizza", PaymentAmount: "75", PaymentDate: "21.07.2023"},
        {id: 7, PaymentDescription: "burger", PaymentAmount: "13", PaymentDate: "02.06.2022"},
        {id: 8, PaymentDescription: "cola", PaymentAmount: "20", PaymentDate: "23.01.2021"},
        {id: 9, PaymentDescription: "tabaco", PaymentAmount: "30", PaymentDate: "24.12.2021"},
        {id: 10, PaymentDescription: "energy drink", PaymentAmount: "150", PaymentDate: "26.01.2022"},
        {id: 11, PaymentDescription: "spoon", PaymentAmount: "90", PaymentDate: "02.11.2020"}
      ]
    },2000);
  },
  components: {
    TaskList,
    TaskForm
}
}
</script>

<style lang="sass">
  #app
    text-align: center

  
</style>
