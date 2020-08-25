//chain class
class chain{
    //constructor
    constructor(bodyA,bodyB){
        //options for chain
        var options = {
            stiffness: 0.04,
            length: 14,
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.chain = Constraint.create(options)
        //adding chain to world
        World.add(world,this.chain)
    }
    //display
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        stroke(28,74,1)
        //creating the line
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}