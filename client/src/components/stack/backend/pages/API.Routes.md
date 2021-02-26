### Routes in the API

A route is the group of functions in the backend that acts as the point of entry for the API. It receives the request from the API call, then utilizes the connection to the database and serves up the data as a response.

#### Routes

API routes to the database are expressed as functions. When the API call, a URL, contains the path that matches the function, the server references the "router" that contains those functions. These "routes" are set up on the server as middleware, which you can learn more about [here](/stack/backend-server).

Here are the routes in the `server.js` file:

```javascript
const express = require('express');
const newsRoutes = require('./routes/newsRoutes');
const bugRoutes = require('./routes/bugRoutes');

//use middleware
const app = express();
app.use(express.json());

//init api routes
app.use('/api/news', newsRoutes); <------------API routes
app.use('/api/bugs', bugRoutes);

//all other api requests
app.use('/api/*', (req, res, next) => {
    res.status(404);
    res.json({
        message: `Not Found - ${req.originalUrl}`
    });
});

//init server
const port = process.env.PORT || 5000;
server = http.createServer(app);
server.listen(port, () => console.log(`Server started on port ${port}`));
```

So, for example, when the client makes a request to `https://mern-capstone.herokuapp.com:5000/api/bugs`, the server will redirect this request to the `bugRoutes` module, which contains all of the functions for the bug reports route. All API request that do not match the given routes are sent a 404 "Not Found" status and error message.

Here is the file for the bug reports routes:

```javascript
const express = require('express');
const Bugs = require('../models/BugModel');

const router = express.Router();

router.get('/', (req, res) => {
    Bugs.find().then(results => {
        if(results.length > 0){
            var response = {
                totalReports: results.length
            }
            response.reports = results.length > 10 ? results.slice(0, 10): results;
            res.json(response);
        }else{
            res.json({
                reports: []
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Internal server error.'
        });
    })
});

router.post('/', (req, res) => {
    const {fname, lname, page, bugName, description} = req.body;

    if(!fname || !lname || !page || !bugName || !description){
        res.status(401).json({
            message: 'Missing or invalid request data.'
        });
        return;
    }
    Bugs.create({
        fname, lname, page, bugName, description
    }).then(report => {
        if(report){
            res.json(report);
        }else{
            res.status(401).json({
                message: 'Invalid input data.'
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(400).json({
            message: 'Invalid input data.'
        })
    });
});

module.exports = router;
```

There's a lot going on here, but we can break it down to a few simple parts.

First, the mongoose library and bug report model are imported. These allow us to directly manipulate the bug reports collection.

Lets look at the route for getting all bug reports:

```javascript
router.get('/', (req, res) => {
    Bugs.find().then(results => {
        if(results.length > 0){
            var response = {
                totalReports: results.length
            }
            response.reports = results.length > 10 ? results.slice(0, 10): results;
            res.json(response);
        }else{
            res.json({
                reports: []
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Internal server error.'
        });
    })
});
```

- the route is handling a GET request. This has to be specified, otherwise the API call will fail-- a GET request basically means that the request is only for information based on minimal data, and is not changing any data.
- The functions first gets all of the documents in the bugs collection with `Bugs.find()`
- Once the data is obtained (this takes some time and is not instantaneous), it executes the `.then()`, which checks a few things (namely, the length of the data). If there are some bug reports in the collection, it sends them back as a JSON response, but only the first 10 results (there is a another call that gets more results, but I'm leaving that out here for confusion's sake, it basically does the same thing).
- If there are no bug reports, it send back a different JSON response that only has an empty array and no total number of results.
- A `.catch()` function catches any errors resulting from accessing the database and sends back an Internal Server Error, with the standard code 500.

Here's a breakdown of the second route:

```javascript
router.post('/', (req, res) => {
    const {fname, lname, page, bugName, description} = req.body;

    if(!fname || !lname || !page || !bugName || !description){
        res.status(401).json({
            message: 'Missing or invalid request data.'
        });
        return;
    }
    Bugs.create({
        fname, lname, page, bugName, description
    }).then(report => {
        if(report){
            res.json(report);
        }else{
            res.status(401).json({
                message: 'Invalid input data.'
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(400).json({
            message: 'Invalid input data.'
        })
    });
});
```

- the route is now handling a POST request. A POST request essentially means that the request also has a "body" of data, which will likely be involved in manipulating the database.
- First, it pulls all of the data from the request body.
- Then, it checks whether any of the data is missing. If it is, it sends an error response with code 401 (Forbidden).
- If not, it attempts to create a new document in the database, containing all of the data.
- If everything worked, it moves on to the `.then()` function, which returns the created document in a JSON response.
- If there was an error in saving it, then it activates the `.catch()` function, and returns an error response.

For more info on how the database functions and models work, check out [the Database section here](/stack/backend-database).