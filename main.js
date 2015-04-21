function getKeyFromArray(array, date) {
    for (var i = 0; i < array.length; i++) {
        for (var key in array[i]) {
            if (key === date) {
                return i;
            }
            break;
        }
    }
}
function getKeyFromObject(array, key) {
    for (var date in array[key]) {
        return date;
        break;
    }
}
function getEarliestDateFromNow(array, now) {
    for (var i = 0; i < array.length; i++) {
        for (var key in array[i]) {
            if (key > now) {
                return key;
            }
            break;
        }
    }
}

var dates = [
    {"20150420":"A"}, // Trinity 2015
    {"20150427":"B"},
    {"20150504":"A"}, 
    {"20150511":"B"},
    {"20150518":"A"},
    {"20150601":"A"}, // Trinity HT
    {"20150608":"B"},
    {"20150615":"A"},
    {"20150622":"B"},
    {"20150629":"A"},
    {"20150902":"A"}  // Michaelmas 2015
];
var now = moment();
var thisMonday = moment().isoWeekday(1).format("YYYYMMDD");

var thisArrayKey = getKeyFromArray(dates, thisMonday);
var thisObjectKey = getKeyFromObject(dates, thisArrayKey);
try {
    var thisWeek = dates[thisArrayKey][thisObjectKey];
} catch(err) {
}

if (thisWeek === "A") {
    document.getElementById("answer").innerHTML = "It's an A week.";
} else if (thisWeek === "B") {
    document.getElementById("answer").innerHTML = "It's a B week.";
} else {
    document.getElementById("answer").innerHTML = "Neither.";
}


var nextDate = getEarliestDateFromNow(dates, now.format("YYYYMMDD"));
var nextMoment = moment(nextDate, "YYYYMMDD");
var nextWeek = dates[getKeyFromArray(dates, nextDate)][nextDate];
if (nextWeek === "A") {
    document.getElementById("next").innerHTML = "<b>" + nextWeek + " week</b> starts in <b><span id=\"countdown-timer\"></span></b>.";
} else if (nextWeek === "B") {
    document.getElementById("next").innerHTML = "<b>" + nextWeek + " week</b> starts in <b><span id=\"countdown-timer\"></span></b>.";
} else {
    document.getElementById("next").innerHTML = "Error - Please email me at <a href=\"mailto:updatethissite@iamkelv.in\">updatethissite@iamkelv.in</a> and tell me to update this site!";
}

var timer = document.getElementById("countdown-timer");
timer.innerHTML = nextMoment.countdown(now).toString();
setInterval(function() {
	timer.innerHTML = nextMoment.countdown(moment()).toString();
}, 1000);
