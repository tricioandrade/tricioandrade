import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Routes {
    [index: string]: string | number;
}

const routes: Routes =  {
    contact: 'contact',
    skills: 'skills',
    about: 'about',
    home: 'home',
    404: '404'
};

const domWindow: any = window;

const router = (event: Event) => {
    const handler: any = event ?? domWindow.event;
    handler.preventDefault();
    domWindow.history.pushState({}, "", handler.target.href);
    handleLocation();
};


function handleLocation():void {
    const path = domWindow.location.pathname;
    const route: string | number = routes[path] || routes[404];
    getPage(route);
}

function getPage(path: string | number): void {
    switch (path) {
    case 'skills':
        break;
    case 'contact':
        break;
    case 'about':
        break;
    case 'home':
        break;

    case '404':
        break;
    }
}

domWindow.route = router;
handleLocation();