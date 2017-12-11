# `get-youtube-playlist-urls`
> Returns an array of all the URLs belonging on a playlist.

## Usage
Install with npm. Node 8 required.
```sh
$ npm install --save https://github.com/slammayjammay/get-youtube-playlist-urls
```

Require the function and call it providing the url of a YouTube playlist. It will return a promise that contains an array of URLs that point to each video present on the playlist.
```js
const getYoutubeURLs = require('get-youtube-playlist-urls');

const url = 'https://www.youtube.com/watch?v=SOME_ID&list=SOME_LIST';
getYoutubeURLs(url)
  .then(urls => console.log(urls))
  .catch(err => console.log(err));
```
