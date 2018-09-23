const service = require('googleapis').google.youtube('v3');

exports.set = (object, resolve, reject) => {
    service.watermarks.set(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.unset = (object, resolve, reject) => {
    service.watermarks.unset(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};