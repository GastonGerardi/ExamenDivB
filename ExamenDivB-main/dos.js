function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contadorPositivos = 0;
    let contadorTotal = 0;
    let contadorNegativos = 0;
    let contadorDelta = 0;
    let contadorAlfa = 0;
    let contadorBeta = 0;
    let edadMayorExtranjeroPos = 0;
    let contadorArgDelta = 0;
    let porcentajePos;
    let porcentajeNeg;
    let mayorCepa;
    let flagp = 0;
    let flagn = 0;



    
    
    for(let i = 0; i < 8; i++)
    {
        nacionalidad = prompt("Ingrese nacionalidad argentina / extranjero").toLowerCase();
        while(nacionalidad != "argentina" && nacionalidad != "extranjero")
        {
        nacionalidad = prompt("Error, ingrese nacionalidad argentina / extranjero").toLowerCase();
        }

        resultado = prompt("Ingrese resultado positivo / negativo").toLowerCase();
        while(resultado != "positivo" && resultado != "negativo")
        {
        resultado = prompt("Error, ingrese resultado positivo / negativo").toLowerCase();
        }
        
        edad = parseInt(prompt("Ingrese su edad (entre 18 y 65)"));
        while(edad < 18 || edad > 65)
        {
        edad = parseInt(prompt("Error, ingrese su edad (entre 18 y 65)"));
        }

        cepa = prompt("Ingrese la cepa delta / alfa / beta / ninguna").toLowerCase();
        while(cepa != "delta" && cepa != "alfa" && cepa != "beta" && cepa != "ninguna")
        {
        cepa = prompt("Error, ingrese la cepa delta / alfa / beta / ninguna").toLowerCase();
        }
        while(resultado == "negativo" && cepa != "ninguna")
        {
        cepa = prompt("Error, por su resultado usted solo puede ingresar 'ninguna'").toLowerCase();
        }
        while(resultado == "positivo" && cepa == "ninguna")
        {
        cepa = prompt("Error, por su resultado usted debe ingresar cepa delta / alfa / beta").toLowerCase();
        }

        if (resultado == "positivo")
        {
        contadorPositivos++;
        flagp = 1;
        }
        else
        {
        contadorNegativos++;
        flagn = 1;
        }

        if(cepa == "delta")
        {
        contadorDelta++;
        }
        else if(cepa = "alfa")
        {
        contadorAlfa++;
        }
        else
        {
        contadorBeta++;
        }

        if(nacionalidad == "extranjero" && resultado == "positivo" && edad > edadMayorExtranjeroPos)
        {
        edadMayorExtranjeroPos = edad;
        }

        if(nacionalidad == "argentina" && cepa == "delta")
        {
        contadorArgDelta++;
        }
    
    contadorTotal++;
}
if(flagp = 1)
{
porcentajePos = (contadorPositivos / contadorTotal) * 100;
}

if(flagn = 1)
{
porcentajeNeg = (contadorNegativos / contadorTotal) * 100;
}

if(contadorDelta > contadorAlfa && contadorDelta > contadorBeta)
{
mayorCepa = "delta";
}
else if(contadorAlfa > contadorDelta && contadorAlfa > contadorBeta)
{
mayorCepa = "alfa";
}
else
{
mayorCepa = "beta";
}

alert("El porcentaje de los positivos es: " + porcentajePos +
"\nEl porcentaje de negativos es: " + porcentajeNeg +
"\nLa cepa mas encontrada es " + mayorCepa +
"\nLa edad del mayor extranjero contagiado es " + edadMayorExtranjeroPos +
"\nCantidad de personas argentinas contagiadas con delta es " + contadorArgDelta)



}
