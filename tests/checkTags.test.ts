import { checkTags } from "../src/checkTags";

describe("Testing checkTags", () => {
    it("handles correctly tagged paragraphs", () => {
        expect(checkTags("The following text <C><B>is centered and in boldface</B></C>"))
        .toEqual("Correctly tagged paragraph");
    });

    it("handles tags outside of the boundary", () => {
        expect(checkTags("<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d> sentence"))
        .toEqual("Correctly tagged paragraph");
    });

    it("handles wrongly nested tags", () => {
        expect(checkTags("<B><C>This should be centered and in boldface, but the tags are wrongly nested</B></C>"))
        .toEqual("Expected </C> found </B>");
    });

    it("handles closing tags without matching opening tags", () => {
        expect(checkTags("<B>This should be in boldface, but there is an extra closing tag</B></C>"))
        .toEqual("Expected # found </C>");
    });

    it("handles closing tags missing", () => {
        expect(checkTags("<B><C>This should be centered and in boldface, but there is a missing closing tag</C>"))
        .toEqual("Expected </B> found #");
    });

    it("handles plain paragraphs without tags", () => {
        expect(checkTags("This is a plain text without any tags"))
        .toEqual("Correctly tagged paragraph");
    })
});