// function fetch_values()
// {

// }

// function store_variables(a)
//         {
//           console.log("a:"+a);
//           localStorage.setItem("key", a);
//         }

// function run()
// {
//     // TODO:function call for fetching values from json.
    
//     store_variables(10);

//     //TODO:function call for redirecting to next page.
// }

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         console.log("button clicked");
//       alert("Text: " + $("#github__id").text());
//     });
//     // $("#btn2").click(function(){
//     //   alert("HTML: " + $("#test").html());
//     // });
//   });
function enabledisable(count)
{
  // var bt = document.getElementById(cve_button);
  console.log("inside enabledisable");
  if (count == 0) {
    document.getElementById("cve_button").disabled = true;
  } else {
    document.getElementById("cve_button").disabled = false;
  }
}

function printdata(data)
{
  // console.log("inside print");

  console.log("id:"+data.name);
}
function replace_div() {
  console.log("replace");
  // var div_data = "<div ><a href='XXX'>XXX</a></div>";
  jQuery('#content').replaceWith(jQuery('#cve_stats'));
  
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
  return row;
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

function vulntypeschart_fetch_data(data)
{
  // var data_array = [];
  for (var i in data) {
    if (data[i].Year == "Total") {
      var data_array = [
        ["XSS",data[i].XSS],["Http Response Splitting",data[i].Http_Response_Splitting],["Code Execution",data[i].Code_Execution],["Sql Injection",data[i].Sql_Injection],["Gain Information",data[i].Gain_Information],["Denial of Service",data[i].DoS],["Directory Traversal",data[i].Directory_Traversal],["Bypass Something",data[i].Bypass_something],["CSRF",data[i].CSRF],["Gain Privilege",data[i].Gain_Privileges],["File Inclusion",data[i].File_Inclusion],];
      
    }
  }
  console.log("data_array[0]:"+data_array[0]);
  return data_array;
}
var chart_vulntypeschart;
function vulntypeschart(data){
	console.log("inside vulntypeschart");  
  //   var data = [
	// ["XSS",],["Http Response Splitting",1],["Execute Code",44],["Sql Injection",23],["Gain Information",36],["Denial of Service",19],["Directory Traversal",11],["Bypass Something",36],["CSRF",21],["Gain Privilege",3],["File Inclusion",1],	  ];
  //   console.log(data);
    chart_vulntypeschart = jQuery.jqplot ("vulntypeschart", [data],
		{
		  seriesDefaults: {
			// Make this a pie chart.
			renderer: jQuery.jqplot.PieRenderer,
			rendererOptions: {
			  showDataLabels: true
			}
		  },
		  legend: { show:true,
			  location: 'e',
			  placement: 'outsideGrid'
		  },
		  seriesColors: [
			  '#999','#DB045B','#E04807',
			  '#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE','#DB843D', '#92A8CD', '#A47D7C', '#B5CA92','#FF9655','#24CBE5'
		  ]
		}

	  );
}
var chart_vulnsbytypeandyearchart;

function vulnsbytypeandyearchart1(data){
  var vuln=[];
	var vulntypesarray=['No_of_Vulnerabilities', 'XSS', 'Http_Response_Splitting', 'Code_Execution', 'Sql_Injection', 'Gain_Information', 'DoS', 'Directory_Traversal', 'Bypass_Something', 'CSRF', 'No_of_exploits', 'Gain_Privileges', 'File_Inclusion'];
  // var types=['No_of_Vulnerabilities', 'XSS', 'Http_Response_Splitting', 'Code_Execution', 'Sql_Injection', 'Gain_Information', 'DoS', 'Directory_Traversal', 'Bypass_something', 'CSRF', 'No_of_exploits', 'Gain_Privileges', 'File_Inclusion'];
  // console.log("A");
  // console.log(types[0]);
  // console.log("types:"+types.length);
  // console.log("data:"+data.length);
  // for (let index = 0; index < types.length; index++) {
  //   vulntype=types[index];
  //   console.log(vulntype);
  //   for (let i = 0; i < data.length; i++) {
  //     vuln.push([data[i].Year, data[i].vulntype]);

      
  //   }
    
    
  // }`
  // console.log(vuln);

  for (let i = 0; i < data.length-1; i++) {
   vuln.push([[data[i].Year,data[i].No_of_Vulnerabilities]])
    
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].XSS]])
     
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].Http_Response_Splitting]])
     
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].Code_Execution]])
     
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].Sql_Injection]])
    
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].Gain_Information]])
    
  }

  for (let i = 0; i < data.length-1; i++) {
  vuln.push([[data[i].Year,data[i].DoS]])
    
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].Directory_Traversal]])
    
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].Bypass_something]])
    
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].CSRF]])
    
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].No_of_exploits]])
      
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].Gain_Privileges]])
      
  }
  for (let i = 0; i < data.length-1; i++) {
    vuln.push([[data[i].Year,data[i].File_Inclusion]])
      
  }

  chart_vulnsbytypeandyearchart = $.jqplot ('vulnsbytypeandyearchart', vuln, {
    seriesColors: [
    '#69c','#333','#DB045B','#E04807',
    '#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE','#DB843D', '#92A8CD', '#A47D7C', '#B5CA92','#FF9655','#24CBE5'
    ],
  seriesDefaults: {
  },
  series:[
    {show:true, label:"No_of_Vulnerabilities"},{show:false, label:"XSS"},{show:false, label:"Http_Response_Splitting"},{show:true, label:"Code_Execution"},{show:false, label:"Sql_Injection"},{show:false, label:"Gain_Information"},{show:false, label:"DoS"},{show:false, label:"Directory_Traversal"},{show:false, label:"Bypass_Something"},{show:false, label:"CSRF"},{show:true, label:"No_of_exploits"},{show:false, label:"Gain_Privileges"},{show:false, label:"File_Inclusion"},		],
  title:{
    text: 'Vulnerabilities by type & year',
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', // default font
    fontSize: '12px',
    color: '#3E576F'
  },
    axesDefaults: {
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
  borderColor: '#4572A7',
    },
    axes: {
      xaxis: {
        label: "Years",
    color: '#3E576F',
        pad: 0,
    min:1999,
    tickInterval: 1
      },
      yaxis: {
        label: "# Of Vulns",
    numberTicks : 5,
    min:0 ,
    color: '#3E576F'
      }
    },
  legend: {
    show:true,
    location: 's',
    renderer: $.jqplot.EnhancedLegendRenderer,
    placement: 'outsideGrid',
    labels: vulntypesarray,
    rendererOptions:{
      seriesToggle: true,
      seriesToggleReplot: {resetAxes:['yaxis']},
      numberRows: 5,
      numberColumns: 5
    },
    border:'1px solid #909090',
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', // default font
    fontSize: '11px'
  },
  highlighter: {
    show: true,
    sizeAdjust: 12,
    fadeTooltip: false,
    formatString: "%d : %d",
    bringSeriesToFront:true,
    lineWidthAdjust:10
  }
  });



}

