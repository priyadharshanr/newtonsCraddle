class Rope{
	constructor(body1, body2, pointA, pointB )
	{
     this.pointA = pointA;
	 this.pointB = pointB;
	  
	 var options = {
		body1 : body1,
		body2 : body2,
        pointB:{x:this.pointA, y:this.pointB}
	 }
	//create rope constraint here
       this.body = Bodies.rectangle(this.pointA, this.pointB, options);
    World.add(world, this.body);
  }



   //create display() here
   display(){
	var pointA = this.rope.body1.position;
	var pointB = this.rope.body2.position;

	strokeWeight(2)
   }
   
	}


   

