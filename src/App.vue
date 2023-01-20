<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <TaskForm v-on:add="onAdd"></TaskForm>
    <TaskList v-on:done="onDone" v-on:remove="onRemove" v-bind:data="list"></TaskList> <!-- v-bind позволяет передать данные в пропс 
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
    onRemove(id){
      const idx = this.list.findIndex((item) => item.id == id) // получеяем индекс элемента с id полученным из пользовательского события
      this.list.splice(idx , 1)
    },
    onDone(id){
      const item = this.list.find((item) => item.id == id) // получаем объект по id полученным с помощу пользовательского события
      item.isDone = !item.isDone
    },
    onAdd(name){
      this.list.push({id:this.list.length+1 , name , isDone:false})
    }
  },
  created(){
    setTimeout(()=>{
      this.list = [
        {id: 1, name: 'test1',isDone: false},
        {id: 2, name: 'test2',isDone: true},
        {id: 3, name: 'test3',isDone: false}
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
