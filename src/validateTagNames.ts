/**
 * Checks if the given tag is a closing tag by examining its format.
 *
 * @param {string} tag - The tag to be checked.
 * @returns {boolean} - True if the tag is a closing tag, otherwise false.
 */
function isClosingTag(tag: string): boolean {
    return tag.startsWith('</');
}

/**
 * Extracts tags from the given paragraph using a regular expression.
 *
 * @param {string} paragraph - The paragraph containing tags.
 * @returns {string[]} - An array of extracted tags.
 */
function extractTags(paragraph: string): string[] {
    const pattern: RegExp = /<\/?([A-Z])>/g;

    return paragraph.match(pattern) || [];
}

/**
 * Extracts and returns the tag name from the provided tag.
 * For closing tags, it extracts the second character; for opening tags, it extracts the first character.
 *
 * @param {string} tag - The tag to extract the name from.
 * @returns {string} - The extracted tag name.
 */
function extractTagName(tag: string): string {
    if (isClosingTag(tag)) {
        return tag.substring(2, 3);
    }

    return tag.substring(1, 2);
}

/**
 * Checks if the provided opening and closing tags match.
 *
 * @param {string} openingTag - The opening tag.
 * @param {string} closingTag - The closing tag.
 * @returns {boolean} - True if the tags match, otherwise false.
 */
function tagsMatch(openingTag: string, closingTag: string): boolean {
    return openingTag === closingTag;
}

/**
 * Validates the correctness of tags pairing within a given paragraph.
 *
 * @param {string} paragraph - The paragraph to be validated.
 * @returns {string} - A validation message indicating the correctness of tag pairing.
 */
export function validateTagNames(paragraph: string): string {
    const tags: string[] = extractTags(paragraph);
    const tagStack: string[] = [];

    for (const tag of tags) {
        if (isClosingTag(tag)) {
            if (tagStack.length === 0) {
                return `Expected # found ${tag}`;
            }

            // Compare the closing tag with the most recent opening tag
            const lastOpenedTagName: string = extractTagName(tagStack.pop()!);
            const currentTagName: string = extractTagName(tag);
            
            if (!tagsMatch(lastOpenedTagName, currentTagName)) {
                return `Expected </${lastOpenedTagName}> found </${currentTagName}>`;
            }
        } else {
            // Add opening tag into the tagStack
            tagStack.push(tag);
        }
    }

    if (tagStack.length === 0) {
        return "Correctly tagged paragraph";
    }

    const expectedClosingTag: string = tagStack[tagStack.length - 1];

    return `Expected </${extractTagName(expectedClosingTag)}> found #`;
}