export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: 'daybook' */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'No-entry',
            component: () => import(/* webpackChunkName: 'daybook-no-entry' */ '@/modules/daybook/views/NoEntry.vue'),
        },
        {
            path: ':id',
            name: 'Entry',
            component: () => import(/* webpackChunkName: 'daybook-entry' */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]
}