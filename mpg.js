var floatMiles, floatGallons, floatMpg;
    floatMiles = parseFloat(prompt("Enter miles driven"));
    floatGallons = parseFloat(prompt("enter galons of gas used"));
	floatMpg = parseFloat(floatMiles/floatGallons).toFixed(2);
    alert("Miles per gallon = " + floatMpg);
    

