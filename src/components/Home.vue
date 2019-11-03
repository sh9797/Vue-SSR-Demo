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

<style scoped lang="scss">
    $color1:blue;
    @mixin marTop($marginTop){
        margin-top:$marginTop
    }
    .container-inp {
        @include marTop(20px);
        .inp {
            width: 500px;
            border-radius: 20px;
            outline: none;
            border: 1px solid #cff1ff;
            height: 30px;
            padding: 5px 10px;
            line-height: 30px;
            font-size: 20px;
        }
        .inp:hover{
            border: 1px solid $color1;
            box-shadow: 0px 0px 2px 2px rgba(35, 69, 255, 0.38);
            transition: all 200ms linear ;
        }
        p {
            font-size: 20px;
            color: $color1;
        }
    }

</style>
