### Mongoose

Mongoose is the Node JS library that allows us to manage our database from our server.

#### The setup

In the `server.js` file, there is a call to `connectDB()`, which is a function imported from `db.js`. The function, which is purely mongoose, is as follows:

```javascript
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://XXXXXX:xxxxxxx@cluster0.trsto.mongodb.net/merndb?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${error}`);
        process.exit(1);
    }
}

module.exports = connectDB;
```

Let's break this down:
- First, we import the mongoose library and set the MongoDb connection URI.
- Next we actually connect to the database:
    - first, we have to establish our configuration for the connection. This includes our URI, and some optiosn, which mostly just prevent warnings and make our database functions cleaner.
    - next we actually connect, with one simple function, `mongoose.connect()`. We are `await`ing this function, because it is asynchronous (It will take some time to complete, and we want to stop everything until the connection is complete).
    - We log that we are connected.
    - all of this is wrapped in a try-catch block. This ensures that if we encounter an error, our entire server does not crash and stop.
- Finally, we export the function.

#### Models

Mongoose allows us to create schemas for any data that we are putting into our database. Schemas are like guidelines that apply rules to our data. If the data fails the rules, it won't be added to the database.

Mongoose models also serve as the tools that we can use to push things to the database directly. They are each connected to a specific collection in the database, and use a set of functions to make changes to the data in their collection.

Here is what the model for bug reports looks like:

```javascript
const mongoose = require('mongoose');

const BugSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    bugName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}, {collection: 'bugs'});

module.exports = Bugs = mongoose.model('bugs', BugSchema);
```

As you can see, each attribute of the data is described, typed, and set as required. You can do other things as well, like apply input masks or character limits to each attribute. Timestamps are also added as an option, and MongoDB creates these automatically every time a document is created.

#### Database Functions

We go over these in more detail in the [API section](/stack/backend-api), but the basic database functions that the model allows us to use are:
- `Bugs.find()` : this returns all of the documents in the collection.
- `Bugs.create(<document Object>)` : this pushes a new document to the collection, as long as it passes all the rules of the model.

There are also functions for updating, deleting, finding documents with specific parameters, and more, but we do not use those as of yet in this project.