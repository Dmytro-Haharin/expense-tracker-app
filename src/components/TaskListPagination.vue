<template>
    <div class="wrapper">
        <ul>
            <li v-for="elem , index in arr" :key = index >
                <a href="#" v-on:click="newPage(elem)">{{elem}}</a>
            </li>
        </ul>
    </div>
</template>
<script>


export default{
    data(){
        return{
            arr:[1 , 2 , 3 , 4]
        }
    },
    methods:{
        newPage(e){
            this.$store.commit("setThisPage","page"+e)
        }
    }    
}
</script>
<style lang="sass">
    .wrapper
        background-color: #313131
    ul
        display: flex
        color: red
        justify-content: center
        margin: 0
        &::after
            content:'>'
            color: white
        ::first-child
            color: white

        &::before
            content:'<'
            color: white
        ::last-child
            color: white

    li
        list-style-type: none
        padding:0 10px
    a
        outline: none
        text-decoration: none
        color: red

</style>