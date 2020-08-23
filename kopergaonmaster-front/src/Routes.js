import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from './components/core/Home';
import Signup from './components/user/Signup';
import Signin from './components/user/Signin';
import Product from './components/product/Product';
import AddProduct from './components/product/AddProduct';

const Routes=()=>{
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/product" exact component={Product}></Route>
            <Route path="/addproduct" exact component={AddProduct}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;