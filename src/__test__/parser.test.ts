import { describe, expect, it } from "bun:test";
import { parseMusicXml, type Measure } from "../parser";

// "it" is the same as "test"
it("dummy test", () => {
    // Dummy test to make sure the test suite is working
    expect(parseMusicXml("<score>")).toEqual([
        {
            number: 1,
            rehearsalMark: undefined,
            notes: undefined,
            beats: [
                {
                    duration: 4,
                    notes: "kick",
                },
            ]
        }
    ]);
});

describe("real tests", () => {
    // It would be smart to write smaller tests for each tempo change section

    it("Full Score", async () => {
        const musicXmlText = await Bun.file("src/__test__/assets/Test Score.musicxml").text();
        const qn144 = 60 / 144;
        const hn80 = 60 / (80 * 2);
        const qn120 = 60 / 120;
        const qn180 = 60 / 180;
        const qn360 = 60 / 360;
        const qn90 = 60 / 90;
        const expectedMeasures: Measure[] = [
            {
                number: 1,
                beats: [
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                ]
            },
            {
                number: 2,
                beats: [
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                ]
            },
            {
                number: 3,
                beats: [
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                ]
            },
            {
                number: 4,
                beats: [
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                    {
                        duration: qn144
                    },
                ]
            },
            {
                number: 5,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },
            {
                number: 6,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },
            {
                number: 7,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },
            {
                number: 8,
                rehearsalMark: "A",
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 9,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 10,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 11,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 12,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 13,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 14,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 15,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },

            {
                number: 16,
                beats: [
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                    {
                        duration: hn80
                    },
                ]
            },
            {
                number: 17,
                rehearsalMark: "152",
                beats: [
                    {
                        duration: qn120
                    },
                    {
                        duration: qn120
                    },
                ]
            },
            {
                number: 18,
                beats: [
                    {
                        duration: qn120
                    },
                    {
                        duration: qn120
                    },
                ]
            },
            {
                number: 19,
                beats: [
                    {
                        duration: qn120
                    },
                    {
                        duration: qn120
                    },
                ]
            },
            {
                number: 20,
                beats: [
                    {
                        duration: qn120
                    },
                    {
                        duration: qn120
                    },
                ]
            },
            {
                number: 21,
                beats: [
                    {
                        duration: qn120
                    },
                    {
                        duration: qn120
                    },
                ]
            },
            {
                number: 22,
                beats: [
                    {
                        duration: qn120
                    },
                    {
                        duration: qn120
                    },
                ]
            },
            {
                number: 23,
                beats: [
                    {
                        duration: qn120
                    },
                    {
                        duration: qn120
                    },
                ]
            }, {
                number: 24,
                rehearsalMark: "jeff",
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 25,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 26,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 27,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 28,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 29,
                beats: [
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                ]
            },
            {
                number: 30,
                beats: [
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                ]
            },
            {
                number: 31,
                beats: [
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                ]
            },
            {
                number: 32,
                beats: [
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                    {
                        duration: qn360
                    },
                ]
            },
            {
                number: 33,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 34,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 35,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 36,
                beats: [
                    {
                        duration: qn90
                    },
                    {
                        duration: qn90
                    },
                    {
                        duration: qn90
                    },
                ]
            },
            {
                number: 37,
                beats: [
                    {
                        duration: qn90
                    },
                    {
                        duration: qn90
                    },
                    {
                        duration: qn90
                    },
                ]
            },
            {
                number: 38,
                beats: [
                    {
                        duration: qn180
                    },
                    {
                        duration: qn180
                    },
                ]
            },
            {
                number: 39,
                beats: [
                    {
                        duration: qn90
                    },
                    {
                        duration: qn90
                    },
                ]
            },
            {
                number: 40,
                beats: [
                    {
                        duration: qn90
                    },
                    {
                        duration: qn90
                    },
                ]
            },]
        expect(parseMusicXml(musicXmlText)).toEqual(expectedMeasures);
    });
});

