const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import('./components/Backend/Dashboard.vue')
    },
    {
        path: "/ex",
        name: "ex",
        component: () => import('./components/ExampleComponent.vue')
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import('./components/ProfileComponent.vue')
    },
]
export default routes;