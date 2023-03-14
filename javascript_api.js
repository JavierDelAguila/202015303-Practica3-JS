/*

var prov_check= document.getElementById("prov_check");
var pobl_check= document.getElementById("pobl_check");
var nom_check= document.getElementById("nom_check");
var checks=[prov_check,pobl_check,nom_check];

var prov_input= document.getElementById("prov_input");
var pobl_input= document.getElementById("pobl_input");
var nom_input= document.getElementById("nom_input");
var inputs=[prov_input,pobl_input,nom_input];

document.getElementById('table').addEventListener('change', update_form, false);


function update_form(evt)
{
	for(let i=0; i<checks.length; i++)
	{
		//console.log(i,checks[i].checked);
		if(checks[i].checked==true)
		{
			inputs[i].style.visibility = "visible";
		}
		else
		{
			inputs[i].style.visibility = "hidden";
		}
	}
}
*/

//document.getElementById('boton_buscar').addEventListener('onclick', buscar, false);










let Alicante=  {
    "Comunidad": "Valencia",
    "Provincia": "Alicante/Alacant",
    "Poblacion": "Alicante",
    "Latitud": "38,84783",
    "Longitud": "-0,1499264",
  };


let Sevilla=   {
    "Comunidad": "Andalucia",
    "Provincia": "Sevilla",
    "Poblacion": "Sevilla",
    "Latitud": "37,38264",
    "Longitud": "-5,996295",
    "Altitud": "8,265573",
    "Habitantes": 703206,
    "Hombres": 335097,
    "Mujeres": 368109
  };


let Zaragoza={
    "Comunidad": "Aragon",
    "Provincia": "Zaragoza",
    "Poblacion": "Zaragoza",
    "Latitud": "41,65629",
    "Longitud": "-0,8765379",
    "Altitud": "204,0027",
    "Habitantes": 674317,
    "Hombres": 328470,
    "Mujeres": 345847
  };


let Oviedo=  {
    "Comunidad": "Asturias",
    "Provincia": "Asturias",
    "Poblacion": "Oviedo",
    "Latitud": "43,36026",
    "Longitud": "-5,844759",
    "Altitud": "238,8659",
    "Habitantes": 224005,
    "Hombres": 104605,
    "Mujeres": 119400
  };



let Palma=  {
    "Comunidad": "Islas Baleares",
    "Provincia": "Illes Balears",
    "Poblacion": "Palma",
    "Latitud": "39,6091",
    "Longitud": "3,112162",
    "Altitud": "112,8493",
    "Habitantes": 2886,
    "Hombres": 1431,
    "Mujeres": 1455
  };


let Tenerife=  {
    "Comunidad": "Canarias",
    "Provincia": "Santa Cruz de Tenerife",
    "Poblacion": "Santiago del Teide",
    "Latitud": "28,29614",
    "Longitud": "-16,81461",
    "Altitud": "929,3008",
    "Habitantes": 12050,
    "Hombres": 6035,
    "Mujeres": 6015
  };

let Santander=   {
    "Comunidad": "Cantabria",
    "Provincia": "Cantabria",
    "Poblacion": "Santander",
    "Latitud": "43,46096",
    "Longitud": "-3,807934",
    "Altitud": "4,1",
    "Habitantes": 182700,
    "Hombres": 84984,
    "Mujeres": 97716
  };


let Toledo=  {
    "Comunidad": "Castilla La Mancha",
    "Provincia": "Toledo",
    "Poblacion": "Toledo",
    "Latitud": "39,85678",
    "Longitud": "-4,024476",
    "Altitud": "524,0618",
    "Habitantes": 82291,
    "Hombres": 39497,
    "Mujeres": 42794
  };

let Madrid=  {
    "Comunidad": "Madrid",
    "Provincia": "Madrid",
    "Poblacion": "Madrid",
    "Latitud": "40,41669",
    "Longitud": "-3,700346",
    "Altitud": "653,0047",
    "Habitantes": 3255944,
    "Hombres": 1532079,
    "Mujeres": 1723865
  };

