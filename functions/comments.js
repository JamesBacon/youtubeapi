const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.comments.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.insert = (object, resolve, reject) => {
    service.comments.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.update = (object, resolve, reject) => {
    service.comments.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.markAsSpam = (object, resolve, reject) => {
    service.comments.markAsSpam(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.setModerationStatus = (object, resolve, reject) => {
    service.comments.setModerationStatus(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.delete = (object, resolve, reject) => {
    service.comments.delete(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};