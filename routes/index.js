var express = require('express');
var router = express.Router();
var got = require('got');
var HTMLParser = require('node-html-parser');

/* GET home page. */
router.get('/', async(req, res, next) => {
  let response = await got('https://banned.video/channel/the-alex-jones-show');
  let channel_page = HTMLParser.parse(response.body, {script: true});
  let channelInfo = JSON.parse(channel_page.querySelector('#__NEXT_DATA__').rawText);
  let channelId = channelInfo.props.pageProps.channel._id;
  let streamUrl = channelInfo.props.pageProps.channel.liveStreamVideo.streamUrl;
  res.render('index', { title: 'Data Skirmish - Ad-lite, Reality Adjacent', channelId, streamUrl });
});

module.exports = router;
