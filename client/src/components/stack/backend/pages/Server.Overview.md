### Overview of the Server

The server is the foundation of the web application. Every single website or web application is built off of a server program. The server program stores the entirety of the website, which it then serves to clients when they connect to the IP address of the website (hidden underneath the url). The server is only accessible by the client, so any data on it is secure, unless it exposed by the [API](/stack/backend-api).

Server programs can be entremely difficult to configure. However, Javascript makes the whole process easy with Node JS and Express JS.

#### Node JS

Node JS is the Javascript runtime environment that runs the server program. It listens at a specific port, handles all requests to the server, serves the frontend to the client, and implements middleware. Every other aspect of the backend is built off of Node JS.

#### Express JS

Express JS is the Node JS library that makes writing and managing the backend so, SO much easier. With Express, you can set up an entire functioning backend with 4 lines of code.

#### Middleware

Middleware is what brings the backend from barebones to professional. The API, database, and any other high-level features of the backend are implemented as middleware. Middleware sits in the "middle" between the backend and frontend and manages requests the way you want them to be.