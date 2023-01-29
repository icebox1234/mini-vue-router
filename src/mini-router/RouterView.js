import { defineComponent, h, watch, getCurrentInstance, unref } from 'vue';

export default defineComponent({
    setup(props, ctx) {
        // console.log(getCurrentInstance());
        return () => {
            const instance = getCurrentInstance();
            const router = instance.proxy.$router;
            const { current, options } = router;
            const { routes = [] } = options;
            const curPath = unref(current);
            const found = routes.find(item => {
                return item.path === curPath;
            });
            if (found) {
                return h(found.component);
            }
            return h('');
        };
    }
});