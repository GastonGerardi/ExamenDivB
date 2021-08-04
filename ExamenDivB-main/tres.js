function mostrar()
{
	let origen;
	let cantidadVacunas;
	let origenAsia = 0;
	let origenEuropa = 0;
	let origenUsa = 0;
	let origenMaxVacunas;
	let totalVuelos = 0;
	let cantidadVacunasAsia = 0;
	let cantidadVacunasEuropa = 0;
	let cantidadVacunasUsa = 0;
	let totalVacunas = 0;
	let costoVuelo = 0;
	let flag = 0;
	let descuento;
	let promedioVacuAsia;
	let totalGastoVuelos = 0;
	let totalGastoVuelosDescuento;
	
	
	
	for(let i = 0; i < 1 ; i++)
	{
    origen = prompt("Ingrese origen asia / europa / usa").toLowerCase();
	while(origen != "asia" && origen != "europa" && origen != "usa" )
	{
	origen = prompt("Error, ingrese origen asia / europa / usa").toLowerCase();
	}

	cantidadVacunas = parseInt(prompt("Ingrese la cantidad de vacunas que lleva"));
	while(isNaN(cantidadVacunas) && cantidadVacunas < 1)
	{
	cantidadVacunas = parseInt(prompt("Error, ingrese la cantidad de vacunas que lleva"));
	}

	costoVuelo = parseInt(prompt("Ingrese el costo del vuelo (entre 1m$ y 5m$)"));
	while(costoVuelo < 1000000 || costoVuelo > 5000000)
	{
		costoVuelo = parseInt(prompt("Error, ingrese el costo del vuelo (entre 1m$ y 5m$)"));
	}

 
	if(origen == "asia")
	{
    origenAsia++;
	cantidadVacunasAsia += cantidadVacunas;
	flag = 1;
	}
	else if (origen == "europa")
	{
    origenEuropa++;
	cantidadVacunasEuropa += cantidadVacunas;
	}
	else
	{
    origenUsa++;
	cantidadVacunasUsa += cantidadVacunas;
	}


    totalGastoVuelos += costoVuelo;
    totalVacunas += cantidadVacunas;
    totalVuelos++;
	}

	if(cantidadVacunasAsia > cantidadVacunasEuropa && cantidadVacunasAsia > cantidadVacunasUsa)
	{
	origenMaxVacunas = "asia";
	}
	else if(cantidadVacunasEurop > cantidadVacunasAsia && cantidadVacunasEurop > cantidadVacunasUsa)
	{
	origenMaxVacunas = "europa";
	}
	else
	{
	origenMaxVacunas = "usa";	
	}

	if(flag = 1)
	{
	promedioVacuAsia = (cantidadVacunasAsia / totalVacunas) * 100;
	}

	if(totalVacunas > 4000000)
	{
	descuento = "hubo un descuento del 30%";
	totalGastoVuelosDescuento = totalGastoVuelos * 0.7;
	}
	else if (totalVacunas <= 4000000 && totalVacunas >= 2000000)
	{
	descuento = "hubo un descuento del 20%";
	totalGastoVuelosDescuento = totalGastoVuelos * 0.8;
	}
	else
	{
    totalGastoVuelosDescuento = totalGastoVuelos
	descuento = "no hubo descuento";
	}


	alert("El origen que envio la mayor cantidad de vacunas es: " + origenMaxVacunas +
	"\nEl promedio de vacunas llegadas de asia es: " + promedioVacuAsia +
	"\nEl vuelo tuvo descuento?: " + descuento +
	"\nImporte final " + totalGastoVuelosDescuento);










}
