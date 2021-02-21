class Hammer extends BaseClass {
    constructor(x,y,angle){
        var options = {
            'density': 2,
            'friction':1.0,
            'restitution':0.5
        }
     super(x,y,50,50, angle);
     Matter.Body.setAngle(this.body,angle)
    }
 
    display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      fill("yellow");
     super.display();  
    }
   };
   