const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.playlists.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.insert = (object, resolve, reject) => {
    service.playlists.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.update = (object, resolve, reject) => {
    service.playlists.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.delete = (object, resolve, reject) => {
    service.playlists.delete(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};