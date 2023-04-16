{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script> */}


// window.onload = function () {
//     window.addEventListener('scroll',) 
//     // window.addEventListener ('scroll', function)

    
// }



const displayMenu = () =>{
    console.log("clicked")
   let linksContainer = document.querySelector(".links")
    
    if (linksContainer.style.display === "block") {
        linksContainer.style.display = "none";
        document.getElementById("toggle").innerHTML = "&#9776;"

    } else {
        linksContainer.style.display = "block";
        document.getElementById("toggle").innerHTML = "&#x2715"
      }

}




