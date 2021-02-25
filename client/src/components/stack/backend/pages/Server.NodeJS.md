### Node JS

Node JS is the Javascript runtime environment that runs the server program. It listens at a specific port, handles all requests to the server, serves the frontend to the client, and implements middleware. Every other aspect of the backend is built off of Node JS.

#### So what's in a server?

```javascript
const express = require('express');
const app = express();

//middleware goes here

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
```

This is basically all you need for the most basic server file. It initiates express, starts the app, and listens at a port. But it doesn't actually do anything cool yet.

The role of Node JS is to be the foundation of the web application. Everything else sits on top of it in order to do all the usual functions of a web server.

For a more detailed explanation of what Node JS actually is, check out the [History page](/history).