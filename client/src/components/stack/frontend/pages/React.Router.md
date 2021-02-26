### React Router

React Router is what handles the component changes within React, mimicking the behavior of switching between pages in a traditional website. Using React Router works with sitewide state management, allowing us to preserve state across the entire site.

#### Why Even Use It?

Why do we even need the router? Can't we just use `<a>` tags and link directly to component pages? Well, no. See, because a React app is technically a single page, the root is the only url that the browser will recognize. When you input a url, the request goers like this: Browser --> DNS --> App Server --> Browser (with some smaller unimportant steps in between). If your url is just https://mern-capstone.herokuapp.com, then the server will be able to serve it up, because the only true page on the app is `index.html`. But if your url is https://mern-capstone.herokuapp.com/stack (and a router isn't set up), you will get an error, because that page exists as a component in the app, not a page on the server.

What React Router does is ensure that your extra path in your url is processed *within the app,* not on the server. When the Router is implemented, the server will forward all requests (that are not an API call) to the client, where the Router will pick up the url path and serve up the Component that goes with it. Let's look at the `App.js` file to visualize this:

```javascript
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Stack from './components/stack/Stack';
import About from './components/about/About';
import News from './components/news/News';
import BugReports from './components/bugs/BugReports';
import History from './components/history/History';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/stack/:page?" component={Stack}/>
      <Route path="/about" component={About}/>
      <Route path="/news" component={News}/>
      <Route path="/report" component={BugReports}/>
      <Route path="/history" component={History}/>
      <Footer/>
    </Router>
  )
};

export default App;
```

Here's what's going on in this file:
- The Router is imported, along with the main Components for every "page" on the site, and the Header and Footer Components.
- the App is initialized as a functional Component.
- The App is wrapped in a Router Component, ensuring that we are giving everything inside the Router treatment.
- The Header and Footer sit inside the App as normal Components. These will appear on every page.
- All other "page" Components are implemented as "Routes": each Route has a specific path assigned, and these are the Components that will be served up when you enter the specific url path.

And a few more things to note:
- The Route for the Home Component has the `exact` option. This basically sets this Route as the default one if you visit the site and don't specify a path. You know how you can visit a website and it automatically takes you to the index.html page? It's that.
- Notice how the Stack Route has an extra bit to the path: `/:page?`. This does two things:
    - The `:page` is a parameter that can be tacked onto the path, which we can use in the Stack Component to serve up additional custom data. In this case, the page parameter allows us to show more specific sections of the brerakdown depending on the parameter. E.g., `/stack/backend-api` will automatically redirect you to the the API subsection of the Backend section. Go to https://mern-capstone.herokuapp.com/stack/backend-api and try it!
    - The `?` after the parameter denotes that it is optional.