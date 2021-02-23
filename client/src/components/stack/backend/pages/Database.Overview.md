### Overview of the Database

#### NO SQL

Why use SQL when you can be a Javascript goblin and only store Javascript objects? NoSQL is exactly what it sounds like: database storage without SQL. The variation of NoSQL that this website uses, and is popularly used with a full JS stack, is the document-object model, which stores JSON objects as "documents" inside a "collection" (something like a named array, basically the equivalenmt of a table in SQL) inside the database.

#### MongoDB and mongoose

MongoDB is the document-object model NoSQL database, built on Javascript. Mongoose is the Node JS library that allows us to manage our database from our server.

#### MongoDB Atlas

MongoDB Atlas is the cloud service for MongoDB, and the preferred method of storing and accessing a MongoDB database, unless you are self-hosting. Its free tier is perfectly usable for professional and hobby projects, and the amount of free tier databases that you can have on one account is virtually limitless.