export const render = < T extends HTMLElement> (component: T) => {
    const element: HTMLElement | any = document.querySelector('#root') as HTMLElement;
    console.log(element);
    element.innerHTML = component;
}