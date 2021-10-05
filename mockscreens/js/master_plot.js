
// function load_json(id, name){
//     document.getElementById("cve_header").innerHTML = "Vulnerability Stats:"+name;
//   fetch('./assets/data/'+id+'-'+name+'-CVEdetails.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("print data");
//     console.log(data);
//     // create_table(data);
//     // create_line_graph(data);
//     // create_pie_chart(data);
//     // create_bar_chart(data);
//     // replace_div();
//   })
//   .catch(function (err) {
//     console.dir(err);
//   });
// }


var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8086/mockscreens/sample_data.json"
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange =  function(){
    if(this.readyState == 4 &&  this.status == 200){
        var data =  JSON.parse(this.responseText);

        var year = data.test_json.map(function(elem){
            return elem.Year;
        });
        // console.log(months)
    
        var No_of_Vulnerabilities = data.test_json.map(function(elem){
            console.log(elem.No_of_Vulnerabilities);
            return elem.No_of_Vulnerabilities;
            
        });

            var ctx = document.getElementById('canvas').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                animationEnabled: true,
                exportEnabled: true,
                animationEnabled: true, 
                data: {
                    labels: year,
                    datasets: [{
                        label: 'Vulnerabilities',
                        data: No_of_Vulnerabilities,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        // backgroundColor: 'transparent',
                        // borderColor: 'blue',
                        borderWidth: 1
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

// JavaScript for bar diagram1

            var ctx = document.getElementById('canvas_bar1').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: year,
                    // theme: "light2",
                    datasets: [{
                        label: 'Vulnerabilities',
                        data: No_of_Vulnerabilities,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        // backgroundColor: 'transparent',
                        // borderColor: 'red',
                        // borderWidth: 4
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

// JavaScript for bar diagram2
var ctx = document.getElementById('canvas_bar2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: year,
        theme: "light2", 
        exportEnabled: true,
        animationEnabled: true,
        datasets: [{
            label: 'Vulnerabilities',
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
var ctx = document.getElementById('canvas_pie').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    radius:  "30%", 
    // title:{
    //     text: "Controlling Radius of Doughnut/Pie Chart",
    // },
    data: {
        labels: year,

        datasets: [{
            label: 'Vulnerabilities',
            data: No_of_Vulnerabilities,
            backgroundColor: 'transparent',
            borderColor: 'blue',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
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

