window.addEventListener('load', () =>{
    // console.log("canvas")
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = (window.innerWidth)/2;

    let drawing = false;

    function startDraw(e){
        drawing = true;
        draw(e);
    }
    function endDraw(){
        drawing = false;
        context.beginPath(); //restart a new seperate line
    }
    function draw(e){
        if(!drawing) return;
        context.lineWidth = 5; // THIS CHANGES THE LINE THICKNESS
        context.strokeStyle = "blue"; // THIS CHANGES THE LINE COLOR
        context.lineCap = "round";
        context.lineTo(e.clientX, e.clientY);
        context.stroke();        
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', draw);

    //MAKE A BUTTON TO CLEAR THE CANVAS
    // document.getElementById("canvas")
    // const button = document.createElement("button")
    // button.setAttribute("class", "eraser")
    // button.innerHTML = "Erase Canvas"
    // context.clearRect(0,0, canvas.width, canvas.height);
})
// MAKE A FUNCTION TO RESPONSIVELY CHANGE THE SIZE OF THE CANVAS
// window.addEventListener('resize, ')