<template>
    <div class="list">
        <table>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Value</th>
            </tr>

            <tr class="item" v-for="item of list" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.PaymentDate}}</td>
                <td>{{item.PaymentDescription}}</td>
                <td>{{item.PaymentAmount}}</td>
                
            </tr>
        </table>      
    </div>
</template>
<script>

export default{
    name:'TaskList',
    computed:{
        list(){
            return this.$store.getters.getTaskListForThisPage
        },
        
    },
}
</script>

<style lang="sass">
body
    background-color: #294298
.list
    width: 600px
    margin: 0 auto
    padding: 40px
    
.done 
    color: grey
    span
        text-decoration: line-through

table
    width: 100%
    border-collapse: collapse
td,th
    width: 25%
    text-align: left
    padding: 10px 0

tr 
    border-bottom: 1pt solid black


</style>