let Barcelona=  {
    "Comunidad": "Catalunya",
    "Provincia": "Barcelona",
    "Poblacion": "Barcelona",
    "Latitud": "41,38792",
    "Longitud": "2,169919",
    "Altitud": "19,99069",
    "Habitantes": 1621537,
    "Hombres": 771570,
    "Mujeres": 849967
  };

let Merida=  {
    "Comunidad": "Extremadura",
    "Provincia": "Badajoz",
    "Poblacion": "Merida",
    "Latitud": "38,91586",
    "Longitud": "-6,345606",
    "Altitud": "227,433",
    "Habitantes": 56395,
    "Hombres": 27555,
    "Mujeres": 28840
  };


let Santiago=  {
    "Comunidad": "Galicia",
    "Provincia": "A Coruña",
    "Poblacion": "Santiago de Compostela",
    "Latitud": "42,88045",
    "Longitud": "-8,546304",
    "Altitud": "250,5518",
    "Habitantes": 95092,
    "Hombres": 44320,
    "Mujeres": 50772
  };

let Bilbao=  {
    "Comunidad": "Pais Vasco",
    "Provincia": "Vizcaya",
    "Poblacion": "Bilbao",
    "Latitud": "43,25696",
    "Longitud": "-2,923441",
    "Altitud": "17,88842",
    "Habitantes": 354860,
    "Hombres": 168019,
    "Mujeres": 186841
  };


let Pamplona=  {
    "Comunidad": "Navarra",
    "Provincia": "Navarra",
    "Poblacion": "Pamplona",
    "Latitud": "42,81721",
    "Longitud": "-1,646767",
    "Altitud": "458,1406",
    "Habitantes": 198491,
    "Hombres": 95145,
    "Mujeres": 103346
  };


let Murcia=  {
    "Comunidad": "Murcia",
    "Provincia": "Murcia",
    "Poblacion": "Murcia",
    "Latitud": "37,98344",
    "Longitud": "-1,12989",
    "Altitud": "51,07087",
    "Habitantes": 436870,
    "Hombres": 216744,
    "Mujeres": 220126
  };


let Logroño= {
    "Comunidad": "La Rioja",
    "Provincia": "La Rioja",
    "Poblacion": "Logroño",
    "Latitud": "42,46577",
    "Longitud": "-2,449995",
    "Altitud": "396,4728",
    "Habitantes": 152107,
    "Hombres": 73813,
    "Mujeres": 78294
  };


var ciudades=[Logroño,Murcia,Pamplona,Bilbao,Santiago,Merida,Barcelona, Madrid,Zaragoza, Toledo, Santander, Tenerife, Palma, Oviedo, Sevilla, Alicante];





var select= document.getElementById("pred_selection");
for(let j=0; j<ciudades.length; j++)
{
	var option= document.createElement('option');
	//var texto=document.createTextNode(ciudades[j]);
	option.value=ciudades[j]["Poblacion"];
	option.innerHTML=ciudades[j]["Poblacion"];
	select.appendChild(option);
}

var day=0;



	/*


		fetch("https://www.7timer.info/bin/api.pl?lon=-3.17&lat=40.09&product=civil&output=json",{method: "GET"}).then(res => {
		return res.json()
	})
	.then(data => data_fetch=data)
	.catch(error => alert("Error en la busqueda"));



	let trus=[false,false,false]
	for(let i=0; i<checks.length; i++)
	{		
		trus[i]=checks[i].checked;
	}
	if ((trus[0]||trus[1]||trus[2])==false)
	{
		alert("Introduzca algun parametro de busqueda");
	}

	else
	{
		
		let lista=[];
		let i=0;

		fetch("https://localidades-spain-default-rtdb.europe-west1.firebasedatabase.app/json",{method: "GET"}).then(res => {
			return res.json()
		})
		.then(data => console.log(data))
		.catch(error => alert("Error en la busqueda"));

		for(let j=0; j<csv.length; j++)
		{
			if(pobl_input.value in csv[j])
			{
				lista[i]=csv[j];
				lista++;
			}
		}
		*/







