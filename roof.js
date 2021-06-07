class roof{

constructor(x,y,width,height){
 console.log("hello")   
this.x=x;
this.y=y;
this.width=width;
this.height=height;

var options={
    isStatic:true
}
 this.body=Bodies.rectangle(x,y,width,height,options)
 console.log(this.body.position)
 World.add(world,this.body)
}
display(){ 
    
    var roofpos=this.body.position
        push()
        translate(roofpos.x,roofpos.y)
         rectMode(CENTER)
         fill(255)
         rect(0,0,this.width,this.height)
         pop()
}
}