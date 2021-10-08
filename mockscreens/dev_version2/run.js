var chart_vulntypeschart;
// var chart_vulnsbytypeandyearchart;

function vulntypeschart(){
	// console.log("inside vulntypeschart");  
    var data = [
	["XSS",120],["Http Response Splitting",1],["Execute Code",44],["Sql Injection",23],["Gain Information",36],["Denial of Service",19],["Directory Traversal",11],["Bypass Something",36],["CSRF",21],["Gain Privilege",3],["File Inclusion",1],	  ];
    console.log(data);
    chart_vulntypeschart = jQuery.jqplot ('chart4', [data],
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
function load(){
    console.log("inside load");
    $(document).ready(function() {
        vulntypeschart();
        // vulnsbytypeandyearchart();
    });
}

