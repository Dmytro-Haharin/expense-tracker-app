<template>
    <div>
        <input v-model="newTask" type="text">
        <button v-on:click="add">add</button>
    </div>
</template>

<script>
export default{
    name:'TaskForm',
    data(){
        return{
            newTask:''
        }
    },
    methods:{
        add(){
            this.$emit('add', this.newTask)
            this.newTask = ''
        }
    }
}
</script>

<style leng="sass">
</style>