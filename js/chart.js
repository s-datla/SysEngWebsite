$(document).ready(function() {

	Chart.defaults.global.responsive = true;

    var data = {
        labels: ["1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
        datasets: [{
            label: "Sulphur Dioxide (million tonnes)",
            fill: false,
            backgroundColor: "rgba(255,165,0,0.2)",
            borderColor: "rgba(255,165,0,0.5)",
            pointBorderColor: "rgba(255,165,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,165,0,1)",
            pointHoverBorderColor: "rgba(255,165,0,1)",
            pointHoverBorderWidth: 2,
            data: [2.66, 2.37, 2.01, 1.65, 1.63, 1.25, 1.22, 1.14, 1.01, 0.99, 0.83, 0.71, 0.67, 0.59, 0.49, 0.40, 0.42, 0.39, 0.44, 0.39, 0.31]
        }, {
            label: "Nitrogen Oxides (million tonnes)",
            fill: false,
            backgroundColor: "rgba(128,0,128,0.2)",
            borderColor: "rgba(128,0,128,0.5)",
            pointBorderColor: "rgba(128,0,128,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(128,0,128,1)",
            pointHoverBorderColor: "rgba(128,0,128,1)",
            pointHoverBorderWidth: 2,
            data: [2.5, 2.37, 2.26, 2.08, 2.02, 1.9, 1.83, 1.81, 1.7, 1.67, 1.63, 1.62, 1.57, 1.5, 1.35, 1.17, 1.14, 1.06, 1.08, 1.04, 0.95]
        }, {
            label: "PM2.5 (million tonnes)",
            fill: false,
            backgroundColor: "rgba(34,139,34,0.2)",
            borderColor: "rgba(34,139,34,0.5)",
            pointBorderColor: "rgba(34,139,34,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(34,139,34,1)",
            pointHoverBorderColor: "rgba(34,139,34,1)",
            pointHoverBorderWidth: 2,
            data: [0.180, 0.161, 0.161, 0.151, 0.145, 0.142, 0.130, 0.128, 0.112, 0.113, 0.110, 0.108, 0.107, 0.104, 0.104, 0.098, 0.106, 0.097, 0.103, 0.108, 0.105]
        }]
    };


    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx, {
    	type:'line',
    	data: data,
    	options: {
    	}
    });

});