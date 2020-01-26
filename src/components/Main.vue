<template>
    <div class="questionsMain">
        <h1>{{this.title}}</h1>
        <Questions v-if="this.answers === ''" v-bind:questions="this.questions" v-on:show-results="showResults"/>
        <Result v-if="this.answers !== ''" v-bind:answers="this.answers" v-bind:questionTags="this.questionTags" v-bind:suggestedProducts="this.suggestedProducts"/>
    </div>
</template>

<script>
import Questions from './../components/Questions';
import Result from './../components/Results';
const jsonFile = require('./../assets/questions.json');
import axios from 'axios'; 

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
            answers: '',
            questionTags: '',
            suggestedProducts: []
        }
    },
    created: function() {
        this.questions = jsonFile;
    },
    methods: {
        async showResults(results) {
            // map all answerTags to an array
            let tags = results.map(answer => answer.questionTag);
            // map all answersText to an array
            let answerText = results.map(answer => answer.answerText);
            // map all answerIds to an array
            let answerIds = results.map(answer => answer.answerId);
            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            // skicka answers till backend
            try {
                let res = await axios.post('/api/recommendations', answerIds, config);
                this.suggestedProducts = res.data;
                this.answers = answerText;
                this.questionTags = tags;
                this.title = '';
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
        background: white;
        border: 1px solid black;
        width: 90%;
        align-self: center;
        border-radius: 1em;
        font-size: 1.2em;
    }
    @media only screen and (max-width: 768px) {
        .questionsMain {
            font-size: 1em;
        }
    }
</style>