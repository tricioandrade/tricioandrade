function home(createElement: (tagName: keyof HTMLElementTagNameMap) => HTMLElement ): HTMLElement {
    const element: HTMLElement | any = createElement('div');
    element.innerHTML = `
        <h1>Hello</h1>
    ` ;

    return element;
}

export default home;
