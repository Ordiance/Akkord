/**
 * Obtain lowest number of a given array.
 *
 * @param {array<Number>} array
 * @return {Number} Lowest number in array.
 */
exports.lowestElement = function (array){
	return Math.min.apply( Math, array );
}


/**
 * Appends elements not already present to the end of a given array.
 *
 * @param {array} array
 * @param {any} element
 * @return {array} Array with appended element.
 */
exports.uniqueAppend = function (array, element){
    if (!(array.indexOf(element) >= 0)) {
        array.push(element);
    }
    return array;

};


/**
 * Shifts note (midi-value) downwards by 12 semitones to the lowest value possible.
 *
 * @param {Number} note Note (midi-value).
 * @return {Number} Shifted note (midi-value).
 */
exports.shiftByOctave = function (note){
	while (note > 11){
		note -= 12;
	}
	return note;
}


//Arrays for translating midi values into their corresponding note names
const NoteNamesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
Object.freeze(NoteNamesSharp)

const NoteNamesFlat = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"]
Object.freeze(NoteNamesFlat)

/**
 * Translate midi-value into the corresponding note name.
 *
 * @param {Number} noteInt Note (midi-value).
 * @param {Boolean} useFlat Switch between # and ♭ notes. (True => ♭, False => #)
 * @return {String} Note name.
 */
exports.getNoteName = function (noteInt, useFlat){
    while (noteInt > 11){
        noteInt -= 12;
    };
    return useFlat ? NoteNamesFlat[noteInt] : NoteNamesSharp[noteInt];
}