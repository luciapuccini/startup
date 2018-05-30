//NOTE: not used yet
//Dependencies
import React from 'react';
import { Route , Switch} from 'react-router-dom'

//Components
import App from './components/App';
import AddMovie from './components/AddMovie';
import Page404 from './components/Page404';

const AppRoutes = () =>
<App>
    <Switch>
        <Route extact path="/addMovie" component = {AddMovie}/>
        <Route extact path="/" component = {App}/>
        <Route  component = {Page404}/>

    </Switch>
</App>;

export default AppRoutes;
