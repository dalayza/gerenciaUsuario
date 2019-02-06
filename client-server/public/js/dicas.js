/* DICAS */


// manipulacion de variables
nome.value = "Denis";
nome.style.color = "blue";
document.querySelector("#form-user-create [name=gender]");
document.querySelector("#form-user-create [name=gender]:checked");
document.querySelectorAll("#form-user-create [name=gender]");


// forEach
var fields = querySelectorAll("#form-user-create [name]");
fields.forEach((field, index) => {
    console.log(field);
    console.log(field.name);
    console.log(index);
});


// events
document.querySelectorAll("button").forEach(() => {

    this.addEventListener("click", function(){
        console.log("click");
    });

});


// SPA (Single Page Application)
event.preventDefault();


// 
