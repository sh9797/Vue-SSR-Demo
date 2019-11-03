import Vue from 'vue';
import App from './App';

export default function () { // 导出函数:让每一次访问该网站都是一次新的Vue实例,与单例模式相反
    return new Vue({
        template:'<App/>',
        components:{
            App
        }
    })
}
