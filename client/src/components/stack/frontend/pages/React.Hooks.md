### Hooks

Hooks are convenient functions that allow us to better manage changes to components and state. The only hooks that we worry about in this project are useState, useEffect, and useSelector.

#### The useState Hook

We breifly showed the useState hook when we talked about Components and state, but here it is again:

```javascript
const [bgColor, setBgColor] = useState('red');
```
useState looks fairly simply and self-explanatory, but under the hood there are a lot of things going on. Before hook functions were a thing, we had to use many separate moving parts to utilize state. Now, all we need is the *variable*, *set method*, and *initial state*.
- `bgColor` is the variable itself, and what we use to reference it.
- `setbgColor(<value>)` is the set method, which we use to update the state.
- 'red' is the initial state, which is the default value when state is first initialized.

#### The useEffect Hook

Back when React was younger, we had to worry about different functions that managed the "React Component Lifecycle". This is a whole complicated process of the component and its state, its creation, updates and destruction. You can learn more about it [here](https://reactjs.org/docs/react-component.html). Essentially, the Lifecycle goes like this:
- Component is going to be mounted to the DOM
- Component did just mount to the DOM
- Component is going to update
- Component did just update
- Component will unmount from the DOM

In old React, we would use each of these functions to perform tasks at different times during the lifecycle. Now, we can perform simpler, more efficient tasks with the useEffect hook. The useEffect hook looks like this:

```javascript
useEffect(() => {
    //effect
    return () => {
        //cleanup
    }
}, [input])
```

Let's break it down:
- `input` : This is the part of useEffect that makes it a substitute for the lifecycle methods. Depending on what you put in this array, it behaves like those methods.
    - If you make it an empty array, it only runs once, when the Component is mounted.
    - If you add state and prop variables to the array, it runs every time one of those variables, not the whole component, updates. You can also have multiple useEffect hooks like this to run different code when different variables update.
    - If you remove the array entirely, it run both when the Component mounts and every time it updates.
-  `effect` : this can be any code, but keep in mind that it can only use what variables has been created at the time of running. Since the hook runs asynchronously, some variables might not be initialized yet (unless its the only variable in the input field) and so you will have to check whether they exist before you run any code with them.
- `cleanup` : the return statement is usually unecessary, unless you have "subscriptions" (like Websockets, etc) that have to be cleaned up before the Component unmounts from the DOM. Usually, you don't have to worry about this unless you get a warning or error to cancel subscriptions.

Here's a simple example from the Markdown Component, which renders any markdown files into React:

```javascript
const [markdown, setMarkdown] = useState("");
const stackDetails = useSelector(state => state.stackDetails);
const {page} = stackDetails;

useEffect(() => {
    page && fetch(page).then((res) => res.text()).then((text) => setMarkdown(text));
}, [page])
```

Here, the useEffect hook:
- takes in `page` from our Redux store *(we will talk more about that in [the Redux section](/stack/frontend-redux), just know that it is a global state variable that is updated by the menus in the Stack Component, which contains the file path for the markdown file)*, and runs the code every time `page` is updated.
- the `effect` that it runs at this time is to take the filepath for the markdown file stored in `path`, get the file with `fetch`, convert it to a string, and then set the state variable `markdown` as that string.
- When `markdown` updates, since it is a state variable, the whole Markdown Component updates, and shows the new markdown file as a React Component.

#### The useSelector Hook

You may have noticed that there is another hook in the example above, useSelector. This hook grabs the global state variable that we want from our Redux store, which we will go over in [the Redux section](/stack/frontend-redux).