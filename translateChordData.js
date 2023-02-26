const Max = require("max-api");
var helpers = require("./helperFunctions")

//Variable for deciding whether # or ♭ will be used
var useFlat = false;

//Receives chordData array [chordMatches, semitoneShift, lowestNote] and translates it into an array of chordNames
Max.addHandler("data", (chordMatches, semitoneShift, lowestNote) => {
    chordMatches = JSON.parse(chordMatches)
    const chordNames = translateChordData(chordMatches, semitoneShift, lowestNote);

    Max.outlet(chordNames);
})

//Receives boolean for switching between accidentals
Max.addHandler("switchAccidental", (bool) => {
    //0 = #, 1 = ♭
    useFlat = bool
})

/**
 * Translates the given chordData-information into a sorted array of complete chordNames.
 *
 * @param {array<object>} chordMatches Stores matching chord-objects fetched from the database.
 * @param {number} semitoneShift Previously applied semitoneShift.
 * @param {number} lowestNote Lowest note of the played chord.
 * @return {array<string>} Sorted array of matching chordNames. (eg. ["Asus2", "Esus4"])
 */
function translateChordData(chordMatches, semitoneShift, lowestNote){

    var results = [];

    chordMatches.map((chord) => {
        //Calculate the root note (midi-value) of the chord by adding root (fetched from the database) and the previously applied semitoneShift
        const rootNoteInt = chord.root + semitoneShift;
        const rootNote = helpers.getNoteName(rootNoteInt, useFlat);

        //Concat rootName and chordName (eg. "E#" + "maj" => "E#maj")
        const chordName = `${rootNote}${chord.name}`;

        //Inserts chordNames into the results-array with a specific order
        //Since the lowest played note of a chord has a high chance of being its rootNote, chords fulfilling this requirement will be prioritized
        if (rootNoteInt === lowestNote) results.unshift(chordName) //insert at start, if the corresponding rootNote matches the lowestNote of the chord
        else results.push(chordName); //insert at end, if they don't match
    })

    return results

}



