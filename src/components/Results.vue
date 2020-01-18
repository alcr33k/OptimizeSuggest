<template>
    <div>
        <h2>Answers</h2>
        <p v-for="answer in answers" v-bind:key="answer">
            {{answer}}
        </p>
        <h2>Suggested products</h2>
        <p v-for="(product, index) in suggestedProducts" v-bind:key="product.name">
            #{{index+1}}: {{product.name}}  with a confidence of {{product.certainty}} %
        </p>
    </div>
</template>

<script>
export default {
    props: {
        answers: Array,
        suggestedProducts: Array
    }
}
</script>

<style scoped>
    
</style>