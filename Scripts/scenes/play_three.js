/*
    Name : Dongwan Kim
    Version : v1.3
    Last_modification : Apr 07, 2018
    Description : Changed the amount of enemy
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
var scenes;
(function (scenes) {
    var StageThreeScene = /** @class */ (function (_super) {
        __extends(StageThreeScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function StageThreeScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        StageThreeScene.prototype._sucessStage = function () {
            if (this._boss.alpha == 0) {
                this._congratMessage.Update();
                setTimeout(function () {
                    managers.Game.currentScene = config.Scene.GAMEOVER;
                }, 4000);
                this._backgroundSound.stop();
            }
        };
        //PUBLIC METHODS
        StageThreeScene.prototype.Start = function () {
            console.log("Stage three");
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane();
            this._plane = managers.Game.plane;
            this._star = new objects.Star();
            this._lifeItem = new objects.LifeItem();
            this._meteor = new objects.Meteor();
            this._enemyNum = 7;
            this._enemy = new Array();
            managers.Game.enemies = this._enemy;
            this._boss = new objects.Boss();
            managers.Game.boss = this._boss;
            this._missileManager = new managers.Missile();
            managers.Game.bulletManager = this._missileManager;
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;
            this._scoreBoard = new managers.ScoreBoard;
            this._scoreBoard = managers.Game.scoreboardManager;
            this._prviousScore = managers.Game.scoreboardManager.Score;
            this._warningMessage = new objects.Warning(this.assetManager);
            this._congratMessage = new objects.Label("Congratulations!", "40px", "SpaceComic", "#FFFFFF", 320, 600, true);
            this.Main();
        };
        StageThreeScene.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();
            this._meteor.Update();
            this._missileManager.Update();
            if (this._scoreBoard.Score >= this._prviousScore + 10000) {
                this._boss.Update();
                this._warningMessage.Update();
            }
            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);
            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                enemy.Dy += 0.07;
                managers.Collision.Check(_this._plane, enemy);
                if (_this._plane.Life == 0) {
                    managers.Game.currentScene = config.Scene.GAMEOVER;
                    _this._backgroundSound.stop();
                }
            });
            //this._collision.check(this._missile,this._enemy);
            managers.Collision.Crush(this._missileManager.Missiles, this._enemy);
            this._missileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._boss);
            });
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
            }
            this._sucessStage();
        };
        StageThreeScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            this.addChild(this._meteor);
            this.addChild(this._star);
            this.addChild(this._lifeItem);
            this._missileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this.addChild(this._warningMessage);
            this.addChild(this._boss);
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._congratMessage);
        };
        return StageThreeScene;
    }(objects.Scene));
    scenes.StageThreeScene = StageThreeScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play_three.js.map