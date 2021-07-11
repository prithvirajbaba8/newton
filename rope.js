class rope{
	constructor(body1,body2,pointA,pointB){
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
			
		}
	


	//create rope constraint here
//	con =Matter.Constraint.create({
//		bodyA:roof,
//	 pointA:{x:0,y:0},
//		   bodyB:this,
//		   pointB:{x:0,y:0},
//		   length:200,
//	   stiffness:0.1
//	})
	World.add(world,pointA);

}
}


    //create display() here 
display()
	{
		var pointA=this.rope.bodyA.options;
		var pointB=this.rope.bodyB.options
	strokeWeigth(2)
	}
