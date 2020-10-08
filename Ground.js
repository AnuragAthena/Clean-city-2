class Ground
{
constructor(x, y, height, width)
{
var options=
{
isStatic:true
// density:1.2
}
this.body = Bodies.rectangle(x, y, height, width, options);
this.width=height;
this.height=width;
World.add(world, this.body);
}
display()
{
    var pos=this.body.position
    push();
    // var angle=this.body.angle
    translate(pos.x, pos.y);
    // rotate(angle);
    rectMode(CENTER);
    fill("grey");
    rect(0, 0, this.width, this.height);
    pop();
}
}