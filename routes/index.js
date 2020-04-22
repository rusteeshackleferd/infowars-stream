var express = require('express');
var router = express.Router();
var got = require('got');
var HTMLParser = require('node-html-parser');

/* GET home page. */
router.get('/', async(req, res, next) => {
  let channelId = '5b885d33e6646a0015a6fa2d';
  let streamUrl = 'https://infostream.secure.footprint.net/hls-live/infostream-infostream/_definst_/live.m3u8';
  res.render('index', { title: 'Data Skirmish - Ad-lite, Reality Adjacent', channelId, streamUrl });
});

module.exports = router;
