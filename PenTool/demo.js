import PenTool from './index.esm.js'
var reset=document.getElementById("clear");

let pen = new PenTool("canvas")
document.getElementById("btn").addEventListener("click", () => {
    pen.enablePen();
})
let scissors = new PenTool("canvas4", {
    pathFillColor: '#000',
    isFillPath: true,
    closeState: true
}, [{"pointType":"straight","type":"M","point":{"x":660,"y":198},"relationPoints":[660,198],"keyPointIndex":0},{"pointType":"straight","type":"C","point":{"x":950,"y":550},"relationPoints":[660,198,950,550,950,550],"keyPointIndex":1},{"pointType":"mirrored","type":"C","point":{"x":970,"y":507},"relationPoints":[950,550,968,567,970,507],"keyPointIndex":2,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":968,"y":567,"keyPointIndex":2,"handleName":"handleA","type":"circle","index":16},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":972,"y":447,"keyPointIndex":2,"handleName":"handleB","type":"circle","index":18},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":968,"y1":567,"x2":970,"y2":507,"type":"line","index":1},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":972,"y1":447,"x2":970,"y2":507,"type":"line","index":2}},{"pointType":"straight","type":"C","point":{"x":829,"y":401},"relationPoints":[972,447,829,401,829,401],"keyPointIndex":3},{"pointType":"mirrored","type":"C","point":{"x":704,"y":513},"relationPoints":[829,401,706,456,704,513],"keyPointIndex":4,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":706,"y":456,"keyPointIndex":4,"handleName":"handleA","type":"circle","index":24},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":702,"y":570,"keyPointIndex":4,"handleName":"handleB","type":"circle","index":9},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":706,"y1":456,"x2":704,"y2":513,"type":"line","index":5},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":702,"y1":570,"x2":704,"y2":513,"type":"line","index":6}},{"pointType":"straight","type":"C","point":{"x":730,"y":563},"relationPoints":[702,570,730,563,730,563],"keyPointIndex":5},{"pointType":"straight","type":"C","point":{"x":963,"y":188},"relationPoints":[730,563,963,188,963,188],"keyPointIndex":6},{"pointType":"mirrored","type":"C","point":{"x":1000,"y":271},"relationPoints":[963,188,1020,197,1000,271],"keyPointIndex":7,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":1020,"y":197,"keyPointIndex":7,"handleName":"handleA","type":"circle","index":15},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":980,"y":345,"keyPointIndex":7,"handleName":"handleB","type":"circle","index":26},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":1020,"y1":197,"x2":1000,"y2":271,"type":"line","index":7},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":980,"y1":345,"x2":1000,"y2":271,"type":"line","index":8}},{"pointType":"straight","type":"C","point":{"x":833,"y":401},"relationPoints":[980,345,833,401,833,401],"keyPointIndex":8},{"pointType":"mirrored","type":"C","point":{"x":634,"y":293},"relationPoints":[833,401,663,366,634,293],"keyPointIndex":9,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":663,"y":366,"keyPointIndex":9,"handleName":"handleA","type":"circle","index":25},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":605,"y":220,"keyPointIndex":9,"handleName":"handleB","type":"circle","index":21},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":663,"y1":366,"x2":634,"y2":293,"type":"line","index":3},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":605,"y1":220,"x2":634,"y2":293,"type":"line","index":4}}]);

reset.addEventListener("click",(e)=>{
	ctx.clearRect(0,0,canvas4.height,canvas4.width);
});