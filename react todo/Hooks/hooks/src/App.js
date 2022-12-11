import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Post from "./Components/Post";
import Todo from "./Components/Todo";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/post" component={Post} />
          <Route path="/todo" component={Todo} />
          <Route path="/product" component={Product} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
