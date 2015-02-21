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
    {"20150223":"A"},
    {"20150302":"B"},
    {"20150309":"A"},
    {"20150316":"B"},
    {"20150323":"A"},
    {"20150330":"B"},
    {"20150421":"A"}
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
    document.getElementById("next").innerHTML = "An " + nextWeek + " week starts in " + nextMoment.countdown(now, countdown.DAYS|countdown.HOURS).toString() + ".";
} else if (nextWeek === "B") {
    document.getElementById("next").innerHTML = "A " + nextWeek + " week starts in " + nextMoment.countdown(now, countdown.DAYS|countdown.HOURS).toString() + ".";
} else {
    document.getElementById("next").innerHTML = "Error - Please email me at <a href=\"mailto:updatethissite@iamkelv.in\">updatethissite@iamkelv.in</a> and tell me to update this site!";
}