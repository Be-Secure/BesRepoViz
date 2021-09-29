function replace_div() {
    // var div_data = "<div ><a href='XXX'>XXX</a></div>";
    // $("#visualization").replaceWith("#cve_table");
    // $('#visualization').load(url);
    console.log("just test")
    $('#cve_table').replaceWith('#visualization');
    
  }
  
  function constructTable(selector, list) {
      console.log("construct table container");
    // Getting the all column names
    var cols = Headers(list, selector);
  
    // Traversing the JSON data
    for (var i = 0; i < list.length; i++) {
      var row = $('<tr/>');
      for (var colIndex = 0; colIndex < cols.length; colIndex++)
      {
        var val = list[i][cols[colIndex]];
        
        // If there is any key, which is matching
        // with the column name
        if (val == null) val = "";
          row.append($('<td/>').html(val));
      }
      
      // Adding each row to the table
      $(selector).append(row);
    }
    // return selector;
  }
  
  function Headers(list, selector) {
    var columns = [];
    var header = $('<tr/>');
    
    for (var i = 0; i < list.length; i++) {
      var row = list[i];
      
      for (var k in row) {
        if ($.inArray(k, columns) == -1) {
          columns.push(k);
          
          // Creating the header
          header.append($('<th/>').html(k));
        }
      }
    }
    
    // Appending the header to the table
    $(selector).append(header);
      return columns;
  }	
function load_data(id,name)
{

    console.log("./assets/data/"+id+"-"+name+"-CVEdetails.json");
    fetch('./assets/data/'+id+'-'+name+'-CVEdetails.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("print data object and close panel");
    // const obj = data;
    // console.log(obj);
    // var table_data=constructTable('#table', data);
    constructTable('#table', data);
    console.log("table_data"+table_data);
    replace_div();
  })
  .catch(function (err) {
    console.log("error:"+err);
  });

}
