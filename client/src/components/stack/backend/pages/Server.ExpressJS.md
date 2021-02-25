### ExpressJS

Express JS is the Node JS library that makes writing and managing the backend so, SO much easier. With Express, you can set up an entire functioning backend with 4 lines of code.

```javascript
const express = require('express');
const app = express();

//middleware goes here

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
```

Now, this doesn't actually do anything fun yet, but if you have everything installed and run the file, it will start listening on port 5000. In order to make it do some cool things, we have to add some more code.