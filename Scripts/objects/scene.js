/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Created scene objects
*/
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
var objects;
(function (objects) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        //CONSTRUCTOR
        function Scene(assetManager) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        Scene.prototype.Start = function () {
        };
        Scene.prototype.Update = function () {
        };
        Scene.prototype.Main = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map