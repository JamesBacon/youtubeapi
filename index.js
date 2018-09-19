// const credentials = require('./.credentials/client_secret.json').installed;
// const token = require('./.credentials/token.json');

// var service = google.youtube('v3');

// var commentThread = require('./functions/commentThread');
// var activities = require('./functions/activities');

module.exports = {
    authorize: (credentials, token) => {
        return require('./src/authorize').authorize(credentials, token);
    },

    // activities: {
    //     list: (channelID, maxResults) => {
    //         return new Promise((resolve, reject) => {
    //             activities.list(channelID, resolve, reject);
    //         });
    //     },
    //     insert: () => {

    //     }
    // },

    // commentThread: {
    //     list: (videoID, maxResults) => {
    //         return new Promise((resolve, reject) => {
    //             commentThread.list(videoID, maxResults, resolve, reject);
    //         });
    //     },
    //     insert: (videoID, comment) => {
    //         return new Promise((resolve, reject) => {
    //             commentThread.insert(videoID, comment, resolve, reject);
    //         });
    //     },
    //     update: (commentID, comment) => {
    //         return new Promise((resolve, reject) => {
    //             commentThread.update(commentID, comment, resolve, reject);
    //         });
    //     }
    // }
};