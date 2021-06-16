import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import MenuProvider from 'react-flexible-sliding-menu';



import Nav from './components/Navbar'
import Menu from './components/HeaderModal'
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Wineries from "./pages/Wineries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin"
import Bookings from "./components/Bookings"
import OptionContact from "./components/OptionContact"

const App = () => {
    return (
        <Router>
            <div>
            
            <MenuProvider MenuComponent={Menu} width={"250px"}>
                <Nav />
            </MenuProvider>
            </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/wineries">
                        <Wineries />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/admin">
                        <Admin />
                    </Route>
                    <Route exact path="/bookings">
                        <Bookings />
                    </Route>
                    <Route exact path="/OptionContact">
                        <OptionContact />
                    </Route>
                </Switch>
                <Footer />
        </Router>
    );
};

export default App;
