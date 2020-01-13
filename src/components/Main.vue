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
            let config = {
                headers: {
                    'Content-Type': 'text/JSON'
                }
            }
            try {
                let res = await axios.post('/api/recommendations', answers, config);
                console.log('res'); // ev unit test here
                this.results = answers;
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