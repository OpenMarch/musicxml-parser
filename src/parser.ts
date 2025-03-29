
/**
 * Represents a beat in a musical performance or composition.
 * Provides details about the beat's position, duration, and optional notes.
 */
export interface Beat {
    /** The position of this beat in the show. Integer and unique */
    position: number;
    /** Duration from this beat to the next in seconds. This is derived from tempo */
    duration: number;
    /** Human readable notes about this beat */
    notes: string | null;
}

/**
 * Represents a musical measure in a musical composition.
 * Contains information about the structure and content of a specific measure.
 */
export interface Measure {
    /** The measure's number in the piece. Unique and integer */
    number: number;
    /** Optional rehearsal mark for the measure. I.e. "Big Box A" or "Measure 128" */
    rehearsalMark: string | null;
    /** Human readable notes about the measure */
    notes: string | null;
    /** The beats that belong to this measure */
    beats: Beat[];
}


/**
 * Parses a MusicXML string and converts it into an array of musical measures.
 * @param xmlText The raw XML text representing a musical score
 * @returns An array of Measure objects representing the parsed musical composition
 */
export function parseMusicXml(xmlText: string): Measure[] {
    // WRITE YOUR CODE HERE.

    // Placeholder code to demonstrate the return type //
    console.log(xmlText);
    return [
        {
            number: 1,
            rehearsalMark: null,
            notes: null,
            beats: [
                {
                    position: 1,
                    duration: 4,
                    notes: "kick",
                } satisfies Beat,
            ]
        }
    ] satisfies Measure[];
}
