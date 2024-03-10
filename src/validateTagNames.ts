function isClosingTag(tag: string): boolean {
    return tag.startsWith('</');
}

function extractTags(paragraph: string): string[] {
    const pattern: RegExp = /<\/?([A-Z])>/g;

    return paragraph.match(pattern) || [];
}

function extractTagName(tag: string): string {
    if (isClosingTag(tag)) {
        return tag.substring(2, 3);
    }

    return tag.substring(1, 2);
}

function tagsMatch(openingTag: string, closingTag: string): boolean {
    return openingTag === closingTag;
}

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