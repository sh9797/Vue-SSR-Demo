<template>
    <div class="container-msg">{{info}}</div>
</template>

<script>
export default {
    data() {
        return {
            info: 'A Easy Demo.'
        }
    }
}
</script>

<style scoped>
    .container-msg{
        margin-top: 20px;
        font-size: 20px;
    }
</style>
