const google = require('googleapis').google;
var service = google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.activities.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.insert = () => {
    service.activities.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};