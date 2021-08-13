"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    User.prototype.addAlbum = function (album) {
        this.album.push(album);
    };
    User.prototype.removeAlbum = function (album) {
        // Buscar objeto Album
        var index = this.album.findIndex(function (a) { return a.id === album.id; });
        var deletedAlbum;
        if (index >= 0) {
            deletedAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        return deletedAlbum;
    };
    return User;
}());
exports.User = User;
