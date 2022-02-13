import 'es6-shim';
import 'url-search-params-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Global } from './models/Global';
import './assets/app.less';
import { LazyRouteLoader } from './components/LazyRouteLoader';
import { Tab } from "./components/Tab/Tab";
import Loading from './components/Loading/Loading';

const App = () => (
    <Router history={Global.history}>
        <LazyRouteLoader routes={[
            {   
                path: '/home', load: () => import('./views/HomeView/HomeView') 
            },
            { 
                path: '/discover', load: () => import('./views/DiscoverView/DiscoverView')
            },
            {   
                path: '/other', load: () => import('./views/OtherView/OtherView') 
            },
            {   
                path: '/community', load: () => import('./views/CommunityView/CommunityView') 
            },
            {   
                path: '/mine', load: () => import('./views/MineView/MineView') 
            },
            {   
                path: '*', load: () => import('./views/HomeView/HomeView') 
            },
        ]} />
        <Tab />
    </Router>
);


ReactDOM.render(<App />,document.getElementById('main'));