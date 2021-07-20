import {BrowserRouter, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {Authentication} from './pages/Authentication';

export function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login"exact component={Login} />
            <Route path="/authentication" component={Authentication} />
        </BrowserRouter>
    );
}