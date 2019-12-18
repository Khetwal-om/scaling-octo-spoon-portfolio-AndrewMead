import React from 'react';
import '../styles/base/sample.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contacts from '../components/Contacts';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import PortfolioItemPage from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';


function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/portfolio/:id" component={PortfolioItemPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>

        </BrowserRouter>
    );
}
export default AppRouter;


