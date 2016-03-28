/*global cordova, module*/
/*global cordova, module*/

module.exports = {
    play: function (path, successCallback, errorCallback) {
        console.log("play:" +path);
        cordova.exec(successCallback, errorCallback, "PlayVideoCordova", "play", [path]);
    },
    stop: function (path, successCallback, errorCallback) {
        console.log("stop:" +path);
        cordova.exec(successCallback, errorCallback, "PlayVideoCordova", "stop", [path]);
    }
    
};