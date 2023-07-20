// .addEventListener(event,function,usecapture)


const innerdiv = document.getElementById('innerdiv')

innerdiv.addEventListener("mouseover",changeblue)
innerdiv.addEventListener('mouseout', changegreen)


function changegreen() {
    innerdiv.style.backgroundColor = "green"
    
}
function changeblue() {
    innerdiv.style.backgroundColor = "blue";

}