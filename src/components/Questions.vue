<template>
    <div class="questionsArea">
        <div class="questionsText">
            {{QuestionText}}
        </div>
        <div class="questionsOptions">
            <div v-for="option in this.QuestionOptions" v-bind:key="option.id">
                <QuestionsBtn v-bind:btnText="option.text" v-bind:btnId="option.id" v-on:next-question="nextQuestion"/>
            </div>
            <!-- <QuestionsBtn v-bind:btnText="option.text" v-bind:btnClass="btnClass"/> -->
        </div>
    </div>
</template>

<script>
import QuestionsBtn from './../components/QuestionsBtn';

export default {
    name: 'Questions',
    components: {
        QuestionsBtn
    },
    props: {
        questions: Array
    },
    data() {
        return  {
            currentQuestion: 0,
            Title: 'Answer these questions to get started',
            QuestionText: '',
            QuestionOptions: [],
            answers: []
        }
    }, 
    methods: {
        nextQuestion(selectedOption) {
            if (this.currentQuestion < this.questions.length-1) {
                // push slected option and questionTag to answers
                this.answers.push({
                    answerText: selectedOption.buttonText,
                    questionTag: this.questions[this.currentQuestion].questionsTag,
                    answerId: selectedOption.buttonId 
                });
                // update question
                this.currentQuestion = this.currentQuestion + 1;
                this.QuestionText = this.questions[this.currentQuestion].questionText;
                this.QuestionOptions = this.questions[this.currentQuestion].questionOptions;
            } else {
                // all questions answered, handle results
                this.answers.push({
                    answerText: selectedOption.buttonText,
                    questionTag: this.questions[this.currentQuestion].questionsTag,
                    answerId: selectedOption.buttonId 
                });
                // emit event till main
                this.$emit('show-results', this.answers);
            }
        }
    },
    mounted() {

        this.QuestionText = this.questions[0].questionText;
        this.QuestionOptions = this.questions[0].questionOptions;
        // hämta frågor från JSON-fil
    }

    
}
</script>

<style scoped>
.questionsOptions {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 1em 0;
}
.questionsOptions div {
    width: 100%;
}
</style>