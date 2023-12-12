import {createWebHistory, createRouter} from "vue-router";
import Competition from "@/views/Competition";
import Results from "@/views/Results";

const routes = [
    {
        path: "/",
        name: "competitor",
        component: Competition
    },
    {
        path: "/competition/:compId",
        name: "results",
        component: Results,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;