function vulnsbytypeandyearchart(){
	var data=[];
	var vulntypesarray=[];
					vulntypesarray.push("Total");
                data.push([
					[2004,2],[2005,10],[2006,16],[2007,40],[2008,27],[2009,14],[2010,2],[2011,11],[2012,21],[2013,18],[2014,28],[2015,11],[2016,20],[2017,46],[2018,18],[2019,23],[2020,21],[2021,3],                ]);
				//},
							vulntypesarray.push("XSS");
                data.push([
					[2004,1],[2005,2],[2006,5],[2007,19],[2008,9],[2009,3],[2011,2],[2012,7],[2013,7],[2014,8],[2015,7],[2016,9],[2017,17],[2018,5],[2019,12],[2020,7],                ]);
				//},
							vulntypesarray.push("Http Response Splitting");
                data.push([
					[2004,1],                ]);
				//},
							vulntypesarray.push("Execute Code");
                data.push([
					[2005,5],[2006,2],[2007,13],[2008,4],[2009,1],[2010,1],[2012,1],[2013,1],[2014,3],[2015,2],[2017,1],[2018,4],[2019,4],[2020,2],                ]);
				//},
							vulntypesarray.push("Sql Injection");
                data.push([
					[2005,3],[2006,1],[2007,7],[2008,3],[2010,1],[2011,1],[2012,1],[2014,1],[2015,1],[2017,4],                ]);
				//},
							vulntypesarray.push("Gain Information");
                data.push([
					[2005,3],[2006,3],[2007,5],[2008,2],[2009,3],[2011,4],[2012,3],[2013,2],[2014,2],[2015,1],[2016,1],[2017,2],[2018,1],[2019,2],[2020,1],[2021,1],                ]);
				//},
							vulntypesarray.push("Denial of Service");
                data.push([
					[2006,1],[2007,2],[2008,2],[2009,3],[2012,2],[2013,1],[2014,3],[2015,1],[2016,1],[2017,1],[2018,1],[2020,1],                ]);
				//},
							vulntypesarray.push("Directory Traversal");
                data.push([
					[2006,1],[2008,4],[2017,4],[2018,1],[2019,1],                ]);
				//},
							vulntypesarray.push("Bypass Something");
                data.push([
					[2007,3],[2008,1],[2009,1],[2012,5],[2013,3],[2014,6],[2015,1],[2016,6],[2017,5],[2018,3],[2019,2],                ]);
				//},
							vulntypesarray.push("CSRF");
                data.push([
					[2007,2],[2008,2],[2012,3],[2013,1],[2014,3],[2015,1],[2016,1],[2017,5],[2019,2],[2020,1],                ]);
				//},
							vulntypesarray.push("Exploits");
                data.push([
					[2007,1],[2009,4],[2012,6],                ]);
				//},
							vulntypesarray.push("Gain Privilege");
                data.push([
					[2009,1],[2020,2],                ]);
				//},
							vulntypesarray.push("File Inclusion");
                data.push([
					[2014,1],                ]);
				//},
			
	chart_vulnsbytypeandyearchart = $.jqplot ('vulnsbytypeandyearchart', data, {
      seriesColors: [
		  '#69c','#333','#DB045B','#E04807',
		  '#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE','#DB843D', '#92A8CD', '#A47D7C', '#B5CA92','#FF9655','#24CBE5'
		  ],
		seriesDefaults: {
		},
		series:[
			{show:true, label:"Total"},{show:false, label:"XSS"},{show:false, label:"Http Response Splitting"},{show:true, label:"Execute Code"},{show:false, label:"Sql Injection"},{show:false, label:"Gain Information"},{show:false, label:"Denial of Service"},{show:false, label:"Directory Traversal"},{show:false, label:"Bypass Something"},{show:false, label:"CSRF"},{show:true, label:"Exploits"},{show:false, label:"Gain Privilege"},{show:false, label:"File Inclusion"},		],
	  title:{
			text: 'Vulnerabilities by type & year',
			fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', // default font
			fontSize: '12px',
			color: '#3E576F'
	  },
      axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
		borderColor: '#4572A7',
      },
      axes: {
        xaxis: {
          label: "Years",
		  color: '#3E576F',
          pad: 0,
		  min:1999,
		  tickInterval: 1
        },
        yaxis: {
          label: "# Of Vulns",
		  numberTicks : 5,
		  min:0 ,
		  color: '#3E576F'
        }
      },
	  legend: {
		  show:true,
		  location: 's',
		  renderer: $.jqplot.EnhancedLegendRenderer,
		  placement: 'outsideGrid',
		  labels: vulntypesarray,
		  rendererOptions:{
			  seriesToggle: true,
			  seriesToggleReplot: {resetAxes:['yaxis']},
			  numberRows: 5,
			  numberColumns: 5
		  },
		  border:'1px solid #909090',
		  fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', // default font
		  fontSize: '11px'
	  },
	  highlighter: {
		  show: true,
		  sizeAdjust: 12,
		  fadeTooltip: false,
		  formatString: "%d : %d",
		  bringSeriesToFront:true,
		  lineWidthAdjust:10
	  }
    });

	}

