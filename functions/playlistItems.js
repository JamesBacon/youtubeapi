const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.playlistItems.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.insert = (object, resolve, reject) => {
    service.playlistItems.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.update = (object, resolve, reject) => {
    service.playlistItems.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.delete = (object, resolve, reject) => {
    service.playlistItems.delete(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};