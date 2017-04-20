// Preredner Decorator
const createMounted = (mounted: Function[] | Function) => () => {
    if (mounted) {
        Array.isArray(mounted) ? mounted.forEach(fn => { fn() }) : mounted();
    }
    document.dispatchEvent(new Event('mounted'));
};

export const Prerender = (component: any): any => {
    if (component.options) {
        const { mounted } = component.options;
        component.options.mounted = [createMounted(mounted)];
    }
    return component;
}
