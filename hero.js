class Hero {

    constructor(x,y,r,r2) {
        var hero_options = {
            density : 1,
            frictionAir : 0.01,
            isStatic : false,
            restitution : 1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.r2 = r2
        this.image = loadImage("Superhero-01.png","Superhero-02.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,hero_options);
        World.add(world,this.body);

    }

    display() {

        ellipseMode(CENTER);
        fill("darkblue")
        ellipse(this.body.position.x + 280,this.body.position.y - 50,50,50);
        image(this.image,this.body.position.x - 100,this.body.position.y - 200,this.r,this.r2);
    }
}