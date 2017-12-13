// Assemble Our New Table
/*
  1. Iterate through each row.
  2. Iterate through each cell, and push row data into an array.
  3. Push each row's array into our new table array.
  (This means we have an array, containing each (many) row(s) as an array.)
*/
var table = document.getElementById("myTable");
var newTable = [];

for (let i = 1, row; row = table.rows[i]; i++) {
  let rowData = [];
   // Iterate through rows:
   for (let j = 0, col; col = row.cells[j]; j++) {
     rowData.push(row.cells[j].innerHTML);
     // `innerHTML` contains cell data as a string.
   }

   newTable.push(rowData);
};

/*
  Right now we have assembled one big array, which contains many sub-arrays, each containing row data.

  So we've solved the problem of how to extract data from a table. But how do we now search through that data and aggregate it?
*/

function findCompaniesByCountry(country) {
  /*
  Looks through our New Table array looking for any sub-array which contains our chosen country.

  Parameters:
  - `country`: The country wishing to search for, as a string.
  */

  // Holds any found results:
  var results = [];

  // Loop through new table looking to see if the 2nd index place matches our country. Note: The 2nd index place, because of our table, is always a country name. If the table format was to change, this algorithm would have to be updated. (or we could try an alternative approach similar to our first attempt below):
  for (var i = 0; i < newTable.length; i++) {
    switch (country) {
      case newTable[i][2]: // Matches for 2nd index place
        console.log("Country found!");
        // Push an object containg our found listing to our results array:
        results.push({
          company: newTable[i][0],
          contact: newTable[i][1],
          country: newTable[i][2],
        })
        break;
      default:
        break;
    }
  }

  console.log(results);
  return results;
};

// console.log(findCompaniesByCountry('Germany'));
findCompaniesByCountry('Germany');


//-----------------------------//
//------- ATTEMPT ONE ---------//
//-----------------------------//

// Find Table Data by Country:
// function getInfo(country){
//   var foundResults = [];
//
//   for (let i = 0; i < newTable.length; i++) { // goes through Row - Company/Contact etc.
//     for (let j = 0; j < newTable[i].length; j++){ // goes through data within Company/Contact etc.
//       if (newTable[i][j] == country) {
//         // Do some stuff once we find the country
//         // Do we want to do our switch case here? Or somewhere else:
//
//         // See it below:
//         /*
//
//         switch (country) { // depending on which COUNTRY is selected, Germany.. etc. etc. it spits out information??
//
//           case foundCountry:
//             console.log(`Country found. ${foundContact} works for ${foundCompany} in ${foundCountry}`);
//             // let company = newTable[i][j-2];
//             // let contact = newTable[i][j-1];
//             // let country = newTable[i][j];
//             // console.log(`Country Searched: ${country}. Company ${company} and contact is ${contact}`);
//             break;
//           default: // if none of the cases are Countries. say "sorry you fucked up"
//             // console.log("Not found.");
//             break;
//         }
//
//         */
//       }
//       // Stuff after the switch statement if there was any
//     };
//   }
// };

// // var area = {
//   Company: "Alfreds Futterkiste"
//   Contact: "Maria Anders"
//   Country: "Germany"
// }

// getInfo("Germany");
