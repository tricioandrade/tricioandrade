import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";

const domWindow: any = window;

new Home();
function getPage(path: string | number): void {
    switch (path) {
        case '/skills': break;
        case '/contact': break;
        case '/about': break;
        case '/home': Home.open(); break;
        case '/': Home.open(); break;
    default:
        console.log('oops');
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

handleLocation();