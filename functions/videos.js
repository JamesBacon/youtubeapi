const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.videos.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.insert = (object, resolve, reject) => {
    service.videos.insert(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.update = (object, resolve, reject) => {
    service.videos.update(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.rate = (object, resolve, reject) => {
    service.videos.rate(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.getRating = (object, resolve, reject) => {
    service.videos.getRating(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.reportAbuse = (object, resolve, reject) => {
    service.videos.reportAbuse(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};
exports.delete = (object, resolve, reject) => {
    service.videos.delete(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};