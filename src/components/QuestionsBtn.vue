<template>
    <button @click="handleClick" v-bind:id="btnId">{{btnText}}</button>
</template>

<script>
// bind class to button, kan jag också ha den optional? optional === ''
// alternativet är att vi kör en hårdkodad klass som sätts utifrån tenary expression
export default {
    name: 'QuestionsBtn',
    props: {
        btnText: String,
        btnId: Number
    }, 
    methods: {
        handleClick() {
            this.$emit('next-question', {
                buttonText: this.btnText,
                buttonId: this.btnId
            }); // emit to change question
        }
    }
}
</script>

<style scoped>
    .questionsBtn {
        width: 20%;
        padding: 0.4em;
        height: 4em;
    }
</style>