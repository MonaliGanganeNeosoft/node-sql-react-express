import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import Homes from "./RoutingTask/Homes";
import Add from "./RoutingTask/Add";
import Edit from "./RoutingTask/Edit";
import NotFound from "./RoutingTask/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Shreshta tech
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/add">Add</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/edit">Update</Link>
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Homes}></Route>
          <Route path="/add" exact component={Add}></Route>
          <Route path="/edit" exact component={Edit}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Link,
//   Route,
//   Switch,
// } from "react-router-dom";
// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import Notfound from "./components/Notfound";
// import About from "./components/About";
// import { Gallery } from "./components/Gallery";
// import Contact from "./components/Contact";
// import Productdetails from "./components/Productdetails";
// import { Add } from "./RoutingTask/Add";
// import { Edit } from "./RoutingTask/Edit";
// import NotFound from "./RoutingTask/NotFound";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Nav />
//         <section className="container">
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/gallary" component={Gallery} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/productsdetails/:id" component={Productdetails} />
//             <Route component={Notfound} />
//           </Switch>
//         </section>
//       </Router>
//     </div>
//   );
// }

// export default App;
