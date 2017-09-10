/*result = $.ajax({
  url: "https://data.bazooka69.hasura-app.io/v1/template/get_venue_queue_user",
  type: "POST",
  headers:{
    "Authorization": "Bearer 0i444qw1ksyc0jzpf7pvxmhx0p3wb2mw"
  }
}).done(function(data){
    alert(data);
});*/

var user_venue_id = 2;
var times = Array.apply(null, Array(12)).map(Number.prototype.valueOf, 0);

users = $.ajax({
    url: 'https://data.bazooka69.hasura-app.io/v1/template/get_venue_queue_user',
    headers: {
        'Authorization': 'Bearer tjh8q9rqysdj6qdguklpg57i98sqe26e',
        'Content-Type': 'application/json'
    },
    async: false
}).done(function(data) {
    // var goal;
    // for (var x = 0; x < data.length; x++){
    // 	if (data[x].venue_id == user_venue_id){
    // 		goal = data[x];
    // 		break;
    // 	}
    // }
    // console.log(goal);
    // data = data[x].venue.queue;

    for (var x = 0; x < data.length; x++) {
        if (data[x].venue_id != user_venue_id){
            continue;
        }
        var time = data[x].enter_time;
        time = time.substring(time.indexOf("T") + 1, time.indexOf(":"));
        temp = parseInt(time) - 8;
        times[temp] += 1;
    }


    var chart = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
            "country": "8:00 AM",
            "visits": times[0]
        }, {
            "country": "9:00 AM",
            "visits": times[1]
        }, {
            "country": "10:00 AM",
            "visits": times[2]
        }, {
            "country": "11:00 AM",
            "visits": times[3]
        }, {
            "country": "12:00 AM",
            "visits": times[4]
        }, {
            "country": "1:00 PM",
            "visits": times[5]
        }, {
            "country": "2:00 PM",
            "visits": times[6]
        }, {
            "country": "3:00 PM",
            "visits": times[7]
        }, {
            "country": "4:00 PM",
            "visits": times[8]
        }, {
            "country": "5:00 PM",
            "visits": times[9]
        }, {
            "country": "6:00 PM",
            "visits": times[10]
        }, {
            "country": "7:00 PM",
            "visits": times[11]
        }, {
            "country": "8:00 PM",
            "visits": times[0]
        }],
        "valueAxes": [{
            "position": "left",
            "title": "# of Visitors"
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "fillColors":"#8A2BE2",
            "valueField": "visits"
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
        },
        "export": {
            "enabled": true
        }

    });
});

var chartData = generateChartData();


var chart = AmCharts.makeChart("chartdiv2", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "dataProvider": chartData,
    "valueAxes": [{
        "position": "left",
        "title": "Average Wait Time"
    }],
    "graphs": [{
        "id": "g1",
        "fillAlphas": 0.4,
        "valueField": "visits",
        "fillColors":"#8A2BE2",
        "balloonText": "<div style='margin:5px; font-size:14px;'>Average Wait Time:<b>[[value]]</b> minutes</div>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
    },
    "export": {
        "enabled": true,
        "dateFormat": "YYYY-MM-DD HH:NN:SS"
    }
});

chart.addListener("dataUpdated", zoomChart);
// when we apply theme, the dataUpdated event is fired even before we add listener, so
// we need to call zoomChart here
zoomChart();
// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes(chartData.length - 250, chartData.length - 100);
}

var avg_sum = 0;

// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    // current date
    var firstDate = new Date();
    // now set 500 minutes back
    firstDate.setHours(firstDate.getDate() - 1000);

    // and generate 500 data items
    var visits = 10;
    var thingy = 13;
    for (var i = 0; i < thingy; i++) {
        var newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setHours(newDate.getHours() + i);
        // some random number
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
        if (visits < 0) {
            visits *= -1;
        }
        avg_sum += visits;
        // add data item to the array
        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    avg_sum = avg_sum/thingy;
    return chartData;
    console.log(avg_sum);
    $('#avgWait').text("Total Average Wait Time: " + avg_sum.toString() + " minutes")
}

