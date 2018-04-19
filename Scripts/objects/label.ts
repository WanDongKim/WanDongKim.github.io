/*
    Name : Jowon Shin
    Version : v1.1
    Last_modification : April 07, 2018
    Description : Updated Update method
*/

module objects {
    export class Label extends createjs.Text {
        // Private Instance Variables
        private _boss : objects.Boss;
        private _scoreBoard : managers.ScoreBoard;
        private _enemy : objects.Enemy[];
        private _lifeItem: objects.LifeItem;
        private _star: objects.Star;
        private _bossMissile: managers.Missile_Boss;
        // Public Propoerties

        // Constructor
        constructor(
            labelString: string,
            fontSize: string,
            fontFamily: string,
            fontColour: string,
            x: number = 0,
            y: number = 0,
            isCentered: boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);

            if(isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            this.x = x;
            this.y = y;

            this._boss = managers.Game.boss;
            this._bossMissile = managers.Game.BossBulletManager;
            this._enemy = managers.Game.enemies;
            this._lifeItem = managers.Game.lifeitem;
            this._star = managers.Game.star;
            this._scoreBoard = managers.Game.scoreboardManager;
        }

        // Private Methods

        // Public Methods

         // Initializes variables and creates new objects

        // updates the game object every frame
        public Update(): void {
            if(this._boss.alpha === 0) {
                if(this.y < 480 && this.y > 300){
                createjs.Sound.play("levelCompleteSound");
                }
                this.alpha = 1;
                this.Move();
                this._enemy.forEach(enemy => {
                    enemy.alpha = 0;
                    //managers.Game.currentSceneObject.removeChild(enemy);
                });
                this._bossMissile.Missiles.forEach(missile => {
                    missile.alpha = 0;
                });
                this._star.alpha = 0;
                this._lifeItem.alpha = 0;
            } else {
                this.alpha = 0;
            }
        }

        // reset the objects location to some value
        public Reset(): void {
            this.alpha = 0;
            this.x = 320;
            this.y = 600;
        }

        // move the object to some new location
        public Move(): void {
            this.y -= 5;
        }

        // check to see if some boundary has been passed
        public CheckBounds(): void {
            // check lower bounds
            if (this.y < 0) {
                //if (this.x >= 1000) {
                this.Reset();
            }
        }
    }
}