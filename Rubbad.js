class Rubbad{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY-offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rubbad=Constraint.create(options)
        World.add(world,this.rubbad);
    }
    display(){
        
        var pointA=this.rubbad.bodyA.position
        var pointB=this.rubbad.bodyB.position

        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}