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
/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : Feb 26, 2018
    Description : Created Star Object
*/
var objects;
(function (objects) {
    var Star = /** @class */ (function (_super) {
        __extends(Star, _super);
        // private instance variables
        // public properties
        // Constructor
        function Star(assetManager) {
            var _this = _super.call(this, assetManager, "star") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Star.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        // updates the game object every frame
        Star.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Star.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.centerY);
            this.y = -this.height;
        };
        // move the object to some new location
        Star.prototype.Move = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Star.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        return Star;
    }(objects.GameObject));
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map