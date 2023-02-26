autowatch = 1;
inlets = 1;
outlets = 3;

var helpers = require("./helperFunctions")

//Receives an array of all midi-notes currently playing and outputs a normalized array.
function list()
{
	//Store all input notes as an array
	var chord = arrayfromargs(arguments);

	//Convert chord into a standardized shape for easier lookup in the database
	chordShape = applyNormalization(chord)
	outlet(0, chordShape);
}

/**
 * Applies Normalization.
 * 
 * @param {array<Number>} chord
 * @return {array<number>} Array with only unique notes in the range of 0 <= x <= 11
 */
function applyNormalization(chord){
	//Obtain lowest played note to help with identifying the root
	var lowestNote = helpers.shiftByOctave(chord[0]);
	outlet(2, lowestNote)

	//Initialize array storing octave-shifted notes
	var shiftedChord = [lowestNote];

	//Shift entire chord downwards in octaves until all midi values range from 0-11
	for(var i = 1; i < chord.length; i++){
		var shiftedNote = helpers.shiftByOctave(chord[i]);
		shiftedChord = helpers.uniqueAppend(shiftedChord, shiftedNote);
	}

	//Obtain lowest note of the shifted Chord
	const semitoneShift = helpers.lowestElement(shiftedChord);
	outlet(1, semitoneShift)

	//Convert chord into normalized form by shifting it [semitoneShift] semitones downwards
	var normalizedChord = shiftedChord.map(function (note) {
		 return note - semitoneShift;
	})

	//Returms "normalizeChord"-array (eg. [0, 2, 7] for a sus2-chord)
	return normalizedChord;
}
