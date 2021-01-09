class Bob{
    constructor(x,y){
        var options={
            "isStatic":true,
            "friction":0.5,
            "density":1.2
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.radius= 120;

    }
    display(){
        var pos=this.body.position
        var angle = this.body.angle;
        pos.x=this.body.position.x;
        pos.y=this.body.position.y;
        /*push();
        translate(pos.x, pos.y);
        rotate(angle);*/
        fill("#E800E3");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        //pop();
    }
}