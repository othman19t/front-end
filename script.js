const prograssPar = document.getElementsByClassName("progress-par")[0];

setInterval(()=>{
    const computedStyle = getComputedStyle(prograssPar); // get the style given to el in css
    const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0; //convert value to float type
    prograssPar.style.setProperty("--width", width +1); // change value of the width varaible 
}, 50)

// second way for prograss bar
function filbar(second){
    const bar = document.getElementById("bar2");
    bar.style.transition = `${second}s linear width`;
    bar.style.width = "100%";
}
