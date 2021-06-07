class Bob {
    constructor(x,y,radius){
        this.x=x
        this.y=y
        this.radius=radius
    var options={
        isStatic:false,
        restitution:1,
        density:1,
        friction:0
    }
    this.body=Bodies.circle(x,y,radius/2 ,options)
    World.add(world,this.body)
    }
    display(){
        var bobpos=this.body.position
        push()
        translate(bobpos.x,bobpos.y)
         rectMode(CENTER)
         fill(255)
         ellipse(0,0,this.radius,this.radius)
         pop()
    }
} 