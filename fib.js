//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first Fibonacci number to 0
	var j=1;  //sets the second Fibonacci number to 1
	 var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = i + " " + j + " ";//sets the initial stringOutput to include the initial values of i and j 

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
if (isNaN(intCount) || intCount < 1 || intCount > 100) //intCount serves as the loop control variable
{
    alert("Your number is not correct. Please pick a number that is between 1-100");
    $("total_fib").value = " ";
}
    else 
    {
        while (intCount > 2) //starts at two since zero and one are present at the start of the program
        {
            k = i + j;
            i = j;
            j = k;
            stringOutput = stringOutput + k + " "; 
            intCount--; 
        }
    }

$("output").value = stringOutput;

} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value ="";
    $("generate").onclick = generate; //the generate function runs
}