<template>
    <div class="answerDisplay">
        <h1>{{log}}</h1>
    </div>
</template>

<script>
export default {
    name: 'AnswerDisplay',
    props: {
        log: String,
    }
}
</script>

<style scoped>
    .answerDisplay {
        width: 100%;
        height: 40px;
        text-align: right;
    }
</style>