/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : Mar 16, 2018
    Description : Created Life Item
*/
module objects {
    export class LifeItem extends GameObject {
  
      // private instance variables

      // public properties
  
      // Constructor
      constructor() {
        super("lifeitem");
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start(): void {
        this._dy = 5;
        this.Reset();
      }
  
      // updates the game object every frame
      public Update(): void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset(): void {
        this.alpha = 1;
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.centerY);
        this.y = -this.height;
      }
  
      // move the object to some new location
      public Move(): void {
        this.position = new math.Vector2(this.x, this.y);
        this.y += this._dy;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds(): void {
        // check lower bounds
        if (this.y >= 2000 + this.height) {
          this.Reset();
        }
      }
    }
  }