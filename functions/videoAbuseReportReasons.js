const service = require('googleapis').google.youtube('v3');

exports.list = (object, resolve, reject) => {
    service.videoAbuseReportReasons.list(object, (error, response) => {
        if (error) {
            reject(error);
        } else {
            resolve(response);
        };
    });
};