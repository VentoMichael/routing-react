import React from 'react'
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact";
import Users from "./components/Users";
import User from "./components/User";

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <nav>
                    <h2>
                        Navigation principale
                    </h2>
                    <ul>
                        <li>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/users'>
                                Users
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/users">
                        <Users />
                    </Route>

                    <Route path="/" exact>
                        <h1>
                            Home
                        </h1>
                    </Route>

                    <Route path="/users/:name" component={User} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
