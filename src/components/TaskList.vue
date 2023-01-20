<template>
    <div class="list">
        <div v-bind:class="{item:true , done:item.isDone == true}" v-for="item of data" v-bind:key="item.id">
            <!--v-bind:class="{item:true , done:item.isDone = true}"
                класс item добавится в любом случае 
                класс done добавится в случае если item.isDone = true
            -->
          <input type="checkbox" v-bind:checked="item.isDone" v-on:change="done(item.id)">
          <span>{{item.name}}</span>
          <button v-on:click="remove(item.id)">delete</button>
        </div>
    </div>
</template>
<script>

export default{
    name:'TaskList',
    props: ['data'], // принимаем данные из родидельского компонента
    methods: {
        remove(id){
            this.$emit('remove', id) // создаем пользовательский обработчик события который будет передавать полезную нагрузку 
                           // когда в родительском компоненте подпишутся на это событие первый параметр название второй параметр нагрузка
        },
        done(id){
            this.$emit('done',id)
        }
    }
}
</script>

<style lang="sass">
.list
    width: 1000px
    margin: 0 auto
    border: 1px solid grey

.item
    display: flex
    justify-content: space-between
    align-items: center
.done 
    color: grey
    span
        text-decoration: line-through
</style>
