import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authentication from './components/authentication/Authentication'
import Header from './components/header/Header'
import Main from './components/main/Main';
import Footer from './components/footer/Footer'
import Forget from './components/authentication/forget-password/Forget'
import Reset from './components/authentication/reset-pass/Reset'
export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component = {Authentication} />
                    <Route exact path="/login/forget" component={Forget} />
                    <Route exact path="/login/reset" component={Reset} />
                    <Route component = {() => 
                        <>
                            <Header/>
                            <Main/>
                            <Footer/>
                        </>
                    } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
