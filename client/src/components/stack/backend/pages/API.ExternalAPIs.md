### External APIs

The external APi that I used for this project was the free News API, which you can [take a look at here](/news). Lets go over what the API does.

#### Routes to the News API

The news API is much simpler than the bug report API, with only two very similar GET requests:

```javascript
// @desc Fetch the first page of results
// @route GET /api/news
// @access Public
router.get('/', (req, res) => {
    axios.get(`https://newsapi.org/v2/everything?q=full stack javascript NOT hiring NOT course NOT "wordpress" NOT "Apple"&language=en&apiKey=${process.env.NEWS_API_KEY}`).then(response => {
        if(!response.data || response.data.status === " error"){
            res.status(500).json({message: 'Internal server error.'});
            return;
        }
        res.json(response.data);
    }).catch(err => {
        console.log(err);
        res.status(500).json({message: 'Internal server error.'})
    });
});

// @desc Fetch a specific page of the results
// @route GET /api/news/page/:id
// @access Public
router.get('/page/:num', (req, res) => {
    axios.get(`https://newsapi.org/v2/everything?q=full stack javascript NOT hiring NOT course NOT "wordpress" NOT "Apple"&page=${req.params.num}&language=en&apiKey=${process.env.NEWS_API_KEY}`).then(response => {
        if(!response.data || response.data.status === " error"){
            res.status(500).json({message: 'Internal server error.'});
            return;
        }
        res.json(response.data);
    }).catch(err => {
        console.log(err);
        res.status(500).json({message: 'Internal server error.'})
    });
});
```

Instead of getting data via a connection to the database, we are getting data via `axios`. Axios is a neat little library that makes API request easy without having to jump through hoops using `fetch` or `XMLHttpRequest`. All it does is make a request to the url provided, and then does whatever we want with the data response-- in this case, we are:
- checking that the response has data, and no error. If it fails this check, we send an internal server error to the client.
- returning the data to the client as is.
- if there is an error with the request, it will move to the `.catch()` and throw an internal server error back to the client.

A couple more things to note about the routes:
- the only difference between the two requests is that the API only returns the first page of results by default (max of 20 results). So the second request specifies the page, and this request is called when the user clicks another page number on the website.
- In order to access the News API, we need a secret API key. We access this through `process.env.NEWS_API_KEY`, which pulls the key from our `.env` file.