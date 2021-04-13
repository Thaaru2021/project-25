class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        this.body = Bodies.circle(x,y,radius, options);
        


        
    }
    display(){
        

        var PaperPos=this.body.position;		

			push()
			translate(paperPos.x, PaperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(225,o,255)
            imageMode(CENTER)
			image(this.image, 0,0,this.r,this.r)
			pop()
            
    }       
};