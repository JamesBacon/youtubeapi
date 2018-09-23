var activities = require('./functions/activities');
var captions = require('./functions/captions');
var channels = require('./functions/channels');
var channelSections = require('./functions/channelSections');
var comments = require('./functions/comments');
var commentThread = require('./functions/commentThread');
var guideCategories = require('./functions/guideCategories');
var i18nLanguages = require('@jamesbacon/youtubeapi/functions/i18nLanguages');
var i18nRegions = require('@jamesbacon/youtubeapi/functions/i18nRegions');
var playlistItems = require('./functions/playlistItems');
var playlists = require('./functions/playlists');
var search = require('./functions/search');
var subscriptions = require('./functions/subscriptions');
var thumbnails = require('./functions/thumbnails');
var videoAbuseReportReasons = require('./functions/videoAbuseReportReasons');
var videoCategories = require('./functions/videoCategories');
var video = require('./functions/videos');
var watermarks = require('./functions/watermarks');

module.exports = {
    authorize: (credentials, token) => {
        return require('./src/authorize').authorize(credentials, token);
    },

    activities: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                activities.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                activities.insert(object, resolve, reject);
            });
        }
    },

    captions: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                captions.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                captions.insert(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                captions.update(object, resolve, reject);
            });
        },
        download: (object) => {
            return new Promise((resolve, reject) => {
                captions.download(object, resolve, reject);
            });
        },
        delete: (object) => {
            return new Promise((resolve, reject) => {
                captions.delete(object, resolve, reject);
            });
        }
    },

    channels: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                channels.list(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                channels.update(object, resolve, reject);
            });
        }
    },

    channelSections: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                channelSections.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                channelSections.insert(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                channelSections.update(object, resolve, reject);
            });
        },
        delete: (object) => {
            return new Promise((resolve, reject) => {
                channelSections.delete(object, resolve, reject);
            });
        }
    },

    comments: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                comments.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                comments.insert(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                comments.update(object, resolve, reject);
            });
        },
        markAsSpam: (object) => {
            return new Promise((resolve, reject) => {
                comments.markAsSpam(object, resolve, reject);
            });
        },
        setModerationStatus: (object) => {
            return new Promise((resolve, reject) => {
                comments.setModerationStatus(object, resolve, reject);
            });
        },
        delete: (object) => {
            return new Promise((resolve, reject) => {
                comments.delete(object, resolve, reject);
            });
        }
    },

    commentThread: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                commentThread.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                commentThread.insert(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                commentThread.update(object, resolve, reject);
            });
        }
    },

    guideCategories: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                guideCategories.list(object, resolve, reject);
            });
        }
    },

    i18nLanguages: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                i18nLanguages.list(object, resolve, reject);
            });
        }
    },

    i18nRegions: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                i18nRegions.list(object, resolve, reject);
            });
        }
    },

    playlistItems: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                playlistItems.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                playlistItems.insert(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                playlistItems.update(object, resolve, reject);
            });
        },
        delete: (object) => {
            return new Promise((resolve, reject) => {
                playlistItems.delete(object, resolve, reject);
            });
        }
    },

    playlists: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                playlists.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                playlists.insert(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                playlists.update(object, resolve, reject);
            });
        },
        delete: (object) => {
            return new Promise((resolve, reject) => {
                playlists.delete(object, resolve, reject);
            });
        }
    },

    search: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                search.list(object, resolve, reject);
            });
        }
    },

    subscriptions: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                subscriptions.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                subscriptions.insert(object, resolve, reject);
            });
        },
        delete: (object) => {
            return new Promise((resolve, reject) => {
                subscriptions.delete(object, resolve, reject);
            });
        }
    },

    thumbnails: {
        set: (object) => {
            return new Promise((resolve, reject) => {
                thumbnails.set(object, resolve, reject);
            });
        }
    },

    videoAbuseReportReasons: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                videoAbuseReportReasons.list(object, resolve, reject);
            });
        }
    },

    videoCategories: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                videoCategories.list(object, resolve, reject);
            });
        }
    },

    video: {
        list: (object) => {
            return new Promise((resolve, reject) => {
                video.list(object, resolve, reject);
            });
        },
        insert: (object) => {
            return new Promise((resolve, reject) => {
                video.insert(object, resolve, reject);
            });
        },
        update: (object) => {
            return new Promise((resolve, reject) => {
                video.update(object, resolve, reject);
            });
        },
        rate: (object) => {
            return new Promise((resolve, reject) => {
                video.rate(object, resolve, reject);
            });
        },
        getRating: (object) => {
            return new Promise((resolve, reject) => {
                video.getRating(object, resolve, reject);
            });
        },
        reportAbuse: (object) => {
            return new Promise((resolve, reject) => {
                video.reportAbuse(object, resolve, reject);
            });
        },
        delete: (object) => {
            return new Promise((resolve, reject) => {
                video.delete(object, resolve, reject);
            });
        }
    },

    watermarks: {
        set: (object) => {
            return new Promise((resolve, reject) => {
                watermarks.set(object, resolve, reject);
            });
        },
        unset: (object) => {
            return new Promise((resolve, reject) => {
                watermarks.unset(object, resolve, reject);
            });
        }
    }
};
