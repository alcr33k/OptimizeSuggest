<template>
    <div class="results">
        <h2>You answered</h2>
        <div class="answers">
            <p v-for="(answer, index) in answers" v-bind:key="answer">
                <strong>{{questionTags[index]}}:</strong> {{answer}}
            </p>
        </div>
        <h2>Best product for you</h2>
        <p>{{topProduct.productName}}</p>
        <img class="topProductImage" v-bind:src=" require('./../assets/images/' + topProduct.image) "/>
        <p><strong>Best use:</strong> {{topProduct.bestUse}}</p>
        <p>{{topProduct.decr}}</p>
        <h2>Top suggestions</h2>
        <p v-for="(product, index) in suggestedProducts" v-bind:key="product.name">
            #{{index+1}}: {{product.name}}  with a confidence of {{product.certainty}} %
        </p>
    </div>
</template>

<script>
const productsJson = require('./../assets/products.json');

export default {
    props: {
        answers: Array,
        questionTags: Array,
        suggestedProducts: Array
    }, 
    computed: {
        topProduct: function() {
            let topSuggestion = this.suggestedProducts[0].name;
            let index = productsJson.findIndex(val => val.productName === topSuggestion);
            return productsJson[index];
        }
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
.topProductImage {
    height: 20em;
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