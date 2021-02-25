### Middleware

Middleware is what brings the backend from barebones to professional. The API, database, and any other high-level features of the backend are implemented as middleware. Middleware sits in the "middle" between the backend and frontend and manages requests the way you want them to be.

You saw the beginnings of the server in the previous two pages. However, in order to use the API, JSON formatting for incoming data, CORS request handling, and environmental variables, we will need to add middleware.

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const newsRoutes = require('./routes/newsRoutes');
const bugRoutes = require('./routes/bugRoutes');

//init app
const app = express();

//use middleware <----- lets focus on this section
dotenv.config();
app.use(express.json());
app.use(cors());

//init api routes
app.use('/api/news', newsRoutes);
app.use('/api/bugs', bugRoutes);

//init server
const port = process.env.PORT || 5000;
server = http.createServer(app);
server.listen(port, () => console.log(`Server started on port ${port}`));
```

As you can see above, we are doing some extra things above. Lets break down each of the three lines in the middle block:

`dotenv.config();`
- This allows us to use environmental variables. These variables are hidden from view by users of the site, but are stored separately in the server folder. These are generally used for secrets such as API keys and configuration data like admin passwords and the database connection URI.

`app.use(express.json());`
- This line lets us receive JSON data by default in our API. All incoming data will be parsed as JavaScript Object Notation, which is just a standard data format that looks something like this:
```javascript
{
    name: "Jake",
    email: "jake123@fakeemail.com",
    age: 24,
    likes: ['coding', 'movies', 'books', 'coffee', 'video games']
}
```

`app.use(cors());`
- This configures our server to handle CORS requests. Basically, CORS is a really annoying security protocol that poses some problems for our client-server communcation if you don't account for it properly. It prevents Cross-Origin requests, and since our server and client run on different ports, we need to add cors so that requests between server and client don't get flagged.

The rest of the middleware implements our API routes . To learn more about the API, check out [the API documentation here](/stack/backend-api).