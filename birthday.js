var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
  /* will alert the user with a command of entering their age */
  floatAge = parseFloat(prompt("enter your age"));
  /* will calculate user's age by days in a year */
  floatDays = parseFloat(floatAge * 365.25).toFixed(2);
  /* will calculate user's age by months in a year */
floatMonths = parseFloat(floatAge * 12).toFixed(2);
/* will calculate user's age by day's in the week */
  intWeeks = parseFloat(floatDays/7).toFixed(2);
  /* will calculate user's age by how my days are in a fortnight*/
  intFortnights = parseFloat(floatDays/14).toFixed(2);
  /* will alert the user of ages by days, months, weeks, and fortnights*/
alert("Your age in days is = " + floatDays);
alert("Your age in months is = " + floatMonths);
alert("Your age in weeks is = " + intWeeks);
alert("Your age in fortnights is = " + intFortnights);

  
  