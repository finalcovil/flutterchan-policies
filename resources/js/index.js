const store = new Vuex.Store({
    state: {
        loading: false,
    },
    mutations: {
        startLoading(state) {
            state.loading = true;
        },
        finishLoading(state) {
            state.loading = false;
        },
        navigateTo(state, path) {
            router.push({ path: path }).catch(err => {
                //Não mostrar o erro de Rota Duplicada
                // console.log("Caiu catch", err)
            });
        }
    }
})

const router = new VueRouter({
    routes: [
        { path: '/', name: 'home', component: httpVueLoader('resources/js/components/pages/politics.vue') },
        { path: '/terms', name: 'terms', component: httpVueLoader('resources/js/components/pages/terms.vue') },
        { path: '/politics', name: 'politics', component: httpVueLoader('resources/js/components/pages/politics.vue') },
        { path: "*", component: httpVueLoader('resources/js/components/pages/404.vue') },
    ]
})

router.beforeEach((to, from, next) => {
    store.commit('startLoading');
    next();
})

router.afterEach((to, from) => {
    store.commit('finishLoading');
})

const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    vuetify: new Vuetify(),
    components: {
        'app-bar': httpVueLoader('resources/js/components/app-bar.vue'),
        'app-footer': httpVueLoader('resources/js/components/app-footer.vue'),
    },
});