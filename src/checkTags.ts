export function checkTags(paragraph: string): string {
    const pattern: RegExp = /<\/?([A-Z])>/g;
    const tags: string[] = paragraph.match(pattern) || [];
    const stack: string[] = [];

    for (const tag of tags) {
        if (tag.startsWith('</')) {
            if (stack.length === 0) {
                return `Expected # found ${tag}`
            }
            
            // Compare the closing tag with the most recent opening tag
            const openingTag: string = stack[stack.length - 1].substring(1, 2);
            const closingTag: string = tag.substring(2, 3);
            
            if (openingTag === closingTag) {
                stack.pop();
            } else {
                return `Expected </${openingTag}> found </${closingTag}>`
            }
        } else {
            // Add opening tag into the stack
            stack.push(tag);
        }
    }

    return "Correctly tagged paragraph";
}