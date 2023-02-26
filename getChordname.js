autowatch = 1

var data = new Dict("chordShapes")

//Receives a string containing the chordShape and outputs an array of all matching chords
function anything() {
    var results = [];
    const inputShape = messagename;

    //Check if key exists in dictionary, outputs "--" if no match is found
    if (!data.contains(inputShape)) {
        outlet(0, "--");
        return;
    }

    //Get all matching chords from looking up the chordShape in the dictionary
    var chordMatches = data.get(inputShape);
    var chordMatches = Array.isArray(chordMatches) ? chordMatches : [chordMatches];

    
    for (var i = 0; i < chordMatches.length; i++){
        results.push(chordMatches[i].stringify());
    }


    const resString = "[" + results + "]";

    outlet(0, resString);
}