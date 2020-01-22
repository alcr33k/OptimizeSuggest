<template>
    <button class="questionsBtn" @click="handleClick" v-bind:id="btnId">{{btnText}}</button>
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
        padding: 0.4em;
        border-radius: 1em;
        width: 90%;
        margin-bottom: 1em;
        font-weight: bold;
        height: 4em;
    }
    @media only screen and (max-width: 768px) {
        .questionsBtn {
            margin-bottom: 0.5em;
        }
    }
</style>