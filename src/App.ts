import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';

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
         (new Home()).shadow();
        break;
    }
}

function handleLocation():void {
    const path: string = domWindow.location.pathname;
    console.log(path);

    const route: string | number = routes[path.slice(1)] || routes[404];
    console.log(route);
    getPage(route);
}


const router = (event: Event) => {
    const handler: any = event ?? domWindow.event;
    handler.preventDefault();
    domWindow.history.pushState({}, "", handler.target.href);
    handleLocation();
};

const dom: HTMLElement = document.querySelector('body')!;
dom.innerHTML = ` <h1 class="btn btn-primary">olá</h1>
        <a onClick = "route()" href="home"   >Click Aqui</a>`;


domWindow.route = router;
handleLocation();