<template>

    <div>
        <div v-if="visibleBlock" class="input-box">
            <input v-model="PaymentDescription" type="text" placeholder="Payment description">
            <input v-model="PaymentAmount" type="text" placeholder="Payment amount">
            <input v-model="PaymentDate" type="text" placeholder="Payment date">
            <button class="input-box__btn" v-on:click="add">ADD</button>
        </div>
        <button class="input-box__btn_show"  v-on:click="visibleBlock = !visibleBlock">ADD NEW COST</button>
    </div>
        
</template>

<script>
export default{
    name:'TaskForm',
    data(){
        return{
            PaymentDescription:'',
            PaymentAmount:'',
            PaymentDate:'',
            visibleBlock:false
        }
    },
    methods:{
        add(){
            if(!this.PaymentDate){
                this.PaymentDate = new Date().getDate() + '.' + new Date().getMonth() + 1 + '.' + new Date().getFullYear()
            }
            this.$emit('add', {PaymentDescription:this.PaymentDescription , PaymentAmount:this.PaymentAmount , PaymentDate:this.PaymentDate})
            this.PaymentDescription = ''
            this.PaymentAmount = ''
            this.PaymentDate = ''
        }
    }
}
</script>

<style lang="sass">
.input-box
    display: inline-flex
    flex-direction: column
    &__btn
        width: 50%
        align-self: end
        margin-top: 10px
        text-align: end
        color: #ffffff
        background-color: #1f7644
        border: none
        border-radius: 5px
        padding:5px 5px
        &_show
            display: block
            margin: 0 auto
            margin-top: 10px 
            width: 200px
            padding: 10px 15px
            color: #ffffff
            background-color: #1f7644
            border: none
            border-radius: 5px
            &::after
                content: "+"
                padding-left: 25%
        &::after
            content: "+"
            padding-left: 25%
            
    input
        margin-bottom: 10px
        padding: 5px 0 5px 10px
</style>