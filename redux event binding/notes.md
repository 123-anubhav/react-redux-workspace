**React-Redux Event Binding Project**.

---

### **`React-Redux Event Binding.md`**  

```markdown
# **React Event Binding with Redux** 🚀

## **📌 Overview**
This project demonstrates **event binding in React using Redux**. It manages the state of three activities (`Eating`, `Coding`, and `Sleeping`) using Redux actions and reducers. The UI updates dynamically based on the Redux store state.

---

## **🛠️ Technologies Used**
- **React.js** (for UI components)
- **Redux** (for state management)
- **Redux DevTools** (for debugging state changes)
- **Axios** (for potential API calls)
- **Bootstrap** (for responsive UI)
- **CSS Animations** (for smooth transitions)

---

## **📂 Project Structure**
```
📦 react-redux-event-binding
├── 📁 src
│   ├── 📁 assets
│   │   └── reduxlogo.jpg
│   ├── 📁 component
│   │   ├── EventBinding.js
│   │   ├── event.action.js
│   │   ├── eventReducer.js
│   │   ├── redux
│   │   │   ├── rootReducer.js
│   │   │   ├── store.js
│   ├── 📁 styles
│   │   ├── EventBinding.css
│   ├── App.js
│   ├── index.js
│   ├── style.css
├── 📄 package.json
└── 📄 README.md
```

---

## **📜 Code Breakdown**

### **1️⃣ Redux Setup**
#### **🟢 `rootReducer.js`**
Combines all reducers using `combineReducers`:
```javascript
import { combineReducers } from "redux";
import * as ComponentReducer from "../eventReducer";

let rootReducer = combineReducers({
    [ComponentReducer.eventFeatureKey]: ComponentReducer.eventReducer
});

export { rootReducer };
```

#### **🟢 `store.js`**
Configures the Redux store with `redux-logger` for debugging:
```javascript
import { applyMiddleware, compose, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import logger from 'redux-logger';

let store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export { store };
```

---

### **2️⃣ Redux Actions**
#### **🟠 `event.action.js`**
Defines action types and action creators for toggling activities:
```javascript
export const EATING = "EATING";
export const CODING = "CODING";
export const SLEEPING = "SLEEPING";

export let eating = () => ({ type: EATING, payload: 'eating occur' });
export let coding = () => ({ type: CODING, payload: 'coding occur' });
export let sleeping = () => ({ type: SLEEPING, payload: 'sleeping occur' });
```

---

### **3️⃣ Redux Reducer**
#### **🟡 `eventReducer.js`**
Handles state updates based on dispatched actions:
```javascript
import * as EventActions from '../component/event.action';

export const eventFeatureKey = "EventReducer";

let initialState = {
    info: { eating: '', coding: '', sleeping: '' }
};

let eventReducer = (state = initialState, action) => {
    let { type } = action;
    switch (type) {
        case EventActions.EATING:
            return { ...state, info: { ...state.info, eating: !state.info.eating } };
        case EventActions.CODING:
            return { ...state, info: { ...state.info, coding: !state.info.coding } };
        case EventActions.SLEEPING:
            return { ...state, info: { ...state.info, sleeping: !state.info.sleeping } };
        default:
            return state;
    }
};

export { eventReducer };
```

---

### **4️⃣ React Component**
#### **🟣 `EventBinding.js`**
Implements Redux state and event dispatching with a UI:
```javascript
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as EventActions from "../component/event.action";
import * as ComponentReducer from "./eventReducer";
import "./EventBinding.css";

let EventBinding = () => {
    let eventData = useSelector((state) => state[ComponentReducer.eventFeatureKey]);
    let { info } = eventData;
    let dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <h3 className="text-center text-primary">Event Binding with Redux</h3>
            <div className="row justify-content-center mt-4">
                {/* Checkboxes */}
                <div className="col-md-4">
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="eatingCheck"
                            onChange={() => dispatch(EventActions.eating())} checked={info.eating} />
                        <label className="form-check-label" htmlFor="eatingCheck">Eating</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="codingCheck"
                            onChange={() => dispatch(EventActions.coding())} checked={info.coding} />
                        <label className="form-check-label" htmlFor="codingCheck">Coding</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="sleepingCheck"
                            onChange={() => dispatch(EventActions.sleeping())} checked={info.sleeping} />
                        <label className="form-check-label" htmlFor="sleepingCheck">Sleeping</label>
                    </div>
                </div>
                {/* Animated Messages */}
                <div className="col-md-8">
                    {info.eating && <div className="animated-message fade-in">You are now Eating 🍴</div>}
                    {info.coding && <div className="animated-message fade-in">You are now Coding 💻</div>}
                    {info.sleeping && <div className="animated-message fade-in">You are now Sleeping 😴</div>}
                </div>
            </div>
        </div>
    );
};

export default EventBinding;
```

---

### **5️⃣ Styling**
#### **🎨 `EventBinding.css`**
```css
.animated-message {
    font-size: 1.5rem;
    color: #007bff;
    font-weight: bold;
    margin-bottom: 1rem;
    transition: all 0.5s ease-in-out;
    text-align: center;
}

.fade-in {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}
```

---

### **6️⃣ App Entry Point**
#### **`App.js`**
```javascript
import './App.css';
import EventBinding from './component/EventBinding';
import { Provider } from 'react-redux';
import { store } from './component/redux/store';
import logo from './assets/reduxlogo.jpg';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-success py-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h4 text-white">React Event Binding with Redux</span>
          <div className="ms-auto text-white h5">
            <img src={logo} alt="Redux Logo" style={{ height: '25px', width: '40px' }} />
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
```

---

## **🎯 Conclusion**
This project effectively demonstrates **event binding with Redux** while maintaining a clean UI with **animations**. Redux DevTools help in tracking state changes for debugging.

🔥 **Happy Coding!** 🚀
```
---
