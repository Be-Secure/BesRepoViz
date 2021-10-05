var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8086/sample_data.json"
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange =  function(){
    if(this.readyState == 4 &&  this.status == 200){
        var data =  JSON.parse(this.responseText);
        console.log(data);

        var year = data.test_json.map(function(elem){
            return elem.Year;
        });
        // console.log(months)
    
        var No_of_Vulnerabilities = data.test_json.map(function(elem){
            return elem.No_of_Vulnerabilities;
        });
        console.log(No_of_Vulnerabilities)

            var ctx = document.getElementById('canvas_bar_graph').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: year,
                    datasets: [{
                        label: 'High temparature F',
                        data: No_of_Vulnerabilities,
                        backgroundColor: 'transparent',
                        borderColor: 'red',
                        borderWidth: 4
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            

    }
}

