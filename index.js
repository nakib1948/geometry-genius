
// This is mousehover change background color function
randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}


function TriangleAndPentagon(height,width){
    return 0.5*height*width
}

function RectangleAndParallelogram(height,width){

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
    if (isNaN(triangleInput1) || isNaN(triangleInput2) )
    {
        alert("please enter a valid number");
    }
    else{
        
        const triangleInput1ToNumber=parseFloat(triangleInput1)
        const triangleInput2ToNumber=parseFloat(triangleInput2)
        const triangleAreaCalculate=TriangleAndPentagon(triangleInput1ToNumber,triangleInput2ToNumber)
        let list = document.getElementById("totalAreaCalculationList");
        let li = document.createElement("li");
        li.innerHTML = `Traingle    ${triangleAreaCalculate}cm<sup>2</sup>
         <button style="margin-left:20px" class=" rounded bg-primary text-white py-2 border-0"><small>Convert to m<sup>2</sup></small></button> `;
        list.appendChild(li);
    }
})