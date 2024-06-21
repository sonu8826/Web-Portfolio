let input =  document.getElementById("inp");
let text = document.querySelector(".text");

function addFunction(){
    if(input.value == ""){
        alert("Please Enter a task")
    }
    else {
        let p = document.createElement("p");
        p.innerHTML = `${input.value}<i class="bi bi-trash delete"></i> `;
        text.appendChild(p);
        input.value = "";
        p.querySelector(".delete").addEventListener("click", remove);
        function remove(){
           p.remove() 
        }
    }
}