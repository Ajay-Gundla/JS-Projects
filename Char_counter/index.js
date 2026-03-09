const textarea = document.getElementById("text-area");
const count = document.getElementById("count");
const remaining = document.getElementById("remaining");
const maxLength = parseInt(textarea.getAttribute("maxlength"))

textarea.addEventListener("input", () =>{
    updateCount();
})
updateCount();

function updateCount(){
    count.innerText = textarea.value.length;
    remaining.innerText = maxLength - textarea.value.length;
}