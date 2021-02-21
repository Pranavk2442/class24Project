class Stone extends BaseClass {
    constructor(x,y,width,height){
var options={
    'density':0.5,
    'restitution':0.5,
    'friction':0.5
}

super(x,y,width,height);

    }

display(){
    fill(100);
    super.display();
}

}