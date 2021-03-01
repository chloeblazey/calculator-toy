<template>
    <button 
        @click="onClick"
        class="calculator-button" >{{value}}
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
            this.$emit('button-push', this.value)
        }
    }
}
</script>

<style scoped>

</style>