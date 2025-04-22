import {type Measure} from "../parser";

// Creates a measure list from a text file
async function createTest(file: string): Promise<Measure[]> {
    const commands = await Bun.file(file).text();
    const commandList = commands.split('\n');

    // Initialize measure variables
    let measures: Measure[] = [];
    let measure:Measure = {number: 0, beats: []};

    let measureNumber = 0;
    let tempo = 0;
    let numberOfBeats = 0;
    let rehearsalMark = null;

    // Loop through and execute commands to generate measures
    for (const line of commandList) {
        if (line.trim() === '') continue; // Skip empty lines

        // Extract command and value
        const [command, value] = line.split('=').map(part => part.trim());

        // Push all measures from previous measure to this one
        if (command === 'm') {
            const newMeasureNumber = parseInt(value as string);

            if (measureNumber !== 0) {
                // Create measures from the last measure to the new measure
                for (let i = measureNumber; i < newMeasureNumber; i++) {

                    // Create a measure object with a rehearsal mark if it exists
                    if(rehearsalMark) {
                        measure = {
                            number: i,
                            rehearsalMark: rehearsalMark,
                            beats: [],
                        };

                        // Set rehearsal mark to null
                        rehearsalMark = null;
                    }
                    else{
                        measure = {
                            number: i,
                            beats: []
                        };
                    }

                    // Create beats for each measure
                    for (let j = 0; j < numberOfBeats; j++) {
                        measure.beats.push({
                            duration: 60 / tempo,
                        });
                    }
                    measures.push(measure);
                }
            }

            // Update measure number
            measureNumber = newMeasureNumber;
        }

        // Update tempo
        else if (command === 't') {
            tempo = parseInt(value as string);
        }

        // Update number of beats
        else if (command === 'b') {
            numberOfBeats = parseInt(value as string);
        }

        // Update rehearsal mark
        else if (command === 'n') {
            rehearsalMark = value as string;
        }

    }

    // return generated measure list
    return measures;
}

const result = await createTest('src/__test__/assets/Test Creator.txt');
console.dir(result, { depth: null });
