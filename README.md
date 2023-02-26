# Akkord

A MaxMSP-device for determining the chord name(s) of input midi-notes.

## Usage

1. Run `git clone` or download/unpack the ZIP into a folder of your choice.
2. Inside Ableton Live, drag the Akkord.amxd onto a MIDI-Track.

## Features

Currently, Akkord is able to recognize:
- all triads
- all tetrads
- specific extended chords:
  - maj9
  - (add9)
  - 6/9
  - min9
  - min(add9)
  - 9
  - 7(♭9)
  - 7(#9)
  - maj7(#11)
  - (add11)
  - min11
  - min(add11)
  - 11
  - 7(♭9)#11
  - 7(#9)♭5
  - min13
  - maj13
  - 13
  - 7(♭9)♭13

Chords can be played in both closed and open positions.\
If there are multiple matching chords for the same notes, up to two alternative names will be displayed.

Switching the accidental of the displayed chord (e.g. G♭maj -> F#maj) is handled via a specialized button.

## Contributing

Pull requests are welcome, especially in regards to updating the chordShapes.json. There are some comments in the normalization.js to better understand how "chordShapes" work.

## License

[MIT](https://choosealicense.com/licenses/mit/)