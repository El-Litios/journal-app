export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: 'auth layout' */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'Login',
            component: () => import(/* webpackChunkName: 'auth login' */ '@/modules/auth/views/Login.vue'),
        },
        {
            path: 'register',
            name: 'Register',
            component: () => import(/* webpackChunkName: 'auth register' */ '@/modules/auth/views/Register.vue'),
        }
    ]
}