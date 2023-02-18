
// This is mousehover change background color function
randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}


function TriangleAndPentagon(height,width,name){
    const triangleOrPentagonAreaCalculate= (0.5*height*width).toFixed(2)
    let list = document.getElementById("totalAreaCalculationList");
    let li = document.createElement("li");
    li.innerHTML = `${name}    ${triangleOrPentagonAreaCalculate}cm<sup>2</sup>
     <button style="margin-left:20px; margin-bottom:20px" class=" rounded bg-primary text-white py-2 border-0"><small>Convert to m<sup>2</sup></small></button> `;
    list.appendChild(li);
}

function RectangleAndParallelogram(height,width,name){
    const RectangleOrParallellogramAreaCalculate=(height*width).toFixed(2)
    let list = document.getElementById("totalAreaCalculationList");
    let li = document.createElement("li");
    li.innerHTML = `${name}    ${RectangleOrParallellogramAreaCalculate}cm<sup>2</sup>
     <button style="margin-left:20px; margin-bottom:20px" class=" rounded bg-primary text-white py-2 border-0"><small>Convert to m<sup>2</sup></small></button> `;
    list.appendChild(li);
}

function Rambus(height,width){

}

function Ellipse(height,width){

}

// Triangle area calculation part

const traingleBtn=document.getElementById("triangle-btn");
traingleBtn.addEventListener('click',function(){
    const triangleInput1=document.getElementById("triangleInput1").value;
    const triangleInput2=document.getElementById("triangleInput2").value;
    const name="Triangle"
    if (isNaN(triangleInput1) || isNaN(triangleInput2) )
    {
        alert("please enter a valid number");
    }
    else{
        
        const triangleInput1ToNumber=parseFloat(triangleInput1)
        const triangleInput2ToNumber=parseFloat(triangleInput2)
        TriangleAndPentagon(triangleInput1ToNumber,triangleInput2ToNumber,name)
       
    }
})


//Ractangle area calculation part

const RactangleBtn=document.getElementById("Rectangle-btn");
RactangleBtn.addEventListener('click',function(){
    const RectangleInput1=document.getElementById("RectangleInput1").value;
    const RectangleInput2=document.getElementById("RectangleInput2").value;
    const name='Rectangle'
    if (isNaN(RectangleInput1) || isNaN(RectangleInput2) )
    {
        alert("please enter a valid number");
    }
    else{
        
        const RectangleInput1ToNumber=parseFloat(RectangleInput1)
        const RectangleInput2ToNumber=parseFloat(RectangleInput2)
        RectangleAndParallelogram(RectangleInput1ToNumber,RectangleInput2ToNumber,name)
       
    }
})

//Parallelogram area calculation part
const ParallelogramBtn=document.getElementById("Parallelogram-btn");
ParallelogramBtn.addEventListener('click',function(){
    const ParallelogramInput1=document.getElementById("ParallelogramInput1").value;
    const ParallelogramInput2=document.getElementById("ParallelogramInput2").value;
    const name='Parallelogram'
    if (isNaN(ParallelogramInput1) || isNaN(ParallelogramInput2) )
    {
        alert("please enter a valid number");
    }
    else{
        
        const ParallelogramInput1ToNumber=parseFloat(ParallelogramInput1)
        const ParallelogramInput2ToNumber=parseFloat(ParallelogramInput2)
        RectangleAndParallelogram(ParallelogramInput1ToNumber,ParallelogramInput2ToNumber,name)
       
    }
})

//Pentagon area calculation part
const PentagonBtn=document.getElementById("Pentagon-btn");
PentagonBtn.addEventListener('click',function(){
    const PentagonInput1=document.getElementById("PentagonInput1").value;
    const PentagonInput2=document.getElementById("PentagonInput2").value;
    const name='Pentagon'
    if (isNaN(PentagonInput1) || isNaN(PentagonInput2) )
    {
        alert("please enter a valid number");
    }
    else{
        
        const PentagonInput1ToNumber=parseFloat(PentagonInput1)
        const PentagonInput2ToNumber=parseFloat(PentagonInput2)
        TriangleAndPentagon(PentagonInput1ToNumber,PentagonInput2ToNumber,name)
       
    }
})