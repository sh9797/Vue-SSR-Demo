<template>
    <div class="container-inp">
        <input type="text" class="inp" v-model="info">
        <p>{{info}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: 'Do you love me ? yes I did'
        }
    }
}
</script>

<style scoped>
    .container-inp{
        margin-top: 20px;
    }
    .inp{
        width: 400px;
        height: 20px;
        padding: 5px 10px;
        line-height: 20px;
    }
</style>
