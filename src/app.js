import Vue from "vue";
import app from "./App.vue";
import createRouter from "./router.js";

export default function() {
    return new Vue({
        template: "<app/>",
        router: createRouter(),
        components: {
            app
        }
    });
}
