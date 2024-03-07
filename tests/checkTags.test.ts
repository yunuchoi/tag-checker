import { checkTags } from "../src/checkTags";

describe("Testing checkTags", () => {
    it("correctly checks a well-formed paragraph", () => {
        expect(checkTags("The following text <C><B>is centered and in boldface</B></C>"))
        .toEqual("Correctly tagged paragraph");
    });

    it("handles tags outside of the boundary", () => {
        expect(checkTags("<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d> sentence"))
        .toEqual("Correctly tagged paragraph");
    });

    it("detects wrongly nested tags", () => {
        expect(checkTags("<B><C>This should be centered and in boldface, but the tags are wrongly nested</B></C>"))
        .toEqual("Expected </C> found </B>");
    });

    it("detects an extra closing tag without a matching opening tag", () => {
        expect(checkTags("<B>This should be in boldface, but there is an extra closing tag</B></C>"))
        .toEqual("Expected # found </C>");
    });

    it("detects a missing closing tag required", () => {
        expect(checkTags("<B><C>This should be centered and in boldface, but there is a missing closing tag</C>"))
        .toEqual("Expected </B> found #");
    });

    it("handles a plain text without tags", () => {
        expect(checkTags("This is a plain text without any tags"))
        .toEqual("Correctly tagged paragraph")
    })
});