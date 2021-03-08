### Actions

Actions are the functions that update the state in Redux. They are called by the individual components. The actions perform some function, then update the state by telling the reducer what kind of update is happening and what the new data is.

#### Structure of the Actions

Here is what our actions file for the Stack state looks like:

```javascript
const setSection = (section) => (dispatch) => {
    dispatch({type: 'SECTION_SET', payload: section});
}

const setSubSection = (subSection) => (dispatch) => {
    dispatch({type: 'SUBSECTION_SET', payload: subSection});
}

const setPage = (page) => (dispatch) => {
    dispatch({type: 'PAGE_SET', payload: page});
}

export {setSection, setSubSection, setPage};
```

Overall, the process here is very simple: it would be a lot more complicated if, for instance, we were making API calls to our backend for data instead of just setting string variables. Here's what is going on in the `setSection` action:
- The action function takes in the `section` value that we want to use to update the section in state.
- The function then separately takes in a `dispatch`. `dispatch()` is a separate function that we use to execute the action in a Component. We will look at that process in a minute.
- We then use the `dispatch()` function to send the `action` object to the reducer. The action is composed of a `type` and a `payload`: the type is the name of the action we are performing on the state, and the payload contains any data that we are passing in.
- From this point, the reducer takes over. It accepts the `action` object and sets the section in state (because we specified the `'SECTION_SET'` action) with the `payload` data that we pass in, which is the value of `section`.


#### Using the Action in a Component

To demostrate how a Component can call an Action, lets look at how it is done in the `FrontendSideMenu` component whenever you click on a menu item.

First, we import the action function and dispatch function, like so:

```javascript
import {setPage} from '../../../actions/stackActions';
import {useDispatch} from 'react-redux';
```

Then, we initialize the dispatch function for use:

```javascript
const dispatch = useDispatch();
```

Next, we change the page by dispatching the `setPage` function on every click to a menu item element, like so:

```javascript
<MenuItem onClick={() => dispatch(setPage(ReduxActions))}>Actions</MenuItem>
```

`ReduxActions` in this case is just a file path to the markdown file that is the page you are currently looking at. The `Markdown` component takes this file path from the current Redux state and displays the markdown file in this window.