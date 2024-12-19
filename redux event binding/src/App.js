import './App.css';
import './style.css';
import EventBinding from './component/EventBinding';
import { Provider } from 'react-redux';
import { store } from './component/redux/store';
import logo from './assets/reduxlogo.jpg';

function App() {
  
  let internalStyles={
    height:'25px',
    width:'40px'
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-success py-3">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h4 text-white"> React Event Binding with Redux </span>
    <div className="ms-auto text-white h5">
      {/* Right-aligned content */}
      <span>
        <img src={logo} alt="loading..." style={internalStyles}/>
      </span>
    </div>
  </div>
</nav>

      {/* Main Content */}
      <div className="container mt-4">
        <Provider store={store}>
          <EventBinding />
        </Provider>
      </div>

      {/* Footer */}
      <footer className="text-center text-light bg-dark py-3 mt-4">
        <small>© 2024 React-Redux Demo | Made with ❤️ by Anubhav</small>
      </footer>
    </div>
  );
}

export default App;
