# This Package will contain a lot more in the near future.
> At the moment you can use it to easily authorize.
https://www.npmjs.com/package/@jamesbacon/youtubeapi

## How to.

You first need to get your credentials.
Follow Step One of this guide to get them: https://developers.google.com/youtube/v3/quickstart/nodejs
Once you have them create a new folder in the root directory named ".credentials" and place them in there.
Now follow step 3 to get your token. Once you have done that navigate to your user folder e.g. "C:\Users\james" and open ".credentials".
Copy the .json file that's there (If there's more than two copy the one that says google-apis-nodejs-quickstart) over to your own ".credentials" folder.
Rename it to token.json and you're all set.

Below is a simple template of what it looks like.

```javascript
var credentials = require('./.credentials/client_secret.json').installed;
var token = require('./.credentials/token.json');

var google = require('googleapis').google;
var service = google.youtube('v3');

var oauth = require('@jamesbacon/youtubeapi').authorize(credentials, token);

service.commentThreads.list({
    auth: oauth,
    part: 'snippet, replies',
    videoId: 'KIIm9PszZDM',
    maxResults: '1'
}, (error, response) => {
    if (error) console.log(error)
    else
    console.log(response);
});
```

Take a look around and you'll see where this project is going.
