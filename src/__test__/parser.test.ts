import { expect, it } from "bun:test";
import { parseMusicXml } from "../parser";

// "it" is the same as "test"
it("parses music xml", () => {
    // Dummy test to make sure the test suite is working
    expect(parseMusicXml("<score>")).toEqual([
        {
            number: 1,
            rehearsalMark: null,
            notes: null,
            beats: [
                {
                    position: 1,
                    duration: 4,
                    notes: "kick",
                },
            ]
        }
    ]);
});


