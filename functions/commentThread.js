const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.commentThreads.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.insert = (object, resolve, reject) => {
    service.commentThreads.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.update = (object, resolve, reject) => {
    service.commentThreads.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};