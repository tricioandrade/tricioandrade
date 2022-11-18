import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import home from "./components/Home";

const domWindow: any = window;

const selector =  document.querySelector;
const createElement = document.createElement;

const render = < T extends HTMLElement> (component: T) => {
    const element: HTMLElement | any = selector('#root') as HTMLElement;
    element.innerHTML = component;
}

function getPage(path: string | number): void {
    switch (path) {
        case '/skills':
            break;
        case '/contact':
            break;
        case '/about':
            break;
        case '/home': render(home(createElement)); break;
        case '/':
                render(home(createElement));
            break;

    default:
        console.timeLog();
        break;
    }
}

function handleLocation():void {
    const path: string = domWindow.location.pathname;
    getPage(path);
}


const router = (event: Event) => {
    const handler: any = event ?? domWindow.event;
    handler.preventDefault();
    domWindow.history.pushState({}, "", handler.target.href);
    handleLocation();
};

domWindow.route = router;
domWindow.selector = selector;

handleLocation();