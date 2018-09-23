const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.subscriptions.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.insert = (object, resolve, reject) => {
    service.subscriptions.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.delete = (object, resolve, reject) => {
    service.subscriptions.delete(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};