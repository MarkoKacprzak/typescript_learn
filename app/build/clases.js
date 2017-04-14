/**
 * classes
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    Point.prototype.log = function () {
        console.log(this.x + ' ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
var Point3d = (function (_super) {
    __extends(Point3d, _super);
    function Point3d(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3d.prototype.add = function (point) {
        var newPoint = _super.prototype.add.call(this, point);
        return new Point3d(newPoint.x, newPoint.y, this.z + point.z);
    };
    Point3d.prototype.log = function () {
        console.log(this.x + ' ' + this.y + ' ' + this.z);
    };
    return Point3d;
}(Point));
exports.Point3d = Point3d;
