
// This is mousehover change background color function
randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}


function TriangleAndPentagonAndRhombus(height,width,name){
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


function Ellipse(height,width,name){
    const Ellipse= (3.1416*height*width).toFixed(2)
    let list = document.getElementById("totalAreaCalculationList");
    let li = document.createElement("li");
    li.innerHTML = `${name}    ${Ellipse}cm<sup>2</sup>
     <button style="margin-left:20px; margin-bottom:20px" class=" rounded bg-primary text-white py-2 border-0"><small>Convert to m<sup>2</sup></small></button> `;
    list.appendChild(li);
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
        TriangleAndPentagonAndRhombus(triangleInput1ToNumber,triangleInput2ToNumber,name)
       
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
        TriangleAndPentagonAndRhombus(PentagonInput1ToNumber,PentagonInput2ToNumber,name)
       
    }
})

//Rhombus area calculation part

const RhombusBtn=document.getElementById("Rhombus-btn");
RhombusBtn.addEventListener('click',function(){
    const RhombusInput1=document.getElementById("RhombusInput1").value;
    const RhombusInput2=document.getElementById("RhombusInput2").value;
    const name='Rhombus'
    if (isNaN(RhombusInput1) || isNaN(RhombusInput2) )
    {
        alert("please enter a valid number");
    }
    else{
        
        const RhombusInput1ToNumber=parseFloat(RhombusInput1)
        const RhombusInput2ToNumber=parseFloat(RhombusInput2)
        TriangleAndPentagonAndRhombus(RhombusInput1ToNumber,RhombusInput2ToNumber,name)
       
    }
})

//Ellipse area calculation part
const EllipseBtn=document.getElementById("Ellipse-btn");
EllipseBtn.addEventListener('click',function(){
    const EllipseInput1=document.getElementById("EllipseInput1").value;
    const EllipseInput2=document.getElementById("EllipseInput2").value;
    const name='Ellipse'
    if (isNaN(EllipseInput1) || isNaN(EllipseInput2) )
    {
        alert("please enter a valid number");
    }
    else{
        
        const EllipseInput1ToNumber=parseFloat(EllipseInput1)
        const EllipseInput2ToNumber=parseFloat(EllipseInput2)
        Ellipse(EllipseInput1ToNumber,EllipseInput2ToNumber,name)
       
    }
})