// function bar_chart_fetch_data(data)
// {
//   var vuln = [];
//   var year = [];
//   for (let index = 0; index < data.length; index++) {
//     year.push(data[i].Year);
//     vuln.push(data[i].No_of_Vulnerabilities);
//     if (data[i].Year == 2021) {
//       break;
//     } else {
//       continue;
//     }
    
//   }
//   return
// }

function bar_chart_by_year(data)
{
  var vuln = [];
  var year = [];
  for (let index = 0; index < data.length; index++) {
    year.push(data[index].Year);
    vuln.push(data[index].No_of_Vulnerabilities);
    if (data[index].Year == 2021) {
      break;
    } else {
      continue;
    }
    
  }

    $.jqplot.config.enablePlugins = true;
    // var s1 = [2, 6, 7, 10];
    // var ticks = ['a', 'b', 'c', 'd'];
     
    plot1 = $.jqplot('bar_chart_vuln_by_year', [vuln], {
        // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
        animate: !$.jqplot.use_excanvas,
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
              barWidth: 15,
           },
            pointLabels: { show: true }
        },
        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: year,

            }
        },
        highlighter: { show: false },

        legend: {
          show: false,
          location: 'e',
          placement: 'outside'
      },
    });
 
    $('#bar_chart_vuln_by_year').bind('jqplotDataClick', 
        function (ev, seriesIndex, pointIndex, data) {
            $('#info1').html('series: '+seriesIndex+', point: '+pointIndex+', data: '+data);
        }
    );

}
function bar_chart_by_type(data){
  var vuln = [];
  // for (let index = data.length-2; index > 0; index--) {
  //   vuln.push(data[index].XSS, data[index].Code_Execution);
  //   break;
    
  // }
  vuln.push(data[data.length-2].XSS,data[data.length-2].Code_Execution,data[data.length-2].Bypass_something,data[data.length-2].Gain_Privileges,data[data.length-2].Sql_Injection,data[data.length-2].Gain_Information,data[data.length-2].CSRF,data[data.length-2].DoS,data[data.length-2].Http_Response_Splitting,data[data.length-2].Directory_Traversal);
  console.log(vuln);

  $.jqplot.config.enablePlugins = true;
    // var s1 = [2, 6, 7, 10];
    var type = ['XSS', 'Code_Execution', 'Bypass_something', 'Gain_Privileges', 'Sql_Injection', 'Gain_Information', 'CSRF', 'DoS', 'Http_Response_Splitting', 'Directory_Traversal'];
     
    plot1 = $.jqplot('bar_chart_vuln_by_type', [vuln], {
        // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
        animate: !$.jqplot.use_excanvas,
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
              barWidth: 15,
           },
            pointLabels: { show: true }
        },
        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: type
            }
        },
        highlighter: { show: true },

        legend: {
          show: false,
          location: 'e',
          placement: 'outside'
      },
    });
 
    $('#bar_chart_vuln_by_type').bind('jqplotDataClick', 
        function (ev, seriesIndex, pointIndex, data) {
            $('#info1').html('series: '+seriesIndex+', point: '+pointIndex+', data: '+data);
        }
    );


}
function load_data(id,name)
{
  var fetched_data;
  // enabledisable(count);
  // console.log("cvecount:"+count);
  // // var count_value = 
  // if (count != 0) {
    console.log("./assets/data/"+id+"-"+name+".json");
  // // var url = "./assets/data/"+id+"-"+name+".json"
  // // console.log("url:"+url)
  // $.getJSON("./assets/data/"+id+"-"+name+".json", function(data) {
  //   console.log("inside data");
  // });

  // $.getJSON("./assets/data/"+id+"-"+name+".js","cve_data",function(json) {
  //   console.log(json); // this will show the info it in firebug console
  // }).fail(function(){
  // console.log("errrrrror");
  // });
  document.getElementById("cve_header").innerHTML = "Vulnerability Stats:"+name;
  fetch('./assets/data/'+id+'-'+name+'-CVEdetails.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("print data");
    const obj = data;
    console.log(obj[0].Year);
	console.log("lenght:"+data.length);
    constructTable('#table', data);
    // vulntypeschart();
    // console.log("table_data"+table_data);
    fetched_data = vulntypeschart_fetch_data(data);
    // console.log("fetched_data:"+fetched_data);
    vulntypeschart(fetched_data);
    // fetched_data = bar_chart_fetch_data(data);
    bar_chart_by_year(data);
    bar_chart_by_type(data);
    // vulnsbytypeandyearchart1(data);
    replace_div();
  })
  .catch(function (err) {
    console.dir(err);
  });

//   $.ajax({
//     dataType: 'json',
//     url: "https://api.github.com/repos/asa1997/test_repo/contents/"+id+"-"+name+".json",
//     success: function(data) {
//         // console.log("url:"+url);dfsdf
//         console.log("inside success");
//         // console.log("data"+data);
//         // console.log("name:"+data.name);
//         printdata(data);
//     },
//     error: function(data) {
//       // console.log("url:"+url);
//       console.log("failedabc");
//     }
    
// });

  
  // function success(word) {
  //   console.log(word);
  // }
  // }

  
  console.log("inside abe");
  

}
