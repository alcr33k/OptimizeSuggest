<template>
    <div class="questionsMain">
        <h1>{{this.title}}</h1>
        <Questions v-bind:questions="this.questions" />
        <Result />
    </div>
</template>

<script>
import Questions from './../components/Questions';
import Result from './../components/Results';
const jsonFile = require('./../assets/questions.json');
// let parsed = JSON.parse(jsonFile);

export default {
    name: 'Main',
    components: {
        Questions,
        Result
    },
    data() {
        return {
            questions: [],
            title: 'Answer these questions to get started'
        }
    },
    created: function() {
        this.questions = jsonFile;
    }
}
</script>

<style scoped>
    .questionsMain {
        border: 1px solid black;
        width: 80%;
        align-self: center;
    }
</style>