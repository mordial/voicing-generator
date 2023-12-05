let arguments = {}

let argumentMap = {
    c: 'chord',
    t: 'tuning',
    s: 'string',
    i: 'inversion',
    n: 'number',
    m: 'movable',
   sp: 'spread'
}

for( let x of process.argv.splice( 2 ) ) {

    if( !x.includes( '=' ) ) continue 

    let parts = x.split( '=' ) 

    //Rename shorthand parameters
    if( argumentMap[ parts[ 0 ] ] ) parts[ 0 ] = argumentMap( parts[ 0 ] ) 

    arguments[ parts[ 0 ] ] = parts[ 1 ] 
}

//The 'chord' parameter is mandatory 
if( !( arguments.chord || arguments.c )  ) {

    console.log( 'Please specify a chord' ) 
    process.exit( 1 ) 
}

main() 


function main() {

    let chordInformation = parseChordName() 

}

/**
 * Takes a chord symbol and returns a list of notes. 
 */
function parseChordName( ) {

    //Parser here could be a deterministic finite state machine. Each state of the machine 
    //could correspond to a different part of the chord specified in notes/chord.txt. The 
    //machine would linearly move through different states as it parses the chord's name. 

    let states = [
        'ROOT',
        'QUALITY',
        'EXTENSION',
        'ALTERATIONS',
        'ADDITIONS',
        'BASS'
    ]

    //It is mandatory to specify at least a root note 
    let state = state[ 0 ] //ROOT 
    /*
        The root state accepts a letter between A and G followed by 
        a hashtag or lowercase b. Increment state when the next symbol
        is unexpected.
    */


    /*
        The quality state accepts the symbols:
            - M
            - minor/m 
            - diminished/dim
            - aug/+
            - sus
        Specifying quality is optional
    */


}