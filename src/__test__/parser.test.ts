import { expect, it } from "bun:test";
import { parseMusicXml } from "../parser";

// "it" is the same as "test"
it("parses music xml", () => {
    // Dummy test to make sure the test suite is working
    expect(parseMusicXml("<score>")).toBe("<score>");
});


