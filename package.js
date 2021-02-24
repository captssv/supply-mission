  
class Package{
    constructor(x,y,w,h) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = w;
        this.h = h;

        World.add(world,this.body);
    }

    display() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        
    }
}