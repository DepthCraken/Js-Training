<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
const UnitList = [
    {make: "Harley Davidson", type: "motorcyle", year: "2019"},
    {make: "Jayco", type: "Motorhome", year: "2018"},
    {make: "John Deere", type: "Tractor", year: "2039"},
    {make: "John Deere", type: "Combine", year: "2017"},
    {make: "Vanderhall", type: "Trike", year: "2018"},
    {make: "Coachmen", type: "Motorhome", year: "2050"},
    {make: "Brent", type: "Combine", year: "2017"},
  ]
  
  /*
   * Instructions: Given a array of units, use a loop to go through each unit.
   *   For each unit you will:
   *     1. Create a function that takes list as argument
   *     2. extract the "make", "type", "year" and assign each to an arry
   *     3. if the unit "year" is greater than or equal to "2039" assign the 
   *        string "Future tech" to a variable named "specialValue". If not
   *        then assign the string "Contemporary" to "specialValue".
   *     4. create a string comprised of joining the "make", "type", "year" and
   *        "specialValue".
   *     5. The function should return an object comprised of the array of the "makes",
   *        "types", "years", and concatenated string from step "4"
   *
   * Constraints:
   *   Do not use jQuery, or the console (Don it in your text editor)
   *
   */


var a = [];
var b = [];
var c = [];

var special = [];


for(let i = 0; UnitList.length; i++){
  a[i] = UnitList[i].make
  b[i] = UnitList[i].type
  c[i] = UnitList[i].year

  if( year[i] >= 2039 ){
    special = "Future tech"
  }else{
    special = "Contemporary"
  }
}

var nodes.push(a,b,c,special);


</script>



/*



const data ={
     UnitList: [
        {make: "Harley Davidson", type: "motorcyle", year: "2019"},
        {make: "Jayco", type: "Motorhome", year: "2018"},
        {make: "John Deere", type: "Tractor", year: "2039"},
        {make: "John Deere", type: "Combine", year: "2017"},
        {make: "Vanderhall", type: "Trike", year: "2018"},
        {make: "Coachmen", type: "Motorhome", year: "2050"},
        {make: "Brent", type: "Combine", year: "2017"},
      ],

      getSpecialData: function (){
          let vehicles = this.UnitList
         if(typeof vehicles != 'undefined' && Array.isArray(vehicles)){
                let specialData = {
                    make: [],
                    type: [],
                    year: [],
                    concat_val: []
                }

                for(let i =0; i < vehicles.length; i++){
                    specialData.make[i] = vehicles[i].make
                    specialData.type[i] = vehicles[i].type
                    specialData.year[i] = vehicles[i].year

                    specialData.concat_val[i] = vehicles[i].make
                                                + ' '   
                                                vehicles[i].type
                                                + ' ' 
                                                vehicles[i].year
                                                + ' '    
                                                + (parseInt(vehicles[i].year) >= 2039 ? "Future teck" : "Contemporary")  

                }

                return specialData
            }
            else{
                console.log('Parameters are undefine and should be an array of objects')
                return null
            }

        }
}
data.getSpecialData();

  /*
   * Instructions: Given a array of units, use a loop to go through each unit.
   *   For each unit you will:
   *     1. Create a function that takes list as argument
   *     2. extract the "make", "type", "year" and assign each to an arry
   *     3. if the unit "year" is greater than or equal to "2039" assign the 
   *        string "Future tech" to a variable named "specialValue". If not
   *        then assign the string "Contemporary" to "specialValue".
   *     4. create a string comprised of joining the "make", "type", "year" and
   *        "specialValue".
   *     5. The function should return an object comprised of the array of the "makes",
   *        "types", "years", and concatenated string from step "4"
   *
   * Constraints:
   *   Do not use jQuery, or the console (Don it in your text editor)
   *
   */
*/







/*

const UnitList = [
    {make: "Harley Davidson", type: "motorcyle", year: "2019"},
    {make: "Jayco", type: "Motorhome", year: "2018"},
    {make: "John Deere", type: "Tractor", year: "2039"},
    {make: "John Deere", type: "Combine", year: "2017"},
    {make: "Vanderhall", type: "Trike", year: "2018"},
    {make: "Coachmen", type: "Motorhome", year: "2050"},
    {make: "Brent", type: "Combine", year: "2017"},
  ]


  
  /*
   * Instructions: Given a array of units, use a loop to go through each unit.
   *   For each unit you will:
   *     1. Create a function that takes list as argument
   *     2. extract the "make", "type", "year" and assign each to an arry
   *     3. if the unit "year" is greater than or equal to "2039" assign the 
   *        string "Future tech" to a variable named "specialValue". If not
   *        then assign the string "Contemporary" to "specialValue".
   *     4. create a string comprised of joining the "make", "type", "year" and
   *        "specialValue".
   *     5. The function should return an object comprised of the array of the "makes",
   *        "types", "years", and concatenated string from step "4"
   *
   * Constraints:
   *   Do not use jQuery, or the console (Don it in your text editor)
   *
   */

/*
function getSpecialData(vehicles){
    if(typeof vehicles != 'undefined' && Array.isArray(vehicles)){
        let specialData = {
            make: [],
            type: [],
            year: [],
            concat_val: []
        }

        for(let i =0; i < vehicles.length; i++){
            specialData.make[i] = vehicles[i].make
            specialData.type[i] = vehicles[i].type
            specialData.year[i] = vehicles[i].year

            specialData.concat_val[i] = vehicles[i].make
                                        + ' '   
                                        vehicles[i].type
                                        + ' ' 
                                        vehicles[i].year
                                        + ' '    
                                        + (parseInt(vehicles[i].year) >= 2039 ? "Future teck" : "Contemporary")  

        }

        return specialData
    }
    else{
        console.log('Parameters are undefine and should be an array of objects')
        return null
    }

}

getSpecialData(UnitList);

*/


</body>
</html>

