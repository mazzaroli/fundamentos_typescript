"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Picture = void 0;
var item_1 = require("./item");
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, _date, _orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._date = _date;
        _this._orientation = _orientation;
        return _this;
    }
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n                 title: " + this.title + ",\n                 orientation: " + this._orientation + "]";
    };
    return Picture;
}(item_1.Item));
exports.Picture = Picture;
