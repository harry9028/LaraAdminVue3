const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import('./components/Backend/DashboardComponent.vue')
    },
    {
        path: "/tmbill-users",
        name: "tmbill-users",
        component: () => import('./components/backend/TMBILL_Users.vue')
    },
    {
        path: '/tmbill-app-users',
        name: "tmbill-app-users",
        component: () => import('./components/backend/App-users.vue')
    },
    {
        path: '/tmbill-kitchen-app',
        name: 'tmbill-kitchen-app',
        component: () => import('./components/backend/Kitchen-App.vue')
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import('./components/ProfileComponent.vue')
    },
    {
        path: '/tmbill-product',
        path: '/tmbill-product',
        component: () => import('./components/backend/Pos-Activation.vue')
    },
    {
        path: '/app-activation',
        name: 'app-activation',
        component: () => import('./components/backend/App-Activation.vue')
    },
    {
        path: '/kitchen-app-activation',
        name: 'kitchen-app-activation',
        component: () => import('./components/backend/Kitchen-App-Activation.vue')
    },
    {
        path: '/promocode',
        name: 'promocode',
        component: () => import('./components/backend/Promocode.vue')
    },
    {
        path: '/promocode-history',
        name: 'promocode-history',
        component: () => import('./components/backend/Promocode-History.vue')
    },
    {
        path: '/plan',
        name: 'plan',
        component: () => import('./components/backend/Plan.vue')
    },
    {
        path: '/payment',
        name: 'payment',
        component: () => import('./components/backend/Payment.vue')
    },
    {
        path: '/tmchannel-registrations',
        name: 'tmchannel-registrations',
        component: () => import('./components/backend/TMChannelRegistrations.vue')
    },
    {
        path: '/tmpos-registrations',
        name: 'tmpos-registrations',
        component: () => import('./components/backend/TMPOS-Registration.vue')
    },
]
export default routes;