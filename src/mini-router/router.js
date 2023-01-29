import RouterLink from './RouterLink';
import RouterView from './RouterView';
import { ref } from 'vue';

export function createRouter(options) {
    const router = {
        options,
        current: ref(window.location.hash.slice(1) || '/'),
        install(app) {
            // const _router = this;
            app.component('RouterLink', RouterLink);
            app.component('RouterView', RouterView);
            app.config.globalProperties.$router = router;
        }
    };
    window.addEventListener('hashchange', () => {
        router.current.value = window.location.hash.slice(1);
    })
    return router;
}