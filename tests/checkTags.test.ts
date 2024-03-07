import { checkTags } from "../src/checkTags";

describe("Testing checkTags", () => {
    it("Sample Input 1", () => {
        expect(checkTags("The following text <C><B>is centered and in boldface</B></C>"))
        .toEqual("Correctly tagged paragraph");
    });

    it("Sample Input 2", () => {
        expect(checkTags("<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d> sentence"))
        .toEqual("Correctly tagged paragraph");
    });

    it("Sample Input 3", () => {
        expect(checkTags("<B><C>This should be centered and in boldface, but the tags are wrongly nested</B></C>"))
        .toEqual("Expected </C> found </B>");
    });

    it("Sample Input 4", () => {
        expect(checkTags("<B>This should be in boldface, but there is an extra closing tag</B></C>"))
        .toEqual("Expected # found </C>");
    });

    it("Sample Input 5", () => {
        expect(checkTags("<B><C>This should be centered and in boldface, but there is a missing closing tag</C>"))
        .toEqual("Expected </B> found #");
    });
});