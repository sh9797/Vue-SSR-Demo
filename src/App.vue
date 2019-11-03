<template>
    <div id="app">
        <h1 class="app">Server side render---Vue SSR</h1>
        <router-link tag="span" to="/">Home</router-link>
        <router-link tag="span" to="/about">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    #app {
        width: 100%;
        margin-top: 20px;
        text-align: center;
        span{
            display: inline-block;
            font-size: 20px;
            text-decoration: underline;
            margin-top: 10px;
            margin-left: 10px;
            cursor: pointer;
        }
    }

</style>
