### An Overview of Redux

Redux is a libray for JS apps, commonly used in conjunction with React, to manage global state. What this means is that instead of having state attached to a single component and passing it up and down to other components through props, we can wrap the whole application in a container that holds all of the state, which can be accessed from any component in the app.

Currently, the only variables stored in Redux are the section, subsection, and page that is displayed on the Stack Breakdown page you are looking at right now. If we wanted to, we could access the current page, section, etc. from any component on the app.

#### Store

The store is the big storage for global state. We wrap the entire application in the Store Provider: this extends the scope of the store to be accessed from anywhere in the app.

#### Reducers

Reducers are the individual groups of state. Think of reducers as the controllers for different types of state data in the app. For example, the reducer for the stack pages, StackReducer, controls the storage and updates for all state related to the Stack Breakdown.

#### Actions

Actions are the functions that update the state in Redux. They are called by the individual components. The actions perform some function, then update the state by telling the reducer what kind of update is happening and what the new data is.