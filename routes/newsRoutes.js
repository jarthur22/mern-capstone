const express = require('express');
const axios = require('axios');

const router = express.Router();

//20 articles per response

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

module.exports = router;