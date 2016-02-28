'use strict';

function getDataStoreBasePath(fName) {
    return __dirname + '/data/response' + fName;
}

var router = require('express').Router();

router.get('/SSECatReco', function (req, res) {
    var respStore = require('json-fs-store')(getDataStoreBasePath(""));
    respStore.load('SSECatReco', function (err, respBody) {
        if (err) throw err; // err if JSON parsing failed
        res.json(respBody);
    });
});

router.get('/QueryVectize', function (req, res) {
    var respStore = require('json-fs-store')(getDataStoreBasePath(""));
    respStore.load('QueryVectize', function (err, respBody) {
        if (err) throw err; // err if JSON parsing failed
        res.json(respBody);
    });
});

module.exports = router;