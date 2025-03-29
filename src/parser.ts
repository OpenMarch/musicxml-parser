
/**
 * Represents a beat in a musical performance or composition.
 * Provides details about the beat's position, duration, and optional notes.
 */
export interface Beat {
    /** Duration from this beat to the next in seconds. This is derived from tempo */
    duration: number;
    /** Human-readable notes about this beat. These are not the musical "notes" that are played. */
    notes?: string;
}

/**
 * Represents a musical measure in a musical composition.
 * Contains information about the structure and content of a specific measure.
 */
export interface Measure {
    /** The measure's number in the piece. Unique and integer */
    number: number;
    /** Optional rehearsal mark for the measure. I.e. "Big Box A" or "Measure 128" */
    rehearsalMark?: string;
    /** Human-readable notes about the measure. These are not the musical "notes" that are played. */
    notes?: string;
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
            beats: [
                {
                    duration: 4,
                    notes: "kick",
                } satisfies Beat,
            ]
        }
    ] satisfies Measure[];
}