async function buscar()
{


	var selection=document.getElementById("pred_selection");
	var lat_lon=[0,0];
	for (let j=0;j<ciudades.length;j++)
	{
		if (ciudades[j]["Poblacion"]==selection.value)
		{
			lat_lon[0]=ciudades[j]["Latitud"];			
			lat_lon[1]=ciudades[j]["Longitud"];
			j=ciudades.length;
		}
	}

	var imag= document.getElementById("weatherimage");
	imag.src="https://www.7timer.info/bin/astro.php?lon="+lat_lon[1]+"&lat="+lat_lon[0]+"&ac=0&lang=en&unit=metric&output=internal&tzshift=0";
	var a;

	await fetch("https://www.7timer.info/bin/api.pl?lon="+lat_lon[1]+"&lat="+lat_lon[0]+"&product=civil&output=json",{method: "GET"})
	.then(res => res.json())
	.then((data) => {

  	const div = document.getElementById('contenedor');
  	div.innerHTML="";

  	let h4=document.createElement('h4');
  	h4.innerHTML="El Tiempo en "+ selection.value;
	div.appendChild(h4);


	var table= document.createElement('table');
	div.appendChild(table);

	var thead=document.createElement("thead");
	var cabecera=document.createElement("tr");
	let columnas=["Day & Hour","Weather","Temperature","Humidity"];
	let keys=["timepoint","weather","temp2m","rh2m"];


	for (let i=0;i<columnas.length;i++)
	{
		var celda=document.createElement("th");
		var texto=document.createTextNode(columnas[i]);
		celda.appendChild(texto);
		cabecera.appendChild(celda);
	}
	thead.appendChild(cabecera);

	var cont=0;
	var tbody=document.createElement("tbody");
	for(let fila=day*8;fila<day*8+8; fila++)
	{
		var tr=document.createElement("tr");
		/*
		if (fila%2==0)
		{
			tr.style = 'color:green; background-color:snow';
			tr.class="par";
		}
		else
			{tr.style = 'color:blue';}
		*/

		for(let j=0;j<keys.length;j++)
		{
			if(keys[j]!="timepoint")
			{
				var celda=document.createElement("td");
				var texto=document.createTextNode(data["dataseries"][fila][keys[j]]);
				celda.appendChild(texto);
				tr.appendChild(celda);
			}
			else
			{
				/*if(cont==8)
				{
					day++;
					cont=0;
				}
				*/
				cont++;
				let hour=data["dataseries"][fila][keys[j]]-day*24;
				var celda=document.createElement("td");
				var texto=document.createTextNode("Day: "+day+", hour: "+hour);
				celda.appendChild(texto);
				tr.appendChild(celda);

			}
		}
		tbody.appendChild(tr);
	}

	table.appendChild(thead);
	table.appendChild(tbody);
	div.appendChild(document.createElement("br"));


 	let h4_1=document.createElement('h4');
  	h4_1.innerHTML="El cielo en "+ selection.value;
	div.appendChild(h4_1);
    })
	.catch(error => console.log(error));


		
}




function next_day(){
	day++
	if(day==8)
	{
		day=0;
	}
	buscar();
}


function prev_day(){
	if(day==-0)
	{
		day=8;
	}
	day--;
	buscar();
}












/*

fetch("https://github.com/JavierDelAguila/202015303_Practica3_JS/blob/main/Capitales.json", header('Access-Control-Allow-Origin: *')).then(res => {
	console.log(res);
	return res.json()
})
.then(data => console.log(data))
.catch(error => alert("Error en la busqueda"));









function parseCSV(text) {
  // Obtenemos las lineas del texto
  let lines = text.replace(/\r/g, '').split('\n');
  return lines.map(line => {
    // Por cada linea obtenemos los valores
    let values = line.split(',');
    return values;
  });
}





function reverseMatrix(matrix){
  let output = [];
  // Por cada fila
  matrix.forEach((values, row) => {
    // Vemos los valores y su posicion
    values.forEach((value, col) => {
      // Si la posición aún no fue creada
      if (output[col] === undefined) output[col] = [];
      output[col][row] = value;
    });
  });
  return output;
}





function readFile(evt) {
  let file = evt.target.files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    // Cuando el archivo se terminó de cargar
    let lines = parseCSV(e.target.result);
    let output = reverseMatrix(lines);
    console.log(output);
  };
  // Leemos el contenido del archivo seleccionado
  reader.readAsBinaryString(file);
}

document.getElementById('file').addEventListener('change', readFile, false);





*/












