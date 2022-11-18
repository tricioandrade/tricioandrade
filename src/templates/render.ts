export const render = < T extends HTMLElement> (component: T) => {
    const root = document.querySelector('#root')! as HTMLElement;
    root.innerHTML = '';
    console.log(component);
    root.appendChild(component);
}