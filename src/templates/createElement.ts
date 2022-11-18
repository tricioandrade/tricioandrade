export function createElement <T extends keyof HTMLElementTagNameMap >(tagName: T, content: HTMLElement | any): HTMLElement {
    const element = document.createElement(tagName) as HTMLElement;
    return element.innerHTML = content;
}