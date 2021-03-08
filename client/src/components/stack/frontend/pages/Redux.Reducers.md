### Reducers

Reducers are the individual groups of state. Think of reducers as the controllers for different types of state data in the app. For example, the reducer for the stack pages, StackReducer, controls the storage and updates for all state related to the Stack Breakdown.

#### The Stack Reducer

Here is what the reducer for the stack page looks like:

```javascript
const stackReducer = (state = {}, action) => {
    switch(action.type){
        case 'SECTION_SET':
            return {...state, section: action.payload};
        case 'SUBSECTION_SET':
            return {...state, subSection: action.payload};
        case 'PAGE_SET':
            return {...state, page: action.payload};
        default:
            return state;
    }
}

export {stackReducer};
```

- The stackReducer takes in the existing state, as well as an action, which contains the data we need to update the state with. The action is composed of a `type` and `payload`. The type is the name of the action we are performing on the state, and the payload contains any data that we are passing in.
- It then runs a switch on the action type, and performs different functions on the state depending on the action.
- If we are looking to set the current section, we return the existing state, with the section modified to be whatever was in the payload.
- This logic is applied to the subsection and specific page as well.
- The default case is to just return the current state: this ensures that we are only updating Redux when we call an action.

#### Implementing the Reducer in the Store

We have to implement the reducer in the store, in order to access and store the state. This is what the implementation looks like:

```javascript
const reducer = combineReducers({
    stackDetails: stackReducer
});
```

If we had multiple reducers (for multiple pages or functions), then those reducers would also go in this object that we pass into `combineReducers()`. We then set the initial state values if necessary, and pass the reducer with the initial state into the store. See how this is done on the Redux Store page.