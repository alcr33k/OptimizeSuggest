<template>
    <div class="questionsMain">
        <h1>{{this.title}}</h1>
        <Questions v-if="this.results === ''" v-bind:questions="this.questions" v-on:show-results="showResults"/>
        <Result v-if="this.results !== ''" v-bind:answers="this.results"/>
    </div>
</template>

<script>
import Questions from './../components/Questions';
import Result from './../components/Results';
const jsonFile = require('./../assets/questions.json');
import axios from 'axios'; 
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
            title: 'Answer these questions to get started',
            results: ''
        }
    },
    created: function() {
        this.questions = jsonFile;
    },
    methods: {
        async showResults(answers) {
            // ev visa loading bar if this takes time, test and see if needed
            // skicka answers till backend
            console.log(answers);
            // map all answersText to an array
            let answerText = answers.map(answer => answer.answerText);
            // map all answerIds to an array
            let answerIds = answers.map(answer => answer.answerId)
            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
                let res = await axios.post('/api/recommendations', answerIds, config);
                console.log(res.data); // ev unit test here
                this.results = answerText;
            } catch (err) {
                console.log(err.response.data);
                // handle error in frontend
            }
        }
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