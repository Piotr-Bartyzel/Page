$(document).ready(function(){
	
	
  $(".arrow").click(function(){

    $('html, body').stop().animate({scrollTop:400},500);
  })
if($( window ).width()<=576){
   canvas = document.getElementById("cn");

   ctx = canvas.getContext("2d");
  console.log($(".greeting").width());
  canvas.width = $(".greeting").width();
  canvas.height = $(".greeting").height();

  canva = document.getElementById("can");

  ct = canva.getContext("2d");
 console.log($(".greeting").width());
 canva.width = $(".greeting").width();
 canva.height = $(".greeting").height();
 canva.style.position = "absolute";
 canva.style.top = 0 + "px";

  ctx.fillStyle= "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);


draw1 = new Obj(ctx,0,0,200,4,600,2,0,"#E9967A");
draw2 = new Obj(ctx,0,200,200,4,600,1,0,"#E9967A");
draw3 = new Obj(ctx,0,100,300,4,700,3,0,"#E9967A");
draw4 = new Obj(ctx,0,25,300,2,700,5,0,"#E9967A");
draw5 = new Obj(ctx,0,25,400,4,700,5,100,"#7FFFD4");
draw6 = new Obj(ctx,0,25,475,2,775,5,75,"#7FFFD4");
draw7 = new Obj(ct,0,300,300,4,700,5,0,"#7FFFD4");
draw8 = new Obj(ct,0,325,300,2,700,2,0,"#7FFFD4");

setInterval(draw,10);

}
})
$( window ).resize(function() {

canva = document.getElementById('cn');
can = document.getElementById('can');
  var y = document.documentElement.scrollTop;

 console.log($(".greeting").width());
 canva.width = $(".greeting").width();
 canva.height = $(".greeting").height();
 can.width = $(".greeting").width();
 can.height = $(".greeting").height();

  if(y<=0){
  if ($(window).width() <= 576){
    $(".menu").stop().animate({
        height: 200,
    },300)
}
else{
  $(".menu").stop().animate({
      height: 100,
  },300)
}
}

});

function Obj(ctx,a,x,yy,thickness,ref,time,y,color){

	this.time = time;
    this.xstart=x; 
    this.ystart=y;
    this.xend=x;
    this.yend=y;
    this.x=x;
    this.yy=yy;
    this.thickness= thickness;
    this.ref = ref;
    this.color = color;

    this.draw = function(){
 
      ctx.beginPath();
      if(this.yend<=this.yy){	
      ctx.moveTo(this.xstart,this.ystart);
      ctx.lineTo(this.xend+=time,this.yend+=time);
    }
    else {		
      //console.log("rozniaca "+this.iy+" ele "+this.iyy)
      ctx.moveTo(this.xstart++,this.ystart++);
      ctx.lineTo(this.xend++,this.yend++);
    }
      if(this.yend>this.ref){

          this.xstart=x;
          this.ystart=y;
          this.xend=x;
          this.yend=y;
          this.x=x;
          this.yy=yy;
      }
      ctx.strokeStyle = this.color;
    if(this.x>=300) ctx.filter = 'blur(3px)';
    else ctx.filter = 'blur(1px)';
      ctx.lineWidth = this.thickness;
      ctx.stroke();
    }
}
function draw(){
  ct.clearRect(0,0,canvas.width,canvas.height);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle= "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);


draw1.draw();
draw2.draw();
draw3.draw();
draw4.draw();
draw5.draw();
draw6.draw();
draw7.draw();
draw8.draw();

}
$(window).scroll(function() {
  var y = document.documentElement.scrollTop;

  if(y>0){

    $(".menu").children().hide();
    $(".menu").stop().animate({
        height: 20,
    },300)

  }
  else {

    $(".menu").children().show();
    if ($(window).width() <= 576){
      $(".menu").stop().animate({
          height: 200,
      },300)
	}
  else {
    $(".menu").stop().animate({
        height: 100,
    },300)
  }

  }
});
