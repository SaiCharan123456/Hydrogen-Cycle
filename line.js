class Line{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        
        fill("black");
       // stroke("red");
        strokeWeight(4);
        rectMode(CENTER);
       rect(pos.x, pos.y, this.width, this.height);
  
        pop();
      }
  }