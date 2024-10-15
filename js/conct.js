const persona = {
    id : 0,
    nombres : '',
    apellidos : '',
    telefono : '',
    email : '',
    ciudad : '',
    pais : ''
}



function processConctForm(e){
    

    persona.nombres = document.forms ["conctmortgage"]["nombre"].value;
    persona.apellidos = document.forms ["conctmortgage"]["apellido"].value;
    persona.telefono = document.forms ["conctmortgage"]["numberphone"].value;
    persona.email = document.forms ["conctmortgage"]["correo"].value;
    persona.ciudad = document.forms ["conctmortgage"]["city"].value;
    persona.pais = document.forms ["conctmortgage"]["country"].value;
    persona.id = allStorge().length;
    let personajson = JSON.stringify(persona);
    localStorage.setItem(persona.id, personajson);
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
    dinamicTable += "<th>Accion</th>";
    dinamicTable += "</tr>";
    //filas cn la informacion
    let savePerson = allStorge();
    for (let i = 0; i < savePerson.length; i++) {
        dinamicTable += "<tr>";
        let personajson = JSON.parse(savePerson[i]);
        dinamicTable += "<tr>";
        dinamicTable += "<td>"+personajson.id+"</td>";
        dinamicTable += "<td>"+personajson.nombres+"</td>";
        dinamicTable += "<td>"+personajson.apellidos+"</td>";
        dinamicTable += "<td>"+personajson.telefono+"</td>";
        dinamicTable += "<td>"+personajson.email+"</td>";
        dinamicTable += "<td>'<a href=./detalles.html>Ver</a>'<td>";
        dinamicTable += "</tr>";
    }
   
    dinamicTable += "</table>";

    document.getElementById("tableconct").innerHTML = dinamicTable;
}

function allStorge(){
    let values = [];
     keys = Object.keys(localStorage),
       i = keys.length;
    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
}

  
   
    
    
  
  
    
    
    
  
  
    
    
    
