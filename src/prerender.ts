// Preredner Decorator
export const mountedDispatcher = () => {
    document.dispatchEvent(new Event('mounted'));
};

export const Prerender = (component: any): any => {
    const { mounted } = component.options;
    component.options.mounted = mounted
        ? Array.isArray(mounted)
            ? [...mounted, mountedDispatcher]
            : [mounted, mountedDispatcher]
        : mountedDispatcher;
    return component;
}
