import React from "react";
import './App.css';
import './style.css';
import Pizzahut from '../src/components/Pizzahut';
import { Provider } from "react-redux";
import store  from "./components/redux/store";

function App() {
  return (
    <React.Fragment className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand ms-auto text-white text-danger">
            React Redux Example Basic
          </span>
        </div>
      </nav>

      <Provider store={store}>
        <Pizzahut />
      </Provider>
    </React.Fragment>
  );
}

export default App;
