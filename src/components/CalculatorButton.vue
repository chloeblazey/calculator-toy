<template>
    <button 
        @click="onClick"
        class="calculator-button" >
        {{value}}
    </button>
</template>

<script>
export default {
    name: 'CalculatorButton',
    props: {
        value: String
    },
    methods: {
        onClick() {
            this.$emit('digit-entry', this.value)
        }
    }
}
</script>

<style scoped>

</style>