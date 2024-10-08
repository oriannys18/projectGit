const persona = {
    id : 0,
    nombres : '',
    apellidos : '',
    telefono : '',
    email : '',
    ciudad : '',
    pais : ''
}

let personasArray = [];

function processConctForm(e){
    

    persona.nombres = document.forms ["conctmortgage"]["nombre"].value;
    persona.apellidos = document.forms ["conctmortgage"]["apellido"].value;
    persona.telefono = document.forms ["conctmortgage"]["numberphone"].value;
    persona.email = document.forms ["conctmortgage"]["correo"].value;
    persona.ciudad = document.forms ["conctmortgage"]["city"].value;
    persona.pais = document.forms ["conctmortgage"]["country"].value;
    persona.id = personasArray.length;
    let personajson = JSON.stringify(persona);
    personasArray.push(personajson);

    e.preventDefault();
    alert("Datos guardados con exito"+personasArray.toString());
}

function listaconctactos(){

    let dinamicTable = "";
//cabecera de la tabla 
   dinamicTable += "<table class='table'";
    dinamicTable += "<tr>";
    dinamicTable += "<th>ID</th>";
    dinamicTable += "<th>Nombres</th>";
    dinamicTable += "<th>Apellidos</th>";
    dinamicTable += "<th>Telefonos</th>";
    dinamicTable += "<th>Email</th>";
    dinamicTable += "</tr>";
    //filas cn la informacion
    for (let i = 0; i < personasArray.length; i++) {
        let personajson = JSON.parse(personasArray[i]);
        dinamicTable += "<tr>";
        dinamicTable += "<td>"+personajson.id+"</td>";
        dinamicTable += "<td>"+personajson.nombres+"</td>";
        dinamicTable += "<td>"+personajson.apellidos+"</td>";
        dinamicTable += "<td>"+personajson.telefono+"</td>";
        dinamicTable += "<td>"+personajson.email+"</td>";
        dinamicTable += "</tr>";
    }
   
    dinamicTable += "</table>";

    document.getElementById("tableconct").innerHTML = dinamicTable;
}


  
   
    
    
  
  
    
    
    
  
  
    
    
    
