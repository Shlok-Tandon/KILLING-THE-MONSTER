class Monster {

    constructor(x,y,r) {
        var hero_options = {
            density : 5,
            frictionAir : 5,
           // isStatic : true
        }

        this.x = x;
        this.y = y;
        this.r = r;
    
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,hero_options);
        World.add(world,this.body);

    }

    display() {

        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}