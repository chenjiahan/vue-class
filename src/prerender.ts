// Preredner Decorator
export const Prerender = (component: any): any => {
    return component.extend({
        mounted: function() {
            document.dispatchEvent(new Event('mounted'));
        }
    });
}
