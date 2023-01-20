<template>
    <div class="list">
        <table>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Value</th>
            </tr>

            <tr class="item" v-for="item of data" v-bind:key="item.id">
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
    props: ['data'], // принимаем данные из родидельского компонента
    methods: {
        
    }
}
</script>

<style lang="sass">
.list
    width: 600px
    margin: 0 auto
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
