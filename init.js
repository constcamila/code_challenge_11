document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("formulario");

    //evita que el formulario se envie por defecto
    formulario.addEventListener("submit", function(e){
        e.preventDefault();


        //define los valores de los campos de registro del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fNac = document.getElementById("fNac").value;

        //crea un objeto que contiene la informacion registrada en el formulario
        const formData = {
            nombre,
            apellido,
            fNac
        };

        //envia la informacion registrada en el formulario en formato json al servidor
        fetch(" https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                //indica al servidor que los datos que recibe estan en formato json
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data)
        })

    })

})