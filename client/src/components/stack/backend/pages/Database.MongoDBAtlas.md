### MongoDB Atlas

[MongoDB Atlas](https://cloud.mongodb.com/) is the cloud service for MongoDB, and the preferred method of storing and accessing a MongoDB database, unless you are self-hosting. Its free tier is perfectly usable for professional and hobby projects, and the amount of free tier databases that you can have on one account is virtually limitless.

#### Architecture of the Cloud Database

Atlas has layers! Inside of an individual account, you can have multiple projects. Within each project, there are layers of storage:

- Cluster
- Database
- Collection
- Documents

Each cluster is a provisioned location for the project on MongoDB Atlas's physical servers. 

The databases are what each application is meant to connect to. Generally, each project cluster will only have one database if it is simple, but if you have test and live versions of projects, you can have each version of the application operate with different databases, or if your project consists of multiple applications that pull from each oether for data but have their own disparate data, you can have a different database for each application.

A collection is the equivalent of a table in SQL. It is a category of identically typed data. This project currently only has one collection , titled "bugs":

- Cluster0
    - merndb
        - bugs

This collection contains all of the active bug reports for the application, which you can see and submit [here at the Bug Reports page](/reports). However, if I wanted to implement users for the website, or keep a separate database for testing purposes, the archtecture would look more like this:

- Cluster0
    - merndb
        - bugs
        - users
    - testdb
        - bugs
        - users

The document is simply a JSON Object. The document model for a bug report looks like this:

```javascript
{
    _id:ObjectId("60382a292dfe660015670847"),
    fname:"Jake",
    lname:"Arthur",
    page:"Home",
    bugName:"Test",
    description:"Testing API",
    createdAt: "2021-02-25T22:52:25.545+00:00",
    updatedAt: "2021-02-25T22:52:25.545+00:00",
    __v:0
}
```

Most of the data is self-explanatory, but there are a few things worth mentioning:
- The "_id" attribute is autogenerated. This is the substitute for SQL's primary key, it is a uniquely generated id that can be used to differentiate between documents.
- "__v" is just version, not really important.
- createdAt and updatedAt are also autogenerated, and are timestamps that can be used to order documents and track changes.

#### Connecting to Atlas

When creating a cluster for a project, you need to create a database user (username and password) and choose a connection method. There are three connection methods, but the only one we need to worry about is via URI.

The mongo URI is an address, which our mongoose setup in our server can ping to establish a connection to the cloud database. The URI contains the address for your account and cluster, as well as the specific database you are connecting to. It also has the credentials for the database user that you created, which is why it is very important to store these variables securley in a `.env` file.