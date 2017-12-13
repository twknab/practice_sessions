// Assemble Our New Table
/*
  1. Iterate through each row.
  2. Iterate through each cell, and pushing data to a row array.
  3. Push each row array into our new table.
  (This means we have an array, containing each (many) row(s) as an array.)
*/
var table = document.getElementById("myTable");
var newTable = [];

for (let i = 1, row; row = table.rows[i]; i++) {
  let rowData = [];
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
   for (let j = 0, col; col = row.cells[j]; j++) {
     // console.log(row.cells[j].innerHTML);
     rowData.push(row.cells[j].innerHTML);
   }

   newTable.push(rowData);
};

// Find Table Data by Country:
function getInfo(country){
  var foundResults = [];

  for (let i = 0; i < newTable.length; i++) { // goes through Row - Company/Contact etc.
    for (let j = 0; j < newTable[i].length; j++){ // goes through data within Company/Contact etc.
      if (newTable[i][j] == country) {
        // Do some stuff once we find the country
        // Do we want to do our switch case here? Or somewhere else:

        // See it below:
        /*

        switch (country) { // depending on which COUNTRY is selected, Germany.. etc. etc. it spits out information??

          case foundCountry:
            console.log(`Country found. ${foundContact} works for ${foundCompany} in ${foundCountry}`);
            // let company = newTable[i][j-2];
            // let contact = newTable[i][j-1];
            // let country = newTable[i][j];
            // console.log(`Country Searched: ${country}. Company ${company} and contact is ${contact}`);
            break;
          default: // if none of the cases are Countries. say "sorry you fucked up"
            // console.log("Not found.");
            break;
        }

        */
      }
      // Stuff after the switch statement if there was any
    };
  }
};

// // var area = {
//   Company: "Alfreds Futterkiste"
//   Contact: "Maria Anders"
//   Country: "Germany"
// }

getInfo("Germany");
