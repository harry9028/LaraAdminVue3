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
    {
        path: '/activated-outlets',
        name: 'activated-outlets',
        component: () => import('./components/backend/OutletsComponent.vue')
    },
    {
        path: '/atlantic-pos-tmchannel-mapping',
        name: 'atlantic-pos-tmchannel-mapping',
        component: () => import('./components/backend/Atlantic-Pos-Tmchannel-mapping.vue')
    },
    {
        path: '/tmpos-enquiry',
        name: 'tmpos-enquiry',
        component: () => import('./components/backend/TMPOS-Enquiry.vue')
    },
    {
        path: '/live-support',
        name: 'live-support',
        component: () => import('./components/backend/LiveSupport.vue')
    },
    {
        path: '/tmpos-notifications',
        name: 'tmpos-notifications',
        component: () => import('./components/backend/NotificationComponent.vue')
    },
    {
        path: '/send-sms',
        name: 'send-sms',
        component: () => import('./components/backend/SendSMS.vue')
    },
    {
        path: '/pos-link',
        name: 'pos-link',
        component: () => import('./components/backend/PosLink.vue')
    },
    {
        path: '/pos-demo-link',
        name: 'pos-demo-link',
        component: () => import('./components/backend/PosDemoLink.vue')
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import('./components/backend/Feedback.vue')
    },
    {
        path: '/online-backup',
        name: 'online-backup',
        component: () => import('./components/backend/OnlineBackups.vue')
    },
    {
        path: '/campaign-enquiry',
        name: 'campaign-enquiry',
        component: () => import('./components/backend/Campaign-Enquiry.vue')
    },
    {
        path: '/quick-enquiry',
        name: 'quick-enquiry',
        component: () => import('./components/backend/Quick-Enquiry.vue')
    },
    {
        path: '/point-of-contact',
        component: () => import('./components/backend/PointOfContact.vue')
    },
    { path: '/users', name: 'users', component: () => import('./components/UserComponent.vue') },
]
export default routes;