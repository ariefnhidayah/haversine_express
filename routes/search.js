var express = require('express');
const SearchController = require('../modules/search/SearchController');
var router = express.Router();

/* GET home page. */
router.get('/calculate-distance', async (req, res, next) => {
    try {
        await new SearchController().getDistance(req, res, next)
    } catch (e) {
        next(e)
    }
});

module.exports = router;
