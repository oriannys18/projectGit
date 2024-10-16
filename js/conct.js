const persona = {
    id: 0,
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: ''
};

function processConctForm(e) {
    e.preventDefault(); // Evitamos el envío del formulario

    // Asignamos los valores del formulario al objeto persona
    persona.nombres = document.forms["conctmortgage"]["nombre"].value;
    persona.apellidos = document.forms["conctmortgage"]["apellido"].value;
    persona.telefono = document.forms["conctmortgage"]["numberphone"].value;
    persona.email = document.forms["conctmortgage"]["correo"].value;
    persona.ciudad = document.forms["conctmortgage"]["city"].value;
    persona.pais = document.forms["conctmortgage"]["country"].value;

    // Asignamos un nuevo ID único basado en timestamp
    persona.id = Date.now();

    // Convertimos el objeto persona a JSON y lo guardamos en localStorage
    let personajson = JSON.stringify(persona);
    localStorage.setItem(persona.id, personajson);

    alert("Datos guardados con éxito");
}

function listaconctactos() {
    let dinamicTable = "<table class='table'>"; // Iniciamos la tabla
    dinamicTable += "<tr>";
    dinamicTable += "<th>ID</th>";
    dinamicTable += "<th>Nombres</th>";
    dinamicTable += "<th>Apellidos</th>";
    dinamicTable += "<th>Telefonos</th>";
    dinamicTable += "<th>Email</th>";
    dinamicTable += "<th>Accion</th>";
    dinamicTable += "</tr>";

    let savePerson = allStorge(); // Obtenemos los datos almacenados

    for (let i = 0; i < savePerson.length; i++) {
        dinamicTable += "<tr>";
        let personajson = JSON.parse(savePerson[i]); // Convertimos el JSON a objeto
        dinamicTable += "<td>" + personajson.id + "</td>";
        dinamicTable += "<td>" + personajson.nombres + "</td>";
        dinamicTable += "<td>" + personajson.apellidos + "</td>";
        dinamicTable += "<td>" + personajson.telefono + "</td>";
        dinamicTable += "<td>" + personajson.email + "</td>";
        dinamicTable += "<td><a href='./detalles.html?id=" + personajson.id + "'>Ver</a></td>";
        dinamicTable += "</tr>";
    }

    dinamicTable += "</table>"; // Cerramos la tabla
    document.getElementById("tableconct").innerHTML = dinamicTable; // Insertamos la tabla en el HTML
}

// Función para obtener todos los datos de localStorage
function allStorge() {
    let values = [];
    let keys = Object.keys(localStorage); // Obtenemos todas las claves de localStorage
    for (let i = 0; i < keys.length; i++) {
        values.push(localStorage.getItem(keys[i])); // Obtenemos cada valor
    }
    return values;
}

function verDetalles() {
    let contactoId = obtenerParametroUrl();
    let contacto = localStorage.getItem(contactoId);

    if (contacto) {
        let personajson = JSON.parse(contacto);
        document.getElementById("nombre").innerText = personajson.nombres;
        document.getElementById("apellido").innerText = personajson.apellidos;
        document.getElementById("numberphone").innerText = personajson.telefono;
        document.getElementById("correo").innerText = personajson.email;
        document.getElementById("country").innerText = personajson.pais;
        document.getElementById("city").innerText = personajson.ciudad;
    }
}

// Función para obtener el parámetro 'id' de la URL
function obtenerParametroUrl() {
    let url = window.location.href;
    let paramString = url.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    let parameterID = 0;

    for (let pair of queryString.entries()) {
        if (pair[0] === 'id') {
            parameterID = pair[1]; // Obtenemos el valor del parámetro 'id'
        }
    }

    return parameterID;
}



  
   
    
    
  
  
    
    
    
  
  
    
    
    
