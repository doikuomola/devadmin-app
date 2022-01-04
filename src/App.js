// @ts-nocheck
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Homepage from "./pages/Homepage/Homepage";
import NewUser from "./pages/NewUser/NewUser";
import User from "./pages/User/User";
import Userlist from "./pages/UserList/Userlist";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
    return (
        <Router className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/users">
                        <Userlist />
                    </Route>
                    <Route path="/user/:userId">
                        <User />
                    </Route>
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                    <Route path="/product/:productId">
                        <Product />
                    </Route>
                    <Route path="/newProduct">
                        <NewProduct />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
