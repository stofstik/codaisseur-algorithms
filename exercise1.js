// At the question marks, fill in one of the options: transform, select, reduce, map, or filter

var route1 = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

var distance1 = route[0]                // ? select
var distance1InMiles = distance1 / 1.6  // ? transform

// what does this function do? transforms
function kilometerToMile(km) {
    return km / 1.6
}

// what does this function do? reduce
function total(route) {
    var res = 0
    for (var i = 0; i < route.length; i++) { // iterate
        res += route[i]                      // ? transform, ? select
    }
    return res
}

// what does this function do? map
function routeInMiles(route) {
    var res = []
    for (var i = 0; i < route.length; i++) { // iterate
        var mile = kilometerToMile(route[i]) // ? transform, ? select
        res[i] = mile                        // keep
    }
    return res
}

// what does this function do? filters
function longStretches(route) {
    var res = []
    for (var i = 0; i < route.length; i++) { // iterate
        var stretch = route[i]               // ? select
        if (stretch > 2) {                   // check
            res.push(stretch)                // keep
        }
    }
    return res
}

// bonus: write a function that returns the average length of a stretch.
// what kind of function is this? ...
function averageStretch(route) {

}

console.log("average kilometers per stretch:", averageStretch(route1))
