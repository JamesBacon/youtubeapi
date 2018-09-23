const service = require('googleapis').google.youtube('v3');

exports.set = (object, resolve, reject) => {
    service.thumbnails.set(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};