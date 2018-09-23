const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.channelSections.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.insert = (object, resolve, reject) => {
    service.channelSections.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.update = (object, resolve, reject) => {
    service.channelSections.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.delete = (object, resolve, reject) => {
    service.channelSections.delete(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};