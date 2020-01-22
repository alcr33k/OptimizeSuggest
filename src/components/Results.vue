<template>
    <div class="results">
        <h2>You answered</h2>
        <div class="answers">
            <p v-for="(answer, index) in answers" v-bind:key="answer">
                <strong>{{questionTags[index]}}:</strong> {{answer}}
            </p>
        </div>
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
        questionTags: Array,
        suggestedProducts: Array
    }
}
</script>

<style scoped>
.resultsHeader {
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 70%;
}
.resultsIcon {
    padding-left: 1em;
    width: 2.2em;
    height: 2.2em;
    padding-top: 1em;
}
.answers {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:flex-start;
}
@media only screen and (max-width: 767px) {
    .results {
        padding: 1em;
    }
    .answers {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        align-content: flex-start;
    }   
}
</style>