
var section = document.getElementById("displayResults");

async function showData(){
  const res = await fetch('https://api.covid19api.com/summary');
  const data = await res.json();
 
  console.log(data.Global)
  output = `
    
    <span class="col-sm bg-warning element">Total Confirmed: ${data.Global.TotalConfirmed}</span>
    <span class="col-sm bg-success element">Total Recovered: ${data.Global.TotalRecovered}</span>
    <span class="col-sm bg-danger element">Total Deaths: ${data.Global.TotalDeaths}</span>
  `
  // document.getElementById("global").innerHTML = output;
  
  data.Countries.forEach(function(country,index) {    
  //Using the createNode function to create new elements
  var divCol = createNode('tr'),
   h2 = createNode('th'),
   pConf = createNode('td'),
   //pActive = createNode('p'),
   pRec = createNode('td'),
   pDeaths = createNode('td');
   pNewRec = createNode('td');
   pNewDeaths = createNode('td');
   pNewConf = createNode('td');

   pDeaths.classList.add("bg-danger");
   pRec.classList.add("bg-success");
   pRec.classList.add("text-white");
   pDeaths.classList.add("text-white");

  //Assigning the data gotten from the API to the locally created elements
  h2.innerText = `${country.Country}`
  pConf.innerText = `${country.TotalConfirmed}`
  pNewConf.innerText = `+${country.NewConfirmed}`
  pRec.innerText = `${country.TotalRecovered}`
  pNewRec.innerText = `+${country.NewRecovered}`
  pDeaths.innerText = `${country.TotalDeaths}`
  pNewDeaths.innerText = `+${country.NewDeaths}`


  //Appending children to parents
  appendChildFunction(divCol,h2);
  appendChildFunction(divCol,pConf);
  appendChildFunction(divCol,pNewConf);
  appendChildFunction(divCol,pRec);
  appendChildFunction(divCol,pNewRec);
  appendChildFunction(divCol,pDeaths);
  appendChildFunction(divCol,pNewDeaths);

  appendChildFunction(section,divCol);

});
}

function createNode(element) {
  //Creates a new element
  return document.createElement(element);
}

function appendChildFunction(parent,element){
//Appends child to parent function
  return parent.appendChild(element)
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}