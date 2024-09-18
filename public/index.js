let addBlock = document.querySelector(".add");
let input = document.getElementById("inputContainer");
let inputSpace = document.getElementById("inputSpace");
    
addBlock.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.innerHTML = input.value;
    inputSpace.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", function(){
        inputSpace.removeChild(paragraph);
    });
});

