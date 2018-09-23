const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.channels.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.update = (object, resolve, reject) => {
    service.channels.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};