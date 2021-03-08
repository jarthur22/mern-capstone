### Redux Store

The store is the big storage for global state. We wrap the entire application in the Store Provider: this extends the scope of the store to be accessed from anywhere in the app.

#### Structure of the Store

Here is what the store looks like for this app:

```javascript
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { stackReducer } from './reducers/stackReducers';
import ServerOverview from './components/stack/backend/pages/Server.Overview.md';

const reducer = combineReducers({
    stackDetails: stackReducer
});

const initialState = {
    stackDetails: {
        section: 'backend',
        subSection: 'server',
        page: `${ServerOverview}`
    }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
    )    
);

export default store;
```

Lets breakdown the different parts:

```javascript
import {combineReducers} from 'redux';
import { stackReducer } from './reducers/stackReducers';
import ServerOverview from './components/stack/backend/pages/Server.Overview.md';

const reducer = combineReducers({
    stackDetails: stackReducer
});

const initialState = {
    stackDetails: {
        section: 'backend',
        subSection: 'server',
        page: `${ServerOverview}`
    }
};
```

Here, we are initializing the different parts of the store:
- The reducers are initialized with `combineReducers()`. If we had multiple reducers, they would all go in this function
- We set the initial state of the reducer. When you visit the Stack Breakdown page, the default setup is the Backend section, on the Server subsection, and the default page being displayed is the Server Overview page. 


```javascript
import thunk from 'redux-thunk';

const middleware = [thunk];
```

Thunk is basically just a nice little piece of middleware that lets us use Redux asynchronously.


```javascript
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
    )    
);
```

Here, the store itself is created using the `createStore()` function, and it takes in the reducers, initial state, and middleware. We pass the thunk middleware into the `composeWithDevTools()` function, and this lets us track changes in the browser while we write and test the application. Which I'm doing as I write this!


#### Applying the Store to the Application

In a normal React application, the `index.js` file, which serves as the root component for the application, looks something like this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

The `App.js` component is wrapped in a <React.StrictMode> component, or something similar, and then rendered into the DOM. However, when we use Redux, we have to use a <Provider> component, which takes in the `store` prop, to wrap the <App/> component. Like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

And that is how we attach the store that we created to the application. Since the Provider and store encompass the scope of the entire application, we can access and manipulate the store from any component in the application by way of the `useSelector()` and `dispatch()`/Action functions, respectively (Read on for explanations of those).

#### Accessing the state variables in Store from a Component

The process for this is very simple. All we need to do is us the `useSelector()` hook, which grabs the state variables that we need. We just do this in the Component:
- import the `useSelector` function:
```javascript
import {useSelector} from 'react-redux';
```
- use it to pull the state that we need:
```javascript
const stackDetails = useSelector(state => state.stackDetails);
```
- optionally, we can destructure the state object `stackDetails` so that we can just reference the `subSection`.
```javascript
const {subSection} = stackDetails;
```

And now we can just reference it like any other variable. HOWEVER, in order to change it, we need to dispatch an Action: learn more about this in the Redux Action section.