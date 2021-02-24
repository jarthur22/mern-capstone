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

router.get('/page/:num', (req, res) => {
    if(req.params.num < 1){
        res.status(401).json({
            message: 'Invalid page param.'
        });
        return;
    }
    Bugs.find().then(results => {
        if(results.length > 0){
            var response = {
                totalReports: results.length
            }
            const startIndex = +req.params.num * 10 - 10;
            const endIndex = startIndex + 10;
            response.reports = results.length > 10 ? results.slice(startIndex, endIndex): results;
            res.json(response);
        }else{
            res.json({
                reports: [S]
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