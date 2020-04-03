import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './Pages/Logon'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;