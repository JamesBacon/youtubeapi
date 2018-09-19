const googleAuth = require('google-auth-library');

exports.authorize = (credentials, token) => {
    var clientID = credentials.client_id;
    var clientSecret = credentials.client_secret;
    var redirectURI = credentials.redirect_uris[0];

    var oauth2Client = new googleAuth.OAuth2Client(clientID, clientSecret, redirectURI);

    oauth2Client.credentials = token;

    return oauth2Client;
};