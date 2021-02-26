### An Overview of React

React is the framework that this site uses for its frontend. It was made using `create-react-app`, a neat little package that creates a very basic template of a React app. 

React allows to not only write everything in Javascript, but also manages the website as a single-page application... meaning the whole website is technically only one page. Changes between pages and changes to individual pages are loaded much faster and variables can be neatly made to apply across the whole site instead of being applied to only one page.

#### Components and State

React is built with components instead of pages. These components are functions that render JSX, which is Javascript XML that allows us to easily render HTML with Javascript. In order to be dynamic, components use state, which is a set of variables that force the page to be rerendered every time one of them is changed.

#### React Router

React Router is what handles the component changes within React, mimicking the behavior of switching between pages in a traditional website. Using React Router works with sitewide state management, allowing us to preserve state across the entire site.

#### Hooks

Hooks are convenient functions that allow us to better manage changes to components and state.