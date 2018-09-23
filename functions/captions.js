const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.captions.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.insert = (object, resolve, reject) => {
    service.captions.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.update = (object, resolve, reject) => {
    service.captions.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.download = (object, resolve, reject) => {
    service.captions.download(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};

exports.delete = (object, resolve, reject) => {
    service.captions.delete(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};