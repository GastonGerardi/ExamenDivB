
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let continuar;
	let contadorVacuChina = 0;
	let contadorVacuRusa = 0;
	let edadTotalVacuRusa = 0;
	let contadorVacuAmericana = 0;
	let contadorMayorEdVacuAmericana = 0;
	let mujerMaxEdad = 0;
	let nombreMujerMaxEdad;
	let vacunaMujerMaxEdad;
	let flag = 0;
	let contadorSegDosis = 0;
	let contadorVacunados = 0;
	let promedioEdadVacuRusa = 0;
	let porcentajeMayorVacuAmericana;
	let porcentajeSegDosis;
	let vacunaMenor;



	do
	{
		nombre = prompt("Ingrese su nombre, solo puede usar de 3 a 10 caracteres").toLowerCase();

		edad = parseInt(prompt("Ingrese su edad, debe ser mayor o igual a 12"));
		while(isNaN(edad) || edad < 12)
		{
	    edad = parseInt(prompt("Error, ingrese su edad, debe ser mayor o igual a 12"));
		}

		vacuna = prompt("Ingrese que vacuna se dio rusa / china / americana").toLowerCase();
		
		while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
		{
	    vacuna = prompt("Error, ingrese que vacuna se dio rusa / china / americana").toLowerCase();
		}
	    while((edad >= 12 && edad <= 17) && (vacuna != "americana"))
		{
		vacuna = prompt("Por su edad, usted solo puede ingresar 'americana' como opcion").toLowerCase();
		}

		dosis = prompt("Ingrese cual dosis se aplico p/s").toLowerCase();
		while(dosis != "p" && dosis != "s")
		{
	    dosis = prompt("Error, ingrese cual dosis se aplico p/s").toLowerCase();
		}

		sexo = prompt("Ingrese su sexo f/m").toLowerCase();
		while(sexo != "f" && sexo != "m")
		{
	    sexo = prompt("Error, ingrese su sexo f/m").toLowerCase();
		}


		if(dosis == "s")
		{
        contadorSegDosis ++;
		}

		if(vacuna == "rusa")
		{
		edadTotalVacuRusa += edad;
        contadorVacuRusa ++;
		}
		else if(vacuna == "china")
		{
        contadorVacuChina ++;
		}
		else
		{
        contadorVacuAmericana ++;
		if(edad >= 18)
		{
		contadorMayorEdVacuAmericana ++;
		}
		}


		if(sexo == "f" && edad > mujerMaxEdad)
		{
        mujerMaxEdad = edad;
		nombreMujerMaxEdad = nombre;
		vacunaMujerMaxEdad = vacuna;
		flag = 1;
		}

		contadorVacunados ++;
		
	continuar = prompt("Desea continuar? s/n");
	}while(continuar == "s");


    if(flag == 0)
	{
	nombreMujerMaxEdad = "No se vacunaron mujeres"
	}


	if(contadorVacuRusa < contadorVacuChina && contadorVacuRusa < contadorVacuAmericana)
	{
	vacunaMenor = "rusa";
	}
	else if(contadorVacuChina < contadorVacuRusa && contadorVacuChina < contadorVacuAmericana)
	{
	vacunaMenor = "china";
	}
	else
	{
	vacunaMenor = "americana";
	}


	promedioEdadVacuRusa = edadTotalVacuRusa / contadorVacuRusa;
	porcentajeMayorVacuAmericana = contadorMayorEdVacuAmericana / contadorVacuAmericana;
	porcentajeSegDosis = contadorVacunados / contadorSegDosis;

	alert("El promedio de edad de los vacunados con la rusa es " + promedioEdadVacuRusa +
	"\nEl nombre de la mujer de mayor edad es " + nombreMujerMaxEdad + " y se vacuno con " + vacunaMujerMaxEdad + 
	"\nEl porcentaje de mayores de edad que recibieron la vacuna americana es " + porcentajeMayorVacuAmericana +
	"\nEl porcentaje de vacunados con segunda dosis es " + porcentajeSegDosis + 
	"\nLa vacuna menos inoculada es " + vacunaMenor)







}
