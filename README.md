# YouTubeAPI
> https://www.npmjs.com/package/@jamesbacon/youtubeapi

## How to.

You first need to get your credentials.
1. Follow Step One of this guide to get them: [developers.google.com](https://developers.google.com/youtube/v3/quickstart/nodejs)
2. Once you have them create a new folder in your root project folder named ".credentials".
3. Place the new file you got from Step One into the new folder.
4. Now follow step 3 (The Google Developers Step 3 not this one) to get your token.
5. Once you have done that navigate to your user folder e.g. "C:\Users\james" and open ".credentials".
6. Copy the .json file that's there (If there's more than two copy the one that says google-apis-nodejs-quickstart) over to your own ".credentials" folder.
7. Rename it to token.json and you're all set.

Below is a simple template of what it looks like.

```javascript
const youtube = require('@jamesbacon/youtubeapi');

var credentials = require('./.credentials/client_secret.json').installed;
var token = require('./.credentials/token.json');

const oauth = youtube.authorize(credentials, token);

youtube.commentThread.list({
    auth: oauth,
    part: 'snippet, replies',
    videoId: 'KIIm9PszZDM',
    maxResults: '1'
}).then(thread => {
    console.log(thread);
}).catch(error => console.log(error));
```

This is my first ever public project so be easy on me, hahahaha.
