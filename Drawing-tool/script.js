//completely based on event listener and geometry concepts

//call all the ids according thier order
var canvas1=document.getElementById("canvas");
var decbtn=document.getElementById("decrease");
var size1=document.getElementById("size");
var incbtn=document.getElementById("increase");
var color1=document.getElementById("color");
var reset=document.getElementById("clear");

//The HTMLCanvasElement.getContext() method returns a drawing context on the canvas
var ctx=canvas.getContext("2d");

//intialize some default values to variables
var size=20;
var color="black";
var isPressed=false;
var x=undefined;
var y=undefined;

//create event listener for dragging mouse downwards
canvas.addEventListener("mousedown",(e)=>{
	isPressed=true;

	//The offsetX property returns the x-coordinate of the mouse pointer
	x=e.offsetX;
	y=e.offSetY;
});

//create event listener for dragging mouse upwards
canvas.addEventListener("mouseup",(e)=>{
	isPressed=false;
	x=undefined;
	y=undefined;
});

//create event listener for moving mouse and creating shapes
canvas.addEventListener("mousemove",(e)=>{
	if(isPressed)
	{
		var x2=e.offsetX;
		var y2=e.offsetY;

		//calling function for circle and line
		drawCircle(x2,y2);
		drawLine(x,y,x2,y2);
		x=x2;
		y=y2;
	}
});

//defining both functions
function drawCircle(x,y){
	ctx.beginPath();
	ctx.arc(x,y,size,0,Math.PI*2);
	ctx.fillStyle=color;
	ctx.fill();
}

function drawLine(x1,y1,x2,y2){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.strokeStyle=color;
	ctx.lineWidth=size*2;
	ctx.stroke();
}

//create event listener for increasing size
incbtn.addEventListener("click",(e)=>{
	size=size+5;
	if(size>50)
		size=50;

	updateSizeOnScreen();
});

//create event listener for decreasing size
decbtn.addEventListener("click",(e)=>{
	size=size-5;
	if(size<5)
		size=5;

	updateSizeOnScreen();
});

//create event listener to change color
color1.addEventListener("change",(e)=>{
	color=e.target.value;
});

//create event listener to reset work
reset.addEventListener("click",(e)=>{
	ctx.clearRect(0,0,canvas.height,canvas.width);
});

function updateSizeOnScreen(){
	size1.innerText=size;
}
