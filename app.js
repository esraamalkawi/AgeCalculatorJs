// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  if ((year === parseInt(year)) && (month === parseInt(month)) && (day === parseInt(day)) )
     return true
     else 
      return false
  // Write your code here
}  
checkParamsFn(1, 12,1997)

  // This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  var d = new date () 
  year = d. getfullyear() - year
  month = d. getMonth() - month
  day = d. getday() - day
  if (year >= 18 && month ===0 && day ===0) 
    return true
   else 
    return false
  // Write your code here
}

function calculateAgeFn(year, month, day) {
  // Write your code here
  month = month +1
  //date = `${month}/${day}/${year}`
 anything = Date.now() - (year, month, day).getTime();
  birthdate= new Date(anything); 
  //today = new Date()
 bdate = today - birthdate;
//age = math.round((today- birthdate)/(365*24*60*60*1000));
 return Math.abs(birthdate.getUTCFullYear() - 1970);
}
//console.log(bdate)
//function calculate_age(dob) { 
  //var diff_ms = Date.now() - dob.getTime();
  //var age_dt = new Date(diff_ms); 

  //return Math.abs(age_dt.getUTCFullYear() - 1970);
//}

// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;




//var dob = new Date("06/24/2008"); google 
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
    dob = new Date("5/19/2012");

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
   var age = Math.abs(year - 1970);  
