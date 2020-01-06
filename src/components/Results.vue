<template>
    <div>
        <h2>Results</h2>
        <p v-for="answer in answers" v-bind:key="answer">
            {{answer}}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        answers: Array
    }
}
</script>

<style scoped>
    
</style>