<template>
  <div id="app">
    <TaskList></TaskList>
    <TaskListPagination></TaskListPagination>
    <TaskForm></TaskForm>
    
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import TaskListPagination from './components/TaskListPagination.vue';

export default {
  name: 'App',  
  mounted(){
    this.$store.dispatch('loadProducts')
  },
  components: {
    TaskList,
    TaskForm,
    TaskListPagination
}
}
</script>

<style lang="sass">
  body
    padding: 0
    margin: 0
  #app
    text-align: center

  
</style>
