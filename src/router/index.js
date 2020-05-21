import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import HomeList from "@/components/HomeList.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/",
            name: "home-list",
            component: HomeList,
        },
    ],
});